"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronUp } from "lucide-react";

const IntegrateDeliveryServicesSection = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Integrate Delivery Services</CardTitle>
        <ChevronUp className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue="rx" className="space-y-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="rx" id="rx" />
            <Label htmlFor="rx" className="flex items-center gap-2">
              <img src="https://via.placeholder.com/30x20" alt="RX Courier" className="h-5" />
              <span className="font-semibold">RX Courier</span> (Recommended)
            </Label>
          </div>
          <p className="text-sm text-muted-foreground ml-6 mb-4">
            RX Courier | Please <a href="#" className="text-blue-500 hover:underline">sign up</a> to get started. To get special service & discount use "SCALEBIZ%RX" coupon code.
          </p>
          <h3 className="text-lg font-semibold mb-2">Other Courier Services:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="pathao" id="pathao" />
              <Label htmlFor="pathao">
                <img src="https://via.placeholder.com/60x30" alt="Pathao" className="h-8" />
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="steadfast" id="steadfast" />
              <Label htmlFor="steadfast">
                <img src="https://via.placeholder.com/60x30" alt="Steadfast" className="h-8" />
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="redx" id="redx" />
              <Label htmlFor="redx">
                <img src="https://via.placeholder.com/60x30" alt="REDX" className="h-8" />
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paperfly" id="paperfly" />
              <Label htmlFor="paperfly">
                <img src="https://via.placeholder.com/60x30" alt="Paperfly" className="h-8" />
              </Label>
            </div>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default IntegrateDeliveryServicesSection;