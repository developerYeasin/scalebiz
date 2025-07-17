"use client";

import React from "react";
import GettingStartedCard from "./GettingStartedCard.jsx";
import { Package, Settings, CheckCircle2 } from "lucide-react"; // Importing icons for the cards
import { showSuccess } from "@/utils/toast.js"; // Import toast utility

const GettingStartedSection = () => {
  // State to track the completion status of "Create your store"
  const [isStoreCreated, setIsStoreCreated] = React.useState(false);
  // For other cards, hardcoded for now. In a real app, these would come from API.
  const isProductAdded = false;
  const isDeliverySetup = false;

  const handleCreateStore = () => {
    // Simulate API call
    showSuccess("Creating your store...");
    setTimeout(() => {
      setIsStoreCreated(true);
      showSuccess("Your store has been created successfully!");
    }, 2000); // Simulate 2-second API call
  };

  return (
    <div className="mb-6 space-y-4">
      <GettingStartedCard
        icon={CheckCircle2}
        title="Create your store"
        description="Enter key details about your business to get started."
        buttonText={isStoreCreated ? "View" : "Create"}
        buttonLink={isStoreCreated ? "/manage-shop/shop-settings" : null}
        onActionClick={isStoreCreated ? null : handleCreateStore}
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