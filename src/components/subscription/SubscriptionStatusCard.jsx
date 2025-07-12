"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { CalendarCheck } from "lucide-react";
import { toast } from "@/utils/toast.js";

const SubscriptionStatusCard = () => {
  const handleAutoRenewal = () => {
    toast.info("Auto-renewal status updated (dummy action).");
  };

  const handleCancelSubscription = () => {
    toast.error("Subscription cancellation initiated (dummy action).");
  };

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">Subscription Status</CardTitle>
        <CalendarCheck className="h-6 w-6 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <h2 className="text-3xl font-bold mb-2">8 days left</h2>
        <p className="text-sm text-muted-foreground mb-4">in your subscription</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white flex-1" onClick={handleAutoRenewal}>
            Auto-renewal active
            <span className="ml-2 text-xs">Next billing: 18/07/2025</span>
          </Button>
          <Button variant="outline" className="text-destructive hover:text-destructive flex-1" onClick={handleCancelSubscription}>
            Cancel Subscription
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubscriptionStatusCard;