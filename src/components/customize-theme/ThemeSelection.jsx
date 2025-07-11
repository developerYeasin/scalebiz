"use client";

import React from "react";
import ThemeCard from "./ThemeCard.jsx";

const ThemeSelection = () => {
  const [selectedTheme, setSelectedTheme] = React.useState("Basic");

  const themes = [
    {
      title: "Basic",
      imageSrc: "https://via.placeholder.com/300x200?text=Basic+Theme",
      status: "active",
    },
    {
      title: "Premium",
      imageSrc: "https://via.placeholder.com/300x200?text=Premium+Theme",
      status: "premium",
    },
    {
      title: "Aurora",
      imageSrc: "https://via.placeholder.com/300x200?text=Aurora+Theme",
      status: "premium",
    },
    {
      title: "Luxura",
      imageSrc: "https://via.placeholder.com/300x200?text=Luxura+Theme",
      status: "premium",
    },
    {
      title: "More themes coming",
      imageSrc: "", // No image for coming soon
      status: "coming-soon",
    },
  ];

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Themes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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

export default ThemeSelection;