"use client";

import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/utils/api.js";
import { showSuccess, showError } from "@/utils/toast.js";
import { useStoreConfig } from "@/contexts/StoreConfigurationContext.jsx";

const updateThemeSettings = async ({ storeConfigId, newThemeSettings }) => {
  // This mutation will update the nested theme_settings within the main store configuration
  const response = await api.put(`/owner/store-configuration`, {
    id: storeConfigId, // Pass the store config ID
    theme_settings: newThemeSettings,
  });
  return response.data.data.configuration.theme_settings; // Return only the updated theme settings
};

export const useThemeSettings = () => {
  const queryClient = useQueryClient();
  const { config: storeConfig, isLoading: storeConfigLoading, error: storeConfigError, isUpdating: isUpdatingStoreConfig } = useStoreConfig();

  // themeSettings directly refers to the nested object from storeConfig
  const themeSettings = storeConfig?.theme_settings;

  const updateMutation = useMutation({
    mutationFn: (newThemeSettings) => updateThemeSettings({ storeConfigId: storeConfig.id, newThemeSettings }),
    onSuccess: (data) => {
      // Invalidate the main store configuration query to refetch the updated nested theme settings
      queryClient.invalidateQueries({ queryKey: ["storeConfiguration"] });
      showSuccess("Theme settings updated successfully!");
    },
    onError: (err) => {
      showError(err.response?.data?.message || "Failed to update theme settings.");
    },
  });

  return {
    themeSettings: themeSettings, // Directly expose the nested theme_settings
    isLoading: storeConfigLoading,
    error: storeConfigError,
    updateThemeSettings: updateMutation.mutate,
    isUpdating: updateMutation.isPending || isUpdatingStoreConfig, // Combine updating states
  };
};