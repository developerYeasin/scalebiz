"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { ChevronUp, PlayCircle } from "lucide-react";

const FeaturedVideoSection = () => {
  const [videoTitle, setVideoTitle] = React.useState("");
  const maxLength = 100;

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Featured video</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          You can add a featured video describing your product using youtube link
        </p>
        <div className="mb-4">
          <Label htmlFor="videoTitle">Title</Label>
          <Input
            id="videoTitle"
            placeholder="Title"
            className="mt-1"
            value={videoTitle}
            onChange={(e) => setVideoTitle(e.target.value)}
            maxLength={maxLength}
          />
          <p className="text-xs text-muted-foreground text-right mt-1">
            Character limit: {maxLength - videoTitle.length}/{maxLength}
          </p>
        </div>
        <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center flex flex-col items-center justify-center h-48">
          <img src="https://picsum.photos/seed/featured-video/300/150" alt="Video Placeholder" className="h-full w-full object-cover rounded-md absolute inset-0 opacity-50" />
          <PlayCircle className="h-12 w-12 text-muted-foreground mb-2 relative z-10" />
          <p className="text-sm text-muted-foreground relative z-10">Product Video Link</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedVideoSection;