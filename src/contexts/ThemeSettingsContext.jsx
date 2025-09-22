"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useThemeSettings } from '@/hooks/use-theme-settings';
import { useAvailableThemes } from '@/hooks/use-available-themes'; // Import available themes

const ThemeSettingsContext = createContext();

export const useThemeConfig = () => useContext(ThemeSettingsContext);

export const ThemeSettingsProvider = ({ children }) => {
  const { themeSettings, isLoading, error, updateThemeSettings, isUpdating } = useThemeSettings();
  const { data: availableThemes } = useAvailableThemes();
  const [localConfig, setLocalConfig] = useState(null);

  useEffect(() => {
    if (themeSettings) {
      setLocalConfig(JSON.parse(JSON.stringify(themeSettings))); // Deep copy
    }
  }, [themeSettings]);

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
    if (localConfig) {
      // When saving, ensure theme_id is sent to the API
      const payload = { ...localConfig };
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