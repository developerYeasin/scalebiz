"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Image, ChevronUp, X } from "lucide-react"; // Added X for remove button
import { uploadMultipleImages } from "@/utils/upload.js";
import { useLandingPageConfig } from "@/contexts/LandingPageSettingsContext.jsx";
import { showError } from "@/utils/toast.js";
import { Skeleton } from "@/components/ui/skeleton.jsx";

const ShowcasedBannerSection = () => {
  const { config, isLoading, updateNested, save, isUpdating } = useLandingPageConfig();
  const imagesInputRef = React.useRef(null);
  const maxImages = 4;

  // Debugging logs
  console.log("ShowcasedBannerSection config:", config);
  console.log("ShowcasedBannerSection showcased_banner_images:", config?.showcased_banner_images);

  const handleUpload = async (event) => {
    const files = Array.from(event.target.files);
    if (!files || files.length === 0) return;

    if ((config.showcased_banner_images?.length || 0) + files.length > maxImages) {
      showError(`You can upload a maximum of ${maxImages} images.`);
      return;
    }

    try {
      const { images } = await uploadMultipleImages(files);
      const newImageUrls = images.map(img => img.imageUrl);
      updateNested('showcased_banner_images', [...(config.showcased_banner_images || []), ...newImageUrls]);
      save(); // Save immediately after upload
    } catch (error) {
      // Error is handled by the toast in the upload utility
    }
  };

  const handleRemoveImage = (indexToRemove) => {
    const newImages = (config.showcased_banner_images || []).filter((_, index) => index !== indexToRemove);
    updateNested('showcased_banner_images', newImages);
    save(); // Save immediately after removal
    showError("Image removed.");
  };

  if (isLoading || !config) {
    return (
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Showcased banner</CardTitle>
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

  const currentImageCount = config.showcased_banner_images?.length || 0;

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Showcased banner</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          Select upto {maxImages} items to get a better visual impact on your website
        </p>
        <input
          type="file"
          ref={imagesInputRef}
          onChange={handleUpload}
          accept="image/png, image/jpeg, image/gif"
          style={{ display: 'none' }}
          multiple
          disabled={isUpdating || currentImageCount >= maxImages}
        />
        <Button className="mb-4" onClick={() => imagesInputRef.current.click()} disabled={isUpdating || currentImageCount >= maxImages}>
          Upload ({currentImageCount}/{maxImages})
        </Button>
        {currentImageCount === 0 ? (
          <div className="relative border-2 border-dashed border-gray-300 rounded-md p-6 text-center flex flex-col items-center justify-center h-48">
            <img src="https://picsum.photos/seed/showcased-banner/400/200" alt="Showcased Banner Placeholder" className="h-full w-full object-cover rounded-md absolute inset-0 opacity-50" />
            <Image className="h-12 w-12 text-muted-foreground mb-2 relative z-10" />
            <p className="text-sm text-muted-foreground relative z-10">
              You haven't uploaded any banner yet. Your uploaded banner will appear here.
            </p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-4">
            {config.showcased_banner_images.map((src, index) => (
              <div key={index} className="relative w-24 h-24 rounded-md overflow-hidden border">
                <img
                  src={src}
                  alt={`Showcased ${index + 1}`}
                  className="block w-full h-full object-cover border border-blue-500"
                  onError={(e) => console.error(`Failed to load showcased image ${index + 1}:`, e.target.src)}
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-1 right-1 h-6 w-6 rounded-full"
                  onClick={() => handleRemoveImage(index)}
                  disabled={isUpdating}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ShowcasedBannerSection;