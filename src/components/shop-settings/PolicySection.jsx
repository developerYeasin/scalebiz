"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { ChevronUp } from "lucide-react";
import { showSuccess } from "@/utils/toast.js";
import RichTextEditor from "@/components/ui/RichTextEditor.jsx";

const PolicySection = ({ title, lastUpdated, content }) => {
  const [editorContent, setEditorContent] = React.useState(content);

  const handleUpdatePolicy = () => {
    // In a real app, this would make an API call with `editorContent`
    console.log("Updating policy:", { title, content: editorContent });
    showSuccess(`${title} policy updated successfully!`);
  };

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{title}</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">Last updated: {lastUpdated}</p>
        <RichTextEditor
          content={editorContent}
          onChange={setEditorContent}
        />
        <div className="flex justify-end mt-4">
          <Button onClick={handleUpdatePolicy}>Update Policy</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PolicySection;