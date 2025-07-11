"use client";

import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import Sidebar from "@/components/Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

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
        <div className="p-4 md:p-6 h-full">
          {children}
        </div>
        <MadeWithDyad />
      </main>
    </div>
  );
};

export default Layout;