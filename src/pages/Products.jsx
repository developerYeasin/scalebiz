"use client";

import React from "react";
import ProductListHeader from "@/components/products/ProductListHeader.jsx";
import ProductListTable from "@/components/products/ProductListTable.jsx";
import ProductListPagination from "@/components/products/ProductListPagination.jsx";

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