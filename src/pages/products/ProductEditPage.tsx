"use client";

import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.jsx";
import { ArrowLeft, X, Check, Upload } from "lucide-react";
import { useProductById, useProducts, UpdateProductPayload } from "@/hooks/use-products.ts";
import { useCategories, Category } from "@/hooks/use-categories.ts";
import { showSuccess, showError, showInfo } from "@/utils/toast.js";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area.jsx";

const ProductEditPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const id = productId ? parseInt(productId) : null;
  const navigate = useNavigate();

  const { data: product, isLoading, error } = useProductById(id);
  const { updateProduct } = useProducts();
  const { categories: allCategories, isLoading: categoriesLoading } = useCategories();

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [sku, setSku] = React.useState("");
  const [price, setPrice] = React.useState<string>("");
  const [stockQuantity, setStockQuantity] = React.useState<string>("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [selectedCategoryIds, setSelectedCategoryIds] = React.useState<string[]>([]);
  const [status, setStatus] = React.useState("");
  const [condition, setCondition] = React.useState("");

  React.useEffect(() => {
    if (product) {
      setName(product.name || "");
      setDescription(product.description || "");
      setSku(product.sku || "");
      setPrice(product.price || "");
      setStockQuantity(String(product.stock_quantity) || "");
      setImageUrl(product.image_url || "");
      setSelectedCategoryIds(product.categories?.map(cat => String(cat.id)) || []);
      setStatus(product.status || "");
      setCondition(product.condition || "");
    }
  }, [product]);

  const handleSave = () => {
    if (!id) {
      showError("Product ID is missing.");
      return;
    }
    if (!name || !price || !stockQuantity) {
      showError("Product Name, Price, and Stock Quantity are required.");
      return;
    }

    const payload: UpdateProductPayload = {
      id: id,
      name: name,
      description: description,
      sku: sku,
      price: parseFloat(price),
      stock_quantity: parseInt(stockQuantity),
      image_url: imageUrl,
      category_ids: selectedCategoryIds.map(Number),
      status: status,
      condition: condition,
      // Add other fields as needed
    };

    updateProduct(payload, {
      onSuccess: () => {
        navigate(`/products/${id}`); // Go back to view page after successful update
      },
    });
  };

  const handleImageUpload = () => {
    showInfo("Image upload functionality not yet implemented.");
    // In a real app, this would open a file picker or media library
    // For now, let's simulate an image upload
    setImageUrl("https://picsum.photos/seed/edited-product-image/400/300");
  };

  if (isLoading || categoriesLoading) {
    return (
      <div className="p-4 md:p-6 text-center">
        <p>Loading product data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 md:p-6 text-center text-destructive">
        <p>Error: {error.message}</p>
        <Button asChild className="mt-4">
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="p-4 md:p-6 text-center">
        <p>Product not found for editing.</p>
        <Button asChild className="mt-4">
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to={`/products/${product.id}`}>
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Edit Product: {product.name}</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="text-destructive hover:text-destructive" asChild>
            <Link to={`/products/${product.id}`}>
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Link>
          </Button>
          <Button onClick={handleSave}>
            <Check className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-200px)]"> {/* Adjust height as needed */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pr-4"> {/* Added pr-4 for scrollbar */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>General Information</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div>
                  <Label htmlFor="name">Product Name <span className="text-destructive">*</span></Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1" required />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="mt-1" rows={5} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="sku">SKU</Label>
                    <Input id="sku" value={sku} onChange={(e) => setSku(e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="price">Price <span className="text-destructive">*</span></Label>
                    <Input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="mt-1" required />
                  </div>
                  <div>
                    <Label htmlFor="stockQuantity">Stock Quantity <span className="text-destructive">*</span></Label>
                    <Input id="stockQuantity" type="number" value={stockQuantity} onChange={(e) => setStockQuantity(e.target.value)} className="mt-1" required />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Media</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div>
                  <Label htmlFor="imageUrl">Main Image URL</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <Input id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="https://example.com/image.jpg" />
                    <Button variant="outline" onClick={handleImageUpload}>
                      <Upload className="h-4 w-4 mr-2" /> Upload
                    </Button>
                  </div>
                  {imageUrl && (
                    <img src={imageUrl} alt="Product Preview" className="mt-4 w-32 h-32 object-cover rounded-md border" />
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Categorization & Status</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div>
                  <Label htmlFor="categories">Categories</Label>
                  <Select
                    value={selectedCategoryIds.length > 0 ? selectedCategoryIds[0] : ""}
                    onValueChange={(value) => setSelectedCategoryIds(value ? [value] : [])}
                    disabled={categoriesLoading}
                  >
                    <SelectTrigger id="categories" className="mt-1">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {allCategories?.map((cat: Category) => (
                        <SelectItem key={cat.id} value={String(cat.id)}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {categoriesLoading && <p className="text-xs text-muted-foreground mt-1">Loading categories...</p>}
                </div>
                <div>
                  <Label htmlFor="status">Product Status</Label>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger id="status" className="mt-1">
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="condition">Condition</Label>
                  <Select value={condition} onValueChange={setCondition}>
                    <SelectTrigger id="condition" className="mt-1">
                      <SelectValue placeholder="Select Condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="used">Used</SelectItem>
                      <SelectItem value="refurbished">Refurbished</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  );
};

export default ProductEditPage;