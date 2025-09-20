"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { ChevronUp, Upload } from "lucide-react";
import { uploadSingleImage } from "@/utils/upload.js";

const ShopLogo = () => {
  const logoInputRef = React.useRef(null);

  const handleUploadLogo = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    try {
      await uploadSingleImage(file);
      // In a real app, you'd likely update the displayed logo URL here
      // For now, the success toast from the utility is sufficient.
    } catch (error) {
      // Error is handled by the toast in the upload utility
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Shop Logo</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent className="text-center">
        <div className="flex flex-col items-center justify-center p-4 border rounded-md mb-4">
          <img src="https://picsum.photos/seed/shop-logo/200/50" alt="Shop Logo" className="h-16 object-contain mb-2" />
          <p className="text-sm text-muted-foreground">Recommended size is 200×50 pixels. Maximum file size is 4MB.</p>
        </div>
        <input
          type="file"
          ref={logoInputRef}
          onChange={handleUploadLogo}
          accept="image/png, image/jpeg, image/gif"
          style={{ display: 'none' }}
        />
        <Button variant="outline" className="w-full" onClick={() => logoInputRef.current.click()}>
          <Upload className="h-4 w-4 mr-2" />
          Upload Shop Logo
        </Button>
      </CardContent>
    </Card>
  );
};

export default ShopLogo;