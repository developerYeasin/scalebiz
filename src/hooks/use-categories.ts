import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/utils/api";
import { showSuccess, showError } from "@/utils/toast";

export interface Category {
  id: number;
  store_id: number;
  name: string;
  slug: string;
  image_url: string | null;
  created_at: string;
  updated_at: string;
  parent_id: number | null;
  description: string | null;
  is_active: number;
  is_featured: number;
  sort_order: number;
  deleted_at: string | null;
  sub_categories?: Category[];
}

export interface CreateCategoryPayload {
  name: string;
  description?: string | null;
  parent_id?: number | null;
  is_active?: number;
  is_featured?: number;
  sort_order?: number;
  image_url?: string | null; // For banner/square images
}

export interface UpdateCategoryPayload extends CreateCategoryPayload {
  id: number;
}

const fetchCategories = async (): Promise<Category[]> => {
  const response = await api.get("/categories");
  return response.data.data.categories;
};

const fetchCategoryById = async (id: number): Promise<Category> => {
  const response = await api.get(`/categories/${id}`);
  return response.data.data.category;
};

const createCategory = async (newCategory: CreateCategoryPayload): Promise<Category> => {
  const response = await api.post("/categories", newCategory);
  return response.data.data.category;
};

const updateCategory = async (updatedCategory: UpdateCategoryPayload): Promise<Category> => {
  const { id, ...payload } = updatedCategory;
  const response = await api.put(`/categories/${id}`, payload);
  return response.data.data.category;
};

const deleteCategory = async (id: number): Promise<void> => {
  await api.delete(`/categories/${id}`);
};

export const useCategories = () => {
  const queryClient = useQueryClient();

  const { data: categories, isLoading, error } = useQuery<Category[], Error>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const createCategoryMutation = useMutation<Category, Error, CreateCategoryPayload>({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      showSuccess("Category created successfully!");
    },
    onError: (err) => {
      showError(err.message || "Failed to create category.");
    },
  });

  const updateCategoryMutation = useMutation<Category, Error, UpdateCategoryPayload>({
    mutationFn: updateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      showSuccess("Category updated successfully!");
    },
    onError: (err) => {
      showError(err.message || "Failed to update category.");
    },
  });

  const deleteCategoryMutation = useMutation<void, Error, number>({
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

export const useCategoryById = (id: number | null) => {
  return useQuery<Category, Error>({
    queryKey: ["category", id],
    queryFn: () => fetchCategoryById(id as number),
    enabled: !!id, // Only run the query if id is available
  });
};