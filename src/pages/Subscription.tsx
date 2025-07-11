"use client";

import React from "react";
import SubscriptionStatusCard from "@/components/subscription/SubscriptionStatusCard";
import PricingPlansSection from "@/components/subscription/PricingPlansSection";
import WhyChooseUsSection from "@/components/subscription/WhyChooseUsSection";
import FAQSection from "@/components/subscription/FAQSection";
import CallToActionSection from "@/components/subscription/CallToActionSection";

const Subscription = () => {
  return (
    <div className="p-4 md:p-6">
      <SubscriptionStatusCard />
      <PricingPlansSection />
      <WhyChooseUsSection />
      <FAQSection />
      <CallToActionSection />
      <div className="text-center text-sm text-muted-foreground mt-8">
        © 2023-2025 Zatiq Limited. All rights reserved.
      </div>
    </div>
  );
};

export default Subscription;