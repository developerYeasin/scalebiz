"use client";

import React from "react";
import SettingsPageLayout from "@/components/settings/SettingsPageLayout";
import PaymentMethodsSection from "@/components/shop-settings/PaymentMethodsSection";

const PaymentGatewayPage = () => {
  return (
    <SettingsPageLayout title="Payment Gateway">
      <PaymentMethodsSection />
    </SettingsPageLayout>
  );
};

export default PaymentGatewayPage;