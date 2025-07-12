"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area.jsx";
import { showSuccess, showError } from "@/utils/toast.js";

const mockProducts = [
  { id: "P001", name: "Torrey Three Piece", price: 999, availableQuantity: 10 },
  { id: "P002", name: "Lahori Three Piece", price: 999, availableQuantity: 5 },
  { id: "P003", name: "Iiraa Three Piece", price: 1149, availableQuantity: 20 },
  { id: "P004", name: "Mehrish Three Piece", price: 1149, availableQuantity: 15 },
  { id: "P005", name: "Purple cherry Three Piece", price: 1079, availableQuantity: 8 },
  { id: "P006", name: "Olivano Three Piece", price: 1149, availableQuantity: 12 },
  { id: "P007", name: "Noyon Tara Three Piece", price: 999, availableQuantity: 3 },
  { id: "P008", name: "Butterfly Three Piece", price: 999, availableQuantity: 7 },
  { id: "P009", name: "Bagan Bilash Three Piece", price: 1149, availableQuantity: 18 },
  { id: "P010", name: "Rose Queen Three Piece", price: 1079, availableQuantity: 6 },
];

const AddProductToOrderDialog = ({ isOpen, onClose, onAddProduct }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [quantities, setQuantities] = React.useState({});

  const filteredProducts = mockProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleQuantityChange = (productId, value) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(0, Number(value))
    }));
  };

  const handleAddSelectedProducts = () => {
    const productsToAdd = filteredProducts.map(product => ({
      ...product,
      quantity: quantities[product.id] || 0
    })).filter(product => product.quantity > 0);

    productsToAdd.forEach(product => onAddProduct(product));
    setQuantities({}); // Reset quantities
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Add Products to Order</DialogTitle>
        </DialogHeader>
        <div className="relative mb-4">
          <Input
            type="text"
            placeholder="Search products by name or ID..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        </div>
        <ScrollArea className="flex-1 pr-4">
          <div className="grid gap-4">
            {filteredProducts.length === 0 ? (
              <p className="text-center text-muted-foreground">No products found.</p>
            ) : (
              filteredProducts.map((product) => (
                <div key={product.id} className="flex items-center justify-between border p-3 rounded-md">
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">ID: {product.id} | Price: ৳ {product.price.toFixed(2)} | Stock: {product.availableQuantity}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Label htmlFor={`quantity-${product.id}`} className="sr-only">Quantity</Label>
                    <Input
                      id={`quantity-${product.id}`}
                      type="number"
                      min="0"
                      max={product.availableQuantity}
                      value={quantities[product.id] || 0}
                      onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                      className="w-20 text-center"
                    />
                    <Button
                      size="sm"
                      onClick={() => onAddProduct({ ...product, quantity: quantities[product.id] || 0 })}
                      disabled={!quantities[product.id] || quantities[product.id] <= 0 || quantities[product.id] > product.availableQuantity}
                    >
                      Add
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleAddSelectedProducts}>Add Selected Products</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductToOrderDialog;