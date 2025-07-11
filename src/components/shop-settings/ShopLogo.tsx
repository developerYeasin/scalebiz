"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronUp, Upload } from "lucide-react";

const ShopLogo = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Shop Logo</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent className="text-center">
        <div className="flex flex-col items-center justify-center p-4 border rounded-md mb-4">
          <img src="https://via.placeholder.com/100x50" alt="Shop Logo" className="h-16 object-contain mb-2" />
          <p className="text-sm text-muted-foreground">Recommended size is 200×50 pixels. Maximum file size is 4MB.</p>
        </div>
        <Button variant="outline" className="w-full">
          <Upload className="h-4 w-4 mr-2" />
          Upload Shop Logo
        </Button>
      </CardContent>
    </Card>
  );
};

export default ShopLogo;