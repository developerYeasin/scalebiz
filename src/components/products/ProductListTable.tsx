"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  stock: number;
  status: "ACTIVE" | "DRAFT" | "ARCHIVED";
}

const mockProducts: Product[] = [
  { id: "P001", name: "Wireless Bluetooth Earbuds", category: "Electronics", price: "৳ 1200.00", stock: 150, status: "ACTIVE" },
  { id: "P002", name: "Organic Green Tea (200g)", category: "Groceries", price: "৳ 350.00", stock: 50, status: "ACTIVE" },
  { id: "P003", name: "Men's Casual T-Shirt", category: "Apparel", price: "৳ 800.00", stock: 200, status: "DRAFT" },
  { id: "P004", name: "Stainless Steel Water Bottle", category: "Home Goods", price: "৳ 600.00", stock: 80, status: "ACTIVE" },
  { id: "P005", name: "Portable Power Bank 10000mAh", category: "Electronics", price: "৳ 1800.00", stock: 30, status: "ARCHIVED" },
  { id: "P006", name: "Yoga Mat (Blue)", category: "Sports & Outdoors", price: "৳ 950.00", stock: 100, status: "ACTIVE" },
  { id: "P007", name: "Digital Camera DSLR", category: "Electronics", price: "৳ 45000.00", stock: 10, status: "ACTIVE" },
  { id: "P008", name: "Children's Story Book Set", category: "Books", price: "৳ 750.00", stock: 120, status: "DRAFT" },
  { id: "P009", name: "Smart LED TV 55 inch", category: "Electronics", price: "৳ 65000.00", stock: 25, status: "ACTIVE" },
  { id:10, name: "Gaming Mouse", category: "Electronics", price: "৳ 2500.00", stock: 75, status: "ACTIVE" },
];

const ProductListTable = () => {
  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px] text-center">
              <Checkbox />
            </TableHead>
            <TableHead>Product ID</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="text-center">
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium">{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>
                <Badge variant={product.status === "ACTIVE" ? "default" : "secondary"}>
                  {product.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductListTable;