"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Switch } from "@/components/ui/switch.jsx";
import { Label } from "@/components/ui/label.jsx";
import { ShieldQuestion, ChevronUp } from "lucide-react";
import { toast } from "@/utils/toast.js";

const CustomerValiditySection = () => {
  const handleCheckValidity = () => {
    toast.info("Checking customer validity...");
  };

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <ShieldQuestion className="h-5 w-5 text-muted-foreground" />
          Customer Validity
        </CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <Button className="w-full mb-4" onClick={handleCheckValidity}>Let's check</Button>
        <div className="flex items-center justify-between">
          <Label htmlFor="fraud-toggle" className="text-sm">
            Mark this customer as a fraud?
            <p className="text-xs text-muted-foreground mt-1">
              Mark "Yes" depending on that persons behavior towards the order and be safe on future orders
            </p>
          </Label>
          <Switch id="fraud-toggle" />
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomerValiditySection;