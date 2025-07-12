"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";

const OrderReportGridList = ({ orders }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">Orders ({orders.length})</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {orders.length === 0 ? (
          <div className="col-span-full text-center text-muted-foreground h-24 flex items-center justify-center">
            No orders found for this period.
          </div>
        ) : (
          orders.map((order) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default OrderReportGridList;