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
        // Check if the current segment is an array and the key is a numeric index
        if (Array.isArray(current) && !isNaN(parseInt(key))) {
          const index = parseInt(key);
          if (current[index] === undefined || current[index] === null) {
            // Initialize as an object if it's an array element that doesn't exist
            current[index] = {}; 
          }
          current = current[index];
        } else { // Treat as object key
          if (current[key] === undefined || current[key] === null) {
            current[key] = {};
          }
          current = current[key];
        }
      }

      const finalKey = keys[keys.length - 1];
      if (Array.isArray(current) && !isNaN(parseInt(finalKey))) {
        current[parseInt(finalKey)] = value;
      } else {
        current[finalKey] = value;
      }
      return newConfig;
    });
  };

  const saveChanges = () => {
    if (localConfigRef.current) { // Use the ref to get the latest config
      const payload = { ...localConfigRef.current };
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