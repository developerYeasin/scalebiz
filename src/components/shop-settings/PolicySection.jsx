"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { ChevronUp } from "lucide-react";
import RichTextEditor from "@/components/ui/RichTextEditor.jsx";
import { useStoreConfig } from "@/contexts/StoreConfigurationContext.jsx";
import { Skeleton } from "@/components/ui/skeleton.jsx";

const PolicySection = ({ title, lastUpdated, contentPath }) => {
  const { config, isLoading, updateNested, save, isUpdating } = useStoreConfig();

  const getNestedValue = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

  const content = config ? getNestedValue(config, contentPath) : '';

  if (isLoading || !config) {
    return (
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-40 w-full" />
          <div className="flex justify-end mt-4">
            <Skeleton className="h-10 w-32" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{title}</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">Last updated: {lastUpdated}</p>
        <RichTextEditor
          content={content || ''}
          onChange={(newContent) => updateNested(contentPath, newContent)}
        />
        <div className="flex justify-end mt-4">
          <Button onClick={save} disabled={isUpdating}>
            {isUpdating ? 'Saving...' : 'Update Policy'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PolicySection;