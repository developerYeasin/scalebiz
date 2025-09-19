import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/utils/api";
import { showSuccess, showError } from "@/utils/toast";

export interface CategoryInProduct {
  id: number;
  name: string;
  slug: string;
  image_url: string | null;
  parent_id: number | null;
  description: string | null;
  is_active: boolean;
  is_featured: boolean;
  sort_order: number;
}

export interface Product {
  id: number;
  store_id: number;
  brand_id: number | null;
  sku: string | null;
  barcode: string | null;
  name: string;
  slug: string | null;
  description: string | null;
  status: string;
  product_type: string;
  price: string; // API returns string, convert to number for calculations if needed
  regular_price: string | null;
  cost_price: string | null;
  image_url: string | null;
  hover_image_url: string | null;
  video_url: string | null;
  gender: string | null;
  stock_quantity: number;
  track_inventory: number;
  created_at: string;
  updated_at: string;
  condition: string | null;
  categories: CategoryInProduct[];
}

export interface CreateProductPayload {
  brand_id?: number | null;
  sku?: string | null;
  barcode?: string | null;
  name: string;
  slug?: string | null;
  description?: string | null;
  status?: string;
  product_type?: string;
  price: number; // Send as number
  regular_price?: number | null;
  cost_price?: number | null;
  image_url?: string | null;
  hover_image_url?: string | null;
  video_url?: string | null;
  gender?: string | null;
  stock_quantity?: number;
  track_inventory?: number;
  condition?: string | null;
  category_ids?: number[];
}

export interface UpdateProductPayload extends CreateProductPayload {
  id: number;
}

const fetchProducts = async (): Promise<Product[]> => {
  const response = await api.get("/products");
  return response.data.data.products;
};

const fetchProductById = async (id: number): Promise<Product> => {
  const response = await api.get(`/products/${id}`);
  return response.data.data.product;
};

const createProduct = async (newProduct: CreateProductPayload): Promise<Product> => {
  const response = await api.post("/products", newProduct);
  return response.data.data.product;
};

const updateProduct = async (updatedProduct: UpdateProductPayload): Promise<Product> => {
  const { id, ...payload } = updatedProduct;
  const response = await api.put(`/products/${id}`, payload);
  return response.data.data.product;
};

const deleteProduct = async (id: number): Promise<void> => {
  await api.delete(`/products/${id}`);
};

export const useProducts = () => {
  const queryClient = useQueryClient();

  const { data: products, isLoading, error } = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const createProductMutation = useMutation<Product, Error, CreateProductPayload>({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      showSuccess("Product created successfully!");
    },
    onError: (err) => {
      showError(err.message || "Failed to create product.");
    },
  });

  const updateProductMutation = useMutation<Product, Error, UpdateProductPayload>({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      showSuccess("Product updated successfully!");
    },
    onError: (err) => {
      showError(err.message || "Failed to update product.");
    },
  });

  const deleteProductMutation = useMutation<void, Error, number>({
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
    updateProduct: updateProductMutation.mutate,
    deleteProduct: deleteProductMutation.mutate,
  };
};

export const useProductById = (id: number | null) => {
  return useQuery<Product, Error>({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id as number),
    enabled: !!id, // Only run the query if id is available
  });
};