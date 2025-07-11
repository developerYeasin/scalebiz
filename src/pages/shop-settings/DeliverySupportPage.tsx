"use client";

import React from "react";
import SettingsPageLayout from "@/components/settings/SettingsPageLayout";
import DeliveryServiceSection from "@/components/shop-settings/DeliveryServiceSection";
import IntegrateDeliveryServicesSection from "@/components/shop-settings/IntegrateDeliveryServicesSection";

const DeliverySupportPage = () => {
  return (
    <SettingsPageLayout title="Delivery Support">
      <div className="mb-6">
        <img src="https://via.placeholder.com/1300x300" alt="Delivery Banner" className="w-full rounded-md object-cover" />
      </div>
      <DeliveryServiceSection />
      <IntegrateDeliveryServicesSection />
    </SettingsPageLayout>
  );
};

export default DeliverySupportPage;