"use client";

import React from "react";
import { Button } from "@/components/ui/button.jsx";
import { cn } from "@/lib/utils.js";
import { useLandingPageConfig } from "@/contexts/LandingPageSettingsContext.jsx";
import { Skeleton } from "@/components/ui/skeleton.jsx";

const ThemeSetupControls = () => {
  const { isLoading, isUpdating } = useLandingPageConfig();
  const [activePreview, setActivePreview] = React.useState("Demo preview"); // This state is local to the component

  if (isLoading) {
    return (
      <div className="mb-6">
        <Skeleton className="h-7 w-32 mb-4" />
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-36" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Theme Setup</h2>
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          className={cn(
            "flex-1",
            activePreview === "Demo preview"
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          )}
          onClick={() => setActivePreview("Demo preview")}
          disabled={isUpdating}
        >
          Demo preview
        </Button>
        <Button
          variant="outline"
          className={cn(
            "flex-1",
            activePreview === "Section indicator"
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          )}
          onClick={() => setActivePreview("Section indicator")}
          disabled={isUpdating}
        >
          Section indicator
        </Button>
        <Button
          variant="outline"
          className={cn(
            "flex-1",
            activePreview === "Live preview"
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          )}
          onClick={() => setActivePreview("Live preview")}
          disabled={isUpdating}
        >
          Live preview
        </Button>
      </div>
    </div>
  );
};

export default ThemeSetupControls;