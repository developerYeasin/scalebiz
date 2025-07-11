"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Switch } from "@/components/ui/switch.jsx";
import { Check, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils.js";

const GeneralSettings = () => {
  const [primaryColor, setPrimaryColor] = React.useState("#6B46C1"); // Example purple
  const [secondaryColor, setSecondaryColor] = React.useState("#000000"); // Example black
  const [showProductDetails, setShowProductDetails] = React.useState(false);

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>General settings</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
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
                style={{ backgroundColor: primaryColor }}
              />
              <Input
                id="primaryColor"
                type="color"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="w-16 h-10 p-0 border-none cursor-pointer"
              />
              <Input
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="flex-1"
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
                style={{ backgroundColor: secondaryColor }}
              />
              <Input
                id="secondaryColor"
                type="color"
                value={secondaryColor}
                onChange={(e) => setSecondaryColor(e.target.value)}
                className="w-16 h-10 p-0 border-none cursor-pointer"
              />
              <Input
                value={secondaryColor}
                onChange={(e) => setSecondaryColor(e.target.value)}
                className="flex-1"
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
                  showProductDetails && "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
                onClick={() => setShowProductDetails(true)}
              >
                Yes {showProductDetails && <Check className="h-4 w-4 ml-2" />}
              </Button>
              <Button
                variant="outline"
                className={cn(
                  "flex-1",
                  !showProductDetails && "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
                onClick={() => setShowProductDetails(false)}
              >
                No {!showProductDetails && <Check className="h-4 w-4 ml-2" />}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GeneralSettings;