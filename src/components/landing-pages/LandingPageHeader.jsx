"use client";

import React from "react";
import { Button } from "@/components/ui/button.jsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.jsx";
import { Sparkles } from "lucide-react";
import { useLandingPageConfig } from "@/contexts/LandingPageSettingsContext.jsx";
import { Skeleton } from "@/components/ui/skeleton.jsx";

const LandingPageHeader = () => {
  const { config, isLoading, updateNested, isUpdating } = useLandingPageConfig();

  if (isLoading || !config) {
    return (
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-7 w-64" />
        </div>
        <Skeleton className="h-10 w-full md:w-[200px]" />
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
      <div className="flex items-center gap-2">
        <Sparkles className="h-6 w-6 text-purple-600" />
        <h1 className="text-2xl font-bold">Your Single Product Page</h1>
        <p className="text-muted-foreground text-sm hidden sm:block">
          You can modify data and visual impact of the page
        </p>
      </div>
      <div className="w-full md:w-auto">
        <Select
          defaultValue="Lahori Three Piece" // This should ideally come from a product list
          onValueChange={(value) => console.log("Selected product:", value)} // Placeholder for actual product selection logic
          disabled={isUpdating}
        >
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Select Product" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Lahori Three Piece">Lahori Three Piece</SelectItem>
            <SelectItem value="Torrey Three Piece">Torrey Three Piece</SelectItem>
            <SelectItem value="Iiraa Three Piece">Iiraa Three Piece</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default LandingPageHeader;