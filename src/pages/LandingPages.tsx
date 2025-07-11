"use client";

import React from "react";
import LandingPageHeader from "@/components/landing-pages/LandingPageHeader";
import AvailableThemesSection from "@/components/landing-pages/AvailableThemesSection";
import ThemeSetupControls from "@/components/landing-pages/ThemeSetupControls";
import PageSeoSettings from "@/components/landing-pages/PageSeoSettings";
import GeneralSettings from "@/components/landing-pages/GeneralSettings";
import ScrollingBannerText from "@/components/landing-pages/ScrollingBannerText";
import TopBannerSection from "@/components/landing-pages/TopBannerSection";
import FeaturedSection from "@/components/landing-pages/FeaturedSection";
import FeaturedVideoSection from "@/components/landing-pages/FeaturedVideoSection";
import ShowcasedBannerSection from "@/components/landing-pages/ShowcasedBannerSection";
import StaticBannerSection from "@/components/landing-pages/StaticBannerSection";
import ProductImagesSection from "@/components/landing-pages/ProductImagesSection";
import ApplyThemeButton from "@/components/landing-pages/ApplyThemeButton";

const LandingPages = () => {
  return (
    <div className="p-4 md:p-6">
      <LandingPageHeader />
      <AvailableThemesSection />
      <ThemeSetupControls />
      <PageSeoSettings />
      <GeneralSettings />
      <ScrollingBannerText />
      <TopBannerSection />
      <FeaturedSection />
      <FeaturedVideoSection />
      <ShowcasedBannerSection />
      <StaticBannerSection />
      <ProductImagesSection />
      <ApplyThemeButton />
    </div>
  );
};

export default LandingPages;