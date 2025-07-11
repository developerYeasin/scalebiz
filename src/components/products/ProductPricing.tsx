"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronUp } from "lucide-react";

const ProductPricing = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Pricing</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="sellPrice">Sell/Current Price <span className="text-destructive">*</span></Label>
            <Input id="sellPrice" placeholder="Sell/Current Price" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="regularPrice">Regular/Old Price</Label>
            <Input id="regularPrice" placeholder="Regular/Old Price" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="buyingPrice">Buying Price (Optional)</Label>
            <Input id="buyingPrice" placeholder="Buying Price (Optional)" className="mt-1" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductPricing;