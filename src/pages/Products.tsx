"use client";

import React from "react";
import ProductListHeader from "@/components/products/ProductListHeader";
import ProductListTable from "@/components/products/ProductListTable";
import ProductListPagination from "@/components/products/ProductListPagination";

const Products = () => {
  return (
    <div className="p-4 md:p-6">
      <ProductListHeader />
      <ProductListTable />
      <ProductListPagination />
    </div>
  );
};

export default Products;