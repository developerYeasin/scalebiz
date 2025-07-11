"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { X, Save } from "lucide-react";

const ProductFormHeader = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold">Add Product</h1>
      <div className="flex gap-2">
        <Button variant="outline" className="text-destructive hover:text-destructive">
          <X className="h-4 w-4 mr-2" />
          Discard
        </Button>
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Save
        </Button>
      </div>
    </div>
  );
};

export default ProductFormHeader;