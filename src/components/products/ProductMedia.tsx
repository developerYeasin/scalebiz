"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Image, Video, ChevronUp } from "lucide-react";

const ProductMedia = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Media</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center flex flex-col items-center justify-center">
            <Image className="h-12 w-12 text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground mb-2">
              Drag and drop image here, or click add image. Supported formats: JPG, PNG, Max size: 4MB
            </p>
            <Button variant="outline">Add Image</Button>
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center flex flex-col items-center justify-center">
            <Video className="h-12 w-12 text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground mb-2">
              Paste the video link here
            </p>
            <Button variant="outline">Add Link</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductMedia;