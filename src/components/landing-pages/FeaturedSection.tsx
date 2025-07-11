"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const FeaturedSection = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Featured section</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          You can upload up to 2 items for a better visual impact on your website
        </p>
        <Button className="mb-4">Upload (0/2)</Button>
        <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center text-muted-foreground h-24 flex items-center justify-center">
          No featured items found. Click "Upload" to add new items.
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedSection;