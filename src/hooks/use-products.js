import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/utils/api.js";
import { showSuccess, showError } from "@/utils/toast.js";

const fetchProducts = async () => {
  const response = await api.get("/products");
  return response.data.data.products;
};

const fetchProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data.data.product;
};

const createProduct = async (newProduct) => {
  const response = await api.post("/products", newProduct);
  return response.data.data.product;
};

const updateProduct = async (updatedProduct) => {
  const { id, ...payload } = updatedProduct;
  const response = await api.put(`/products/${id}`, payload);
  return response.data.data.product;
};

const deleteProduct = async (id) => {
  await api.delete(`/products/${id}`);
};

export const useProducts = () => {
  const queryClient = useQueryClient();

  const { data: products, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const createProductMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      showSuccess("Product created successfully!");
    },
    onError: (err) => {
      showError(err.message || "Failed to create product.");
    },
  });

  const updateProductMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      showSuccess("Product updated successfully!");
    },
    onError: (err) => {
      showError(err.message || "Failed to update product.");
    },
  });

  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      showSuccess("Product deleted successfully!");
    },
    onError: (err) => {
      showError(err.message || "Failed to delete product.");
    },
  });

  return {
    products,
    isLoading,
    error,
    createProduct: createProductMutation.mutate,
    isCreating: createProductMutation.isPending,
    updateProduct: updateProductMutation.mutate,
    isUpdating: updateProductMutation.isPending, // Exposed for use in components
    deleteProduct: deleteProductMutation.mutate,
  };
};

export const useProductById = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    enabled: !!id,
  });
};