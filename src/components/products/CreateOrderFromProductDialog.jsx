"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { useOrders } from "@/hooks/use-orders.js";
import { showError } from "@/utils/toast.js";
import { ScrollArea } from "@/components/ui/scroll-area.jsx";

const CreateOrderFromProductDialog = ({ isOpen, onClose, product }) => {
  const { createOrder, isCreating } = useOrders();
  const [quantity, setQuantity] = React.useState(1);
  const [customerPhone, setCustomerPhone] = React.useState("");
  const [customerAddress, setCustomerAddress] = React.useState("");
  const [customerNotes, setCustomerNotes] = React.useState("");

  React.useEffect(() => {
    if (!isOpen) {
      // Reset form when dialog closes
      setQuantity(1);
      setCustomerPhone("");
      setCustomerAddress("");
      setCustomerNotes("");
    }
  }, [isOpen]);

  const handleCreateOrder = () => {
    if (!product) {
      showError("No product selected.");
      return;
    }
    if (!customerPhone || !customerAddress) {
      showError("Customer phone and address are required.");
      return;
    }

    const payload = {
      customer_email: "unauthenticated.customer@example.com", // Default value
      customer_phone: customerPhone,
      shipping_address: {
        street: customerAddress,
        city: "N/A",
        state: "N/A",
        zip: "N/A",
        country: "N/A",
      },
      billing_address: {
        street: customerAddress,
        city: "N/A",
        state: "N/A",
        zip: "N/A",
        country: "N/A",
      },
      shipping_method: "Standard Shipping",
      payment_method: "Cash on Delivery", // Defaulting to COD
      customer_notes: customerNotes,
      order_items: [
        {
          product_id: product.id,
          quantity: Number(quantity),
        },
      ],
    };

    createOrder(payload, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg h-[90vh] max-h-[90vh] flex flex-col overflow-hidden">
        <DialogHeader>
          <DialogTitle>Create Quick Order</DialogTitle>
          <DialogDescription>
            Create a new order for "{product.name}".
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="flex-1 h-0 pr-4">
          <div className="grid gap-4 py-4">
            <div className="flex items-center gap-4">
              <img src={product.image_url || "https://via.placeholder.com/80x80"} alt={product.name} className="w-20 h-20 rounded-md object-cover" />
              <div>
                <p className="font-semibold">{product.name}</p>
                <p className="text-sm text-muted-foreground">Price: ৳{parseFloat(product.price).toFixed(2)}</p>
                <p className="text-sm text-muted-foreground">Stock: {product.stock_quantity}</p>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantity" className="text-right">
                Quantity
              </Label>
              <Input
                id="quantity"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                className="col-span-3"
                min="1"
                max={product.stock_quantity}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone*
              </Label>
              <Input
                id="phone"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="col-span-3"
                placeholder="Customer's phone number"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="address" className="text-right">
                Address*
              </Label>
              <Textarea
                id="address"
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
                className="col-span-3"
                placeholder="Customer's full shipping address"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="notes" className="text-right">
                Notes
              </Label>
              <Textarea
                id="notes"
                value={customerNotes}
                onChange={(e) => setCustomerNotes(e.target.value)}
                className="col-span-3"
                placeholder="Any special instructions for the order"
              />
            </div>
          </div>
        </ScrollArea>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleCreateOrder} disabled={isCreating}>
            {isCreating ? "Creating..." : "Create Order"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateOrderFromProductDialog;