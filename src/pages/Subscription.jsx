"use client";

import React from "react";
import SubscriptionStatusCard from "@/components/subscription/SubscriptionStatusCard.jsx";
import PricingPlansSection from "@/components/subscription/PricingPlansSection.jsx";
import WhyChooseUsSection from "@/components/subscription/WhyChooseUsSection.jsx";
import FAQSection from "@/components/subscription/FAQSection.jsx";
import CallToActionSection from "@/components/subscription/CallToActionSection.jsx";

const Subscription = () => {
  return (
    <div className="p-4 md:p-6">
      <SubscriptionStatusCard />
      <PricingPlansSection />
      <WhyChooseUsSection />
      <FAQSection />
      <CallToActionSection />
      <div className="text-center text-sm text-muted-foreground mt-8">
        © 2023-2025 Scalebiz Limited. All rights reserved.
      </div>
    </div>
  );
};

export default Subscription;