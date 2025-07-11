"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, ChevronUp } from "lucide-react";

const OrderProductsSection = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Products</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent className="text-center py-8">
        <p className="text-muted-foreground mb-4">No products have been added to the order yet</p>
        <Button variant="outline">
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </CardContent>
    </Card>
  );
};

export default OrderProductsSection;