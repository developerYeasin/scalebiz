import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Dashboard /></Layout>} />
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
          {/* New Routes */}
          <Route path="/billing" element={<Layout><Billing /></Layout>} />
          <Route path="/subscription" element={<Layout><Subscription /></Layout>} />
          <Route path="/zatiq-academy" element={<Layout><ZatiqAcademy /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;