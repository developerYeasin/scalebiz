"use client";

import React from "react";
import ThemeCard from "./ThemeCard.jsx";
import { useThemeConfig } from "@/contexts/ThemeSettingsContext.jsx";
import { Skeleton } from "@/components/ui/skeleton.jsx";

const ThemeSelection = () => {
  const { config, isLoading, updateNested, isUpdating, availableThemes } = useThemeConfig();

  if (isLoading || !config || !availableThemes) {
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

  const handleSelectTheme = (themeId, themeName) => {
    updateNested('theme_id', themeId);
    updateNested('selected_theme_name', themeName); // Update the derived name for local state
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Themes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {availableThemes.map((theme) => (
          <ThemeCard
            key={theme.id}
            title={theme.name}
            imageSrc={theme.imageSrc}
            status={theme.status}
            isSelected={config.theme_id === theme.id}
            onSelect={() => handleSelectTheme(theme.id, theme.name)}
            disabled={isUpdating || theme.status === "coming-soon"}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelection;