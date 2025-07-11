"use client";

import React from "react";
import CategoryListHeader from "@/components/categories/CategoryListHeader";
import CategoryListTable from "@/components/categories/CategoryListTable";
import CategoryListPagination from "@/components/categories/CategoryListPagination";
import CreateCategoryDialog from "@/components/categories/CreateCategoryDialog";

const Categories = () => {
  const [isCreateCategoryDialogOpen, setIsCreateCategoryDialogOpen] = React.useState(false);

  const handleAddCategoryClick = () => {
    setIsCreateCategoryDialogOpen(true);
  };

  const handleCloseCreateCategoryDialog = () => {
    setIsCreateCategoryDialogOpen(false);
  };

  return (
    <div className="p-4 md:p-6">
      <CategoryListHeader onAddCategoryClick={handleAddCategoryClick} />
      <CategoryListTable />
      <CategoryListPagination />
      <CreateCategoryDialog
        isOpen={isCreateCategoryDialogOpen}
        onClose={handleCloseCreateCategoryDialog}
      />
    </div>
  );
};

export default Categories;