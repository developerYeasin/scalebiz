"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ThemeSetupControls = () => {
  const [activePreview, setActivePreview] = React.useState("Demo preview");

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Theme Setup</h2>
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          className={cn(
            "px-4 py-2 rounded-md text-sm",
            activePreview === "Demo preview"
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          )}
          onClick={() => setActivePreview("Demo preview")}
        >
          Demo preview
        </Button>
        <Button
          variant="outline"
          className={cn(
            "px-4 py-2 rounded-md text-sm",
            activePreview === "Section indicator"
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          )}
          onClick={() => setActivePreview("Section indicator")}
        >
          Section indicator
        </Button>
        <Button
          variant="outline"
          className={cn(
            "px-4 py-2 rounded-md text-sm",
            activePreview === "Live preview"
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          )}
          onClick={() => setActivePreview("Live preview")}
        >
          Live preview
        </Button>
      </div>
    </div>
  );
};

export default ThemeSetupControls;