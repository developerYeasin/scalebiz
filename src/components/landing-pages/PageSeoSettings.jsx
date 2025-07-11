"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { ChevronUp } from "lucide-react";

const PageSeoSettings = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Page SEO Settings</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div>
            <Label htmlFor="pageTitle">Page Title (SEO) <span className="text-destructive">*</span></Label>
            <Input id="pageTitle" defaultValue="Lahori Three Piece" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="pageDescription">Page Description (SEO)</Label>
            <Textarea id="pageDescription" className="mt-1" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PageSeoSettings;