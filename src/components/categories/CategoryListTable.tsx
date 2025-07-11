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
import { Image, Eye, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Category {
  id: string;
  name: string;
  totalSubcategory: number;
}

const mockCategories: Category[] = [
  { id: "C001", name: "Inner Item", totalSubcategory: 0 },
  { id: "C002", name: "Borka", totalSubcategory: 0 },
  { id: "C003", name: "Gown", totalSubcategory: 0 },
  { id: "C004", name: "Overcoat", totalSubcategory: 0 },
  { id: "C005", name: "Tops", totalSubcategory: 0 },
  { id: "C006", name: "co ords", totalSubcategory: 0 },
  { id: "C007", name: "Saree", totalSubcategory: 0 },
  { id: "C008", name: "One Piece", totalSubcategory: 0 },
  { id: "C009", name: "Two Piece", totalSubcategory: 0 },
  { id: "C010", name: "Three Piece", totalSubcategory: 0 },
  { id: "C011", name: "Another Category", totalSubcategory: 5 },
];

const CategoryListTable = () => {
  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px] text-center">
              {/* Placeholder for image icon */}
              <Image className="h-5 w-5 text-muted-foreground mx-auto" />
            </TableHead>
            <TableHead>Categories</TableHead>
            <TableHead>Total Subcategory</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockCategories.map((category) => (
            <TableRow key={category.id}>
              <TableCell className="text-center">
                {/* Placeholder for category image */}
                <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center mx-auto">
                  <Image className="h-4 w-4 text-muted-foreground" />
                </div>
              </TableCell>
              <TableCell className="font-medium">{category.name}</TableCell>
              <TableCell>{category.totalSubcategory}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end space-x-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
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

export default CategoryListTable;