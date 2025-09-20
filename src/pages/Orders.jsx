"use client";

import React from "react";
import OrdersHeader from "@/components/orders/OrdersHeader.jsx";
import OrdersSummaryCards from "@/components/orders/OrdersSummaryCards.jsx";
import OrdersTabs from "@/components/orders/OrdersTabs.jsx";
import OrdersTable from "@/components/orders/OrdersTable.jsx";
import OrdersPagination from "@/components/orders/OrdersPagination.jsx";
import { useOrders } from "@/hooks/use-orders.js";

const Orders = () => {
  const [activeTab, setActiveTab] = React.useState("All Orders");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);

  const { ordersData, isLoading, error, deleteOrder } = useOrders(currentPage, itemsPerPage);

  // Client-side filtering. For a better experience, this should be handled by the backend.
  const filteredOrders = React.useMemo(() => {
    if (!ordersData?.data?.orders) return [];
    
    return ordersData.data.orders.filter(order => {
      const matchesTab = activeTab === "All Orders" || order.status.toLowerCase() === activeTab.replace("Order ", "").toLowerCase();
      const matchesSearch = order.order_number.includes(searchTerm) ||
                            (order.user_name && order.user_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
                            order.customer_phone.includes(searchTerm);
      return matchesTab && matchesSearch;
    });
  }, [ordersData, activeTab, searchTerm]);

  const handleDeleteOrder = (orderId) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      deleteOrder(orderId);
    }
  };

  if (error) {
    return <div className="p-6 text-center text-destructive">Error loading orders: {error.message}</div>;
  }

  return (
    <div className="p-4 md:p-6">
      <OrdersHeader
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        totalOrders={ordersData?.total_count || 0}
      />
      <OrdersSummaryCards />
      <OrdersTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {isLoading ? (
        <div className="text-center p-10">Loading orders...</div>
      ) : (
        <OrdersTable orders={filteredOrders} onDeleteOrder={handleDeleteOrder} />
      )}
      <OrdersPagination
        currentPage={currentPage}
        totalPages={Math.ceil((ordersData?.total_count || 0) / itemsPerPage)}
        onPageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={(value) => {
          setItemsPerPage(Number(value));
          setCurrentPage(1);
        }}
        totalItems={ordersData?.total_count || 0}
      />
    </div>
  );
};

export default Orders;