"use client";

import { useQuery } from "@tanstack/react-query";
import api from "@/utils/api.js";

const fetchAvailableThemes = async () => {
  // In a real application, this would fetch from a '/api/v1/themes' endpoint
  // For now, we'll mock the data as it's static in the frontend components
  return [
    { id: 1, name: "Basic", imageSrc: "https://via.placeholder.com/300x200?text=Basic+Theme", status: "active" },
    { id: 2, name: "Premium", imageSrc: "https://via.placeholder.com/300x200?text=Premium+Theme", status: "premium" },
    { id: 3, name: "Aurora", imageSrc: "https://via.placeholder.com/300x200?text=Aurora+Theme", status: "premium" },
    { id: 4, name: "Luxura", imageSrc: "https://via.placeholder.com/300x200?text=Luxura+Theme", status: "premium" },
    { id: 5, name: "More themes coming", imageSrc: "", status: "coming-soon" },
  ];
};

export const useAvailableThemes = () => {
  return useQuery({
    queryKey: ["availableThemes"],
    queryFn: fetchAvailableThemes,
    staleTime: Infinity, // These are static, so no need to refetch often
  });
};