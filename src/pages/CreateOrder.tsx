"use client";

import React from "react";
import CreateOrderHeader from "@/components/orders/CreateOrderHeader";
import OrderProductsSection from "@/components/orders/OrderProductsSection";
import OrderSummarySection from "@/components/orders/OrderSummarySection";
import OrderAddNoteSection from "@/components/orders/OrderAddNoteSection";
import OrderInformationSection from "@/components/orders/OrderInformationSection";
import CustomerInformationSection from "@/components/orders/CustomerInformationSection";
import CustomerValiditySection from "@/components/orders/CustomerValiditySection";

const CreateOrder = () => {
  return (
    <div className="p-4 md:p-6">
      <CreateOrderHeader />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <OrderProductsSection />
          <OrderSummarySection />
          <OrderAddNoteSection />
        </div>
        <div className="lg:col-span-1">
          <OrderInformationSection />
          <CustomerInformationSection />
          <CustomerValiditySection />
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;