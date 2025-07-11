"use client";

import React from "react";
import ProductFormHeader from "@/components/products/ProductFormHeader.jsx";
import ProductGeneralInformation from "@/components/products/ProductGeneralInformation.jsx";
import ProductMedia from "@/components/products/ProductMedia.jsx";
import ProductPricing from "@/components/products/ProductPricing.jsx";
import ProductInventory from "@/components/products/ProductInventory.jsx";
import ProductShipping from "@/components/products/ProductShipping.jsx";
import ProductVariants from "@/components/products/ProductVariants.jsx";
import ProductDetails from "@/components/products/ProductDetails.jsx";
import ProductSidebar from "@/components/products/ProductSidebar.jsx";

const AddProduct = () => {
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

export default AddProduct;