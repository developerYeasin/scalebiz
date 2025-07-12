"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Crown } from "lucide-react";
import { showSuccess } from "@/utils/toast.js";

const CallToActionSection = () => {
  const handleStartJourney = () => {
    showSuccess("Welcome to your journey with Scalebiz!");
  };

  return (
    <Card className="mb-12 p-8 text-center bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200">
      <CardContent className="p-0">
        <h2 className="text-3xl font-bold mb-4">Ready to grow your business?</h2>
        <p className="text-muted-foreground mb-6">
          Join thousands of successful merchants who have transformed their business with our platform
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-lg" onClick={handleStartJourney}>
          <Crown className="h-6 w-6 mr-3" />
          Start Your Journey Today
        </Button>
      </CardContent>
    </Card>
  );
};

export default CallToActionSection;