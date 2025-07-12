"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Checkbox } from "@/components/ui/checkbox.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";
import { ChevronUp, Plus } from "lucide-react";
import { showSuccess } from "@/utils/toast.js";

const SmsServiceSection = () => {
  const handleAddApiCredentials = () => {
    showSuccess("API credentials added (dummy action).");
  };

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>SMS Service</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 mb-6">
          <Checkbox id="bulkSmsBd" defaultChecked />
          <Label htmlFor="bulkSmsBd">Bulk SMS BD</Label>
        </div>

        <h3 className="text-lg font-semibold mb-2">Configure BULK SMS BD</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Create an account on <a href="#" className="text-blue-500 hover:underline">BULK SMS BD</a> to obtain your credentials, and then integrate those credentials into your service to enable bulk SMS messaging functionality.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end mb-6">
          <div>
            <Label htmlFor="apiKey">Api key <span className="text-destructive">*</span></Label>
            <Input id="apiKey" placeholder="Api key" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="senderId">Sender ID <span className="text-destructive">*</span></Label>
            <Input id="senderId" placeholder="Sender ID" className="mt-1" />
          </div>
          <Button onClick={handleAddApiCredentials}>
            <Plus className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>

        <h3 className="text-lg font-semibold mb-2">Configure SMS Template</h3>
        <div className="border rounded-md p-6 text-center text-muted-foreground">
          Integrate a SMS service first
        </div>
      </CardContent>
    </Card>
  );
};

export default SmsServiceSection;