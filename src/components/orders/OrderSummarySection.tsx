"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronUp } from "lucide-react";

const OrderSummarySection = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Order Summary</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div>
            <Label htmlFor="discountPercentage">Discount</Label>
            <p className="text-sm text-muted-foreground mb-1">Percentage (%)</p>
            <Input id="discountPercentage" defaultValue="0" />
          </div>
          <div>
            <Label htmlFor="vatTaxPercentage">VAT/TAX</Label>
            <p className="text-sm text-muted-foreground mb-1">Percentage (%)</p>
            <Input id="vatTaxPercentage" defaultValue="0" />
          </div>
          <div>
            <Label htmlFor="deliveryZone">Delivery</Label>
            <p className="text-sm text-muted-foreground mb-1">Delivery Zone</p>
            <Select defaultValue="Not Selected">
              <SelectTrigger>
                <SelectValue placeholder="Not Selected" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Not Selected">Not Selected</SelectItem>
                <SelectItem value="Zone A">Zone A</SelectItem>
                <SelectItem value="Zone B">Zone B</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="paymentStatus">Payment</Label>
            <p className="text-sm text-muted-foreground mb-1">Status</p>
            <Select defaultValue="Fully Paid">
              <SelectTrigger>
                <SelectValue placeholder="Fully Paid" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Fully Paid">Fully Paid</SelectItem>
                <SelectItem value="Partially Paid">Partially Paid</SelectItem>
                <SelectItem value="Unpaid">Unpaid</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Amount</p>
            <Input defaultValue="0" readOnly className="bg-muted" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Amount</p>
            <Input defaultValue="0" readOnly className="bg-muted" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Delivery Charge</p>
            <Input defaultValue="0" readOnly className="bg-muted" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Paid Amount</p>
            <Input defaultValue="0" readOnly className="bg-muted" />
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="text-destructive font-semibold">Due Amount: BDT 0</p>
          <p className="text-primary font-semibold">Grand Total: BDT 0</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderSummarySection;