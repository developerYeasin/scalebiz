"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Image, Video, ChevronUp } from "lucide-react";
import { showInfo } from "@/utils/toast.js";
import { Input } from "@/components/ui/input.jsx";

const ProductMedia = ({ imageUrl, setImageUrl, hoverImageUrl, setHoverImageUrl, videoUrl, setVideoUrl }) => {
  const handleAddImage = (type) => {
    showInfo("Image upload initiated (dummy action).");
    const dummyImageUrl = `https://picsum.photos/seed/product-media-${type}-${Date.now()}/100/100`;
    if (type === 'main') {
      setImageUrl(dummyImageUrl);
    } else {
      setHoverImageUrl(dummyImageUrl);
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Media</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center flex flex-col items-center justify-center">
            {imageUrl ? (
              <img src={imageUrl} alt="Product Main Image" className="h-24 w-auto object-contain mb-2" />
            ) : (
              <Image className="h-12 w-12 text-muted-foreground mb-2" />
            )}
            <p className="text-sm text-muted-foreground mb-2">
              Drag and drop main image here, or click add image. Supported formats: JPG, PNG, Max size: 4MB
            </p>
            <Button variant="outline" onClick={() => handleAddImage('main')}>
              {imageUrl ? "Change Main Image" : "Add Main Image"}
            </Button>
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center flex flex-col items-center justify-center">
            {hoverImageUrl ? (
              <img src={hoverImageUrl} alt="Product Hover Image" className="h-24 w-auto object-contain mb-2" />
            ) : (
              <Image className="h-12 w-12 text-muted-foreground mb-2" />
            )}
            <p className="text-sm text-muted-foreground mb-2">
              Drag and drop hover image here, or click add image. Supported formats: JPG, PNG, Max size: 4MB
            </p>
            <Button variant="outline" onClick={() => handleAddImage('hover')}>
              {hoverImageUrl ? "Change Hover Image" : "Add Hover Image"}
            </Button>
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center flex flex-col items-center justify-center">
            <Video className="h-12 w-12 text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground mb-2">
              Paste the video link here
            </p>
            <Input
              placeholder="https://www.youtube.com/watch?v=..."
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="mt-1"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductMedia;