"use client";

import React from "react";
import ThemeCard from "./ThemeCard.jsx";
import { useThemeConfig } from "@/contexts/ThemeSettingsContext.jsx";
import { useStoreConfig } from "@/contexts/StoreConfigurationContext.jsx"; // NEW IMPORT
import { Skeleton } from "@/components/ui/skeleton.jsx";

const ThemeSelection = () => {
  const { config: themeConfig, isLoading: themeConfigLoading, updateNested: updateThemeNested, isUpdating: isUpdatingThemeConfig, availableThemes } = useThemeConfig();
  const { config: storeConfig, updateNested: updateStoreConfigNested, save: saveStoreConfig, isUpdating: isUpdatingStoreConfig } = useStoreConfig(); // Get store config for top-level theme_id

  const isLoading = themeConfigLoading || isUpdatingThemeConfig || isUpdatingStoreConfig;

  if (isLoading || !themeConfig || !storeConfig || !availableThemes) {
    return (
      <div className="mb-6">
        <Skeleton className="h-7 w-32 mb-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <Skeleton className="h-60 w-full" />
          <Skeleton className="h-60 w-full" />
          <Skeleton className="h-60 w-full" />
          <Skeleton className="h-60 w-full" />
        </div>
      </div>
    );
  }

  const handleSelectTheme = (themeIdString, themeName) => { // themeIdString is like "basic-1"
    updateStoreConfigNested('theme_id', themeIdString); // Update the top-level theme_id in storeConfig
    // The themeConfig context manages nested theme_settings, so we don't update its 'theme_id' here.
    // The 'selected_theme_name' is a derived property for UI, not for API.
    saveStoreConfig(); // Save the entire store configuration
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Themes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {availableThemes.map((theme) => (
          <ThemeCard
            key={theme.id} // theme.id is now "basic-1"
            title={theme.name}
            imageSrc={theme.imageSrc}
            status={theme.status}
            isSelected={storeConfig.theme_id === theme.id} // Compare with the top-level theme_id
            onSelect={() => handleSelectTheme(theme.id, theme.name)}
            disabled={isLoading}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelection;