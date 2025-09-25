"use client";

import { useQuery } from "@tanstack/react-query";
import api from "@/utils/api.js";

const fetchAvailableThemes = async () => {
  const response = await api.get("/owner/themes");
  return response.data.data.themes.map(theme => ({
    id: theme.theme_id, // Use theme.theme_id (e.g., "basic-1") as the identifier for selection
    name: theme.name,
    imageSrc: theme.preview_image_url,
    status: theme.access_level === 'free' ? 'active' : (theme.access_level === 'standard' ? 'premium' : 'coming-soon'),
  }));
};

export const useAvailableThemes = () => {
  return useQuery({
    queryKey: ["availableThemes"],
    queryFn: fetchAvailableThemes,
    staleTime: Infinity, // These are static, so no need to refetch often
  });
};