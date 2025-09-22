"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLandingPageSettings } from '@/hooks/use-landing-page-settings';
import { useAvailableLandingPageTemplates } from '@/hooks/use-available-landing-page-templates'; // Import available templates

const LandingPageSettingsContext = createContext();

export const useLandingPageConfig = () => useContext(LandingPageSettingsContext);

export const LandingPageSettingsProvider = ({ children }) => {
  const { landingPageSettings, isLoading, error, updateLandingPageSettings, isUpdating } = useLandingPageSettings();
  const { data: availableLandingPageTemplates } = useAvailableLandingPageTemplates();
  const [localConfig, setLocalConfig] = useState(null);

  useEffect(() => {
    if (landingPageSettings) {
      setLocalConfig(JSON.parse(JSON.stringify(landingPageSettings))); // Deep copy
    }
  }, [landingPageSettings]);

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
      // When saving, ensure landing_page_template_id is sent to the API
      const payload = { ...localConfig };
      // The selected_landing_theme_name is a derived property for UI, not for API payload
      delete payload.selected_landing_theme_name; 
      updateLandingPageSettings(payload);
    }
  };

  const value = {
    config: localConfig,
    isLoading,
    error,
    isUpdating,
    updateNested,
    save: saveChanges,
    availableLandingPageTemplates, // Provide available templates to components
  };

  return (
    <LandingPageSettingsContext.Provider value={value}>
      {children}
    </LandingPageSettingsContext.Provider>
  );
};