"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { ChevronUp } from "lucide-react";
import { Switch } from "@/components/ui/switch.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Input } from "@/components/ui/input.jsx";
import { useStoreConfig } from "@/contexts/StoreConfigurationContext.jsx";
import { Skeleton } from "@/components/ui/skeleton.jsx";
import { Link } from "react-router-dom";

const ShopTheme = () => {
  const { config, isLoading, updateNested, save, isUpdating } = useStoreConfig();

  if (isLoading || !config) {
    return (
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Shop Theme</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </CardContent>
      </Card>
    );
  }

  const themeColor = config.theme_settings?.primaryColor || '#000000';

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
            <div
              className="w-8 h-8 rounded-full border border-gray-300"
              style={{ backgroundColor: themeColor }}
            />
            <Input
              id="theme-color"
              type="color"
              value={themeColor}
              onChange={(e) => updateNested('theme_settings.primaryColor', e.target.value)}
              className="w-16 h-10 p-0 border-none cursor-pointer"
            />
            <Input
              value={themeColor}
              onChange={(e) => updateNested('theme_settings.primaryColor', e.target.value)}
              className="flex-1"
            />
          </div>
          <Button className="w-full mt-4" onClick={save} disabled={isUpdating}>
            {isUpdating ? 'Saving...' : 'Save Theme Color'}
          </Button>
        </div>
        <div className="flex items-center justify-between mt-4">
          <Label htmlFor="dark-mode-toggle" className="text-sm">
            Dark Mode
          </Label>
          <Switch
            id="dark-mode-toggle"
            // This would require more logic to implement fully
            // For now, it's a placeholder UI element
          />
        </div>
        <Button variant="outline" className="w-full mt-4" asChild>
          <Link to="/customize-theme">Customize Shop Theme</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ShopTheme;