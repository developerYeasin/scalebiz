"use client";

import React from "react";
import SettingsPageLayout from "@/components/settings/SettingsPageLayout";
import SmsServiceSection from "@/components/shop-settings/SmsServiceSection";

const SmsSupportPage = () => {
  return (
    <SettingsPageLayout title="SMS Support">
      <SmsServiceSection />
    </SettingsPageLayout>
  );
};

export default SmsSupportPage;