"use client";

import React from "react";
import OrderReportHeader from "@/components/analytics/OrderReportHeader";
import OrderReportSummaryCards from "@/components/analytics/OrderReportSummaryCards";
import OrderReportGridList from "@/components/analytics/OrderReportGridList";
import OrderReportPagination from "@/components/analytics/OrderReportPagination";

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