"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const ShopTheme = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Shop Theme</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Label htmlFor="theme-color" className="block text-sm font-medium text-foreground mb-2">
            Theme Color
          </Label>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-gray-300 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500" />
            <Input id="theme-color" type="color" defaultValue="#000000" className="w-16 h-10 p-0 border-none cursor-pointer" />
            <Input defaultValue="#000000" className="flex-1" />
          </div>
          <Button className="w-full mt-4">Save Theme Color</Button>
        </div>
        <div className="flex items-center justify-between mt-4">
          <Label htmlFor="dark-mode-toggle" className="text-sm">
            Dark Mode
          </Label>
          <Switch id="dark-mode-toggle" />
        </div>
        <Button variant="outline" className="w-full mt-4">
          Customize Shop Theme
        </Button>
      </CardContent>
    </Card>
  );
};

export default ShopTheme;