"use client";

import React from "react";
import { Button } from "@/components/ui/button.jsx";
import { X, Save } from "lucide-react";
import { showInfo } from "@/utils/toast.js";

const ProductFormHeader = ({ onDiscard, onSave, isSaving }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold">Add Product</h1>
      <div className="flex gap-2">
        <Button variant="outline" className="text-destructive hover:text-destructive" onClick={onDiscard} disabled={isSaving}>
          <X className="h-4 w-4 mr-2" />
          Discard
        </Button>
        <Button onClick={onSave} disabled={isSaving}>
          <Save className="h-4 w-4 mr-2" />
          {isSaving ? "Saving..." : "Save"}
        </Button>
      </div>
    </div>
  );
};

export default ProductFormHeader;