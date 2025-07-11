"use client";

import React from "react";
import BillingCard from "@/components/billing/BillingCard";
import BillingPagination from "@/components/billing/BillingPagination";

const Billing = () => {
  const mockBillingRecords = [
    {
      shopName: "Omni online shop",
      amount: "510 BDT",
      status: "COMPLETED",
      paymentType: "BKASH",
      startDate: "18/05/2025 | 12:00 AM",
      endDate: "18/07/2025 | 12:00 AM",
      invoiceId: "INV-28309461",
    },
    {
      shopName: "Omni online shop",
      amount: "510 BDT",
      status: "COMPLETED",
      paymentType: "n/a",
      startDate: "18/05/2025 | 12:00 AM",
      endDate: "18/07/2025 | 12:00 AM",
      invoiceId: "n/a",
    },
    // Add more mock data as needed
  ];

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6">Billing</h1>
      <div className="space-y-4">
        {mockBillingRecords.map((record, index) => (
          <BillingCard
            key={index}
            shopName={record.shopName}
            amount={record.amount}
            status={record.status}
            paymentType={record.paymentType}
            startDate={record.startDate}
            endDate={record.endDate}
            invoiceId={record.invoiceId}
          />
        ))}
      </div>
      <BillingPagination />
    </div>
  );
};

export default Billing;