"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Image, ChevronUp, X } from "lucide-react";
import { uploadSingleImage } from "@/utils/upload.js";
import { useLandingPageConfig } from "@/contexts/LandingPageSettingsContext.jsx";
import { Skeleton } from "@/components/ui/skeleton.jsx";
import { cn } from "@/lib/utils.js";

const TopBannerSection = () => {
  const { config, isLoading, updateNested, save, isUpdating } = useLandingPageConfig();
  const bannerInputRef = React.useRef(null);

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    try {
      const { imageUrl } = await uploadSingleImage(file);
      updateNested('top_banner_image_url', imageUrl);
      save(); // Save immediately after upload
    } catch (error) {
      // Error is handled by the toast in the upload utility
    }
  };

  const handleRemoveBanner = () => {
    updateNested('top_banner_image_url', '');
    save(); // Save immediately after removal
  };

  if (isLoading || !config) {
    return (
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Top banner</CardTitle>
          <Skeleton className="h-5 w-5" />
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-48 w-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Top banner</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          Select upto 1 items to get a better visual impact on your website
        </p>
        <input
          type="file"
          ref={bannerInputRef}
          onChange={handleUpload}
          accept="image/png, image/jpeg, image/gif"
          style={{ display: 'none' }}
          disabled={isUpdating || !!config.top_banner_image_url}
        />
        <Button className="mb-4" onClick={() => bannerInputRef.current.click()} disabled={isUpdating || !!config.top_banner_image_url}>
          Upload ({config.top_banner_image_url ? '1' : '0'}/1)
        </Button>
        <div className={cn(
          "relative border-2 border-dashed border-gray-300 rounded-md h-48",
          config.top_banner_image_url
            ? "p-0"
            : "p-6 text-center flex flex-col items-center justify-center"
        )}>
          {config.top_banner_image_url ? (
            <>
              <img
                src={config.top_banner_image_url}
                alt="Top Banner"
                className="block w-full h-full object-cover rounded-md border border-blue-500"
                onError={(e) => console.error("Failed to load top banner image:", e.target.src)}
              />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 h-6 w-6 rounded-full z-10"
                onClick={handleRemoveBanner}
                disabled={isUpdating}
              >
                <X className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <>
              <Image className="h-12 w-12 text-muted-foreground mb-2 relative z-10" />
              <p className="text-sm text-muted-foreground relative z-10">
                You haven't uploaded any banner yet. Your uploaded banner will appear here.
              </p>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopBannerSection;