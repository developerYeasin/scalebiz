"use client";

import React from "react";
import CustomerListHeader from "@/components/customers/CustomerListHeader.jsx";
import CustomerListTable from "@/components/customers/CustomerListTable.jsx";
import CustomerListPagination from "@/components/customers/CustomerListPagination.jsx";

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