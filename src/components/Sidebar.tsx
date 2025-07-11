"use client";

import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Home, LayoutDashboard, Package, ShoppingCart, Tags, Users, Settings, Globe, Store, Palette, FileText, Gift, UserCog, BarChart, Receipt, CreditCard } from "lucide-react";

interface SidebarProps {
  onClose?: () => void;
}

const navSections = [
  {
    title: "",
    items: [
      { name: "Dashboard", href: "/", icon: LayoutDashboard },
      { name: "Orders", href: "/orders", icon: ShoppingCart },
      { name: "Products", href: "/products", icon: Package },
      { name: "Categories", href: "/categories", icon: Tags },
      { name: "Customers", href: "/customers", icon: Users },
    ],
  },
  {
    title: "Configuration",
    items: [
      { name: "Manage Shop", href: "/manage-shop", icon: Store },
      { name: "Customize Theme", href: "/customize-theme", icon: Palette },
      { name: "Landing Pages", href: "/landing-pages", icon: FileText },
      { name: "Promo Codes", href: "/promo-codes", icon: Gift },
      { name: "Users & Permissions", href: "/users-permissions", icon: UserCog },
    ],
  },
  {
    title: "Reports",
    items: [
      { name: "Analytics", href: "/analytics", icon: BarChart },
      { name: "Order Report", href: "/order-report", icon: Receipt },
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
          <div key={index} className="mb-4 px-4">
            {section.title && (
              <h3 className="mb-2 text-lg font-semibold text-sidebar-foreground">
                {section.title}
              </h3>
            )}
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
        {/* Subscription Plans / Billing - separate item based on screenshot icon */}
        <div className="px-4 mt-4">
          <NavLink
            to="/subscription-plans"
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
            <CreditCard className="h-4 w-4" />
            Subscription Plans
          </NavLink>
        </div>
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