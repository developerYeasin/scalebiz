"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Copy, ChevronUp } from "lucide-react";
import { showSuccess } from "@/utils/toast.js";
import { useStoreConfig } from "@/contexts/StoreConfigurationContext.jsx";
import { Skeleton } from "@/components/ui/skeleton.jsx";

const SeoMarketingIntegrationsSection = () => {
  const { config, isLoading, updateNested, save, isUpdating } = useStoreConfig();

  if (isLoading || !config) {
    return (
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Marketing & SEO Tools</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </CardContent>
      </Card>
    );
  }

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    showSuccess("Link copied to clipboard!");
  };

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Marketing & SEO Tools</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Setup Google Tag Manager</h3>
          <div className="mb-4">
            <Label htmlFor="gtmId">GTM ID</Label>
            <Input
              id="gtmId"
              value={config.integrations?.seo?.gtm_id || ''}
              onChange={(e) => updateNested('integrations.seo.gtm_id', e.target.value)}
              className="mt-1"
            />
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Setup Facebook Conversion API and Pixel</h3>
          <div className="mb-4">
            <Label htmlFor="pixelId">Pixel ID</Label>
            <Input
              id="pixelId"
              placeholder="Pixel ID"
              value={config.integrations?.seo?.fb_pixel_id || ''}
              onChange={(e) => updateNested('integrations.seo.fb_pixel_id', e.target.value)}
              className="mt-1"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="pixelAccessToken">Pixel Access Token</Label>
            <Input
              id="pixelAccessToken"
              placeholder="Pixel Access Token"
              value={config.integrations?.seo?.fb_pixel_token || ''}
              onChange={(e) => updateNested('integrations.seo.fb_pixel_token', e.target.value)}
              className="mt-1"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={save} disabled={isUpdating}>
            {isUpdating ? 'Saving...' : 'Update'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SeoMarketingIntegrationsSection;