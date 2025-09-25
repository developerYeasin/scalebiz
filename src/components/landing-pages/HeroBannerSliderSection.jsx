"use client";

import React from "react";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Image as ImageIcon, Plus, X } from "lucide-react";
import { useStoreLandingPageSettings } from "@/hooks/use-store-landing-page-settings.js";
import { uploadSingleImage } from "@/utils/upload.js";
import { showError } from "@/utils/toast.js";
import { Skeleton } from "@/components/ui/skeleton.jsx";
import CollapsibleCard from "@/components/ui/CollapsibleCard.jsx";

const HeroBannerSliderSection = () => {
  const { config, isLoading, updateNested, save, isUpdating } = useStoreLandingPageSettings();
  const fileInputRefs = React.useRef([]);

  if (isLoading || !config) {
    return (
      <CollapsibleCard title="Hero Banner Slider">
        <Skeleton className="h-4 w-full mb-4" />
        <Skeleton className="h-10 w-32 mb-4" />
        <Skeleton className="h-48 w-full" />
      </CollapsibleCard>
    );
  }

  // Find the heroBannerSlider component in the components array
  const heroBannerSliderIndex = config.components?.findIndex(comp => comp.type === "heroBannerSlider");
  const heroBannerSlider = heroBannerSliderIndex !== -1 ? config.components[heroBannerSliderIndex] : null;
  const banners = heroBannerSlider?.data?.banners || [];

  const handleAddBanner = () => {
    const newBannerData = {
      title: "New Banner Title",
      imageUrl: "",
      subtitle: "New Banner Subtitle",
      ctaButton: { link: "#", text: "Shop Now" },
    };

    if (heroBannerSliderIndex === -1) {
      // If heroBannerSlider component doesn't exist, create it and add to components array
      const newHeroBannerSliderComponent = {
        type: "heroBannerSlider",
        data: {
          banners: [newBannerData], // Add the first banner directly
        },
      };
      // Update the entire components array with the new component added
      updateNested('components', [...(config.components || []), newHeroBannerSliderComponent]);
    } else {
      // If it exists, get current banners and add the new one
      const updatedBanners = [...banners, newBannerData];
      updateNested(`components.${heroBannerSliderIndex}.data.banners`, updatedBanners);
    }
    save();
  };

  const handleRemoveBanner = (indexToRemove) => {
    const newBanners = banners.filter((_, index) => index !== indexToRemove);
    updateNested(`components.${heroBannerSliderIndex}.data.banners`, newBanners);
    save();
    showError("Banner removed.");
  };

  const handleUpdateBannerField = (index, field, value, subfield = null) => {
    const newBanners = [...banners];
    if (subfield) {
      newBanners[index][field] = { ...newBanners[index][field], [subfield]: value };
    } else {
      newBanners[index][field] = value;
    }
    updateNested(`components.${heroBannerSliderIndex}.data.banners`, newBanners);
  };

  const handleImageUpload = async (event, index) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const { imageUrl } = await uploadSingleImage(file);
      handleUpdateBannerField(index, 'imageUrl', imageUrl);
      save(); // Save immediately after upload
    } catch (error) {
      // Error is handled by the toast in the upload utility
    }
  };

  return (
    <CollapsibleCard title="Hero Banner Slider">
      <p className="text-sm text-muted-foreground mb-4">
        Manage the main rotating banners for your landing page. You can add multiple banners.
      </p>

      <div className="space-y-6 mb-6">
        {banners.length === 0 && heroBannerSliderIndex === -1 ? (
          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center text-muted-foreground h-32 flex flex-col items-center justify-center">
            <ImageIcon className="h-8 w-8 mb-2" />
            No banners added yet. Click "Add New Banner" to get started.
          </div>
        ) : (
          banners.map((banner, index) => (
            <CollapsibleCard
              key={index}
              title={`Banner ${index + 1}: ${banner.title || 'Untitled'}`}
              className="border-purple-300" // Add a distinct border for individual banner cards
            >
              <div className="grid gap-4">
                <div>
                  <Label htmlFor={`banner-title-${index}`}>Title</Label>
                  <Input
                    id={`banner-title-${index}`}
                    value={banner.title}
                    onChange={(e) => handleUpdateBannerField(index, 'title', e.target.value)}
                    placeholder="Banner Title"
                    disabled={isUpdating}
                  />
                </div>
                <div>
                  <Label htmlFor={`banner-subtitle-${index}`}>Subtitle</Label>
                  <Input
                    id={`banner-subtitle-${index}`}
                    value={banner.subtitle}
                    onChange={(e) => handleUpdateBannerField(index, 'subtitle', e.target.value)}
                    placeholder="Banner Subtitle"
                    disabled={isUpdating}
                  />
                </div>
                <div>
                  <Label>Image</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <input
                      type="file"
                      ref={el => fileInputRefs.current[index] = el}
                      onChange={(e) => handleImageUpload(e, index)}
                      accept="image/png, image/jpeg, image/gif"
                      style={{ display: 'none' }}
                      disabled={isUpdating}
                    />
                    <Button
                      variant="outline"
                      onClick={() => fileInputRefs.current[index]?.click()}
                      disabled={isUpdating}
                    >
                      <ImageIcon className="h-4 w-4 mr-2" />
                      {banner.imageUrl ? "Change Image" : "Upload Image"}
                    </Button>
                    {banner.imageUrl && (
                      <img src={banner.imageUrl} alt={`Banner ${index + 1}`} className="h-16 w-auto object-contain rounded-md border" />
                    )}
                  </div>
                </div>
                <div>
                  <Label htmlFor={`banner-cta-text-${index}`}>CTA Button Text</Label>
                  <Input
                    id={`banner-cta-text-${index}`}
                    value={banner.ctaButton?.text || ''}
                    onChange={(e) => handleUpdateBannerField(index, 'ctaButton', e.target.value, 'text')}
                    placeholder="e.g., Shop Now"
                    disabled={isUpdating}
                  />
                </div>
                <div>
                  <Label htmlFor={`banner-cta-link-${index}`}>CTA Button Link</Label>
                  <Input
                    id={`banner-cta-link-${index}`}
                    value={banner.ctaButton?.link || ''}
                    onChange={(e) => handleUpdateBannerField(index, 'ctaButton', e.target.value, 'link')}
                    placeholder="/products"
                    disabled={isUpdating}
                  />
                </div>
                <Button
                  variant="destructive"
                  className="mt-2" // Removed w-full
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent collapsing when clicking the delete button
                    handleRemoveBanner(index);
                  }}
                  disabled={isUpdating}
                >
                  <X className="h-4 w-4 mr-2" />
                  Remove Banner
                </Button>
              </div>
            </CollapsibleCard>
          ))
        )}
      </div>

      <Button variant="outline" onClick={handleAddBanner} disabled={isUpdating}>
        <Plus className="h-4 w-4 mr-2" />
        Add New Banner
      </Button>
    </CollapsibleCard>
  );
};

export default HeroBannerSliderSection;