"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/utils/api.js";
import { showSuccess, showError } from "@/utils/toast.js";
import { useAvailableThemes } from "./use-available-themes.js";
import { useStoreConfig } from "@/contexts/StoreConfigurationContext.jsx"; // Import useStoreConfig

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
  const { config: storeConfig, isLoading: storeConfigLoading, error: storeConfigError, updateConfiguration, isUpdating: isUpdatingStoreConfig } = useStoreConfig();
  const { data: availableThemes, isLoading: isLoadingAvailableThemes, error: errorAvailableThemes } = useAvailableThemes();

  // Extract theme settings from the main store config
  const themeSettings = storeConfig?.theme_settings;

  // Add selected_theme_name for UI display
  const selectedThemeSettings = React.useMemo(() => {
    if (!themeSettings || !availableThemes) return null;
    const selectedTheme = availableThemes.find(theme => theme.id === themeSettings.theme_id);
    return {
      ...themeSettings,
      selected_theme_name: selectedTheme ? selectedTheme.name : "Basic",
    };
  }, [themeSettings, availableThemes]);

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
    themeSettings: selectedThemeSettings,
    isLoading: storeConfigLoading || isLoadingAvailableThemes,
    error: storeConfigError || errorAvailableThemes,
    updateThemeSettings: updateMutation.mutate,
    isUpdating: updateMutation.isPending || isUpdatingStoreConfig, // Combine updating states
  };
};