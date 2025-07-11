"use client";

import React from "react";
import SettingsPageLayout from "@/components/settings/SettingsPageLayout";
import ShopBasicInfo from "@/components/shop-settings/ShopBasicInfo";
import ShopQR from "@/components/shop-settings/ShopQR";
import ShopLogo from "@/components/shop-settings/ShopLogo";
import ShopTheme from "@/components/shop-settings/ShopTheme";
import ShopSettingsSection from "@/components/shop-settings/ShopSettingsSection";

const ShopSettingsPage = () => {
  return (
    <SettingsPageLayout title="Shop Settings">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ShopBasicInfo />
          <ShopSettingsSection />
        </div>
        <div className="lg:col-span-1">
          <ShopQR />
          <ShopLogo />
          <ShopTheme />
        </div>
      </div>
    </SettingsPageLayout>
  );
};

export default ShopSettingsPage;