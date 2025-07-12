"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.jsx";
import { Checkbox } from "@/components/ui/checkbox.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { showInfo, showError } from "@/utils/toast.js"; // Corrected import

const OrdersTable = ({ orders }) => {
  const handleViewOrder = (orderId) => {
    showInfo(`Viewing order ${orderId}`);
  };

  const handleEditOrder = (orderId) => {
    showInfo(`Editing order ${orderId}`);
  };

  const handleDeleteOrder = (orderId) => {
    showError(`Deleting order ${orderId}`);
  };

  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px] text-center">
              <Checkbox />
            </TableHead>
            <TableHead>SL No.</TableHead>
            <TableHead>Order Id</TableHead>
            <TableHead>Date & Time</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Phone No.</TableHead>
            <TableHead>Orders Item</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Order Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.length === 0 ? (
            <TableRow>
              <TableCell colSpan={10} className="h-24 text-center text-muted-foreground">
                No orders found.
              </TableCell>
            </TableRow>
          ) : (
            orders.map((order) => (
              <TableRow key={order.orderId}>
                <TableCell className="text-center">
                  <Checkbox />
                </TableCell>
                <TableCell>{order.slNo}</TableCell>
                <TableCell className="font-medium">{order.orderId}</TableCell>
                <TableCell>{order.dateTime}</TableCell>
                <TableCell>{order.customerName}</TableCell>
                <TableCell>{order.phoneNo}</TableCell>
                <TableCell>{order.ordersItem}</TableCell>
                <TableCell>{order.price}</TableCell>
                <TableCell>
                  <Badge variant={order.orderStatus === "Confirmed" ? "default" : "secondary"}>
                    {order.orderStatus}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <Button variant="ghost" size="icon" onClick={() => handleViewOrder(order.orderId)}>
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleEditOrder(order.orderId)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDeleteOrder(order.orderId)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrdersTable;