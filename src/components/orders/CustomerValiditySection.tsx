"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ShieldQuestion, ChevronUp } from "lucide-react";

const CustomerValiditySection = () => {
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
        <Button className="w-full mb-4">Let's check</Button>
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