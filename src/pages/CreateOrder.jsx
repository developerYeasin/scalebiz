"use client";

import React from "react";
import CreateOrderHeader from "@/components/orders/CreateOrderHeader.jsx";
import OrderProductsSection from "@/components/orders/OrderProductsSection.jsx";
import OrderSummarySection from "@/components/orders/OrderSummarySection.jsx";
import OrderAddNoteSection from "@/components/orders/OrderAddNoteSection.jsx";
import OrderInformationSection from "@/components/orders/OrderInformationSection.jsx";
import CustomerInformationSection from "@/components/orders/CustomerInformationSection.jsx";
import CustomerValiditySection from "@/components/orders/CustomerValiditySection.jsx";
import AddProductToOrderDialog from "@/components/orders/AddProductToOrderDialog.jsx";
import { showSuccess, showError } from "@/utils/toast.js";

const CreateOrder = () => {
  const [isAddProductDialogOpen, setIsAddProductDialogOpen] = React.useState(false);
  const [orderProducts, setOrderProducts] = React.useState([]);
  const [discountPercentage, setDiscountPercentage] = React.useState(0);
  const [vatTaxPercentage, setVatTaxPercentage] = React.useState(0);
  const [deliveryCharge, setDeliveryCharge] = React.useState(0);
  const [paidAmount, setPaidAmount] = React.useState(0);

  const handleAddProduct = (product) => {
    setOrderProducts((prevProducts) => {
      const existingProductIndex = prevProducts.findIndex(p => p.id === product.id);
      if (existingProductIndex > -1) {
        const updatedProducts = [...prevProducts];
        updatedProducts[existingProductIndex].quantity += product.quantity;
        return updatedProducts;
      }
      return [...prevProducts, product];
    });
    showSuccess(`${product.name} added to order!`);
    setIsAddProductDialogOpen(false);
  };

  const handleRemoveProduct = (productId) => {
    setOrderProducts(prevProducts => prevProducts.filter(p => p.id !== productId));
    showError("Product removed from order.");
  };

  const subtotal = orderProducts.reduce((sum, product) => sum + (product.price * product.quantity), 0);
  const discountAmount = subtotal * (discountPercentage / 100);
  const vatTaxAmount = (subtotal - discountAmount) * (vatTaxPercentage / 100);
  const grandTotal = subtotal - discountAmount + vatTaxAmount + deliveryCharge;
  const dueAmount = grandTotal - paidAmount;

  const handleCreateOrder = () => {
    showSuccess("Order created successfully!");
    // In a real app, you'd send this data to a backend
    console.log("Order Data:", {
      products: orderProducts,
      discountPercentage,
      vatTaxPercentage,
      deliveryCharge,
      paidAmount,
      grandTotal,
      dueAmount,
      // ... other form data
    });
  };

  return (
    <div className="p-4 md:p-6">
      <CreateOrderHeader onCreateOrder={handleCreateOrder} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <OrderProductsSection
            orderProducts={orderProducts}
            onAddProductClick={() => setIsAddProductDialogOpen(true)}
            onRemoveProduct={handleRemoveProduct}
          />
          <OrderSummarySection
            discountPercentage={discountPercentage}
            setDiscountPercentage={setDiscountPercentage}
            vatTaxPercentage={vatTaxPercentage}
            setVatTaxPercentage={setVatTaxPercentage}
            deliveryCharge={deliveryCharge}
            setDeliveryCharge={setDeliveryCharge}
            paidAmount={paidAmount}
            setPaidAmount={setPaidAmount}
            subtotal={subtotal}
            discountAmount={discountAmount}
            vatTaxAmount={vatTaxAmount}
            grandTotal={grandTotal}
            dueAmount={dueAmount}
          />
          <OrderAddNoteSection />
        </div>
        <div className="lg:col-span-1">
          <OrderInformationSection />
          <CustomerInformationSection />
          <CustomerValiditySection />
        </div>
      </div>
      <AddProductToOrderDialog
        isOpen={isAddProductDialogOpen}
        onClose={() => setIsAddProductDialogOpen(false)}
        onAddProduct={handleAddProduct}
      />
    </div>
  );
};

export default CreateOrder;