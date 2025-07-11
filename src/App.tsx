import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Categories from "./pages/Categories";
import Customers from "./pages/Customers";
import Settings from "./pages/Settings";
import ShopDomain from "./pages/ShopDomain";
import AddProduct from "./pages/AddProduct";
import Billing from "./pages/Billing";
import ChatSupport from "./pages/ChatSupport";
import CreateLandingPage from "./pages/CreateLandingPage";
import CreateOrder from "./pages/CreateOrder";
import CreatePromoCode from "./pages/CreatePromoCode";
import CreateCategory from "./pages/CreateCategory";
import CustomizeTheme from "./pages/CustomizeTheme";
import DeliverySupport from "./pages/DeliverySupport";
import ManageShop from "./pages/ManageShop";
import OrderReport from "./pages/OrderReport";
import PaymentGateway from "./pages/PaymentGateway";
import SeoMarketing from "./pages/SeoMarketing";
import SiteAccess from "./pages/SiteAccess";
import SmsSupport from "./pages/SmsSupport";
import SocialLinks from "./pages/SocialLinks";
import SubscriptionPlans from "./pages/SubscriptionPlans";
import ShopPolicy from "./pages/ShopPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          {/* Product Management */}
          <Route path="/products" element={<Layout><Products /></Layout>} />
          <Route path="/products/add" element={<Layout><AddProduct /></Layout>} />
          <Route path="/categories" element={<Layout><Categories /></Layout>} />
          <Route path="/categories/create" element={<Layout><CreateCategory /></Layout>} />
          {/* Order Management */}
          <Route path="/orders" element={<Layout><Orders /></Layout>} />
          <Route path="/orders/create" element={<Layout><CreateOrder /></Layout>} />
          <Route path="/orders/report" element={<Layout><OrderReport /></Layout>} />
          {/* Customer Management */}
          <Route path="/customers" element={<Layout><Customers /></Layout>} />
          {/* Shop Configuration */}
          <Route path="/shop-domain" element={<Layout><ShopDomain /></Layout>} />
          <Route path="/manage-shop" element={<Layout><ManageShop /></Layout>} />
          <Route path="/settings" element={<Layout><Settings /></Layout>} />
          <Route path="/settings/billing" element={<Layout><Billing /></Layout>} />
          <Route path="/settings/payment-gateway" element={<Layout><PaymentGateway /></Layout>} />
          <Route path="/settings/shop-policy" element={<Layout><ShopPolicy /></Layout>} />
          <Route path="/settings/site-access" element={<Layout><SiteAccess /></Layout>} />
          <Route path="/settings/subscription-plans" element={<Layout><SubscriptionPlans /></Layout>} />
          {/* Marketing & Design */}
          <Route path="/marketing/promo-codes" element={<Layout><CreatePromoCode /></Layout>} />
          <Route path="/marketing/seo" element={<Layout><SeoMarketing /></Layout>} />
          <Route path="/marketing/social-links" element={<Layout><SocialLinks /></Layout>} />
          <Route path="/design/customize-theme" element={<Layout><CustomizeTheme /></Layout>} />
          <Route path="/design/landing-pages" element={<Layout><CreateLandingPage /></Layout>} />
          {/* Support */}
          <Route path="/support/chat" element={<Layout><ChatSupport /></Layout>} />
          <Route path="/support/delivery" element={<Layout><DeliverySupport /></Layout>} />
          <Route path="/support/sms" element={<Layout><SmsSupport /></Layout>} />
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;