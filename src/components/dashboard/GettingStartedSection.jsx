"use client";

import React from "react";
import GettingStartedCard from "./GettingStartedCard.jsx";
import { Package, Settings, CheckCircle2 } from "lucide-react"; // Importing icons for the cards

const GettingStartedSection = () => {
  // For now, isCompleted is hardcoded to false. In a real app, this would come from API.
  const isStoreCreated = false; // Example: Check if shop basic info is filled
  const isProductAdded = false; // Example: Check if at least one product exists
  const isDeliverySetup = false; // Example: Check if delivery charges are configured

  return (
    <div className="mb-6 space-y-4">
      <GettingStartedCard
        icon={CheckCircle2} // Using CheckCircle2 as a placeholder for the initial icon
        title="Create your store"
        description="Enter key details about your business to get started."
        buttonText="View"
        buttonLink="/manage-shop/shop-settings"
        isCompleted={isStoreCreated}
      />
      <GettingStartedCard
        icon={Package}
        title="Add your first product"
        description="List your first product and start selling in minutes."
        buttonText="Add"
        buttonLink="/products/add"
        isCompleted={isProductAdded}
      />
      <GettingStartedCard
        icon={Settings}
        title="Setup delivery charge"
        description="Define shipping rates and delivery options for your customers."
        buttonText="Setup"
        buttonLink="/manage-shop/delivery-support"
        isCompleted={isDeliverySetup}
      />
    </div>
  );
};

export default GettingStartedSection;