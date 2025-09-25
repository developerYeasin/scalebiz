"use client";

import React from "react";
import { CardContent } from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils.js";
import { useLandingPageConfig } from "@/contexts/LandingPageSettingsContext.jsx";
import { Skeleton } from "@/components/ui/skeleton.jsx";
import CollapsibleCard from "@/components/ui/CollapsibleCard.jsx"; // Import CollapsibleCard

const GeneralSettings = () => {
  const { config, isLoading, updateNested, save, isUpdating } = useLandingPageConfig();

  if (isLoading || !config) {
    return (
      <CollapsibleCard title="General settings">
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
          </div>
        </div>
      </CollapsibleCard>
    );
  }

  return (
    <CollapsibleCard title="General settings">
      <p className="text-sm text-muted-foreground mb-4">
        You can configure your general theme settings here
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div>
          <Label htmlFor="primaryColor" className="block text-sm font-medium text-foreground mb-2">
            Primary color
          </Label>
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full border border-gray-300"
              style={{ backgroundColor: config.general_primary_color }}
            />
            <Input
              id="primaryColor"
              type="color"
              value={config.general_primary_color}
              onChange={(e) => updateNested('general_primary_color', e.target.value)}
              className="w-16 h-10 p-0 border-none cursor-pointer"
              disabled={isUpdating}
            />
            <Input
              value={config.general_primary_color}
              onChange={(e) => updateNested('general_primary_color', e.target.value)}
              className="flex-1"
              disabled={isUpdating}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="secondaryColor" className="block text-sm font-medium text-foreground mb-2">
            Secondary color
          </Label>
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full border border-gray-300"
              style={{ backgroundColor: config.general_secondary_color }}
            />
            <Input
              id="secondaryColor"
              type="color"
              value={config.general_secondary_color}
              onChange={(e) => updateNested('general_secondary_color', e.target.value)}
              className="w-16 h-10 p-0 border-none cursor-pointer"
              disabled={isUpdating}
            />
            <Input
              value={config.general_secondary_color}
              onChange={(e) => updateNested('general_secondary_color', e.target.value)}
              className="flex-1"
              disabled={isUpdating}
            />
          </div>
        </div>
        <div>
          <Label className="block text-sm font-medium text-foreground mb-2">
            Show product details
          </Label>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className={cn(
                "flex-1",
                config.show_product_details && "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
              onClick={() => updateNested('show_product_details', true)}
              disabled={isUpdating}
            >
              Yes {config.show_product_details && <Check className="h-4 w-4 ml-2" />}
            </Button>
            <Button
              variant="outline"
              className={cn(
                "flex-1",
                !config.show_product_details && "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
              onClick={() => updateNested('show_product_details', false)}
              disabled={isUpdating}
            >
              No {!config.show_product_details && <Check className="h-4 w-4 ml-2" />}
            </Button>
          </div>
        </div>
      </div>
    </CollapsibleCard>
  );
};

export default GeneralSettings;