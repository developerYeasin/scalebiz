"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.jsx";
import { ChevronUp } from "lucide-react";

const ProductSidebar = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Category</CardTitle>
          <ChevronUp className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">No assigned category found</p>
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            Assign category
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Brand (SEO & Data Feed)</CardTitle>
          <ChevronUp className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <Input placeholder="Brand Name" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Condition (SEO & Data Feed)</CardTitle>
          <ChevronUp className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <Select defaultValue="New">
            <SelectTrigger>
              <SelectValue placeholder="Select Condition" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="New">New</SelectItem>
              <SelectItem value="Used">Used</SelectItem>
              <SelectItem value="Refurbished">Refurbished</SelectItem>
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
          <Select defaultValue="ACTIVE">
            <SelectTrigger>
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ACTIVE">ACTIVE</SelectItem>
              <SelectItem value="DRAFT">DRAFT</SelectItem>
              <SelectItem value="ARCHIVED">ARCHIVED</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductSidebar;