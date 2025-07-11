"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const PaymentMethodsSection = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Integrate Payment Methods</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <Checkbox id="zatiqSecurePurchase" defaultChecked />
            <Label htmlFor="zatiqSecurePurchase">Zatiq Secure Purchase</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="cashOnDelivery" defaultChecked />
            <Label htmlFor="cashOnDelivery">Cash On Delivery</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="aamarPay" />
            <Label htmlFor="aamarPay">AamarPay</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="bKash" />
            <Label htmlFor="bKash">bKash</Label>
          </div>
        </div>

        <div className="mb-6">
          <Label htmlFor="paymentProcessMessage">Payment process message note</Label>
          <Textarea id="paymentProcessMessage" rows={3} className="mt-1" />
        </div>

        <div className="flex items-center space-x-2 mb-6">
          <Checkbox id="termsAndConditions" />
          <Label htmlFor="termsAndConditions" className="text-sm">
            Make sure you accept all of our <a href="#" className="text-blue-500 hover:underline">terms and conditions.</a>
          </Label>
        </div>

        <div className="flex justify-end">
          <Button>Update Payment Info</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentMethodsSection;