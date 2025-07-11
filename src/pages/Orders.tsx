"use client";

import React from "react";
import OrdersHeader from "@/components/orders/OrdersHeader";
import OrdersSummaryCards from "@/components/orders/OrdersSummaryCards";
import OrdersTabs from "@/components/orders/OrdersTabs";
import OrdersTable from "@/components/orders/OrdersTable";
import OrdersPagination from "@/components/orders/OrdersPagination";

const Orders = () => {
  return (
    <div className="p-4 md:p-6">
      <OrdersHeader />
      <OrdersSummaryCards />
      <OrdersTabs />
      <OrdersTable />
      <OrdersPagination />
    </div>
  );
};

export default Orders;