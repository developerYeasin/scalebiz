"use client";

import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils.js";
import { Button } from "@/components/ui/button.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import {
  LayoutDashboard,
  Tag,
  Package,
  Layers,
  Users,
  Store,
  Palette,
  FileText,
  Gift,
  LineChart,
  Square,
  ReceiptText,
  Gem,
  HelpCircle,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area.jsx";

const Sidebar = ({ onClose }) => {
  const mainNavItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Orders", href: "/orders", icon: Tag, badge: "25" },
    { name: "Products", href: "/products", icon: Package },
    { name: "Categories", href: "/categories", icon: Layers },
    { name: "Customers", href: "/customers", icon: Users },
  ];

  const configurationItems = [
    { name: "Manage Shop", href: "/manage-shop", icon: Store },
    { name: "Customize theme", href: "/customize-theme", icon: Palette },
    { name: "Landing Pages", href: "/landing-pages", icon: FileText },
    { name: "Promo Codes", href: "/promo-codes", icon: Gift },
    { name: "Users & Permissions", href: "/users-and-permissions", icon: Users },
  ];

  const reportItems = [
    { name: "Analytics", href: "/analytics", icon: LineChart },
  ];

  const paymentItems = [
    { name: "Billing", href: "/billing", icon: ReceiptText },
    { name: "Subscription", href: "/subscription", icon: Gem },
  ];

  const academyItem = { name: "Scalebiz Academy", href: "/zatiq-academy", icon: HelpCircle };

  return (
    <div className="flex h-full flex-col border-r bg-sidebar text-sidebar-foreground">
      <div className="flex h-16 items-center justify-between border-b px-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-purple-600 rounded-md flex items-center justify-center text-white font-bold text-sm">S</div>
          <h1 className="text-xl font-semibold text-sidebar-primary-foreground">Scalebiz</h1>
        </div>
        <Button variant="ghost" size="icon" className="text-sidebar-foreground">
          <Square className="h-5 w-5" />
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <nav className="py-4">
          <ul className="space-y-1 px-4">
            {mainNavItems.map((item) => (
              <li key={item.name}>
                <Button
                  asChild
                  variant="ghost"
                  className={cn(
                    "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    // Add active state styling if needed
                  )}
                  onClick={onClose}
                >
                  <Link to={item.href} className="flex items-center gap-3">
                    <item.icon className="h-5 w-5" />
                    {item.name}
                    {item.badge && (
                      <Badge className="ml-auto bg-sidebar-accent text-sidebar-accent-foreground">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>

          <h2 className="px-4 pt-6 pb-2 text-xs font-semibold uppercase text-muted-foreground">Configuration</h2>
          <ul className="space-y-1 px-4">
            {configurationItems.map((item) => (
              <li key={item.name}>
                <Button
                  asChild
                  variant="ghost"
                  className={cn(
                    "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  )}
                  onClick={onClose}
                >
                  <Link to={item.href} className="flex items-center gap-3">
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>

          <h2 className="px-4 pt-6 pb-2 text-xs font-semibold uppercase text-muted-foreground">Reports</h2>
          <ul className="space-y-1 px-4">
            {reportItems.map((item) => (
              <li key={item.name}>
                <Button
                  asChild
                  variant="ghost"
                  className={cn(
                    "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  )}
                  onClick={onClose}
                >
                  <Link to={item.href} className="flex items-center gap-3">
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>

          <h2 className="px-4 pt-6 pb-2 text-xs font-semibold uppercase text-muted-foreground">Payment</h2>
          <ul className="space-y-1 px-4">
            {paymentItems.map((item) => (
              <li key={item.name}>
                <Button
                  asChild
                  variant="ghost"
                  className={cn(
                    "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  )}
                  onClick={onClose}
                >
                  <Link to={item.href} className="flex items-center gap-3">
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>

          <h2 className="px-4 pt-6 pb-2 text-xs font-semibold uppercase text-muted-foreground">Academy</h2>
          <ul className="space-y-1 px-4">
            <li>
              <Button
                asChild
                variant="ghost"
                className={cn(
                  "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                )}
                onClick={onClose}
              >
                <Link to={academyItem.href} className="flex items-center gap-3">
                  <academyItem.icon className="h-5 w-5" />
                  {academyItem.name}
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </ScrollArea>
      <div className="mt-auto p-4 border-t">
        <p className="text-xs text-muted-foreground">Version 1.0</p>
      </div>
    </div>
  );
};

export default Sidebar;