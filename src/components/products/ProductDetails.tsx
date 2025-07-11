"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, ChevronUp } from "lucide-react";

const ProductDetails = () => {
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
        <Button variant="outline" className="text-primary">
          <Plus className="h-4 w-4 mr-2" />
          Add a new field
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;