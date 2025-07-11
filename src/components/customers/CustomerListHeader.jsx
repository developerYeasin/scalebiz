"use client";

import React from "react";
import { Input } from "@/components/ui/input.jsx";
import { Search } from "lucide-react";

const CustomerListHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
      <h1 className="text-2xl font-bold">Customers</h1>
      <div className="relative w-full max-w-sm">
        <Input
          type="text"
          placeholder="Search customer phone (enter 11 digits)"
          className="pl-8"
        />
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      </div>
    </div>
  );
};

export default CustomerListHeader;