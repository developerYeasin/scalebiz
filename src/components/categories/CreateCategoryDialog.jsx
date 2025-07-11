"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Image } from "lucide-react";

const CreateCategoryDialog = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create Category</DialogTitle>
          <DialogDescription>
            Banner/Cover
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center flex flex-col items-center justify-center">
            <Image className="h-12 w-12 text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground mb-2">
              Upload a banner image for the category. Recommended size is 1300×380 pixels. Maximum file size is 4MB.
            </p>
            <Button variant="outline">Add Image</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center flex flex-col items-center justify-center">
              <Image className="h-12 w-12 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground mb-2">
                Upload a square image for the category (1:1) aspect ratio. Recommended size is 500×500 pixels. Maximum file size is 4MB.
              </p>
              <Button variant="outline">Add Image</Button>
            </div>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="categoryName">Category Name <span className="text-destructive">*</span></Label>
                <Input id="categoryName" placeholder="Category Name" className="mt-1" />
                <p className="text-xs text-muted-foreground text-right mt-1">Character limit: 50</p>
              </div>
              <div>
                <Label htmlFor="shortDescription">Short Description</Label>
                <Textarea id="shortDescription" placeholder="Short description..." className="mt-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button>Create Category</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCategoryDialog;