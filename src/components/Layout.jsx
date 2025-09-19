"use client";

import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad.jsx";
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

const Layout = ({ children }) => {
  const isMobile = useIsMobile();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    showSuccess("Logged out successfully!");
    navigate("/login");
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
            <Sidebar onClose={() => setIsSheetOpen(false)} />
          </SheetContent>
        </Sheet>
      ) : (
        <aside className="hidden md:flex w-64 flex-col fixed inset-y-0 z-10">
          <Sidebar />
        </aside>
      )}
      <main className={isMobile ? "flex-1 pt-16" : "flex-1 ml-64 overflow-x-auto"}>
        <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-end">
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
        <div className="p-4 md:p-6 h-full bg-background">
          {children}
        </div>
        <MadeWithDyad />
      </main>
    </div>
  );
};

export default Layout;