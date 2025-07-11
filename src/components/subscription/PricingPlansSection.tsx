"use client";

import React from "react";
import PricingPlanCard from "./PricingPlanCard";

const PricingPlansSection = () => {
  const plans = [
    {
      planName: "Monthly Plan",
      price: "500",
      currency: "BDT",
      features: [
        "Everything in our free plan plus..",
        "Unlimited product addition and orders",
        "Website link (<yourshop>.zatiqeasy.com)",
        "Add your custom domain",
        "Unlimited order and receipt processing",
        "Theme customization",
        "Track customer loyalty & customer list",
        "Alerts enabled",
        "Dashboard",
        "Reports export",
      ],
      isRecommended: true,
    },
    {
      planName: "3 Months Plan",
      price: "1200",
      currency: "BDT",
      oldPrice: "1500",
      savePercentage: "20%",
      features: [
        "Everything in our free plan plus..",
        "Unlimited product addition and orders",
        "Website link (<yourshop>.zatiqeasy.com)",
        "Add your custom domain",
        "Unlimited order and receipt processing",
        "Theme customization",
        "Track customer loyalty & customer list",
        "Alerts enabled",
        "Dashboard",
        "Reports export",
      ],
      isMostPopular: true,
    },
    {
      planName: "6 Months Plan",
      price: "2200",
      currency: "BDT",
      oldPrice: "3000",
      savePercentage: "27%",
      features: [
        "Everything in our free plan plus..",
        "Unlimited product addition and orders",
        "Website link (<yourshop>.zatiqeasy.com)",
        "Add your custom domain",
        "Unlimited order and receipt processing",
        "Theme customization",
        "Track customer loyalty & customer list",
        "Alerts enabled",
        "Dashboard",
        "Reports export",
      ],
    },
    {
      planName: "Yearly Plan",
      price: "4000",
      currency: "BDT",
      oldPrice: "6000",
      savePercentage: "33%",
      features: [
        "Everything in our free plan plus..",
        "Unlimited product addition and orders",
        "Website link (<yourshop>.zatiqeasy.com)",
        "Add your custom domain",
        "Unlimited order and receipt processing",
        "Theme customization",
        "Track customer loyalty & customer list",
        "Alerts enabled",
        "Dashboard",
        "Reports export",
      ],
    },
  ];

  return (
    <div className="mb-12 text-center">
      <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
        Choose Your Plan
      </div>
      <h1 className="text-4xl font-bold mb-4">
        Simple, Transparent <span className="text-purple-600">Pricing</span>
      </h1>
      <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
        Choose the perfect plan for your business needs. All plans include our core features with premium support.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <PricingPlanCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingPlansSection;