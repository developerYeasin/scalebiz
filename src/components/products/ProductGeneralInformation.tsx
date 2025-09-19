"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { ChevronUp } from "lucide-react";

interface ProductGeneralInformationProps {
  itemName: string;
  setItemName: (name: string) => void;
  shortDescription: string;
  setShortDescription: (description: string) => void;
  productDescription: string;
  setProductDescription: (description: string) => void;
}

const ProductGeneralInformation = ({
  itemName,
  setItemName,
  shortDescription,
  setShortDescription,
  productDescription,
  setProductDescription,
}: ProductGeneralInformationProps) => {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>General Information</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div>
            <Label htmlFor="itemName">Item Name <span className="text-destructive">*</span></Label>
            <Input
              id="itemName"
              placeholder="Item Name"
              className="mt-1"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="shortDescription">Short Description (SEO & Data Feed)</Label>
            <Textarea
              id="shortDescription"
              placeholder="Short Description"
              className="mt-1"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="productDescription">Product Description</Label>
            <div className="border rounded-md mt-1">
              <div className="flex items-center border-b p-2 space-x-2">
                <span className="text-sm font-medium">Normal</span>
                <span className="text-sm font-medium">&#9660;</span> {/* Placeholder for dropdown */}
                <span className="text-sm font-medium">B</span>
                <span className="text-sm font-medium">I</span>
                <span className="text-sm font-medium">U</span>
                <span className="text-sm font-medium">"</span>
                <span className="text-sm font-medium">A</span>
                <span className="text-sm font-medium">::</span>
                <span className="text-sm font-medium">::</span>
                <span className="text-sm font-medium">::</span>
                <span className="text-sm font-medium">::</span>
                <span className="text-sm font-medium">@</span>
                <span className="text-sm font-medium">Tx</span>
              </div>
              <Textarea
                id="productDescription"
                placeholder="Write something..."
                className="border-none focus-visible:ring-0"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductGeneralInformation;