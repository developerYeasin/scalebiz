"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/utils/api.js";
import { showSuccess, showError } from "@/utils/toast.js";

// Fetch store configuration
const fetchStoreConfiguration = async () => {
  const response = await api.get("/owner/store-configuration");
  // Initialize missing nested objects to prevent errors in the UI
  const config = response.data.data.configuration || {};

  // Initialize layout_settings and its children
  config.layout_settings = config.layout_settings || {};
  config.layout_settings.footer = config.layout_settings.footer || {};
  config.layout_settings.footer.columns = config.layout_settings.footer.columns || [];
  config.layout_settings.footer.storeInfo = config.layout_settings.footer.storeInfo || {};
  config.layout_settings.footer.newsletter = config.layout_settings.footer.newsletter || {};
  config.layout_settings.footer.bottomLinks = config.layout_settings.footer.bottomLinks || [];
  config.layout_settings.footer.socialLinks = config.layout_settings.footer.socialLinks || [];
  config.layout_settings.footer.openingHours = config.layout_settings.footer.openingHours || [];
  config.layout_settings.footer.paymentIcons = config.layout_settings.footer.paymentIcons || [];
  config.layout_settings.header = config.layout_settings.header || {};
  // Removed config.layout_settings.header.navItems initialization here as it's now handled below with the new structure.
  config.layout_settings.productCard = config.layout_settings.productCard || {};
  config.layout_settings.announcementBar = config.layout_settings.announcementBar || {};

  // NEW: Initialize header sections
  config.layout_settings.header.topBar = config.layout_settings.header.topBar || {
    enabled: true,
    messages: ["Lifetime Warranty", "Easy Returns", "Free US Shipping on $75+"],
  };
  config.layout_settings.header.utilityBar = config.layout_settings.header.utilityBar || {
    enabled: true,
    announcementText: "Add anything here or just remove it...",
    showLanguageSelector: true,
    showCurrencySelector: true,
    showAuthLinks: true,
  };
  // Initialize mainNav for logo and icon settings (without navItems)
  config.layout_settings.header.mainNav = config.layout_settings.header.mainNav || {
    enabled: true,
    logoUrl: "https://picsum.photos/seed/elessi-logo/100/30", // Placeholder logo
    showGridIcon: true,
    showCartIcon: true,
    showWishlistIcon: true,
    showCompareIcon: true,
    showSearchIcon: true,
  };

  // Initialize config.layout_settings.header.navItems with the structure from user's JSON
  config.layout_settings.header.navItems = config.layout_settings.header.navItems || [
    { path: "/", title: "Home" },
    {
      type: "dropdown",
      title: "SHOP",
      subLinks: [
        { path: "/collections/new", title: "New Arrivals" },
        { path: "/collections/best-sellers", title: "Best Sellers" },
        { path: "/collections/sale", title: "Sale" },
        { path: "/collections/all", title: "All Products" },
      ],
    },
    { path: "/contact", title: "Contact" },
  ];


  // Initialize delivery_settings
  config.delivery_settings = config.delivery_settings || { zones: [], default_charge: "0", charge_not_refundable: false };

  // Initialize page_settings and its children (including landingPage)
  config.page_settings = config.page_settings || {};
  config.page_settings.policies = config.page_settings.policies || {};
  config.page_settings.landingPage = config.page_settings.landingPage || {};
  config.page_settings.landingPage.components = config.page_settings.landingPage.components || [];

  // Initialize theme_settings
  config.theme_settings = config.theme_settings || {};
  config.theme_settings.typography = config.theme_settings.typography || {};
  config.theme_settings.button_style = config.theme_settings.button_style || {};
  config.theme_settings.announcement_bar = config.theme_settings.announcement_bar || {};

  // Initialize other top-level settings
  config.localization_settings = config.localization_settings || {};
  config.payment_settings = config.payment_settings || {};
  config.integrations = config.integrations || {};
  config.integrations.shop_rules = config.integrations.shop_rules || {};
  config.integrations.seo = config.integrations.seo || {};
  config.notification_settings = config.notification_settings || {};
  config.notification_settings.sms = config.notification_settings.sms || {};
  config.notification_settings.chat = config.notification_settings.chat || {};

  // Default values for landing page specific settings (now part of page_settings.landingPage)
  config.page_settings.landingPage.landing_page_template_id = config.page_settings.landingPage.landing_page_template_id !== null && config.page_settings.landingPage.landing_page_template_id !== undefined ? config.page_settings.landingPage.landing_page_template_id : 1;
  config.page_settings.landingPage.general_primary_color = config.page_settings.landingPage.general_primary_color || "#6B46C1";
  config.page_settings.landingPage.general_secondary_color = config.page_settings.landingPage.general_secondary_color || "#000000";
  config.page_settings.landingPage.show_product_details = config.page_settings.landingPage.show_product_details !== undefined ? config.page_settings.landingPage.show_product_details : false;
  config.page_settings.landingPage.seo_page_title = config.page_settings.landingPage.seo_page_title || "";
  config.page_settings.landingPage.seo_page_description = config.page_settings.landingPage.seo_page_description || "";
  config.page_settings.landingPage.scrolling_banner_text = config.page_settings.landingPage.scrolling_banner_text || "";
  config.page_settings.landingPage.top_banner_image_url = config.page_settings.landingPage.top_banner_image_url || "";
  config.page_settings.landingPage.featured_section_images = config.page_settings.landingPage.featured_section_images || [];
  config.page_settings.landingPage.featured_video_title = config.page_settings.landingPage.featured_video_title || "";
  config.page_settings.landingPage.featured_video_url = config.page_settings.landingPage.featured_video_url || "";
  config.page_settings.landingPage.showcased_banner_images = config.page_settings.landingPage.showcased_banner_images || [];
  config.page_settings.landingPage.static_banner_image_url = config.page_settings.landingPage.static_banner_image_url || "";
  config.page_settings.landingPage.product_images_section_title = config.page_settings.landingPage.product_images_section_title || "";
  config.page_settings.landingPage.product_images_section_images = config.page_settings.landingPage.product_images_section_images || [];


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