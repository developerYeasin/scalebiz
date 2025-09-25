"use client";

import React from "react";
import { MadeWithDyad } from "@/components/made-with-scalebiz.jsx";
import Sidebar from "@/components/Sidebar.jsx";
// Removed Header from here as it's for an external app landing page
import { useIsMobile } from "@/hooks/use-mobile.js";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Menu, User, LogOut, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.jsx";
import { Link, useNavigate } from "react-router-dom";
import { logout, isAuthenticated } from "@/utils/auth.js";
import { showSuccess } from "@/utils/toast.js";
import { cn } from "@/lib/utils.js";

const Layout = ({ children }) => {
  const isMobile = useIsMobile();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    showSuccess("Logged out successfully!");
    navigate("/login");
  };

  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  React.useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="flex min-h-screen w-full bg-background text-foreground">
      {isMobile ? (
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <Sidebar onClose={() => setIsSheetOpen(false)} isCollapsed={false} onToggleCollapse={() => {}} />
          </SheetContent>
        </Sheet>
      ) : (
        <aside className={cn(
          "hidden md:flex flex-col fixed inset-y-0 z-10 transition-all duration-200",
          isSidebarCollapsed ? "w-16" : "w-64"
        )}>
          <Sidebar isCollapsed={isSidebarCollapsed} onToggleCollapse={toggleSidebarCollapse} />
        </aside>
      )}

      {/* The Header component is for an external app landing page, not this admin dashboard. */}
      {/* It is configured via the "Header Settings" page. */}

      <main className={cn(
        "flex-1 overflow-x-auto", // Reverted padding-top
        isMobile ? "" : (isSidebarCollapsed ? "ml-16" : "ml-64")
      )}>
        <div className="p-4 md:p-6 bg-background">
          {children}
        </div>
        <MadeWithDyad />
      </main>
    </div>
  );
};

export default Layout;