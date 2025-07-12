"use client";

import React from "react";
import ProductListHeader from "@/components/products/ProductListHeader.jsx";
import ProductListTable from "@/components/products/ProductListTable.jsx";
import ProductListPagination from "@/components/products/ProductListPagination.jsx";

const mockProducts = [
  { id: "P001", image: "https://picsum.photos/seed/product1/40/40", name: "Torrey Three Piece", variants: 6, skuCode: "648559", price: "999", availableQuantity: -240, category: "Three Piece" },
  { id: "P002", image: "https://picsum.photos/seed/product2/40/40", name: "Lahori Three Piece", variants: 6, skuCode: "648556", price: "999", availableQuantity: -186, category: "Three Piece" },
  { id: "P003", image: "https://picsum.photos/seed/product3/40/40", name: "Iiraa Three Piece", variants: 6, skuCode: "670779", price: "999", availableQuantity: -16, category: "Three Piece" },
  { id: "P004", image: "https://picsum.photos/seed/product4/40/40", name: "Mehrish Three Piece", variants: 6, skuCode: "670775", price: "999", availableQuantity: -3, category: "Three Piece" },
  { id: "P005", image: "https://picsum.photos/seed/product5/40/40", name: "Purple cherry Three Piece", variants: 6, skuCode: "670770", price: "999", availableQuantity: -3, category: "Three Piece" },
  { id: "P006", image: "https://picsum.photos/seed/product6/40/40", name: "Olivano Three Piece", variants: 6, skuCode: "670757", price: "999", availableQuantity: -4, category: "Three Piece" },
  { id: "P007", image: "https://picsum.photos/seed/product7/40/40", name: "Noyon Tara Three Piece", variants: 6, skuCode: "605832", price: "999", availableQuantity: -9, category: "Three Piece" },
  { id: "P008", image: "https://picsum.photos/seed/product8/40/40", name: "Butterfly Three Piece", variants: 6, skuCode: "605824", price: "999", availableQuantity: -16, category: "Three Piece" },
  { id: "P009", image: "https://picsum.photos/seed/product9/40/40", name: "Bagan Bilash Three Piece", variants: 6, skuCode: "605820", price: "999", availableQuantity: -4, category: "Three Piece" },
  { id: "P010", image: "https://picsum.photos/seed/product10/40/40", name: "Rose Queen Three Piece", variants: 6, skuCode: "605811", price: "999", availableQuantity: -3, category: "Three Piece" },
  { id: "P011", image: "https://picsum.photos/seed/product11/40/40", name: "Pinkish Three Piece", variants: 6, skuCode: "605808", price: "999", availableQuantity: -3, category: "Three Piece" },
  { id: "P012", image: "https://picsum.photos/seed/product12/40/40", name: "Lahore Three Piece", variants: 6, skuCode: "605805", price: "999", availableQuantity: -12, category: "Three Piece" },
  { id: "P013", image: "https://picsum.photos/seed/product13/40/40", name: "Orange Bomb Three Piece", variants: 6, skuCode: "605801", price: "999", availableQuantity: -4, category: "Three Piece" },
  { id: "P014", image: "https://picsum.photos/seed/product14/40/40", name: "Stripa Three Piece", variants: 6, skuCode: "605799", price: "999", availableQuantity: -5, category: "Three Piece" },
  { id: "P015", image: "https://picsum.photos/seed/product15/40/40", name: "RoseQueen Three Piece", variants: 6, skuCode: "603300", price: "999", availableQuantity: -2, category: "Three Piece" },
  { id: "P016", image: "https://picsum.photos/seed/product16/40/40", name: "Torrey Three Piece", variants: 6, skuCode: "605829", price: "999", availableQuantity: -16, category: "Three Piece" },
  { id: "P017", image: "https://picsum.photos/seed/product17/40/40", name: "Inner Item A", variants: 2, skuCode: "INNER001", price: "250", availableQuantity: 50, category: "Inner item" },
  { id: "P018", image: "https://picsum.photos/seed/product18/40/40", name: "Borka Style X", variants: 3, skuCode: "BORKA001", price: "1500", availableQuantity: 30, category: "Borka" },
  { id: "P019", image: "https://picsum.photos/seed/product19/40/40", name: "Gown Elegance", variants: 4, skuCode: "GOWN001", price: "2200", availableQuantity: 25, category: "Gown" },
  { id: "P020", image: "https://picsum.photos/seed/product20/40/40", name: "Overcoat Winter", variants: 2, skuCode: "OVER001", price: "3000", availableQuantity: 10, category: "Overcoat" },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = React.useState("All products");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);

  const filteredProducts = mockProducts.filter(product => {
    const matchesCategory = activeCategory === "All products" || product.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.skuCode.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

  return (
    <div className="p-4 md:p-6">
      <ProductListHeader
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        totalProducts={filteredProducts.length}
      />
      <ProductListTable products={paginatedProducts} />
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