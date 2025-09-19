"use client";

import React from "react";
import ProductListHeader from "@/components/products/ProductListHeader.tsx";
import ProductListTable from "@/components/products/ProductListTable.tsx";
import ProductListPagination from "@/components/products/ProductListPagination.tsx";
import { useProducts } from "@/hooks/use-products.ts"; // Import the new hook
import { useCategories } from "@/hooks/use-categories.ts"; // Import useCategories for filtering

const Products = () => {
  const { products, isLoading, error, deleteProduct } = useProducts();
  const { categories: productCategoriesData, isLoading: categoriesLoading } = useCategories();

  const [activeCategory, setActiveCategory] = React.useState("All products");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);

  const allProductCategories = React.useMemo(() => {
    const uniqueCategories = new Set<string>();
    if (productCategoriesData) {
      productCategoriesData.forEach(cat => uniqueCategories.add(cat.name));
    }
    return ["All products", ...Array.from(uniqueCategories)];
  }, [productCategoriesData]);

  const filteredProducts = React.useMemo(() => {
    if (!products) return [];

    return products.filter(product => {
      const matchesCategory = activeCategory === "All products" ||
                              product.categories.some(cat => cat.name.toLowerCase() === activeCategory.toLowerCase());
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            (product.sku && product.sku.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [products, activeCategory, searchTerm]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1); // Reset to first page when items per page changes
  };

  const handleDeleteProduct = (productId: number) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct(productId);
    }
  };

  if (isLoading || categoriesLoading) {
    return <div className="p-4 md:p-6 text-center">Loading products...</div>;
  }

  if (error) {
    return <div className="p-4 md:p-6 text-center text-destructive">Error: {error.message}</div>;
  }

  return (
    <div className="p-4 md:p-6">
      <ProductListHeader
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        totalProducts={filteredProducts.length}
        productCategories={allProductCategories}
      />
      <ProductListTable products={paginatedProducts} onDeleteProduct={handleDeleteProduct} />
      <ProductListPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
        totalItems={filteredProducts.length}
      />
    </div>
  );
};

export default Products;