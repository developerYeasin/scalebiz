"use client";

import React from "react";
import SettingsPageLayout from "@/components/settings/SettingsPageLayout";
import SeoMarketingIntegrationsSection from "@/components/shop-settings/SeoMarketingIntegrationsSection";

const SeoMarketingPage = () => {
  return (
    <SettingsPageLayout title="SEO & Marketing Integrations">
      <SeoMarketingIntegrationsSection />
    </SettingsPageLayout>
  );
};

export default SeoMarketingPage;