"use client";

import React from "react";
import { MadeWithDyad } from "@/components/made-with-scalebiz.jsx";
import Sidebar from "@/components/Sidebar.jsx";
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
import { cn } from "@/lib/utils.js"; // Import cn for conditional class names

const Layout = ({ children }) => {
  const isMobile = useIsMobile();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false); // New state for sidebar collapse
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    showSuccess("Logged out successfully!");
    navigate("/login");
  };

  const toggleSidebarCollapse = () => { // New function to toggle sidebar collapse
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

      {/* Fixed Header for Desktop */}
      {!isMobile && (
        <header className={cn(
          "fixed top-0 right-0 z-40 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-end transition-all duration-200",
          isSidebarCollapsed ? "left-16" : "left-64"
        )}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/profile" className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/settings" className="flex items-center">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="flex items-center text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
      )}

      <main className={cn(
        "flex-1 overflow-x-auto pt-16", // Always add pt-16 to main for the fixed header
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