"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const ProductListHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
      <h1 className="text-2xl font-bold">Products</h1>
      <div className="flex items-center gap-2">
        <div className="relative w-full max-w-sm">
          <Input
            type="text"
            placeholder="Search products..."
            className="pl-8"
          />
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        </div>
        <Button asChild>
          <Link to="/products/add">
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductListHeader;