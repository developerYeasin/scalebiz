import { Toaster } from "@/components/ui/toaster.jsx";
import { Sonner } from "@/components/ui/sonner.jsx";
import { TooltipProvider } from "@/components/ui/tooltip.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Index from "./pages/Index.jsx";
import NotFound from "./pages/NotFound.jsx";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Orders from "./pages/Orders.jsx";
import CreateOrder from "./pages/CreateOrder.jsx";
import Products from "./pages/Products.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import Categories from "./pages/Categories.jsx";
import Customers from "./pages/Customers.jsx";
import ManageShop from "./pages/ManageShop.jsx";
import CustomizeTheme from "./pages/CustomizeTheme.jsx";
import LandingPages from "./pages/LandingPages.jsx";
import PromoCodes from "./pages/PromoCodes.jsx";
import UsersAndPermissions from "./pages/UsersAndPermissions.jsx";
import Settings from "./pages/Settings.jsx";
import Analytics from "./pages/Analytics.jsx";

// Import shop settings pages
import SettingsLayout from "./pages/shop-settings/SettingsLayout.jsx";
import ShopSettingsPage from "./pages/shop-settings/ShopSettingsPage.jsx";
import ShopDomainPage from "./pages/shop-settings/ShopDomainPage.jsx";
import ShopPolicyPage from "./pages/shop-settings/ShopPolicyPage.jsx";
import DeliverySupportPage from "./pages/shop-settings/DeliverySupportPage.jsx";
import PaymentGatewayPage from "./pages/shop-settings/PaymentGatewayPage.jsx";
import SeoMarketingPage from "./pages/shop-settings/SeoMarketingPage.jsx";
import SmsSupportPage from "./pages/shop-settings/SmsSupportPage.jsx";
import ChatSupportPage from "./pages/shop-settings/ChatSupportPage.jsx";
import SocialLinksPage from "./pages/shop-settings/SocialLinksPage.jsx";
import FooterSettingsPage from "./pages/shop-settings/FooterSettingsPage.jsx";
import HeaderSettingsPage from "./pages/shop-settings/HeaderSettingsPage.jsx"; // New import

// Import new pages
import Billing from "./pages/Billing.jsx";
import Subscription from "./pages/Subscription.jsx";
import ZatiqAcademy from "./pages/ZatiqAcademy.jsx";
import VendorDashboard from "./pages/vendor/VendorDashboard.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import RegisterPage from "./pages/auth/RegisterPage.jsx";
import Profile from "./pages/Profile.jsx";
import ProductViewPage from "./pages/products/ProductViewPage.jsx";
import ProductEditPage from "./pages/products/ProductEditPage.jsx";

import { isAuthenticated } from "./utils/auth.js";
import { StoreConfigurationProvider } from './contexts/StoreConfigurationContext.jsx'; // Import providers
import { ThemeSettingsProvider } from './contexts/ThemeSettingsContext.jsx'; // Import providers

const queryClient = new QueryClient();

// ProtectedRoute component to guard authenticated routes
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner position="top-center" />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/index" element={<Index />} />

          {/* Redirect root to dashboard if authenticated, otherwise to login */}
          <Route
            path="/"
            element={isAuthenticated() ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />}
          />

          {/* Application Routes - Protected with Layout and Context Providers */}
          <Route
            element={
              <ProtectedRoute>
                <StoreConfigurationProvider>
                  <ThemeSettingsProvider>
                    <Layout />
                  </ThemeSettingsProvider>
                </StoreConfigurationProvider>
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/create" element={<CreateOrder />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/add" element={<AddProduct />} />
            <Route path="/products/:productId" element={<ProductViewPage />} />
            <Route path="/products/:productId/edit" element={<ProductEditPage />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/manage-shop" element={<ManageShop />} />
            
            {/* Settings-related Routes with new SettingsLayout */}
            <Route element={<SettingsLayout />}>
              <Route path="/manage-shop/shop-settings" element={<ShopSettingsPage />} />
              <Route path="/manage-shop/header-settings" element={<HeaderSettingsPage />} />
              <Route path="/manage-shop/shop-domain" element={<ShopDomainPage />} />
              <Route path="/manage-shop/shop-policy" element={<ShopPolicyPage />} />
              <Route path="/manage-shop/delivery-support" element={<DeliverySupportPage />} />
              <Route path="/manage-shop/payment-gateway" element={<PaymentGatewayPage />} />
              <Route path="/manage-shop/seo-marketing" element={<SeoMarketingPage />} />
              <Route path="/manage-shop/sms-support" element={<SmsSupportPage />} />
              <Route path="/manage-shop/chat-support" element={<ChatSupportPage />} />
              <Route path="/manage-shop/social-links" element={<SocialLinksPage />} />
              <Route path="/manage-shop/footer-settings" element={<FooterSettingsPage />} />
              <Route path="/customize-theme" element={<CustomizeTheme />} />
              <Route path="/landing-pages" element={<LandingPages />} />
            </Route>
            
            <Route path="/promo-codes" element={<PromoCodes />} />
            <Route path="/users-and-permissions" element={<UsersAndPermissions />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/analytics" element={<Analytics />} />
            {/* New Routes */}
            <Route path="/billing" element={<Billing />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/zatiq-academy" element={<ZatiqAcademy />} />
            <Route path="/vendor-dashboard" element={<VendorDashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;