"use client";

import React from "react";
import ProductListHeader from "@/components/products/ProductListHeader.jsx";
import ProductListTable from "@/components/products/ProductListTable.jsx";
import ProductListPagination from "@/components/products/ProductListPagination.jsx";
import { useProducts } from "@/hooks/use-products.js";
import { useCategories } from "@/hooks/use-categories.js";
import CreateOrderFromProductDialog from "@/components/products/CreateOrderFromProductDialog.jsx";
import { useDebounce } from "@/hooks/use-debounce.js";

const Products = () => {
  const { products, isLoading, error, deleteProduct } = useProducts();
  const { categories: productCategoriesData, isLoading: categoriesLoading } = useCategories();

  const [activeCategory, setActiveCategory] = React.useState("All products");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);
  const [quickOrderProduct, setQuickOrderProduct] = React.useState(null);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const allProductCategories = React.useMemo(() => {
    const uniqueCategories = new Set();
    if (productCategoriesData) {
      productCategoriesData.forEach(cat => uniqueCategories.add(cat.name));
    }
    return ["All products", ...Array.from(uniqueCategories)];
  }, [productCategoriesData]);

  const filteredProducts = React.useMemo(() => {
    if (!products) return [];

    return products.filter(product => {
      const matchesCategory = activeCategory === "All products" ||
                              (product.categories && product.categories.some(cat => cat.name.toLowerCase() === activeCategory.toLowerCase()));
      const matchesSearch = product.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                            (product.sku && product.sku.toLowerCase().includes(debouncedSearchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [products, activeCategory, debouncedSearchTerm]);

  // Reset to page 1 when search term or category changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearchTerm, activeCategory]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1);
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct(productId);
    }
  };

  const handleQuickOrder = (product) => {
    setQuickOrderProduct(product);
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
      <ProductListTable
        products={paginatedProducts}
        onDeleteProduct={handleDeleteProduct}
        onQuickOrder={handleQuickOrder}
      />
      <ProductListPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
        totalItems={filteredProducts.length}
      />
      <CreateOrderFromProductDialog
        isOpen={!!quickOrderProduct}
        onClose={() => setQuickOrderProduct(null)}
        product={quickOrderProduct}
      />
    </div>
  );
};

export default Products;