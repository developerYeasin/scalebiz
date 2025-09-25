"use client";

import React from "react";
import ThemeCard from "./ThemeCard.jsx";
import { useThemeConfig } from "@/contexts/ThemeSettingsContext.jsx";
import { useStoreConfig } from "@/contexts/StoreConfigurationContext.jsx";
import { Skeleton } from "@/components/ui/skeleton.jsx";

const ThemeSelection = () => {
  const { config: themeConfig, isLoading: themeConfigLoading, updateNested: updateThemeNested, isUpdating: isUpdatingThemeConfig, availableThemes } = useThemeConfig();
  const { config: storeConfig, updateNested: updateStoreConfigNested, save: saveStoreConfig, isUpdating: isUpdatingStoreConfig } = useStoreConfig();

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

  const handleSelectTheme = (selectedThemeIdString) => { // selectedThemeIdString is like "basic-1"
    updateStoreConfigNested('theme_id', selectedThemeIdString); // Update the top-level theme_id in storeConfig's local state
    // The actual API save will happen when the "Apply Theme" button is clicked in ThemeControls.
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Themes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {availableThemes.map((theme) => (
          <ThemeCard
            key={theme.id} // theme.id here is the theme_id string from the API, e.g., "basic-1"
            title={theme.name}
            imageSrc={theme.imageSrc}
            status={theme.status}
            isSelected={storeConfig.theme_id === theme.id} // Compare with the top-level theme_id
            onSelect={() => handleSelectTheme(theme.id)}
            disabled={isLoading}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelection;