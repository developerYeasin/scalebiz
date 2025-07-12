"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Plus, ChevronUp } from "lucide-react";
import { showInfo } from "@/utils/toast.js";

const ProductVariants = () => {
  const handleAddVariant = () => {
    showInfo("Adding a new product variant (dummy action).");
  };

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Product Variants</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          You can add multiple variant for a single product here. Like Size, Color, and Weight etc.
        </p>
        <Button variant="outline" className="text-primary" onClick={handleAddVariant}>
          <Plus className="h-4 w-4 mr-2" />
          Add a new variant
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductVariants;