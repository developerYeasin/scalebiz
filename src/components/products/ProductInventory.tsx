"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { ChevronUp } from "lucide-react";

interface ProductInventoryProps {
  productSerial: string;
  setProductSerial: (serial: string) => void;
  skuCode: string;
  setSkuCode: (sku: string) => void;
  unitName: string;
  setUnitName: (unit: string) => void;
  quantityStock: string;
  setQuantityStock: (quantity: string) => void;
  warranty: string;
  setWarranty: (warranty: string) => void;
  initialSoldCount: string;
  setInitialSoldCount: (count: string) => void;
}

const ProductInventory = ({
  productSerial,
  setProductSerial,
  skuCode,
  setSkuCode,
  unitName,
  setUnitName,
  quantityStock,
  setQuantityStock,
  warranty,
  setWarranty,
  initialSoldCount,
  setInitialSoldCount,
}: ProductInventoryProps) => {
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
            <Input
              id="productSerial"
              placeholder="0"
              className="mt-1"
              value={productSerial}
              onChange={(e) => setProductSerial(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="skuCode">SKU / Product Code</Label>
            <Input
              id="skuCode"
              placeholder="SKU / Product Code"
              className="mt-1"
              value={skuCode}
              onChange={(e) => setSkuCode(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="unitName">Unit Name</Label>
            <Input
              id="unitName"
              placeholder="e.g., kg, ml, l, mg"
              className="mt-1"
              value={unitName}
              onChange={(e) => setUnitName(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="quantityStock">Quantity (Stock) <span className="text-destructive">*</span></Label>
            <Input
              id="quantityStock"
              placeholder="Quantity (Stock)"
              className="mt-1"
              type="number"
              value={quantityStock}
              onChange={(e) => setQuantityStock(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="warranty">Warranty</Label>
            <Input
              id="warranty"
              placeholder="Warranty"
              className="mt-1"
              value={warranty}
              onChange={(e) => setWarranty(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="initialSoldCount">Initial Sold Count</Label>
            <Input
              id="initialSoldCount"
              placeholder="0"
              className="mt-1"
              type="number"
              value={initialSoldCount}
              onChange={(e) => setInitialSoldCount(e.target.value)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductInventory;