"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useThemeSettings } from '@/hooks/use-theme-settings';
import { useAvailableThemes } from '@/hooks/use-available-themes';
import { useStoreConfig } from '@/contexts/StoreConfigurationContext.jsx'; // Import useStoreConfig

// Provide a default value to createContext to ensure useContext always returns an object
const ThemeSettingsContext = createContext({
  config: null,
  isLoading: true, // Default loading state
  error: null,
  isUpdating: false,
  updateNested: () => {},
  save: () => {},
  availableThemes: [],
});

export const useThemeConfig = () => useContext(ThemeSettingsContext);

export const ThemeSettingsProvider = ({ children }) => {
  const { config: storeConfig, isLoading: storeConfigLoading, error: storeConfigError, isUpdating: isUpdatingStoreConfig } = useStoreConfig(); // Get store config
  const { themeSettings, isLoading: themeSettingsLoading, error: themeSettingsError, updateThemeSettings, isUpdating: isUpdatingThemeSettings } = useThemeSettings();
  const { data: availableThemes, isLoading: isLoadingAvailableThemes, error: errorAvailableThemes } = useAvailableThemes();

  const [localConfig, setLocalConfig] = useState(null);
  const localConfigRef = useRef(localConfig); // Create a ref for localConfig

  useEffect(() => {
    if (themeSettings) {
      setLocalConfig(JSON.parse(JSON.stringify(themeSettings))); // Deep copy
    }
  }, [themeSettings]);

  // Keep the ref updated with the latest localConfig
  useEffect(() => {
    localConfigRef.current = localConfig;
  }, [localConfig]);

  // Derive selectedThemeSettings here, using storeConfig.theme_id
  const selectedThemeSettings = React.useMemo(() => {
    if (!localConfig || !availableThemes || !storeConfig) return null;
    const selectedTheme = availableThemes.find(theme => theme.theme_id === storeConfig.theme_id); // Use storeConfig.theme_id (string)
    return {
      ...localConfig,
      selected_theme_name: selectedTheme ? selectedTheme.name : "Basic",
    };
  }, [localConfig, availableThemes, storeConfig]);


  const updateNested = (path, value) => {
    setLocalConfig(prev => {
      if (!prev) return null;
      const newConfig = JSON.parse(JSON.stringify(prev)); // Deep copy
      let current = newConfig;
      const keys = path.split('.');
      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (current[key] === undefined || current[key] === null) {
          current[key] = {};
        }
        current = current[key];
      }
      current[keys[keys.length - 1]] = value;
      return newConfig;
    });
  };

  const saveChanges = () => {
    if (localConfigRef.current) { // Use the ref to get the latest config
      const payload = { ...localConfigRef.current };
      // The selected_theme_name is a derived property for UI, not for API payload
      delete payload.selected_theme_name;
      updateThemeSettings(payload); // This updates the nested theme_settings
    }
  };

  const value = {
    config: selectedThemeSettings, // Provide the derived config
    isLoading: storeConfigLoading || themeSettingsLoading || isLoadingAvailableThemes,
    error: storeConfigError || themeSettingsError || errorAvailableThemes,
    isUpdating: isUpdatingThemeSettings || isUpdatingStoreConfig, // Combine updating states
    updateNested,
    save: saveChanges,
    availableThemes, // Provide available themes to components
  };

  return (
    <ThemeSettingsContext.Provider value={value}>
      {children}
    </ThemeSettingsContext.Provider>
  );
};