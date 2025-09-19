"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.jsx";
import { ChevronUp } from "lucide-react";
import { showInfo } from "@/utils/toast.js";
import { Category } from "@/hooks/use-categories.ts"; // Import Category type

interface ProductSidebarProps {
  selectedCategoryIds: string[];
  setSelectedCategoryIds: (ids: string[]) => void;
  brandName: string;
  setBrandName: (name: string) => void;
  condition: string;
  setCondition: (condition: string) => void;
  productStatus: string;
  setProductStatus: (status: string) => void;
  allCategories: Category[] | undefined;
  categoriesLoading: boolean;
}

const ProductSidebar = ({
  selectedCategoryIds,
  setSelectedCategoryIds,
  brandName,
  setBrandName,
  condition,
  setCondition,
  productStatus,
  setProductStatus,
  allCategories,
  categoriesLoading,
}: ProductSidebarProps) => {
  const handleAssignCategory = () => {
    showInfo("Assigning category (dummy action).");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Category</CardTitle>
          <ChevronUp className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            {selectedCategoryIds.length > 0 && allCategories
              ? `Assigned: ${allCategories.find(cat => String(cat.id) === selectedCategoryIds[0])?.name}`
              : "No assigned category found"}
          </p>
          <Select
            value={selectedCategoryIds.length > 0 ? selectedCategoryIds[0] : ""}
            onValueChange={(value) => setSelectedCategoryIds(value ? [value] : [])}
            disabled={categoriesLoading}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {allCategories?.map((cat) => (
                <SelectItem key={cat.id} value={String(cat.id)}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {categoriesLoading && <p className="text-xs text-muted-foreground mt-1">Loading categories...</p>}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Brand (SEO & Data Feed)</CardTitle>
          <ChevronUp className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Brand Name"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Condition (SEO & Data Feed)</CardTitle>
          <ChevronUp className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <Select value={condition} onValueChange={setCondition}>
            <SelectTrigger>
              <SelectValue placeholder="Select Condition" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="used">Used</SelectItem>
              <SelectItem value="refurbished">Refurbished</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Product Status</CardTitle>
          <ChevronUp className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <Select value={productStatus} onValueChange={setProductStatus}>
            <SelectTrigger>
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductSidebar;