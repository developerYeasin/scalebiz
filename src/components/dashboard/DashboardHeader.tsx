"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Globe, Copy } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
      <h1 className="text-2xl font-bold">Hello, Omni online shop ! 👋</h1>
      <div className="flex gap-2">
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          Apply for Investment
        </Button>
        <Button variant="outline">
          <Globe className="h-4 w-4 mr-2" />
          Website
        </Button>
        <Button variant="outline">
          <Copy className="h-4 w-4 mr-2" />
          Copy
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;