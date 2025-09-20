import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/utils/api.js";
import { showSuccess, showError } from "@/utils/toast.js";

const fetchCategories = async () => {
  const response = await api.get("/categories");
  return response.data.data.categories;
};

const fetchCategoryById = async (id) => {
  const response = await api.get(`/categories/${id}`);
  return response.data.data.category;
};

const createCategory = async (newCategory) => {
  const response = await api.post("/categories", newCategory);
  return response.data.data.category;
};

const updateCategory = async (updatedCategory) => {
  const { id, ...payload } = updatedCategory;
  const response = await api.put(`/categories/${id}`, payload);
  return response.data.data.category;
};

const deleteCategory = async (id) => {
  await api.delete(`/categories/${id}`);
  return id;
};

export const useCategories = () => {
  const queryClient = useQueryClient();

  const { data: categories, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const createCategoryMutation = useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      showSuccess("Category created successfully!");
    },
    onError: (err) => {
      showError(err.message || "Failed to create category.");
    },
  });

  const updateCategoryMutation = useMutation({
    mutationFn: updateCategory,
    onSuccess: (updatedCategoryData, variables) => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      queryClient.setQueryData(["category", variables.id], updatedCategoryData);
      showSuccess("Category updated successfully!");
    },
    onError: (err) => {
      showError(err.message || "Failed to update category.");
    },
  });

  const deleteCategoryMutation = useMutation({
    mutationFn: deleteCategory,
    onSuccess: (deletedCategoryId) => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      queryClient.removeQueries({ queryKey: ["category", deletedCategoryId] });
      showSuccess("Category deleted successfully!");
    },
    onError: (err) => {
      showError(err.message || "Failed to delete category.");
    },
  });

  return {
    categories,
    isLoading,
    error,
    createCategory: createCategoryMutation.mutate,
    updateCategory: updateCategoryMutation.mutate,
    deleteCategory: deleteCategoryMutation.mutate,
  };
};

export const useCategoryById = (id) => {
  return useQuery({
    queryKey: ["category", id],
    queryFn: () => fetchCategoryById(id),
    enabled: !!id,
  });
};