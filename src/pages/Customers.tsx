"use client";

import React from "react";
import CustomerListHeader from "@/components/customers/CustomerListHeader";
import CustomerListTable from "@/components/customers/CustomerListTable";
import CustomerListPagination from "@/components/customers/CustomerListPagination";

const Customers = () => {
  return (
    <div className="p-4 md:p-6">
      <CustomerListHeader />
      <CustomerListTable />
      <CustomerListPagination />
    </div>
  );
};

export default Customers;