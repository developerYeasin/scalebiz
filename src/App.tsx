import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard"; // New import
import Orders from "./pages/Orders"; // New import
import Products from "./pages/Products"; // New import
import Categories from "./pages/Categories"; // New import
import Customers from "./pages/Customers"; // New import
import ManageShop from "./pages/ManageShop"; // New import
import CustomizeTheme from "./pages/CustomizeTheme"; // New import
import LandingPages from "./pages/LandingPages"; // New import
import PromoCodes from "./pages/PromoCodes"; // New import
import UsersAndPermissions from "./pages/UsersAndPermissions"; // Renamed import
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics"; // New import

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
          <Route path="/products" element={<Layout><Products /></Layout>} />
          <Route path="/categories" element={<Layout><Categories /></Layout>} />
          <Route path="/customers" element={<Layout><Customers /></Layout>} />
          <Route path="/manage-shop" element={<Layout><ManageShop /></Layout>} />
          <Route path="/customize-theme" element={<Layout><CustomizeTheme /></Layout>} />
          <Route path="/landing-pages" element={<Layout><LandingPages /></Layout>} />
          <Route path="/promo-codes" element={<Layout><PromoCodes /></Layout>} />
          <Route path="/users-and-permissions" element={<Layout><UsersAndPermissions /></Layout>} /> {/* Updated route */}
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