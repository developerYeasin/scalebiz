"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useStoreConfiguration } from '@/hooks/use-store-configuration';

const StoreConfigurationContext = createContext();

export const useStoreConfig = () => useContext(StoreConfigurationContext);

export const StoreConfigurationProvider = ({ children }) => {
  const { configuration, isLoading, error, updateConfiguration, isUpdating } = useStoreConfiguration();
  const [localConfig, setLocalConfig] = useState(null);
  const localConfigRef = useRef(localConfig); // Create a ref for localConfig

  useEffect(() => {
    if (configuration) {
      setLocalConfig(JSON.parse(JSON.stringify(configuration))); // Deep copy
    }
  }, [configuration]);

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
      // This context should call updateConfiguration, not updateLandingPageSettings
      updateConfiguration(payload);
    }
  };

  const value = {
    config: localConfig,
    isLoading,
    error,
    isUpdating,
    updateNested,
    save: saveChanges,
  };

  return (
    <StoreConfigurationContext.Provider value={value}>
      {children}
    </StoreConfigurationContext.Provider>
  );
};