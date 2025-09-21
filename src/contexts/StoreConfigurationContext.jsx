"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useStoreConfiguration } from '@/hooks/use-store-configuration';

const StoreConfigurationContext = createContext();

export const useStoreConfig = () => useContext(StoreConfigurationContext);

export const StoreConfigurationProvider = ({ children }) => {
  const { configuration, isLoading, error, updateConfiguration, isUpdating } = useStoreConfiguration();
  const [localConfig, setLocalConfig] = useState(null);

  useEffect(() => {
    if (configuration) {
      setLocalConfig(JSON.parse(JSON.stringify(configuration))); // Deep copy
    }
  }, [configuration]);

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
      updateConfiguration(localConfig);
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