"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useLandingPageSettings } from '@/hooks/use-landing-page-settings';
import { useAvailableLandingPageTemplates } from '@/hooks/use-available-landing-page-templates'; // Import available templates

// Provide a default value to createContext to ensure useContext always returns an object
const LandingPageSettingsContext = createContext({
  config: null,
  isLoading: true, // Default loading state
  error: null,
  isUpdating: false,
  updateNested: () => {},
  save: () => {},
  availableLandingPageTemplates: [],
});

export const useLandingPageConfig = () => useContext(LandingPageSettingsContext);

export const LandingPageSettingsProvider = ({ children }) => {
  const { landingPageSettings, isLoading: landingPageSettingsLoading, error: landingPageSettingsError, updateLandingPageSettings, isUpdating } = useLandingPageSettings();
  const { data: availableLandingPageTemplates, isLoading: availableTemplatesLoading, error: availableTemplatesError } = useAvailableLandingPageTemplates();
  const [localConfig, setLocalConfig] = useState(null);
  const localConfigRef = useRef(localConfig); // Create a ref for localConfig

  useEffect(() => {
    if (landingPageSettings) {
      setLocalConfig(JSON.parse(JSON.stringify(landingPageSettings))); // Deep copy
    }
  }, [landingPageSettings]);

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
      // The selected_landing_theme_name is a derived property for UI, not for API payload
      delete payload.selected_landing_theme_name; 
      updateLandingPageSettings(payload);
    }
  };

  // Combine loading and error states from both hooks
  const isLoading = landingPageSettingsLoading || availableTemplatesLoading;
  const error = landingPageSettingsError || availableTemplatesError;

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