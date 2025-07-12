"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Button } from "@/components/ui/button.jsx";
import { ChevronUp } from "lucide-react";
import { toast } from "@/utils/toast.js";

const PolicySection = ({ title, lastUpdated, content }) => {
  const handleUpdatePolicy = () => {
    toast.success(`${title} policy updated successfully!`);
  };

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{title}</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">Last updated: {lastUpdated}</p>
        <div className="border rounded-md">
          <div className="flex items-center border-b p-2 space-x-2 text-muted-foreground">
            <span className="text-sm font-medium">Normal</span>
            <span className="text-sm font-medium">&#9660;</span> {/* Placeholder for dropdown */}
            <span className="text-sm font-medium">B</span>
            <span className="text-sm font-medium">I</span>
            <span className="text-sm font-medium">U</span>
            <span className="text-sm font-medium">"</span>
            <span className="text-sm font-medium">A</span>
            <span className="text-sm font-medium">::</span>
            <span className="text-sm font-medium">::</span>
            <span className="text-sm font-medium">::</span>
            <span className="text-sm font-medium">::</span>
            <span className="text-sm font-medium">@</span>
            <span className="text-sm font-medium">Tx</span>
          </div>
          <Textarea defaultValue={content} rows={15} className="border-none focus-visible:ring-0" />
        </div>
        <div className="flex justify-end mt-4">
          <Button onClick={handleUpdatePolicy}>Update Policy</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PolicySection;