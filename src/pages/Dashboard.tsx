"use client";

import React from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardBanner from "@/components/dashboard/DashboardBanner";
import DashboardSummaryCards from "@/components/dashboard/DashboardSummaryCards";
import DashboardSalesChart from "@/components/dashboard/DashboardSalesChart";
import DashboardLowStockProducts from "@/components/dashboard/DashboardLowStockProducts";
import DashboardMostSoldItems from "@/components/dashboard/DashboardMostSoldItems";

const Dashboard = () => {
  return (
    <div className="p-4 md:p-6">
      <DashboardHeader />
      <DashboardBanner />
      <DashboardSummaryCards />
      <DashboardSalesChart />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardLowStockProducts />
        <DashboardMostSoldItems />
      </div>
    </div>
  );
};

export default Dashboard;