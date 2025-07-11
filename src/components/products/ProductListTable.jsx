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

const mockProducts = [
  { id: "P001", image: "https://via.placeholder.com/40", name: "Torrey Three Piece", variants: 6, skuCode: "648559", price: "999", availableQuantity: -240 },
  { id: "P002", image: "https://via.placeholder.com/40", name: "Lahori Three Piece", variants: 6, skuCode: "648556", price: "999", availableQuantity: -186 },
  { id: "P003", image: "https://via.placeholder.com/40", name: "Iiraa Three Piece", variants: 6, skuCode: "670779", price: "999", availableQuantity: -16 },
  { id: "P004", image: "https://via.placeholder.com/40", name: "Mehrish Three Piece", variants: 6, skuCode: "670775", price: "999", availableQuantity: -3 },
  { id: "P005", image: "https://via.placeholder.com/40", name: "Purple cherry Three Piece", variants: 6, skuCode: "670770", price: "999", availableQuantity: -3 },
  { id: "P006", image: "https://via.placeholder.com/40", name: "Olivano Three Piece", variants: 6, skuCode: "670757", price: "999", availableQuantity: -4 },
  { id: "P007", image: "https://via.placeholder.com/40", name: "Noyon Tara Three Piece", variants: 6, skuCode: "605832", price: "999", availableQuantity: -9 },
  { id: "P008", image: "https://via.placeholder.com/40", name: "Butterfly Three Piece", variants: 6, skuCode: "605824", price: "999", availableQuantity: -16 },
  { id: "P009", image: "https://via.placeholder.com/40", name: "Bagan Bilash Three Piece", variants: 6, skuCode: "605820", price: "999", availableQuantity: -4 },
  { id: "P010", image: "https://via.placeholder.com/40", name: "Rose Queen Three Piece", variants: 6, skuCode: "605811", price: "999", availableQuantity: -3 },
  { id: "P011", image: "https://via.placeholder.com/40", name: "Pinkish Three Piece", variants: 6, skuCode: "605808", price: "999", availableQuantity: -3 },
  { id: "P012", image: "https://via.placeholder.com/40", name: "Lahore Three Piece", variants: 6, skuCode: "605805", price: "999", availableQuantity: -12 },
  { id: "P013", image: "https://via.placeholder.com/40", name: "Orange Bomb Three Piece", variants: 6, skuCode: "605801", price: "999", availableQuantity: -4 },
  { id: "P014", image: "https://via.placeholder.com/40", name: "Stripa Three Piece", variants: 6, skuCode: "605799", price: "999", availableQuantity: -5 },
  { id: "P015", image: "https://via.placeholder.com/40", name: "RoseQueen Three Piece", variants: 6, skuCode: "603300", price: "999", availableQuantity: -2 },
  { id: "P016", image: "https://via.placeholder.com/40", name: "Torrey Three Piece", variants: 6, skuCode: "605829", price: "999", availableQuantity: -16 },
];

const ProductListTable = () => {
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
          {mockProducts.map((product) => (
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
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to order
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductListTable;