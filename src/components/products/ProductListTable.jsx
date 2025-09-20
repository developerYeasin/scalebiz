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
import { Eye, Pencil, Trash2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { Link } from "react-router-dom";

const ProductListTable = ({ products, onDeleteProduct, onQuickOrder }) => {
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
                  <img src={product.image_url || "https://via.placeholder.com/40x40?text=No+Image"} alt={product.name} className="h-10 w-10 rounded-md object-cover" />
                  <div>
                    <div className="flex items-center gap-1">
                      <span>{product.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.categories && product.categories.length > 0 ? product.categories[0].name : "N/A"}
                    </span>
                  </div>
                </TableCell>
                <TableCell>{product.sku || "N/A"}</TableCell>
                <TableCell>৳ {parseFloat(product.price).toFixed(2)}</TableCell>
                <TableCell>{product.stock_quantity}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <Button variant="ghost" size="icon" asChild>
                      <Link to={`/products/${product.id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <Link to={`/products/${product.id}/edit`}>
                        <Pencil className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => onDeleteProduct(product.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white" onClick={() => onQuickOrder(product)}>
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