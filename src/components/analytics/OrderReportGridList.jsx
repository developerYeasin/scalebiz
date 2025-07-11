"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";

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
];

const OrderReportGridList = () => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">Orders (255)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockOrders.map((order) => (
          <Card key={order.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-lg">{order.id}</span>
                <span className="text-sm text-muted-foreground">{order.dateTime}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-muted-foreground">Items: {order.items}</span>
                <span className="text-sm text-muted-foreground">Price: {order.price}</span>
              </div>
              <div className="flex gap-2">
                <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-100">
                  {order.type}
                </Badge>
                <Badge variant={order.status === "Order Cancelled" ? "destructive" : "default"}>
                  {order.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OrderReportGridList;