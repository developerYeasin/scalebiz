"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { ChevronUp } from "lucide-react";

const ProductInventory = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Inventory</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="productSerial">Product Serial</Label>
            <Input id="productSerial" defaultValue="0" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="skuCode">SKU / Product Code</Label>
            <Input id="skuCode" placeholder="SKU / Product Code" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="unitName">Unit Name</Label>
            <Input id="unitName" placeholder="e.g., kg, ml, l, mg" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="quantityStock">Quantity (Stock)</Label>
            <Input id="quantityStock" placeholder="Quantity (Stock)" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="warranty">Warranty</Label>
            <Input id="warranty" placeholder="Warranty" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="initialSoldCount">Initial Sold Count</Label>
            <Input id="initialSoldCount" defaultValue="0" className="mt-1" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductInventory;