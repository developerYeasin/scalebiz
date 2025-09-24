"use client";

import { useQuery } from "@tanstack/react-query";
import api from "@/utils/api.js";

const fetchAvailableLandingPageTemplates = async () => {
  const response = await api.get("/owner/landing-page-templates");
  return response.data.data.templates.map(template => ({
    id: template.id,
    name: template.name,
    imageSrc: template.preview_image_url,
    status: template.access_level === 'free' ? 'active' : (template.access_level === 'standard' ? 'premium' : 'coming-soon'), // Map access_level to status
  }));
};

export const useAvailableLandingPageTemplates = () => {
  return useQuery({
    queryKey: ["availableLandingPageTemplates"],
    queryFn: fetchAvailableLandingPageTemplates,
    staleTime: Infinity, // These are static, so no need to refetch often
  });
};