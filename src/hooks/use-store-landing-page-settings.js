"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useStoreConfig } from "@/contexts/StoreConfigurationContext.jsx";
import { useAvailableLandingPageTemplates } from "./use-available-landing-page-templates.js";
import { showSuccess, showError } from "@/utils/toast.js";
import React from "react";

export const useStoreLandingPageSettings = () => {
  const queryClient = useQueryClient();
  // Destructure updateNested and save from useStoreConfig
  const { config: storeConfig, isLoading: storeConfigLoading, error: storeConfigError, updateNested: updateStoreConfigNested, save: saveStoreConfig, isUpdating: isUpdatingStoreConfig } = useStoreConfig();
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

  // This function is no longer needed as updateNestedLandingPage will handle direct updates
  // const updateLandingPageSettings = (newLandingPageSettings) => {
  //   if (!storeConfig) {
  //     showError("Store configuration not loaded.");
  //     return;
  //   }

  //   const updatedPageSettings = {
  //     ...storeConfig.page_settings,
  //     landingPage: newLandingPageSettings,
  //   };

  //   updateConfiguration({
  //     ...storeConfig,
  //     page_settings: updatedPageSettings,
  //   }, {
  //     onSuccess: () => {
  //       queryClient.invalidateQueries({ queryKey: ["storeConfiguration"] });
  //       showSuccess("Landing page settings updated successfully!");
  //     },
  //     onError: (err) => {
  //       showError(err.response?.data?.message || "Failed to update landing page settings.");
  //     },
  //   });
  // };

  const updateNestedLandingPage = (path, value) => {
    if (!storeConfig) {
      showError("Store configuration not loaded.");
      return;
    }
    // Construct the full path to the landing page setting within the store config
    const fullPath = `page_settings.landingPage.${path}`;
    updateStoreConfigNested(fullPath, value);
  };

  const saveLandingPageChanges = () => {
    // This will trigger the save in the parent context (StoreConfigurationProvider)
    saveStoreConfig();
    showSuccess("Landing page settings saved!");
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