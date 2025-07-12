"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.jsx";
import { Eye, Pencil, Trash2, ShoppingCart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { toast } from "@/utils/toast.js";

const ProductListTable = ({ products }) => {
  const handleViewProduct = (productId) => {
    toast.info(`Viewing product ${productId}`);
  };

  const handleEditProduct = (productId) => {
    toast.info(`Editing product ${productId}`);
  };

  const handleDeleteProduct = (productId) => {
    toast.error(`Deleting product ${productId}`);
  };

  const handleAddToOrder = (productName) => {
    toast.success(`Added ${productName} to order!`);
  };

  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>SKU/ Product Code</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Available Quantity</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                No products found.
              </TableCell>
            </TableRow>
          ) : (
            products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium flex items-center gap-2">
                  <img src={product.image} alt={product.name} className="h-10 w-10 rounded-md object-cover" />
                  <div>
                    <div className="flex items-center gap-1">
                      <span>{product.name}</span>
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <span className="text-sm text-muted-foreground">{product.variants} variants</span>
                  </div>
                </TableCell>
                <TableCell>{product.skuCode}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.availableQuantity}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <Button variant="ghost" size="icon" onClick={() => handleViewProduct(product.id)}>
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleEditProduct(product.id)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDeleteProduct(product.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white" onClick={() => handleAddToOrder(product.name)}>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to order
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductListTable;