"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Checkbox } from "@/components/ui/checkbox.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Button } from "@/components/ui/button.jsx";
import { ChevronUp } from "lucide-react";
import { showSuccess } from "@/utils/toast.js";

const PaymentMethodsSection = () => {
  const handleUpdatePaymentInfo = () => {
    showSuccess("Payment information updated successfully!");
  };

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
          <Textarea id="paymentProcessMessage" rows={3} />
        </div>

        <div className="flex items-center space-x-2 mb-6">
          <Checkbox id="termsAndConditions" />
          <Label htmlFor="termsAndConditions" className="text-sm">
            Make sure you accept all of our <a href="#" className="text-blue-500 hover:underline">terms and conditions.</a>
          </Label>
        </div>

        <div className="flex justify-end">
          <Button onClick={handleUpdatePaymentInfo}>Update Payment Info</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentMethodsSection;