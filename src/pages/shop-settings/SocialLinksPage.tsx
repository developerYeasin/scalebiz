"use client";

import React from "react";
import SettingsPageLayout from "@/components/settings/SettingsPageLayout";
import SocialLinksSection from "@/components/shop-settings/SocialLinksSection";

const SocialLinksPage = () => {
  return (
    <SettingsPageLayout title="Social Links">
      <SocialLinksSection />
    </SettingsPageLayout>
  );
};

export default SocialLinksPage;