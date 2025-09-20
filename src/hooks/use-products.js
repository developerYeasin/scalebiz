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
  return id; // Return the id to use it in onSuccess
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
    onSuccess: (updatedProductData, variables) => {
      // Invalidate the main products list to refetch it next time it's needed.
      queryClient.invalidateQueries({ queryKey: ["products"] });

      // Immediately update the cache for the specific product that was edited.
      // This prevents the view page from needing to refetch.
      queryClient.setQueryData(["product", variables.id], updatedProductData);

      showSuccess("Product updated successfully!");
    },
    onError: (err) => {
      showError(err.message || "Failed to update product.");
    },
  });

  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: (deletedProductId) => {
      // Invalidate the main products list to ensure it's fresh.
      queryClient.invalidateQueries({ queryKey: ["products"] });

      // Remove the specific product's query from the cache.
      queryClient.removeQueries({ queryKey: ["product", deletedProductId] });

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
    isUpdating: updateProductMutation.isPending,
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