"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { ChevronUp } from "lucide-react";

const ScrollingBannerText = () => {
  const [text, setText] = React.useState("");
  const maxLength = 150;

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Scrolling banner text</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          You can select up to 1 scrolling banner text for a better visual impact on your website
        </p>
        <div>
          <Label htmlFor="scrollingBannerText">Scrolling banner text</Label>
          <Input
            id="scrollingBannerText"
            placeholder="Input your desired scrolling banner text"
            className="mt-1"
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={maxLength}
          />
          <p className="text-xs text-muted-foreground text-right mt-1">
            Character limit: {maxLength - text.length}/{maxLength}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScrollingBannerText;