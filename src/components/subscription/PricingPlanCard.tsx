"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingPlanCardProps {
  planName: string;
  price: string;
  currency: string;
  oldPrice?: string;
  savePercentage?: string;
  features: string[];
  isRecommended?: boolean;
  isMostPopular?: boolean;
}

const PricingPlanCard: React.FC<PricingPlanCardProps> = ({
  planName,
  price,
  currency,
  oldPrice,
  savePercentage,
  features,
  isRecommended = false,
  isMostPopular = false,
}) => {
  return (
    <Card className={cn(
      "relative flex flex-col items-center text-center p-6 border-2",
      isMostPopular ? "border-purple-600" : "border-border"
    )}>
      {isRecommended && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-400 text-white px-3 py-1 rounded-full text-xs font-semibold">
          Recommended
        </Badge>
      )}
      {isMostPopular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          Most Popular
        </Badge>
      )}
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold">{planName}</CardTitle>
        <div className="flex items-baseline justify-center mt-2">
          <span className="text-5xl font-bold">{price}</span>
          <span className="text-lg font-semibold ml-1">{currency}</span>
        </div>
        {oldPrice && (
          <div className="flex items-center justify-center text-sm text-muted-foreground mt-1">
            <span className="line-through">{oldPrice}</span>
            {savePercentage && (
              <Badge variant="destructive" className="ml-2 px-2 py-0.5 text-xs">
                SAVE {savePercentage}
              </Badge>
            )}
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between w-full">
        <ul className="space-y-2 text-left mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Button className={cn(
          "w-full",
          isMostPopular ? "bg-purple-600 hover:bg-purple-700" : "bg-purple-600 hover:bg-purple-700"
        )}>
          Upgrade Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingPlanCard;