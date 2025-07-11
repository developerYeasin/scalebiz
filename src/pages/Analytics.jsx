"use client";

import React from "react";
import OrderReportHeader from "@/components/analytics/OrderReportHeader.jsx";
import OrderReportSummaryCards from "@/components/analytics/OrderReportSummaryCards.jsx";
import OrderReportGridList from "@/components/analytics/OrderReportGridList.jsx";
import OrderReportPagination from "@/components/analytics/OrderReportPagination.jsx";

const Analytics = () => {
  return (
    <div className="p-4 md:p-6">
      <OrderReportHeader />
      <OrderReportSummaryCards />
      <OrderReportGridList />
      <OrderReportPagination />
    </div>
  );
};

export default Analytics;