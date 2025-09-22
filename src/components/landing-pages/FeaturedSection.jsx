"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { ChevronUp, Image, X } from "lucide-react"; // Added X for remove button
import { uploadMultipleImages } from "@/utils/upload.js";
import { useLandingPageConfig } from "@/contexts/LandingPageSettingsContext.jsx";
import { showError } from "@/utils/toast.js";
import { Skeleton } from "@/components/ui/skeleton.jsx";

const FeaturedSection = () => {
  const { config, isLoading, updateNested, save, isUpdating } = useLandingPageConfig();
  const imagesInputRef = React.useRef(null);
  const maxImages = 2;

  const handleUpload = async (event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;

    if ((config.featured_section_images?.length || 0) + files.length > maxImages) {
      showError(`You can upload a maximum of ${maxImages} images.`);
      return;
    }

    try {
      const { images } = await uploadMultipleImages(files);
      const newImageUrls = images.map(img => img.imageUrl);
      updateNested('featured_section_images', [...(config.featured_section_images || []), ...newImageUrls]);
      save(); // Save immediately after upload
    } catch (error) {
      // Error is handled by the toast in the upload utility
    }
  };

  const handleRemoveImage = (indexToRemove) => {
    const newImages = (config.featured_section_images || []).filter((_, index) => index !== indexToRemove);
    updateNested('featured_section_images', newImages);
    save(); // Save immediately after removal
    showError("Image removed.");
  };

  if (isLoading || !config) {
    return (
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Featured section</CardTitle>
          <Skeleton className="h-5 w-5" />
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-24 w-full" />
        </CardContent>
      </Card>
    );
  }

  const currentImageCount = config.featured_section_images?.length || 0;

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Featured section</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          You can upload up to {maxImages} items for a better visual impact on your website
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
          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center text-muted-foreground h-24 flex items-center justify-center">
            <Image className="h-8 w-8 text-muted-foreground mr-2" />
            No featured items found. Click "Upload" to add new items.
          </div>
        ) : (
          <div className="flex flex-wrap gap-4">
            {config.featured_section_images.map((src, index) => (
              <div key={index} className="relative w-24 h-24 rounded-md overflow-hidden border">
                <img src={src} alt={`Featured ${index + 1}`} className="w-full h-full object-cover" />
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

export default FeaturedSection;