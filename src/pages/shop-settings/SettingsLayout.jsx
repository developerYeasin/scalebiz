"use client";

import React from 'react';
import { Outlet } from 'react-router-dom';
import { StoreConfigurationProvider } from '@/contexts/StoreConfigurationContext.jsx';

const SettingsLayout = () => {
  return (
    <StoreConfigurationProvider>
      <Outlet />
    </StoreConfigurationProvider>
  );
};

export default SettingsLayout;