"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Plus, ChevronUp } from "lucide-react";
import { toast } from "@/utils/toast.js";

const ProductDetails = () => {
  const handleAddDetailField = () => {
    toast.info("Adding a new product detail field (dummy action).");
  };

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Product Details</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          You can add multiple product details for a single product here. Like Brand, Model, Serial Number, Fabric Type, and EMI etc.
        </p>
        <Button variant="outline" className="text-primary" onClick={handleAddDetailField}>
          <Plus className="h-4 w-4 mr-2" />
          Add a new field
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;