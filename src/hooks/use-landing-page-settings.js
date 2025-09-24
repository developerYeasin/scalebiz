"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/utils/api.js";
import { showSuccess, showError } from "@/utils/toast.js";
import { useAvailableLandingPageTemplates } from "./use-available-landing-page-templates.js"; // Import the new hook

const fetchLandingPageSettings = async () => {
  const response = await api.get("/owner/landing-page-settings");
  // Corrected access path from response.data.data.landing_page_settings to response.data.data.settings
  const settings = response.data.data.settings || {};
  const defaultLandingPageTemplateId = 1; // Assuming 'Arcadia' template has ID 1 and is always available

  return {
    landing_page_template_id: settings.landing_page_template_id !== null && settings.landing_page_template_id !== undefined ? settings.landing_page_template_id : defaultLandingPageTemplateId,
    general_primary_color: settings.general_primary_color || "#6B46C1",
    general_secondary_color: settings.general_secondary_color || "#000000",
    show_product_details: settings.show_product_details !== undefined ? settings.show_product_details : false,
    seo_page_title: settings.seo_page_title || "",
    seo_page_description: settings.seo_page_description || "",
    scrolling_banner_text: settings.scrolling_banner_text || "",
    top_banner_image_url: settings.top_banner_image_url || "",
    featured_section_images: settings.featured_section_images || [],
    featured_video_title: settings.featured_video_title || "",
    featured_video_url: settings.featured_video_url || "",
    showcased_banner_images: settings.showcased_banner_images || [],
    static_banner_image_url: settings.static_banner_image_url || "",
    product_images_section_title: settings.product_images_section_title || "",
    product_images_section_images: settings.product_images_section_images || [],
  };
};

const updateLandingPageSettings = async (newSettings) => {
  const response = await api.put("/owner/landing-page-settings", newSettings);
  return response.data.data.settings; // Also updated return path for consistency
};

export const useLandingPageSettings = () => {
  const queryClient = useQueryClient();
  const { data: availableLandingPageTemplates, isLoading: isLoadingAvailableTemplates, error: errorAvailableTemplates } = useAvailableLandingPageTemplates(); // Fetch available templates

  const { data: landingPageSettings, isLoading: isLoadingLandingPageSettings, error: errorLandingPageSettings } = useQuery({
    queryKey: ["landingPageSettings"],
    queryFn: fetchLandingPageSettings,
    select: (data) => {
      // Map landing_page_template_id to name for easier use in components
      const selectedTemplate = availableLandingPageTemplates?.find(template => template.id === data.landing_page_template_id);
      return {
        ...data,
        selected_landing_theme_name: selectedTemplate ? selectedTemplate.name : "Arcadia", // Default to "Arcadia"
      };
    },
    enabled: !!availableLandingPageTemplates, // Only run this query once availableLandingPageTemplates are loaded
  });

  const updateMutation = useMutation({
    mutationFn: updateLandingPageSettings,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["landingPageSettings"] }); // Invalidate to refetch and re-select
      showSuccess("Landing page settings updated successfully!");
    },
    onError: (err) => {
      showError(err.response?.data?.message || "Failed to update landing page settings.");
    },
  });

  return {
    landingPageSettings,
    isLoading: isLoadingLandingPageSettings || isLoadingAvailableTemplates, // Combined loading state
    error: errorLandingPageSettings || errorAvailableTemplates, // Combined error state
    updateLandingPageSettings: updateMutation.mutate,
    isUpdating: updateMutation.isPending,
  };
};