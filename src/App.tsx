import { Toaster } from "@/components/ui/toaster.tsx"; // Updated import
import { Sonner } from "@/components/ui/sonner.tsx"; // Updated import
import { TooltipProvider } from "@/components/ui/tooltip.tsx"; // Updated import
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Index from "./pages/Index.tsx"; // Updated import
import NotFound from "./pages/NotFound.jsx"; // Keep as .jsx for now, will convert later
import Layout from "./components/Layout.tsx"; // Updated import
import Dashboard from "./pages/Dashboard.jsx"; // Keep as .jsx for now
import Orders from "./pages/Orders.jsx"; // Keep as .jsx for now
import CreateOrder from "./pages/CreateOrder.jsx"; // Keep as .jsx for now
import Products from "./pages/Products.tsx";
import AddProduct from "./pages/AddProduct.tsx";
import Categories from "./pages/Categories.tsx";
import Customers from "./pages/Customers.jsx"; // Keep as .jsx for now
import ManageShop from "./pages/ManageShop.jsx"; // Keep as .jsx for now
import CustomizeTheme from "./pages/CustomizeTheme.jsx"; // Keep as .jsx for now
import LandingPages from "./pages/LandingPages.jsx"; // Keep as .jsx for now
import PromoCodes from "./pages/PromoCodes.jsx"; // Keep as .jsx for now
import UsersAndPermissions from "./pages/UsersAndPermissions.jsx"; // Keep as .jsx for now
import Settings from "./pages/Settings.jsx"; // Keep as .jsx for now
import Analytics from "./pages/Analytics.jsx"; // Keep as .jsx for now

// Import shop settings pages
import ShopSettingsPage from "./pages/shop-settings/ShopSettingsPage.jsx"; // Keep as .jsx for now
import ShopDomainPage from "./pages/shop-settings/ShopDomainPage.jsx"; // Keep as .jsx for now
import ShopPolicyPage from "./pages/shop-settings/ShopPolicyPage.jsx"; // Keep as .jsx for now
import DeliverySupportPage from "./pages/shop-settings/DeliverySupportPage.jsx"; // Keep as .jsx for now
import PaymentGatewayPage from "./pages/shop-settings/PaymentGatewayPage.jsx"; // Keep as .jsx for now
import SeoMarketingPage from "./pages/shop-settings/SeoMarketingPage.jsx"; // Keep as .jsx for now
import SmsSupportPage from "./pages/shop-settings/SmsSupportPage.jsx"; // Keep as .jsx for now
import ChatSupportPage from "./pages/shop-settings/ChatSupportPage.jsx"; // Keep as .jsx for now
import SocialLinksPage from "./pages/shop-settings/SocialLinksPage.jsx"; // Keep as .jsx for now

// Import new pages
import Billing from "./pages/Billing.jsx"; // Keep as .jsx for now
import Subscription from "./pages/Subscription.jsx"; // Keep as .jsx for now
import ZatiqAcademy from "./pages/ZatiqAcademy.jsx"; // Keep as .jsx for now
import VendorDashboard from "./pages/vendor/VendorDashboard.jsx"; // Keep as .jsx for now
import LoginPage from "./pages/auth/LoginPage.tsx";
import RegisterPage from "./pages/auth/RegisterPage.tsx";
import Profile from "./pages/Profile.tsx";
import ProductViewPage from "./pages/products/ProductViewPage.tsx";
import ProductEditPage from "./pages/products/ProductEditPage.tsx";

import { isAuthenticated } from "./utils/auth.js"; // Keep as .js for now

const queryClient = new QueryClient();

// ProtectedRoute component to guard authenticated routes
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/index" element={<Index />} /> {/* Keep Index as a public entry point */}

          {/* Redirect root to dashboard if authenticated, otherwise to login */}
          <Route
            path="/"
            element={isAuthenticated() ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />}
          />

          {/* Application Routes - Protected with Layout */}
          <Route path="/dashboard" element={<ProtectedRoute><Layout><Dashboard /></Layout></ProtectedRoute>} />
          <Route path="/orders" element={<ProtectedRoute><Layout><Orders /></Layout></ProtectedRoute>} />
          <Route path="/orders/create" element={<ProtectedRoute><Layout><CreateOrder /></Layout></ProtectedRoute>} />
          <Route path="/products" element={<ProtectedRoute><Layout><Products /></Layout></ProtectedRoute>} />
          <Route path="/products/add" element={<ProtectedRoute><Layout><AddProduct /></Layout></ProtectedRoute>} />
          <Route path="/products/:productId" element={<ProtectedRoute><Layout><ProductViewPage /></Layout></ProtectedRoute>} />
          <Route path="/products/:productId/edit" element={<ProtectedRoute><Layout><ProductEditPage /></Layout></ProtectedRoute>} />
          <Route path="/categories" element={<ProtectedRoute><Layout><Categories /></Layout></ProtectedRoute>} />
          <Route path="/customers" element={<ProtectedRoute><Layout><Customers /></Layout></ProtectedRoute>} />
          <Route path="/manage-shop" element={<ProtectedRoute><Layout><ManageShop /></Layout></ProtectedRoute>} />
          {/* New Manage Shop Sub-Routes */}
          <Route path="/manage-shop/shop-settings" element={<ProtectedRoute><Layout><ShopSettingsPage /></Layout></ProtectedRoute>} />
          <Route path="/manage-shop/shop-domain" element={<ProtectedRoute><Layout><ShopDomainPage /></Layout></ProtectedRoute>} />
          <Route path="/manage-shop/shop-policy" element={<ProtectedRoute><Layout><ShopPolicyPage /></Layout></ProtectedRoute>} />
          <Route path="/manage-shop/delivery-support" element={<ProtectedRoute><Layout><DeliverySupportPage /></Layout></ProtectedRoute>} />
          <Route path="/manage-shop/payment-gateway" element={<ProtectedRoute><Layout><PaymentGatewayPage /></Layout></ProtectedRoute>} />
          <Route path="/manage-shop/seo-marketing" element={<ProtectedRoute><Layout><SeoMarketingPage /></Layout></ProtectedRoute>} />
          <Route path="/manage-shop/sms-support" element={<ProtectedRoute><Layout><SmsSupportPage /></Layout></ProtectedRoute>} />
          <Route path="/manage-shop/chat-support" element={<ProtectedRoute><Layout><ChatSupportPage /></Layout></ProtectedRoute>} />
          <Route path="/manage-shop/social-links" element={<ProtectedRoute><Layout><SocialLinksPage /></Layout></ProtectedRoute>} />
          {/* End New Manage Shop Sub-Routes */}
          <Route path="/customize-theme" element={<ProtectedRoute><Layout><CustomizeTheme /></Layout></ProtectedRoute>} />
          <Route path="/landing-pages" element={<ProtectedRoute><Layout><LandingPages /></Layout></ProtectedRoute>} />
          <Route path="/promo-codes" element={<ProtectedRoute><Layout><PromoCodes /></Layout></ProtectedRoute>} />
          <Route path="/users-and-permissions" element={<ProtectedRoute><Layout><UsersAndPermissions /></Layout></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><Layout><Settings /></Layout></ProtectedRoute>} />
          <Route path="/analytics" element={<ProtectedRoute><Layout><Analytics /></Layout></ProtectedRoute>} />
          {/* New Routes */}
          <Route path="/billing" element={<ProtectedRoute><Layout><Billing /></Layout></ProtectedRoute>} />
          <Route path="/subscription" element={<ProtectedRoute><Layout><Subscription /></Layout></ProtectedRoute>} />
          <Route path="/zatiq-academy" element={<ProtectedRoute><Layout><ZatiqAcademy /></Layout></ProtectedRoute>} />
          <Route path="/vendor-dashboard" element={<ProtectedRoute><Layout><VendorDashboard /></Layout></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Layout><Profile /></Layout></ProtectedRoute>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;