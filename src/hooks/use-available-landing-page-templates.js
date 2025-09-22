"use client";

import { useQuery } from "@tanstack/react-query";
import api from "@/utils/api.js";

const fetchAvailableLandingPageTemplates = async () => {
  // In a real application, this would fetch from a '/api/v1/landing-page-templates' endpoint
  // For now, we'll mock the data as it's static in the frontend components
  return [
    { id: 1, name: "Arcadia", imageSrc: "https://via.placeholder.com/300x200?text=Arcadia+Theme", status: "active" },
    { id: 2, name: "Nirvana", imageSrc: "https://via.placeholder.com/300x200?text=Nirvana+Theme", status: "premium" },
    { id: 3, name: "More themes coming", imageSrc: "", status: "coming-soon" },
  ];
};

export const useAvailableLandingPageTemplates = () => {
  return useQuery({
    queryKey: ["availableLandingPageTemplates"],
    queryFn: fetchAvailableLandingPageTemplates,
    staleTime: Infinity, // These are static, so no need to refetch often
  });
};