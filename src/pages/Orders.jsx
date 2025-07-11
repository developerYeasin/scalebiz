"use client";

import React from "react";
import OrdersHeader from "@/components/orders/OrdersHeader.jsx";
import OrdersSummaryCards from "@/components/orders/OrdersSummaryCards.jsx";
import OrdersTabs from "@/components/orders/OrdersTabs.jsx";
import OrdersTable from "@/components/orders/OrdersTable.jsx";
import OrdersPagination from "@/components/orders/OrdersPagination.jsx";

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