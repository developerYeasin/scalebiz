"use client";

import React from "react";
import ThemeCard from "@/components/customize-theme/ThemeCard";

const AvailableThemesSection = () => {
  const [selectedTheme, setSelectedTheme] = React.useState("Arcadia");

  const themes = [
    {
      title: "Arcadia",
      imageSrc: "https://via.placeholder.com/300x200?text=Arcadia+Theme",
      status: "active" as const,
    },
    {
      title: "Nirvana",
      imageSrc: "https://via.placeholder.com/300x200?text=Nirvana+Theme",
      status: "premium" as const,
    },
    {
      title: "More themes coming",
      imageSrc: "",
      status: "coming-soon" as const,
    },
  ];

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Available Themes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {themes.map((theme) => (
          <ThemeCard
            key={theme.title}
            title={theme.title}
            imageSrc={theme.imageSrc}
            status={theme.status}
            isSelected={selectedTheme === theme.title}
            onSelect={() => setSelectedTheme(theme.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default AvailableThemesSection;