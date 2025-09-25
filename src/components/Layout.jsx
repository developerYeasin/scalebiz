"use client";

import React from "react";
import { MadeWithDyad } from "@/components/made-with-scalebiz.jsx";
import Sidebar from "@/components/Sidebar.jsx";
import { useIsMobile } from "@/hooks/use-mobile.js";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Menu } from "lucide-react";
import { useNavigate, Outlet } from "react-router-dom"; // Import Outlet
import { isAuthenticated } from "@/utils/auth.js";
import { cn } from "@/lib/utils.js";
import DashboardAdminHeader from "./DashboardAdminHeader.jsx"; // Import the new admin header

const Layout = () => { // No longer accepts 'children' prop
  const isMobile = useIsMobile();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);
  const navigate = useNavigate();

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

      <main className={cn(
        "flex-1 overflow-x-auto",
        isMobile ? "" : (isSidebarCollapsed ? "ml-16" : "ml-64")
      )}>
        <DashboardAdminHeader /> {/* Render the new admin header here */}
        <div className="p-4 md:p-6 bg-background pt-16"> {/* Added pt-16 for spacing below the fixed admin header */}
          <Outlet /> {/* This is where child routes will render */}
        </div>
        <MadeWithDyad />
      </main>
    </div>
  );
};

export default Layout;