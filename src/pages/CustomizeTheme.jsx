"use client";

import React from "react";
import ThemeSelection from "@/components/customize-theme/ThemeSelection.jsx";
import ThemeControls from "@/components/customize-theme/ThemeControls.jsx";
import ShopPreview from "@/components/customize-theme/ShopPreview.jsx";
import { useThemeConfig } from "@/contexts/ThemeSettingsContext.jsx"; // Import the new hook
import { Skeleton } from "@/components/ui/skeleton.jsx";

const CustomizeTheme = () => {
  const { isLoading, error } = useThemeConfig(); // Use the new hook

  if (isLoading) {
    return (
      <div className="p-4 md:p-6">
        <Skeleton className="h-8 w-64 mb-6" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-64 w-full" />
          </div>
          <div className="lg:col-span-1">
            <Skeleton className="h-[500px] w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="p-4 md:p-6 text-destructive">Error loading theme settings: {error.message}</div>;
  }

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6">Customize Theme</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ThemeSelection />
          <ThemeControls />
        </div>
        <div className="lg:col-span-1">
          <ShopPreview />
        </div>
      </div>
    </div>
  );
};

export default CustomizeTheme;