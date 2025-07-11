"use client";

import React from "react";
import SettingsPageLayout from "@/components/settings/SettingsPageLayout";
import ChatSupportSection from "@/components/shop-settings/ChatSupportSection";

const ChatSupportPage = () => {
  return (
    <SettingsPageLayout title="Chat Support">
      <ChatSupportSection />
    </SettingsPageLayout>
  );
};

export default ChatSupportPage;