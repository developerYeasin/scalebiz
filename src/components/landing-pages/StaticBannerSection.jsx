"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Image, ChevronUp } from "lucide-react";

const StaticBannerSection = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Static banner</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          Select upto 1 items to get a better visual impact on your website
        </p>
        <Button className="mb-4">Upload (0/1)</Button>
        <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center flex flex-col items-center justify-center h-48">
          <Image className="h-12 w-12 text-muted-foreground mb-2" />
          <p className="text-sm text-muted-foreground">
            You haven't uploaded any banner yet. Your uploaded banner will appear here.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StaticBannerSection;