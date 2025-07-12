"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Switch } from "@/components/ui/switch.jsx";
import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils.js";
import { showSuccess } from "@/utils/toast.js";

const ThemeControls = () => {
  const [themeColor, setThemeColor] = React.useState("#000000"); // Example black
  const [themeMode, setThemeMode] = React.useState("Light"); // "Light" or "Dark"
  const [buyNowEnabled, setBuyNowEnabled] = React.useState(true); // true for "Yes", false for "No"

  const handleApplyTheme = () => {
    showSuccess("Theme applied successfully!");
    console.log("Applying theme with:", { themeColor, themeMode, buyNowEnabled });
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Theme Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-6">
          <div>
            <Label htmlFor="theme-color" className="block text-sm font-medium text-foreground mb-2">
              Shop Theme Color
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
                onChange={(e) => setThemeColor(e.target.value)}
                className="w-16 h-10 p-0 border-none cursor-pointer"
              />
              <Input
                value={themeColor}
                onChange={(e) => setThemeColor(e.target.value)}
                className="flex-1"
              />
            </div>
          </div>

          <div>
            <Label className="block text-sm font-medium text-foreground mb-2">
              Shop Theme Mode
            </Label>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className={cn(
                  "flex-1",
                  themeMode === "Light" && "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
                onClick={() => setThemeMode("Light")}
              >
                Light {themeMode === "Light" && <Check className="h-4 w-4 ml-2" />}
              </Button>
              <Button
                variant="outline"
                className={cn(
                  "flex-1",
                  themeMode === "Dark" && "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
                onClick={() => setThemeMode("Dark")}
              >
                Dark {themeMode === "Dark" && <Check className="h-4 w-4 ml-2" />}
              </Button>
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
                  buyNowEnabled && "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
                onClick={() => setBuyNowEnabled(true)}
              >
                Yes {buyNowEnabled && <Check className="h-4 w-4 ml-2" />}
              </Button>
              <Button
                variant="outline"
                className={cn(
                  "flex-1",
                  !buyNowEnabled && "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
                onClick={() => setBuyNowEnabled(false)}
              >
                No {!buyNowEnabled && <Check className="h-4 w-4 ml-2" />}
              </Button>
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          Basic is a default theme. No need to setup anything.
        </p>
        <Button className="w-full md:w-auto" onClick={handleApplyTheme}>
          <Sparkles className="h-4 w-4 mr-2" />
          Apply Theme
        </Button>
      </CardContent>
    </Card>
  );
};

export default ThemeControls;