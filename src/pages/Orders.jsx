"use client";

import React from "react";
import OrdersHeader from "@/components/orders/OrdersHeader.jsx";
import OrdersSummaryCards from "@/components/orders/OrdersSummaryCards.jsx";
import OrdersTabs from "@/components/orders/OrdersTabs.jsx";
import OrdersTable from "@/components/orders/OrdersTable.jsx";
import OrdersPagination from "@/components/orders/OrdersPagination.jsx";

const mockOrders = [
  { slNo: "#571", orderId: "#809249", dateTime: "09/07/2025 | 10:22 PM", customerName: "Shakwat Hossain", phoneNo: "+8801708378659", ordersItem: 1, price: "৳ 1079.00", orderStatus: "Placed" },
  { slNo: "#570", orderId: "#808918", dateTime: "09/07/2025 | 08:20 PM", customerName: "Rony Dey", phoneNo: "+8801835030105", ordersItem: 2, price: "৳ 2148.00", orderStatus: "Placed" },
  { slNo: "#569", orderId: "#808789", dateTime: "09/07/2025 | 07:35 PM", customerName: "Sam Sadik", phoneNo: "+8801832578847", ordersItem: 1, price: "৳ 1149.00", orderStatus: "Placed" },
  { slNo: "#568", orderId: "#808777", dateTime: "09/07/2025 | 07:28 PM", customerName: "Taj Uddin", phoneNo: "+8801774949796", ordersItem: 1, price: "৳ 1149.00", orderStatus: "Placed" },
  { slNo: "#566", orderId: "#808761", dateTime: "09/07/2025 | 07:21 PM", customerName: "Rasel", phoneNo: "+8801647159442", ordersItem: 1, price: "৳ 1149.00", orderStatus: "Placed" },
  { slNo: "#565", orderId: "#808744", dateTime: "09/07/2025 | 07:14 PM", customerName: "সাইফুল", phoneNo: "+8801817409732", ordersItem: 1, price: "৳ 1149.00", orderStatus: "Placed" },
  { slNo: "#563", orderId: "#808717", dateTime: "09/07/2025 | 07:03 PM", customerName: "Boby", phoneNo: "+8801726460880", ordersItem: 1, price: "৳ 1149.00", orderStatus: "Placed" },
  { slNo: "#562", orderId: "#808179", dateTime: "09/07/2025 | 04:02 PM", customerName: "Loman", phoneNo: "+8801866100259", ordersItem: 1, price: "৳ 1149.00", orderStatus: "Placed" },
  { slNo: "#561", orderId: "#808101", dateTime: "09/07/2025 | 03:33 PM", customerName: "Kazi Shafiqul islam", phoneNo: "+8801730586301", ordersItem: 1, price: "৳ 1079.00", orderStatus: "Placed" },
  { slNo: "#560", orderId: "#807911", dateTime: "09/07/2025 | 02:34 PM", customerName: "Md Saikat", phoneNo: "+8801328973132", ordersItem: 1, price: "৳ 1149.00", orderStatus: "Placed" },
  { slNo: "#559", orderId: "#807747", dateTime: "09/07/2025 | 01:43 PM", customerName: "Shah alam", phoneNo: "+8801814676138", ordersItem: 1, price: "৳ 1149.00", orderStatus: "Placed" },
  { slNo: "#558", orderId: "#807145", dateTime: "09/07/2025 | 10:16 AM", customerName: "মোহাম্মদ জাহাঙ্গীর আলম", phoneNo: "+8801985913743", ordersItem: 2, price: "৳ 2148.00", orderStatus: "Placed" },
  { slNo: "#557", orderId: "#807111", dateTime: "09/07/2025 | 10:06 AM", customerName: "Jamil Khan", phoneNo: "+8801601501449", ordersItem: 1, price: "৳ 1149.00", orderStatus: "Placed" },
  { slNo: "#556", orderId: "#807077", dateTime: "09/07/2025 | 09:57 AM", customerName: "SHAHPOORAN", phoneNo: "+8801819255714", ordersItem: 1, price: "৳ 1149.00", orderStatus: "Placed" },
  { slNo: "#554", orderId: "#807047", dateTime: "09/07/2025 | 09:46 AM", customerName: "Abu Bakkar Siddik", phoneNo: "+8801727670844", ordersItem: 1, price: "৳ 1149.00", orderStatus: "Placed" },
  { slNo: "#553", orderId: "#806704", dateTime: "09/07/2025 | 03:02 AM", customerName: "Shazu", phoneNo: "+8801711314253", ordersItem: 1, price: "৳ 1079.00", orderStatus: "Placed" },
  { slNo: "#552", orderId: "#806581", dateTime: "09/07/2025 | 01:52 AM", customerName: "Aashiq", phoneNo: "+8801774060043", ordersItem: 2, price: "৳ 2148.00", orderStatus: "Placed" },
  { slNo: "#551", orderId: "#806563", dateTime: "09/07/2025 | 01:42 AM", customerName: "মিজানুর", phoneNo: "+8801609523889", ordersItem: 1, price: "৳ 1149.00", orderStatus: "Placed" },
  { slNo: "#550", orderId: "#806371", dateTime: "09/07/2025 | 12:32 AM", customerName: "Amzad Hussain", phoneNo: "+8801712610136", ordersItem: 2, price: "৳ 2148.00", orderStatus: "Confirmed" },
  { slNo: "#549", orderId: "#806369", dateTime: "09/07/2025 | 12:31 AM", customerName: "Rakib", phoneNo: "+8801575052440", ordersItem: 1, price: "৳ 1149.00", orderStatus: "Placed" },
];

const Orders = () => {
  const [activeTab, setActiveTab] = React.useState("All Orders");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(20);

  const filteredOrders = mockOrders.filter(order => {
    const matchesTab = activeTab === "All Orders" || order.orderStatus.toLowerCase() === activeTab.replace("Order ", "").toLowerCase();
    const matchesSearch = order.orderId.includes(searchTerm) ||
                          order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order.phoneNo.includes(searchTerm);
    return matchesTab && matchesSearch;
  });

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1); // Reset to first page when items per page changes
  };

  return (
    <div className="p-4 md:p-6">
      <OrdersHeader
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        totalOrders={filteredOrders.length}
      />
      <OrdersSummaryCards />
      <OrdersTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <OrdersTable orders={paginatedOrders} />
      <OrdersPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
        totalItems={filteredOrders.length}
      />
    </div>
  );
};

export default Orders;