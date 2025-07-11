"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronUp } from "lucide-react";

const ProductGeneralInformation = () => {
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
            <Input id="itemName" placeholder="Item Name" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="shortDescription">Short Description (SEO & Data Feed)</Label>
            <Textarea id="shortDescription" placeholder="Short Description" className="mt-1" />
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
              <Textarea id="productDescription" placeholder="Write something..." className="border-none focus-visible:ring-0" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductGeneralInformation;