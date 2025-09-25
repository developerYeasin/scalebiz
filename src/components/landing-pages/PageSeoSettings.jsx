"use client";

import React from "react";
import { CardContent } from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { useLandingPageConfig } from "@/contexts/LandingPageSettingsContext.jsx";
import { Skeleton } from "@/components/ui/skeleton.jsx";
import CollapsibleCard from "@/components/ui/CollapsibleCard.jsx"; // Import CollapsibleCard

const PageSeoSettings = () => {
  const { config, isLoading, updateNested, isUpdating } = useLandingPageConfig();

  if (isLoading || !config) {
    return (
      <CollapsibleCard title="Page SEO Settings">
        <div className="space-y-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-20 w-full" />
        </div>
      </CollapsibleCard>
    );
  }

  return (
    <CollapsibleCard title="Page SEO Settings">
      <div className="grid gap-4">
        <div>
          <Label htmlFor="pageTitle">Page Title (SEO) <span className="text-destructive">*</span></Label>
          <Input
            id="pageTitle"
            value={config.seo_page_title}
            onChange={(e) => updateNested('seo_page_title', e.target.value)}
            className="mt-1"
            disabled={isUpdating}
          />
        </div>
        <div>
          <Label htmlFor="pageDescription">Page Description (SEO)</Label>
          <Textarea
            id="pageDescription"
            value={config.seo_page_description}
            onChange={(e) => updateNested('seo_page_description', e.target.value)}
            className="mt-1"
            disabled={isUpdating}
          />
        </div>
      </div>
    </CollapsibleCard>
  );
};

export default PageSeoSettings;