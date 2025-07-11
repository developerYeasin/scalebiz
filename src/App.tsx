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
import ShopDomain from "./pages/ShopDomain";
import Settings from "./pages/Settings"; // Keeping this for now, but ShopSettings will be the primary settings page
import AddProduct from "./pages/AddProduct";
import CreateOrder from "./pages/CreateOrder";
import CreateCategory from "./pages/CreateCategory";
import ManageShop from "./pages/ManageShop";
import ShopSettings from "./pages/ShopSettings";
import ShopPolicy from "./pages/ShopPolicy";
import DeliverySupport from "./pages/DeliverySupport";
import PaymentGateway from "./pages/PaymentGateway";
import SeoMarketing from "./pages/SeoMarketing";
import SmsSupport from "./pages/SmsSupport";
import ChatSupport from "./pages/ChatSupport";
import SocialLinks from "./pages/SocialLinks";
import CustomizeTheme from "./pages/CustomizeTheme";
import LandingPages from "./pages/LandingPages";
import PromoCodes from "./pages/PromoCodes";
import CreatePromoCode from "./pages/CreatePromoCode";
import UsersPermissions from "./pages/UsersPermissions";
import OrderReport from "./pages/OrderReport";
import Analytics from "./pages/Analytics";
import SubscriptionPlans from "./pages/SubscriptionPlans";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/products" element={<Layout><Products /></Layout>} />
          <Route path="/products/add" element={<Layout><AddProduct /></Layout>} />
          <Route path="/orders" element={<Layout><Orders /></Layout>} />
          <Route path="/orders/create" element={<Layout><CreateOrder /></Layout>} />
          <Route path="/categories" element={<Layout><Categories /></Layout>} />
          <Route path="/categories/create" element={<Layout><CreateCategory /></Layout>} />
          <Route path="/customers" element={<Layout><Customers /></Layout>} />
          
          {/* Configuration Routes */}
          <Route path="/manage-shop" element={<Layout><ManageShop /></Layout>} />
          <Route path="/manage-shop/settings" element={<Layout><ShopSettings /></Layout>} />
          <Route path="/manage-shop/domain" element={<Layout><ShopDomain /></Layout>} />
          <Route path="/manage-shop/policy" element={<Layout><ShopPolicy /></Layout>} />
          <Route path="/manage-shop/delivery" element={<Layout><DeliverySupport /></Layout>} />
          <Route path="/manage-shop/payment" element={<Layout><PaymentGateway /></Layout>} />
          <Route path="/manage-shop/seo-marketing" element={<Layout><SeoMarketing /></Layout>} />
          <Route path="/manage-shop/sms" element={<Layout><SmsSupport /></Layout>} />
          <Route path="/manage-shop/chat" element={<Layout><ChatSupport /></Layout>} />
          <Route path="/manage-shop/social-links" element={<Layout><SocialLinks /></Layout>} />

          <Route path="/customize-theme" element={<Layout><CustomizeTheme /></Layout>} />
          <Route path="/landing-pages" element={<Layout><LandingPages /></Layout>} />
          <Route path="/promo-codes" element={<Layout><PromoCodes /></Layout>} />
          <Route path="/promo-codes/create" element={<Layout><CreatePromoCode /></Layout>} />
          <Route path="/users-permissions" element={<Layout><UsersPermissions /></Layout>} />

          {/* Reports Routes */}
          <Route path="/analytics" element={<Layout><Analytics /></Layout>} />
          <Route path="/order-report" element={<Layout><OrderReport /></Layout>} />

          {/* Other Top-Level Routes */}
          <Route path="/subscription-plans" element={<Layout><SubscriptionPlans /></Layout>} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;