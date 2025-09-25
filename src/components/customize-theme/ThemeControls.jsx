"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Switch } from "@/components/ui/switch.jsx";
import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils.js";
import { useThemeConfig } from "@/contexts/ThemeSettingsContext.jsx";
import { useStoreConfig } from "@/contexts/StoreConfigurationContext.jsx"; // Import useStoreConfig
import { Skeleton } from "@/components/ui/skeleton.jsx";

const ThemeControls = () => {
  const { config, isLoading, updateNested, isUpdating: isUpdatingThemeConfig } = useThemeConfig();
  const { save: saveStoreConfig, isUpdating: isUpdatingStoreConfig } = useStoreConfig(); // Get save and isUpdating from StoreConfig

  const isUpdating = isUpdatingThemeConfig || isUpdatingStoreConfig; // Combine for button disabled state

  if (isLoading || !config) {
    return (
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Theme Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <div className="flex justify-end">
            <Skeleton className="h-10 w-32" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Theme Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-6">
          <div>
            <Label htmlFor="theme-color" className="block text-sm font-medium text-foreground mb-2">
              Shop Theme Primary Color
            </Label>
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full border border-gray-300"
                style={{ backgroundColor: config.primary_color }}
              />
              <Input
                id="theme-color"
                type="color"
                value={config.primary_color}
                onChange={(e) => updateNested('primary_color', e.target.value)}
                className="w-16 h-10 p-0 border-none cursor-pointer"
                disabled={isUpdating}
              />
              <Input
                value={config.primary_color}
                onChange={(e) => updateNested('primary_color', e.target.value)}
                className="flex-1"
                disabled={isUpdating}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="secondary-color" className="block text-sm font-medium text-foreground mb-2">
              Shop Theme Secondary Color
            </Label>
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full border border-gray-300"
                style={{ backgroundColor: config.secondary_color }}
              />
              <Input
                id="secondary-color"
                type="color"
                value={config.secondary_color}
                onChange={(e) => updateNested('secondary_color', e.target.value)}
                className="w-16 h-10 p-0 border-none cursor-pointer"
                disabled={isUpdating}
              />
              <Input
                value={config.secondary_color}
                onChange={(e) => updateNested('secondary_color', e.target.value)}
                className="flex-1"
                disabled={isUpdating}
              />
            </div>
          </div>

          <div>
            <Label className="block text-sm font-medium text-foreground mb-2">
              Enable Buy Now Button
            </Label>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className={cn(
                  "flex-1",
                  config.buy_now_button_enabled && "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
                onClick={() => updateNested('buy_now_button_enabled', true)}
                disabled={isUpdating}
              >
                Yes {config.buy_now_button_enabled && <Check className="h-4 w-4 ml-2" />}
              </Button>
              <Button
                variant="outline"
                className={cn(
                  "flex-1",
                  !config.buy_now_button_enabled && "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
                onClick={() => updateNested('buy_now_button_enabled', false)}
                disabled={isUpdating}
              >
                No {!config.buy_now_button_enabled && <Check className="h-4 w-4 ml-2" />}
              </Button>
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          Basic is a default theme. No need to setup anything.
        </p>
        <Button className="w-full md:w-auto" onClick={saveStoreConfig} disabled={isUpdating}> {/* Changed to saveStoreConfig */}
          <Sparkles className="h-4 w-4 mr-2" />
          {isUpdating ? 'Applying...' : 'Apply Theme'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ThemeControls;