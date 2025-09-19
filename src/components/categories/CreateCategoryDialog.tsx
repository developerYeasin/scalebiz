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
import { showInfo } from "@/utils/toast.js";
import { Category, CreateCategoryPayload, useCategories } from "@/hooks/use-categories.ts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.jsx";

interface CreateCategoryDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (payload: CreateCategoryPayload) => void;
  initialData?: Category | null;
}

const CreateCategoryDialog = ({ isOpen, onClose, onSave, initialData }: CreateCategoryDialogProps) => {
  const { categories: allCategories, isLoading: categoriesLoading } = useCategories();
  const [categoryName, setCategoryName] = React.useState(initialData?.name || "");
  const [shortDescription, setShortDescription] = React.useState(initialData?.description || "");
  const [bannerImageUrl, setBannerImageUrl] = React.useState(initialData?.image_url || "");
  const [squareImageUrl, setSquareImageUrl] = React.useState(initialData?.image_url || "");
  const [parentId, setParentId] = React.useState<string | null>(initialData?.parent_id ? String(initialData.parent_id) : null);

  React.useEffect(() => {
    if (initialData) {
      setCategoryName(initialData.name || "");
      setShortDescription(initialData.description || "");
      setBannerImageUrl(initialData.image_url || "");
      setSquareImageUrl(initialData.image_url || "");
      setParentId(initialData.parent_id ? String(initialData.parent_id) : "none"); // Set to "none" if parent_id is null
    } else {
      setCategoryName("");
      setShortDescription("");
      setBannerImageUrl("");
      setSquareImageUrl("");
      setParentId("none"); // Default to "none" for no parent
    }
  }, [initialData]);

  const handleAddBannerImage = () => {
    showInfo("Banner image upload initiated (dummy action).");
    setBannerImageUrl("https://picsum.photos/seed/uploaded-banner/1300/380");
  };

  const handleAddSquareImage = () => {
    showInfo("Square image upload initiated (dummy action).");
    setSquareImageUrl("https://picsum.photos/seed/uploaded-square/500/500");
  };

  const handleSaveClick = () => {
    if (!categoryName) {
      showInfo("Category Name is required.");
      return;
    }

    const payload: CreateCategoryPayload = {
      name: categoryName,
      description: shortDescription,
      image_url: bannerImageUrl || squareImageUrl || null,
      is_active: 1,
      is_featured: 0,
      sort_order: 0,
      parent_id: parentId === "none" ? null : Number(parentId), // Convert "none" back to null
    };
    onSave(payload);
  };

  // Filter out the current category from the parent options when editing
  const parentCategoryOptions = React.useMemo(() => {
    if (!allCategories) return [];
    const filtered = allCategories.filter(cat => cat.id !== initialData?.id);
    return filtered.map(cat => ({ value: String(cat.id), label: cat.name }));
  }, [allCategories, initialData]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>{initialData ? "Edit Category" : "Create Category"}</DialogTitle>
          <DialogDescription>
            {initialData ? "Edit the details of your category." : "Fill in the details to create a new category."}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 overflow-y-auto flex-1 pr-4">
          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center flex flex-col items-center justify-center">
            {bannerImageUrl ? (
              <img src={bannerImageUrl} alt="Banner" className="h-24 w-auto object-contain mb-2" />
            ) : (
              <Image className="h-12 w-auto text-muted-foreground mb-2" />
            )}
            <p className="text-sm text-muted-foreground mb-2">
              Upload a banner image for the category. Recommended size is 1300×380 pixels. Maximum file size is 4MB.
            </p>
            <Button variant="outline" onClick={handleAddBannerImage}>
              {bannerImageUrl ? "Change Image" : "Add Image"}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center flex flex-col items-center justify-center">
              {squareImageUrl ? (
                <img src={squareImageUrl} alt="Square" className="h-24 w-24 object-cover mb-2" />
              ) : (
                <Image className="h-12 w-12 text-muted-foreground mb-2" />
              )}
              <p className="text-sm text-muted-foreground mb-2">
                Upload a square image for the category (1:1) aspect ratio. Recommended size is 500×500 pixels. Maximum file size is 4MB.
              </p>
              <Button variant="outline" onClick={handleAddSquareImage}>
                {squareImageUrl ? "Change Image" : "Add Image"}
              </Button>
            </div>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="categoryName">Category Name <span className="text-destructive">*</span></Label>
                <Input
                  id="categoryName"
                  placeholder="Category Name"
                  className="mt-1"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  maxLength={50}
                  required
                />
                <p className="text-xs text-muted-foreground text-right mt-1">Character limit: {50 - categoryName.length}</p>
              </div>
              <div>
                <Label htmlFor="shortDescription">Short Description</Label>
                <Textarea
                  id="shortDescription"
                  placeholder="Short description..."
                  className="mt-1"
                  value={shortDescription}
                  onChange={(e) => setShortDescription(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="parentId">Parent Category</Label>
                <Select
                  value={parentId || "none"} // Ensure value is never an empty string
                  onValueChange={(value) => setParentId(value)}
                  disabled={categoriesLoading}
                >
                  <SelectTrigger id="parentId" className="mt-1">
                    <SelectValue placeholder="Select Parent Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No Parent (Main Category)</SelectItem> {/* Changed value to "none" */}
                    {parentCategoryOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {categoriesLoading && <p className="text-xs text-muted-foreground mt-1">Loading parent categories...</p>}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSaveClick}>
            {initialData ? "Save Changes" : "Create Category"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCategoryDialog;