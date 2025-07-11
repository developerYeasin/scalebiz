"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const DashboardBanner = () => {
  return (
    <Card className="mb-6 overflow-hidden">
      <CardContent className="p-0">
        <img
          src="https://via.placeholder.com/1200x300?text=Scalebiz+Banner"
          alt="Scalebiz Banner"
          className="w-full h-auto object-cover"
        />
      </CardContent>
    </Card>
  );
};

export default DashboardBanner;