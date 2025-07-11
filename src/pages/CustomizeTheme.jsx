"use client";

import React from "react";
import ThemeSelection from "@/components/customize-theme/ThemeSelection.jsx";
import ThemeControls from "@/components/customize-theme/ThemeControls.jsx";
import ShopPreview from "@/components/customize-theme/ShopPreview.jsx";

const CustomizeTheme = () => {
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