"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Switch } from "@/components/ui/switch.jsx";
import { Label } from "@/components/ui/label.jsx";
import { ChevronUp } from "lucide-react";

const ProductShipping = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Shipping</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold mb-2">Delivery Charge</h3>
        <p className="text-sm text-muted-foreground mb-4">
          You can add specific delivery charge for this product or use the default charges
        </p>
        <div className="flex items-center justify-between">
          <Label htmlFor="delivery-charge-toggle" className="text-base">
            Apply default delivery charges
          </Label>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">[Applied]</span>
            <Switch id="delivery-charge-toggle" defaultChecked />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductShipping;