"use client";

import React from "react";
import LandingPageHeader from "@/components/landing-pages/LandingPageHeader.jsx";
import AvailableThemesSection from "@/components/landing-pages/AvailableThemesSection.jsx";
import ThemeSetupControls from "@/components/landing-pages/ThemeSetupControls.jsx";
import PageSeoSettings from "@/components/landing-pages/PageSeoSettings.jsx";
import GeneralSettings from "@/components/landing-pages/GeneralSettings.jsx";
import ScrollingBannerText from "@/components/landing-pages/ScrollingBannerText.jsx";
import TopBannerSection from "@/components/landing-pages/TopBannerSection.jsx";
import FeaturedSection from "@/components/landing-pages/FeaturedSection.jsx";
import FeaturedVideoSection from "@/components/landing-pages/FeaturedVideoSection.jsx";
import ShowcasedBannerSection from "@/components/landing-pages/ShowcasedBannerSection.jsx";
import StaticBannerSection from "@/components/landing-pages/StaticBannerSection.jsx";
import ProductImagesSection from "@/components/landing-pages/ProductImagesSection.jsx";
import ApplyThemeButton from "@/components/landing-pages/ApplyThemeButton.jsx";
import HeroBannerSliderSection from "@/components/landing-pages/HeroBannerSliderSection.jsx"; // New import
import { useStoreLandingPageSettings } from "@/hooks/use-store-landing-page-settings.js";
import { Skeleton } from "@/components/ui/skeleton.jsx";

const LandingPages = () => {
  const { isLoading, error } = useStoreLandingPageSettings();

  if (isLoading) {
    return (
      <div className="p-4 md:p-6 bg-background space-y-6">
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  if (error) {
    return <div className="p-4 md:p-6 text-destructive">Error loading landing page settings: {error.message}</div>;
  }

  return (
    <div className="p-4 md:p-6 bg-background">
      <LandingPageHeader />
      <AvailableThemesSection />
      <ThemeSetupControls />
      <PageSeoSettings />
      <GeneralSettings />
      <ScrollingBannerText />
      <TopBannerSection />
      <HeroBannerSliderSection /> {/* Added the new section here */}
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