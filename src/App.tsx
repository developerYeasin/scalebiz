import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import CreateOrder from "./pages/CreateOrder";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import Categories from "./pages/Categories";
import Customers from "./pages/Customers";
import ManageShop from "./pages/ManageShop";
import CustomizeTheme from "./pages/CustomizeTheme";
import LandingPages from "./pages/LandingPages";
import PromoCodes from "./pages/PromoCodes";
import UsersAndPermissions from "./pages/UsersAndPermissions";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";

// Import new shop settings pages
import ShopSettingsPage from "./pages/shop-settings/ShopSettingsPage";
import ShopDomainPage from "./pages/shop-settings/ShopDomainPage";
import ShopPolicyPage from "./pages/shop-settings/ShopPolicyPage";
import DeliverySupportPage from "./pages/shop-settings/DeliverySupportPage";
import PaymentGatewayPage from "./pages/shop-settings/PaymentGatewayPage";
import SeoMarketingPage from "./pages/shop-settings/SeoMarketingPage";
import SmsSupportPage from "./pages/shop-settings/SmsSupportPage";
import ChatSupportPage from "./pages/shop-settings/ChatSupportPage";
import SocialLinksPage from "./pages/shop-settings/SocialLinksPage";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/orders" element={<Layout><Orders /></Layout>} />
          <Route path="/orders/create" element={<Layout><CreateOrder /></Layout>} />
          <Route path="/products" element={<Layout><Products /></Layout>} />
          <Route path="/products/add" element={<Layout><AddProduct /></Layout>} />
          <Route path="/categories" element={<Layout><Categories /></Layout>} />
          <Route path="/customers" element={<Layout><Customers /></Layout>} />
          <Route path="/manage-shop" element={<Layout><ManageShop /></Layout>} />
          {/* New Manage Shop Sub-Routes */}
          <Route path="/manage-shop/shop-settings" element={<Layout><ShopSettingsPage /></Layout>} />
          <Route path="/manage-shop/shop-domain" element={<Layout><ShopDomainPage /></Layout>} />
          <Route path="/manage-shop/shop-policy" element={<Layout><ShopPolicyPage /></Layout>} />
          <Route path="/manage-shop/delivery-support" element={<Layout><DeliverySupportPage /></Layout>} />
          <Route path="/manage-shop/payment-gateway" element={<Layout><PaymentGatewayPage /></Layout>} />
          <Route path="/manage-shop/seo-marketing" element={<Layout><SeoMarketingPage /></Layout>} />
          <Route path="/manage-shop/sms-support" element={<Layout><SmsSupportPage /></Layout>} />
          <Route path="/manage-shop/chat-support" element={<Layout><ChatSupportPage /></Layout>} />
          <Route path="/manage-shop/social-links" element={<Layout><SocialLinksPage /></Layout>} />
          {/* End New Manage Shop Sub-Routes */}
          <Route path="/customize-theme" element={<Layout><CustomizeTheme /></Layout>} />
          <Route path="/landing-pages" element={<Layout><LandingPages /></Layout>} />
          <Route path="/promo-codes" element={<Layout><PromoCodes /></Layout>} />
          <Route path="/users-and-permissions" element={<Layout><UsersAndPermissions /></Layout>} />
          <Route path="/settings" element={<Layout><Settings /></Layout>} />
          <Route path="/analytics" element={<Layout><Analytics /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;