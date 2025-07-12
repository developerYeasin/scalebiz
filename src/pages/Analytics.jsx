"use client";

import React from "react";
import OrderReportHeader from "@/components/analytics/OrderReportHeader.jsx";
import OrderReportSummaryCards from "@/components/analytics/OrderReportSummaryCards.jsx";
import OrderReportGridList from "@/components/analytics/OrderReportGridList.jsx";
import OrderReportPagination from "@/components/analytics/OrderReportPagination.jsx";

const mockOrders = [
  { id: "#571", dateTime: "09/07/2025 | 10:22 PM", items: 1, price: "1079", type: "Online", status: "Order Placed" },
  { id: "#570", dateTime: "09/07/2025 | 08:20 PM", items: 2, price: "2148", type: "Online", status: "Order Placed" },
  { id: "#569", dateTime: "09/07/2025 | 07:35 PM", items: 1, price: "1149", type: "Online", status: "Order Placed" },
  { id: "#568", dateTime: "09/07/2025 | 07:28 PM", items: 1, price: "1149", type: "Online", status: "Order Placed" },
  { id: "#567", dateTime: "09/07/2025 | 07:23 PM", items: 1, price: "1149", type: "Online", status: "Order Cancelled" },
  { id: "#566", dateTime: "09/07/2025 | 07:21 PM", items: 1, price: "1149", type: "Online", status: "Order Placed" },
  { id: "#565", dateTime: "09/07/2025 | 07:14 PM", items: 1, price: "1149", type: "Online", status: "Order Placed" },
  { id: "#564", dateTime: "09/07/2025 | 07:06 PM", items: 1, price: "1149", type: "Online", status: "Order Cancelled" },
  { id: "#563", dateTime: "09/07/2025 | 07:03 PM", items: 1, price: "1149", type: "Online", status: "Order Placed" },
  { id: "#562", dateTime: "09/07/2025 | 04:02 PM", items: 1, price: "1149", type: "Online", status: "Order Placed" },
  { id: "#561", dateTime: "09/07/2025 | 03:33 PM", items: 1, price: "1079", type: "Online", status: "Order Placed" },
  { id: "#560", dateTime: "09/07/2025 | 02:34 PM", items: 1, price: "1149", type: "Online", status: "Order Placed" },
  { id: "#559", dateTime: "09/07/2025 | 01:43 PM", items: 1, price: "1149", type: "Online", status: "Order Placed" },
  { id: "#558", dateTime: "09/07/2025 | 10:16 AM", items: 2, price: "2148", type: "Online", status: "Order Placed" },
  { id: "#557", dateTime: "09/07/2025 | 10:06 AM", items: 1, price: "1149", type: "Online", status: "Order Placed" },
  { id: "#556", dateTime: "09/07/2025 | 09:57 AM", items: 1, price: "1149", type: "Online", status: "Order Placed" },
  { id: "#555", dateTime: "09/07/2025 | 09:57 AM", items: 1, price: "1149", type: "Online", status: "Order Cancelled" },
  { id: "#554", dateTime: "09/07/2025 | 09:46 AM", items: 1, price: "1149", type: "Online", status: "Order Placed" },
  { id: "#553", dateTime: "09/07/2025 | 03:02 AM", items: 1, price: "1079", type: "Online", status: "Order Placed" },
  { id: "#552", dateTime: "09/07/2025 | 01:52 AM", items: 2, price: "2148", type: "Online", status: "Order Placed" },
  { id: "#551", dateTime: "09/07/2025 | 01:42 AM", items: 1, price: "1149", type: "Online", status: "Order Placed" },
  { id: "#550", dateTime: "09/07/2025 | 12:32 AM", items: 2, price: "2148", type: "Online", status: "Order Confirmed" },
  { id: "#549", dateTime: "09/07/2025 | 12:31 AM", items: 1, price: "1149", type: "Online", status: "Order Placed" },
];

const Analytics = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 12; // Display 12 items per page for the grid

  const totalPages = Math.ceil(mockOrders.length / itemsPerPage);
  const paginatedOrders = mockOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4 md:p-6">
      <OrderReportHeader />
      <OrderReportSummaryCards />
      <OrderReportGridList orders={paginatedOrders} />
      <OrderReportPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Analytics;