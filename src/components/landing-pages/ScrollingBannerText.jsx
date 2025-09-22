"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { ChevronUp } from "lucide-react";
import { useLandingPageConfig } from "@/contexts/LandingPageSettingsContext.jsx";
import { Skeleton } from "@/components/ui/skeleton.jsx";

const ScrollingBannerText = () => {
  const { config, isLoading, updateNested, isUpdating } = useLandingPageConfig();
  const maxLength = 150;

  if (isLoading || !config) {
    return (
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Scrolling banner text</CardTitle>
          <Skeleton className="h-5 w-5" />
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-10 w-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Scrolling banner text</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
};

export default ScrollingBannerText;