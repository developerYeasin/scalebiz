"use client";

import React from "react";
import OrdersHeader from "@/components/orders/OrdersHeader.jsx";
import OrdersSummaryCards from "@/components/orders/OrdersSummaryCards.jsx";
import OrdersTabs from "@/components/orders/OrdersTabs.jsx";
import OrdersTable from "@/components/orders/OrdersTable.jsx";
import OrdersPagination from "@/components/orders/OrdersPagination.jsx";
import { useOrders } from "@/hooks/use-orders.js";
import ViewOrderDialog from "@/components/orders/ViewOrderDialog.jsx";
import EditOrderDialog from "@/components/orders/EditOrderDialog.jsx";
import DeleteOrderDialog from "@/components/orders/DeleteOrderDialog.jsx";

const Orders = () => {
  const [activeTab, setActiveTab] = React.useState("All Orders");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);

  const [viewingOrderId, setViewingOrderId] = React.useState(null);
  const [editingOrderId, setEditingOrderId] = React.useState(null);
  const [deletingOrderId, setDeletingOrderId] = React.useState(null);

  const { ordersData, isLoading, error, deleteOrder } = useOrders(currentPage, itemsPerPage);

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

  const handleDeleteConfirm = () => {
    if (deletingOrderId) {
      deleteOrder(deletingOrderId, {
        onSuccess: () => setDeletingOrderId(null),
      });
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
        <OrdersTable
          orders={filteredOrders}
          onViewClick={setViewingOrderId}
          onEditClick={setEditingOrderId}
          onDeleteClick={setDeletingOrderId}
        />
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

      <ViewOrderDialog
        isOpen={!!viewingOrderId}
        onClose={() => setViewingOrderId(null)}
        orderId={viewingOrderId}
      />
      <EditOrderDialog
        isOpen={!!editingOrderId}
        onClose={() => setEditingOrderId(null)}
        orderId={editingOrderId}
      />
      <DeleteOrderDialog
        isOpen={!!deletingOrderId}
        onClose={() => setDeletingOrderId(null)}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default Orders;