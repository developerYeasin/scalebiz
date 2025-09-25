"use client";

import React from "react";
import { CardContent } from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { useLandingPageConfig } from "@/contexts/LandingPageSettingsContext.jsx";
import { Skeleton } from "@/components/ui/skeleton.jsx";
import CollapsibleCard from "@/components/ui/CollapsibleCard.jsx"; // Import CollapsibleCard

const ScrollingBannerText = () => {
  const { config, isLoading, updateNested, isUpdating } = useLandingPageConfig();
  const maxLength = 150;

  if (isLoading || !config) {
    return (
      <CollapsibleCard title="Scrolling banner text">
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </CollapsibleCard>
    );
  }

  return (
    <CollapsibleCard title="Scrolling banner text">
      <p className="text-sm text-muted-foreground mb-4">
        You can select up to 1 scrolling banner text for a better visual impact on your website
      </p>
      <div>
        <Label htmlFor="scrollingBannerText">Scrolling banner text</Label>
        <Input
          id="scrollingBannerText"
          placeholder="Input your desired scrolling banner text"
          className="mt-1"
          value={config.scrolling_banner_text}
          onChange={(e) => updateNested('scrolling_banner_text', e.target.value)}
          maxLength={maxLength}
          disabled={isUpdating}
        />
        <p className="text-xs text-muted-foreground text-right mt-1">
          Character limit: {maxLength - config.scrolling_banner_text.length}/{maxLength}
        </p>
      </div>
    </CollapsibleCard>
  );
};

export default ScrollingBannerText;