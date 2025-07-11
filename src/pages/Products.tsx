"use client";

import React from "react";
import ProductFormHeader from "@/components/products/ProductFormHeader";
import ProductGeneralInformation from "@/components/products/ProductGeneralInformation";
import ProductMedia from "@/components/products/ProductMedia";
import ProductPricing from "@/components/products/ProductPricing";
import ProductInventory from "@/components/products/ProductInventory";
import ProductShipping from "@/components/products/ProductShipping";
import ProductVariants from "@/components/products/ProductVariants";
import ProductDetails from "@/components/products/ProductDetails";
import ProductSidebar from "@/components/products/ProductSidebar";

const Products = () => {
  return (
    <div className="p-4 md:p-6">
      <ProductFormHeader />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProductGeneralInformation />
          <ProductMedia />
          <ProductPricing />
          <ProductInventory />
          <ProductShipping />
          <ProductVariants />
          <ProductDetails />
        </div>
        <div className="lg:col-span-1">
          <ProductSidebar />
        </div>
      </div>
    </div>
  );
};

export default Products;