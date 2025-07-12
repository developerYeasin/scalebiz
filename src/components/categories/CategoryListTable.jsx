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
import { Image, Eye, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { showInfo, showError } from "@/utils/toast.js";

const mockCategories = [
  { id: "C001", name: "Inner Item", totalSubcategory: 0, image: "https://picsum.photos/seed/category1/40/40" },
  { id: "C002", name: "Borka", totalSubcategory: 0, image: "https://picsum.photos/seed/category2/40/40" },
  { id: "C003", name: "Gown", totalSubcategory: 0, image: "https://picsum.photos/seed/category3/40/40" },
  { id: "C004", name: "Overcoat", totalSubcategory: 0, image: "https://picsum.photos/seed/category4/40/40" },
  { id: "C005", name: "Tops", totalSubcategory: 0, image: "https://picsum.photos/seed/category5/40/40" },
  { id: "C006", name: "co ords", totalSubcategory: 0, image: "https://picsum.photos/seed/category6/40/40" },
  { id: "C007", name: "Saree", totalSubcategory: 0, image: "https://picsum.photos/seed/category7/40/40" },
  { id: "C008", name: "One Piece", totalSubcategory: 0, image: "https://picsum.photos/seed/category8/40/40" },
  { id: "C009", name: "Two Piece", totalSubcategory: 0, image: "https://picsum.photos/seed/category9/40/40" },
  { id: "C010", name: "Three Piece", totalSubcategory: 0, image: "https://picsum.photos/seed/category10/40/40" },
  { id: "C011", name: "Another Category", totalSubcategory: 5, image: "https://picsum.photos/seed/category11/40/40" },
];

const CategoryListTable = () => {
  const handleViewCategory = (categoryId) => {
    showInfo(`Viewing category ${categoryId}`);
  };

  const handleEditCategory = (categoryId) => {
    showInfo(`Editing category ${categoryId}`);
  };

  const handleDeleteCategory = (categoryId) => {
    showError(`Deleting category ${categoryId}`);
  };

  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px] text-center">
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
                <div className="w-8 h-8 rounded-md flex items-center justify-center mx-auto overflow-hidden">
                  <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                </div>
              </TableCell>
              <TableCell className="font-medium">{category.name}</TableCell>
              <TableCell>{category.totalSubcategory}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end space-x-2">
                  <Button variant="ghost" size="icon" onClick={() => handleViewCategory(category.id)}>
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleEditCategory(category.id)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDeleteCategory(category.id)}>
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