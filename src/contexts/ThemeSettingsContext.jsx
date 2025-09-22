"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useThemeSettings } from '@/hooks/use-theme-settings';
import { useAvailableThemes } from '@/hooks/use-available-themes'; // Import available themes

const ThemeSettingsContext = createContext();

export const useThemeConfig = () => useContext(ThemeSettingsContext);

export const ThemeSettingsProvider = ({ children }) => {
  const { themeSettings, isLoading, error, updateThemeSettings, isUpdating } = useThemeSettings();
  const { data: availableThemes } = useAvailableThemes();
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
      updateThemeSettings(payload);
    }
  };

  const value = {
    config: localConfig,
    isLoading,
    error,
    isUpdating,
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