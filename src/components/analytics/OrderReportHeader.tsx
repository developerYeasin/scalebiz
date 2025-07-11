"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const OrderReportHeader = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold">Order Report</h1>
      <Button variant="outline" className="flex items-center gap-2">
        <Calendar className="h-4 w-4" />
        This Month
      </Button>
    </div>
  );
};

export default OrderReportHeader;