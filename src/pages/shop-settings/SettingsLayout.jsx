"use client";

import React from 'react';
import { Outlet } from 'react-router-dom';
import { StoreConfigurationProvider } from '@/contexts/StoreConfigurationContext.jsx';
import { ThemeSettingsProvider } from '@/contexts/ThemeSettingsContext.jsx';

const SettingsLayout = () => {
  return (
    <StoreConfigurationProvider>
      <ThemeSettingsProvider>
        <Outlet />
      </ThemeSettingsProvider>
    </StoreConfigurationProvider>
  );
};

export default SettingsLayout;