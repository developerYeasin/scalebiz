"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/utils/api.js";
import { showSuccess, showError } from "@/utils/toast.js";

// Fetch store configuration
const fetchStoreConfiguration = async () => {
  const response = await api.get("/owner/store-configuration");
  // Initialize missing nested objects to prevent errors in the UI
  const config = response.data.data.configuration || {};
  config.layout_settings = config.layout_settings || {};
  config.layout_settings.footer = config.layout_settings.footer || {};
  config.layout_settings.footer.storeInfo = config.layout_settings.footer.storeInfo || {};
  config.layout_settings.announcementBar = config.layout_settings.announcementBar || {};
  config.localization_settings = config.localization_settings || {};
  config.payment_settings = config.payment_settings || {};
  config.integrations = config.integrations || {};
  config.integrations.shop_rules = config.integrations.shop_rules || {};
  config.integrations.seo = config.integrations.seo || {};
  config.notification_settings = config.notification_settings || {};
  config.notification_settings.sms = config.notification_settings.sms || {};
  config.notification_settings.chat = config.notification_settings.chat || {};
  config.delivery_settings = config.delivery_settings || { zones: [] };
  config.page_settings = config.page_settings || {};
  config.page_settings.policies = config.page_settings.policies || {};
  config.theme_settings = config.theme_settings || {};
  return config;
};

// Update store configuration
const updateStoreConfiguration = async (configuration) => {
  const response = await api.put("/owner/store-configuration", configuration);
  return response.data;
};

export const useStoreConfiguration = () => {
  const queryClient = useQueryClient();

  const { data: configuration, isLoading, error } = useQuery({
    queryKey: ["storeConfiguration"],
    queryFn: fetchStoreConfiguration,
  });

  const updateMutation = useMutation({
    mutationFn: updateStoreConfiguration,
    onSuccess: (data) => {
      queryClient.setQueryData(["storeConfiguration"], data.data.configuration);
      showSuccess(data.message || "Settings updated successfully!");
    },
    onError: (err) => {
      showError(err.response?.data?.message || "Failed to update settings.");
    },
  });

  return {
    configuration,
    isLoading,
    error,
    updateConfiguration: updateMutation.mutate,
    isUpdating: updateMutation.isPending,
  };
};