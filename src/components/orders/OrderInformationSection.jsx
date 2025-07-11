"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.jsx";
import { Label } from "@/components/ui/label.jsx";
import { ChevronUp } from "lucide-react";

const OrderInformationSection = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Order Information</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="orderType">Order Type</Label>
            <Select defaultValue="In shop">
              <SelectTrigger id="orderType">
                <SelectValue placeholder="In shop" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="In shop">In shop</SelectItem>
                <SelectItem value="Online">Online</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="orderStatus">Order Status</Label>
            <Select defaultValue="Order Completed">
              <SelectTrigger id="orderStatus">
                <SelectValue placeholder="Order Completed" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Order Placed">Order Placed</SelectItem>
                <SelectItem value="Order Confirmed">Order Confirmed</SelectItem>
                <SelectItem value="Order Shipped">Order Shipped</SelectItem>
                <SelectItem value="Order Delivered">Order Delivered</SelectItem>
                <SelectItem value="Order Completed">Order Completed</SelectItem>
                <SelectItem value="Order Cancelled">Order Cancelled</SelectItem>
                <SelectItem value="Order Returned">Order Returned</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderInformationSection;