"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Switch } from "@/components/ui/switch.jsx";
import { ChevronUp } from "lucide-react";

const ShopSettingsSection = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Shop Settings</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <Label htmlFor="defaultLanguage">Default language</Label>
            <Select defaultValue="English">
              <SelectTrigger id="defaultLanguage" className="mt-1">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="Bangla">Bangla</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between col-span-full md:col-span-1">
            <Label htmlFor="maintainStockQuantity" className="text-sm">
              Maintain Stock Quantity
              <p className="text-xs text-muted-foreground mt-1">
                Enabling this option ensures that products with zero stock will be marked as "Out of Stock" on the website. Customers will not be able to place orders for out-of-stock products, but they will still be able to view the product details.
              </p>
            </Label>
            <Switch id="maintainStockQuantity" defaultChecked />
          </div>
          <div className="flex items-center justify-between col-span-full md:col-span-1">
            <Label htmlFor="showProductSoldCount" className="text-sm">
              Show Product Sold Count
            </Label>
            <Switch id="showProductSoldCount" defaultChecked />
          </div>
          <div>
            <Label htmlFor="vatTaxPercentage">VAT / Tax Percentage</Label>
            <Input id="vatTaxPercentage" defaultValue="0" className="mt-1" />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <Button>Update Shop Settings</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShopSettingsSection;