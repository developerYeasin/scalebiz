"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { ChevronUp, X } from "lucide-react";
import { showSuccess, showError } from "@/utils/toast.js";
import { uploadMultipleImages } from "@/utils/upload.js";

const ProductImagesSection = () => {
  const [sectionTitle, setSectionTitle] = React.useState("");
  const [uploadedImages, setUploadedImages] = React.useState([
    "https://picsum.photos/seed/landing-prod-img1/100/100",
    "https://picsum.photos/seed/landing-prod-img2/100/100",
  ]);
  const maxLength = 100;
  const imagesInputRef = React.useRef(null);

  const handleUploadImages = async (event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;

    if (uploadedImages.length + files.length > 6) {
      showError("You can upload a maximum of 6 images in total.");
      return;
    }

    try {
      const { images } = await uploadMultipleImages(files);
      const newImageUrls = images.map(img => img.imageUrl);
      setUploadedImages(prev => [...prev, ...newImageUrls]);
    } catch (error) {
      // Error is handled by the toast in the upload utility
    }
  };

  const handleRemoveImage = (indexToRemove) => {
    setUploadedImages(uploadedImages.filter((_, index) => index !== indexToRemove));
    showError("Image removed.");
  };

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Product images</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          Upload upto 6 items to get a better visual impact on your website
        </p>
        <input
          type="file"
          ref={imagesInputRef}
          onChange={handleUploadImages}
          accept="image/png, image/jpeg, image/gif"
          style={{ display: 'none' }}
          multiple
        />
        <Button className="mb-4" onClick={() => imagesInputRef.current.click()} disabled={uploadedImages.length >= 6}>
          Upload ({uploadedImages.length}/6)
        </Button>
        <div className="mb-4">
          <Label htmlFor="sectionTitle">Section title</Label>
          <Input
            id="sectionTitle"
            placeholder="Input your section title"
            className="mt-1"
            value={sectionTitle}
            onChange={(e) => setSectionTitle(e.target.value)}
            maxLength={maxLength}
          />
          <p className="text-xs text-muted-foreground text-right mt-1">
            Character limit: {maxLength - sectionTitle.length}/{maxLength}
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {uploadedImages.map((src, index) => (
            <div key={index} className="relative w-24 h-24 rounded-md overflow-hidden border">
              <img src={src} alt={`Product ${index + 1}`} className="w-full h-full object-cover" />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-1 right-1 h-6 w-6 rounded-full"
                onClick={() => handleRemoveImage(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductImagesSection;