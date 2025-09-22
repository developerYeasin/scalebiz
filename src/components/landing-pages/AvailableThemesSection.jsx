"use client";

import React from "react";
import ThemeCard from "@/components/customize-theme/ThemeCard.jsx";
import { useLandingPageConfig } from "@/contexts/LandingPageSettingsContext.jsx";
import { Skeleton } from "@/components/ui/skeleton.jsx";

const AvailableThemesSection = () => {
  const { config, isLoading, updateNested, isUpdating, availableLandingPageTemplates } = useLandingPageConfig();

  if (isLoading || !config || !availableLandingPageTemplates) {
    return (
      <div className="mb-6">
        <Skeleton className="h-7 w-48 mb-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Skeleton className="h-60 w-full" />
          <Skeleton className="h-60 w-full" />
          <Skeleton className="h-60 w-full" />
        </div>
      </div>
    );
  }

  const handleSelectTemplate = (templateId, templateName) => {
    updateNested('landing_page_template_id', templateId);
    updateNested('selected_landing_theme_name', templateName); // Update the derived name for local state
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Available Themes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {availableLandingPageTemplates.map((template) => (
          <ThemeCard
            key={template.id}
            title={template.name}
            imageSrc={template.imageSrc}
            status={template.status}
            isSelected={config.landing_page_template_id === template.id}
            onSelect={() => handleSelectTemplate(template.id, template.name)}
            disabled={isUpdating || template.status === "coming-soon"}
          />
        ))}
      </div>
    </div>
  );
};

export default AvailableThemesSection;