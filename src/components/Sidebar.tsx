"use client";

import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Home,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Tags,
  Users,
  Settings,
  Globe,
  PlusCircle,
  CreditCard,
  MessageSquare,
  LayoutTemplate,
  ReceiptText,
  Gift,
  Palette,
  Truck,
  BarChart,
  Wallet,
  Megaphone,
  Key,
  MessageSquareText,
  Share2,
  Crown,
  ScrollText,
  Store,
  FolderPlus
} from "lucide-react";

interface SidebarProps {
  onClose?: () => void;
}

const navSections = [
  {
    title: "Main",
    items: [
      { name: "Dashboard", href: "/", icon: LayoutDashboard },
      { name: "Manage Shop", href: "/manage-shop", icon: Store },
    ],
  },
  {
    title: "Products & Categories",
    items: [
      { name: "Products", href: "/products", icon: Package },
      { name: "Add Product", href: "/products/add", icon: PlusCircle },
      { name: "Categories", href: "/categories", icon: Tags },
      { name: "Create Category", href: "/categories/create", icon: FolderPlus },
    ],
  },
  {
    title: "Orders",
    items: [
      { name: "Orders", href: "/orders", icon: ShoppingCart },
      { name: "Create Order", href: "/orders/create", icon: ReceiptText },
      { name: "Order Reports", href: "/orders/report", icon: BarChart },
    ],
  },
  {
    title: "Customers",
    items: [
      { name: "Customers", href: "/customers", icon: Users },
    ],
  },
  {
    title: "Shop Configuration",
    items: [
      { name: "Shop Domain", href: "/shop-domain", icon: Globe },
      { name: "Settings", href: "/settings", icon: Settings },
      { name: "Billing", href: "/settings/billing", icon: CreditCard },
      { name: "Payment Gateway", href: "/settings/payment-gateway", icon: Wallet },
      { name: "Shop Policy", href: "/settings/shop-policy", icon: ScrollText },
      { name: "Site Access", href: "/settings/site-access", icon: Key },
      { name: "Subscription Plans", href: "/settings/subscription-plans", icon: Crown },
    ],
  },
  {
    title: "Marketing & Design",
    items: [
      { name: "Create Promo Code", href: "/marketing/promo-codes", icon: Gift },
      { name: "SEO & Marketing", href: "/marketing/seo", icon: Megaphone },
      { name: "Social Links", href: "/marketing/social-links", icon: Share2 },
      { name: "Customize Theme", href: "/design/customize-theme", icon: Palette },
      { name: "Create Landing Page", href: "/design/landing-pages", icon: LayoutTemplate },
    ],
  },
  {
    title: "Support",
    items: [
      { name: "Chat Support", href: "/support/chat", icon: MessageSquare },
      { name: "Delivery Support", href: "/support/delivery", icon: Truck },
      { name: "SMS Support", href: "/support/sms", icon: MessageSquareText },
    ],
  },
];

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  return (
    <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
      <div className="p-4 border-b border-sidebar-border">
        <h2 className="text-2xl font-bold text-sidebar-primary-foreground">Vendor App</h2>
      </div>
      <ScrollArea className="flex-1 py-4">
        {navSections.map((section, index) => (
          <div key={section.title} className="mb-6 px-4">
            <h3 className="mb-2 text-lg font-semibold text-sidebar-foreground">{section.title}</h3>
            <nav className="grid items-start text-sm font-medium">
              {section.items.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                      isActive
                        ? "bg-sidebar-primary text-sidebar-primary-foreground"
                        : "text-sidebar-foreground"
                    )
                  }
                  onClick={onClose}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        ))}
      </ScrollArea>
      <div className="p-4 border-t border-sidebar-border">
        <Button variant="ghost" className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
          <Home className="h-4 w-4 mr-3" />
          Home
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;