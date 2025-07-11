"use client";

import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Home, Settings, Users } from "lucide-react";

interface SidebarProps {
  onClose?: () => void; // Optional prop for closing the sheet on mobile
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Users", href: "/users", icon: Users },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <div className="flex h-full flex-col border-r bg-sidebar text-sidebar-foreground">
      <div className="flex h-16 items-center justify-center border-b px-4">
        <h1 className="text-xl font-semibold text-sidebar-primary-foreground">My App</h1>
      </div>
      <nav className="flex-1 overflow-auto py-4">
        <ul className="space-y-1 px-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Button
                asChild
                variant="ghost"
                className={cn(
                  "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  // Add active state styling if needed
                )}
                onClick={onClose} // Close sheet on click for mobile
              >
                <Link to={item.href} className="flex items-center gap-3">
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto p-4 border-t">
        {/* You can add user info or other footer elements here */}
        <p className="text-xs text-muted-foreground">Version 1.0</p>
      </div>
    </div>
  );
};

export default Sidebar;