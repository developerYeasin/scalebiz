import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/utils/api.js";
import { showSuccess, showError } from "@/utils/toast.js";

// Mock data for categories
const mockCategories = [
  { id: 1, name: "Electronics", description: "Electronic gadgets and devices", image_url: "https://picsum.photos/seed/electronics/40x40", is_active: 1, is_featured: 0, sort_order: 1, parent_id: null },
  { id: 2, name: "Clothing", description: "Apparel for men and women", image_url: "https://picsum.photos/seed/clothing/40x40", is_active: 1, is_featured: 0, sort_order: 2, parent_id: null },
  { id: 3, name: "Home & Kitchen", description: "Items for home and kitchen", image_url: "https://picsum.photos/seed/homekitchen/40x40", is_active: 1, is_featured: 0, sort_order: 3, parent_id: null },
  { id: 4, name: "Smartphones", description: "Mobile phones and accessories", image_url: "https://picsum.photos/seed/smartphones/40x40", is_active: 1, is_featured: 0, sort_order: 1, parent_id: 1 },
  { id: 5, name: "Laptops", description: "Computers and notebooks", image_url: "https://picsum.photos/seed/laptops/40x40", is_active: 1, is_featured: 0, sort_order: 2, parent_id: 1 },
  { id: 6, name: "Men's Fashion", description: "Clothing for men", image_url: "https://picsum.photos/seed/mensfashion/40x40", is_active: 1, is_featured: 0, sort_order: 1, parent_id: 2 },
  { id: 7, name: "Women's Fashion", description: "Clothing for women", image_url: "https://picsum.photos/seed/womensfashion/40x40", is_active: 1, is_featured: 0, sort_order: 2, parent_id: 2 },
];

const fetchCategories = async () => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockCategories;
};

const fetchCategoryById = async (id) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockCategories.find(cat => cat.id === id);
};

const createCategory = async (newCategory) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  const newId = Math.max(...mockCategories.map(cat => cat.id)) + 1;
  const categoryWithId = { ...newCategory, id: newId };
  mockCategories.push(categoryWithId); // In a real app, this would be a backend call
  return categoryWithId;
};

const updateCategory = async (updatedCategory) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  const index = mockCategories.findIndex(cat => cat.id === updatedCategory.id);
  if (index !== -1) {
    mockCategories[index] = { ...mockCategories[index], ...updatedCategory }; // In a real app, this would be a backend call
    return mockCategories[index];
  }
  throw new Error("Category not found for update.");
};

const deleteCategory = async (id) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  const initialLength = mockCategories.length;
  mockCategories = mockCategories.filter(cat => cat.id !== id); // In a real app, this would be a backend call
  if (mockCategories.length === initialLength) {
    throw new Error("Category not found for deletion.");
  }
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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      showSuccess("Category updated successfully!");
    },
    onError: (err) => {
      showError(err.message || "Failed to update category.");
    },
  });

  const deleteCategoryMutation = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
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