"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/utils/api.js";
import { showSuccess, showError } from "@/utils/toast.js";
import { useAvailableThemes } from "./use-available-themes.js"; // Import the new hook

const fetchThemeSettings = async () => {
  const response = await api.get("/owner/theme-settings");
  // Ensure default structure if no settings exist yet
  const settings = response.data.data.theme_settings || {};
  return {
    theme_id: settings.theme_id || null, // Store the ID of the selected base theme
    primary_color: settings.primary_color || "#000000",
    secondary_color: settings.secondary_color || "#FFFFFF", // Added secondary color default
    theme_mode: settings.theme_mode || "Light",
    buy_now_button_enabled: settings.buy_now_button_enabled !== undefined ? settings.buy_now_button_enabled : true,
  };
};

const updateThemeSettings = async (newSettings) => {
  const response = await api.put("/owner/theme-settings", newSettings);
  return response.data.data.theme_settings;
};

export const useThemeSettings = () => {
  const queryClient = useQueryClient();
  const { data: availableThemes } = useAvailableThemes(); // Fetch available themes

  const { data: themeSettings, isLoading, error } = useQuery({
    queryKey: ["themeSettings"],
    queryFn: fetchThemeSettings,
    select: (data) => {
      // Map theme_id to theme_name for easier use in components
      const selectedTheme = availableThemes?.find(theme => theme.id === data.theme_id);
      return {
        ...data,
        selected_theme_name: selectedTheme ? selectedTheme.name : "Basic", // Default to "Basic" if ID not found
      };
    },
    enabled: !!availableThemes, // Only run this query once availableThemes are loaded
  });

  const updateMutation = useMutation({
    mutationFn: updateThemeSettings,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["themeSettings"] }); // Invalidate to refetch and re-select
      showSuccess("Theme settings updated successfully!");
    },
    onError: (err) => {
      showError(err.response?.data?.message || "Failed to update theme settings.");
    },
  });

  return {
    themeSettings,
    isLoading: isLoading || !availableThemes, // Consider loading if availableThemes are not yet loaded
    error,
    updateThemeSettings: updateMutation.mutate,
    isUpdating: updateMutation.isPending,
  };
};