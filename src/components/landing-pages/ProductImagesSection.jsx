"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { ChevronUp, X } from "lucide-react";

const ProductImagesSection = () => {
  const [sectionTitle, setSectionTitle] = React.useState("");
  const maxLength = 100;
  const uploadedImages = [
    "https://via.placeholder.com/100x100?text=Image1",
    "https://via.placeholder.com/100x100?text=Image2",
  ];

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
        <Button className="mb-4">Upload ({uploadedImages.length}/6)</Button>
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