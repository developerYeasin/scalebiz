"use client";

import React from 'react';
import { Outlet } from 'react-router-dom';
import { StoreConfigurationProvider } from '@/contexts/StoreConfigurationContext.jsx';
import { ThemeSettingsProvider } from '@/contexts/ThemeSettingsContext.jsx';
import { LandingPageSettingsProvider } from '@/contexts/LandingPageSettingsContext.jsx';

const SettingsLayout = () => {
  return (
    <StoreConfigurationProvider>
      <ThemeSettingsProvider>
        <LandingPageSettingsProvider>
          <Outlet />
        </LandingPageSettingsProvider>
      </ThemeSettingsProvider>
    </StoreConfigurationProvider>
  );
};

export default SettingsLayout;