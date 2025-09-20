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
import ShopSettingsPage from "./pages/shop-settings/ShopSettingsPage.jsx";
import ShopDomainPage from "./pages/shop-settings/ShopDomainPage.jsx";
import ShopPolicyPage from "./pages/shop-settings/ShopPolicyPage.jsx";
import DeliverySupportPage from "./pages/shop-settings/DeliverySupportPage.jsx";
import PaymentGatewayPage from "./pages/shop-settings/PaymentGatewayPage.jsx";
import SeoMarketingPage from "./pages/shop-settings/SeoMarketingPage.jsx";
import SmsSupportPage from "./pages/shop-settings/SmsSupportPage.jsx";
import ChatSupportPage from "./pages/shop-settings/ChatSupportPage.jsx";
import SocialLinksPage from "./pages/shop-settings/SocialLinksPage.jsx";

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