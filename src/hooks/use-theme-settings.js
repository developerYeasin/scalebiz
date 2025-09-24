"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/utils/api.js";
import { showSuccess, showError } from "@/utils/toast.js";
import { useAvailableThemes } from "./use-available-themes.js"; // Import the new hook

const fetchThemeSettings = async () => {
  const response = await api.get("/owner/theme-settings");
  // Assuming the /owner/theme-settings endpoint returns the theme settings nested under 'settings' key
  const settings = response.data.data.settings || {}; 
  const defaultThemeId = 1; // Assuming 'Basic' theme has ID 1 and is always available

  return {
    theme_id: settings.theme_id !== null && settings.theme_id !== undefined ? settings.theme_id : defaultThemeId,
    primary_color: settings.primary_color || "#000000",
    secondary_color: settings.secondary_color || "#FFFFFF", // Added secondary color default
    theme_mode: settings.theme_mode || "Light",
    buy_now_button_enabled: settings.buy_now_button_enabled !== undefined ? settings.buy_now_button_enabled : true,
  };
};

const updateThemeSettings = async (newSettings) => {
  const response = await api.put("/owner/theme-settings", newSettings);
  // Assuming the /owner/theme-settings endpoint returns the updated theme settings directly under data.data
  return response.data.data; 
};

export const useThemeSettings = () => {
  const queryClient = useQueryClient();
  const { data: availableThemes, isLoading: isLoadingAvailableThemes, error: errorAvailableThemes } = useAvailableThemes(); // Destructure error here too

  const { data: themeSettings, isLoading: isLoadingThemeSettings, error: errorThemeSettings } = useQuery({ // Destructure error here
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
    isLoading: isLoadingThemeSettings || isLoadingAvailableThemes, // Combined loading state
    error: errorThemeSettings || errorAvailableThemes, // Combined error state
    updateThemeSettings: updateMutation.mutate,
    isUpdating: updateMutation.isPending,
  };
};