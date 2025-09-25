"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useStoreConfig } from "@/contexts/StoreConfigurationContext.jsx";
import { useAvailableLandingPageTemplates } from "./use-available-landing-page-templates.js";
import { showSuccess, showError } from "@/utils/toast.js";
import React from "react";

export const useStoreLandingPageSettings = () => {
  const queryClient = useQueryClient();
  const { config: storeConfig, isLoading: storeConfigLoading, error: storeConfigError, updateConfiguration, isUpdating: isUpdatingStoreConfig } = useStoreConfig();
  const { data: availableLandingPageTemplates, isLoading: isLoadingAvailableTemplates, error: errorAvailableTemplates } = useAvailableLandingPageTemplates();

  // Extract landing page settings from the main store config
  const landingPageSettings = storeConfig?.page_settings?.landingPage;

  // Add selected_landing_theme_name for UI display
  const selectedLandingPageSettings = React.useMemo(() => {
    if (!landingPageSettings || !availableLandingPageTemplates) return null;
    const selectedTemplate = availableLandingPageTemplates.find(template => template.id === landingPageSettings.landing_page_template_id);
    return {
      ...landingPageSettings,
      selected_landing_theme_name: selectedTemplate ? selectedTemplate.name : "Arcadia",
    };
  }, [landingPageSettings, availableLandingPageTemplates]);

  const updateLandingPageSettings = (newLandingPageSettings) => {
    if (!storeConfig) {
      showError("Store configuration not loaded.");
      return;
    }

    const updatedPageSettings = {
      ...storeConfig.page_settings,
      landingPage: newLandingPageSettings,
    };

    updateConfiguration({
      ...storeConfig,
      page_settings: updatedPageSettings,
    }, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["storeConfiguration"] });
        showSuccess("Landing page settings updated successfully!");
      },
      onError: (err) => {
        showError(err.response?.data?.message || "Failed to update landing page settings.");
      },
    });
  };

  const updateNestedLandingPage = (path, value) => {
    if (!storeConfig) return;

    const newStoreConfig = JSON.parse(JSON.stringify(storeConfig));
    let current = newStoreConfig.page_settings.landingPage;
    const keys = path.split('.');
    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i];
      if (current[key] === undefined || current[key] === null) {
        current[key] = {};
      }
      current = current[key];
    }
    current[keys[keys.length - 1]] = value;
    updateConfiguration(newStoreConfig);
  };

  const saveLandingPageChanges = () => {
    // The updateConfiguration in useStoreConfig already handles saving the entire config
    // So, if updateNestedLandingPage is used, it already triggers a save.
    // This function can be used if there are direct modifications to `landingPageSettings`
    // that need to be explicitly saved.
    if (storeConfig) {
      updateConfiguration(storeConfig);
    }
  };

  return {
    config: selectedLandingPageSettings,
    isLoading: storeConfigLoading || isLoadingAvailableTemplates,
    error: storeConfigError || errorAvailableTemplates,
    isUpdating: isUpdatingStoreConfig,
    updateNested: updateNestedLandingPage,
    save: saveLandingPageChanges,
    availableLandingPageTemplates,
  };
};