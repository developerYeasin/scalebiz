"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Switch } from "@/components/ui/switch.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.jsx";
import { Plus, Trash2, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils.js";
import { toast } from "@/utils/toast.js";

const DeliveryServiceSection = () => {
  const [activeTab, setActiveTab] = React.useState("Zones");
  const [specificCharges, setSpecificCharges] = React.useState([{ id: 1, zone: "Dhaka", charge: "80" }]);

  const addSpecificCharge = () => {
    setSpecificCharges([...specificCharges, { id: specificCharges.length + 1, zone: "Not Selected", charge: "0" }]);
    toast.info("New specific charge row added.");
  };

  const removeSpecificCharge = (id) => {
    setSpecificCharges(specificCharges.filter(charge => charge.id !== id));
    toast.error("Specific charge removed.");
  };

  const handleUpdateDeliveryCharges = () => {
    toast.success("Delivery charges updated successfully!");
  };

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Delivery Service</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Label htmlFor="deliveryCharge">Delivery Charge (Default)</Label>
          <Input id="deliveryCharge" defaultValue="150" className="mt-1" />
          <p className="text-xs text-muted-foreground mt-1">
            Default delivery charge will be applied to all areas, except for the specific zones listed below.
          </p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <Label htmlFor="deliveryChargeRefundable" className="text-sm">
            Delivery Charge Not refundable?
            <p className="text-xs text-muted-foreground mt-1">
              Enabling this option ensures if you return a order the delivery charage will not be refunded.
            </p>
          </Label>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">[NO]</span>
            <Switch id="deliveryChargeRefundable" />
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-2">Delivery option:</h3>
        <div className="flex space-x-2 mb-4">
          {["Zones", "Districts", "Upazila/P.S"].map((tab) => (
            <Button
              key={tab}
              variant="outline"
              className={cn(
                "px-4 py-2 rounded-md text-sm",
                activeTab === tab
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>

        <h3 className="text-lg font-semibold mb-2">Specific Delivery Charges</h3>
        {specificCharges.map((charge, index) => (
          <div key={charge.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end mb-4">
            <div>
              <Label htmlFor={`deliveryZone-${charge.id}`}>Select delivery zone</Label>
              <Select defaultValue={charge.zone}>
                <SelectTrigger id={`deliveryZone-${charge.id}`} className="mt-1">
                  <SelectValue placeholder="Select delivery zone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Dhaka">Dhaka</SelectItem>
                  <SelectItem value="Chittagong">Chittagong</SelectItem>
                  <SelectItem value="Not Selected">Not Selected</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor={`chargeAmount-${charge.id}`}>Charge</Label>
              <Input id={`chargeAmount-${charge.id}`} defaultValue={charge.charge} className="mt-1" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="text-destructive hover:text-destructive" onClick={() => removeSpecificCharge(charge.id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
              {index === specificCharges.length - 1 && (
                <Button variant="outline" size="icon" onClick={addSpecificCharge}>
                  <Plus className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        ))}
        <div className="flex justify-end mt-4">
          <Button onClick={handleUpdateDeliveryCharges}>Update Delivery Charges</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeliveryServiceSection;