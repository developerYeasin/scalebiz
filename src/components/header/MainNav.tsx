"use client";

import React from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Grid, ShoppingCart, Heart, RefreshCw, Search, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils.js";
import { showInfo } from "@/utils/toast.js";

interface NavItem {
  label: string;
  href: string;
  hasDropdown: boolean;
  dropdownItems?: NavItem[];
}

interface MainNavProps {
  logoUrl: string;
  navItems: NavItem[];
  showGridIcon: boolean;
  showCartIcon: boolean;
  showWishlistIcon: boolean;
  showCompareIcon: boolean;
  showSearchIcon: boolean;
  enabled: boolean;
}

const MainNav: React.FC<MainNavProps> = ({
  logoUrl,
  navItems,
  showGridIcon,
  showCartIcon,
  showWishlistIcon,
  showCompareIcon,
  showSearchIcon,
  enabled,
}) => {
  if (!enabled) return null;

  return (
    <nav className="bg-white py-4 px-4 border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center">
            <img src={logoUrl} alt="Shop Logo" className="h-8 w-auto" />
          </Link>
          <ul className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="text-base font-medium">
                        {item.label} <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.dropdownItems?.map((dropdownItem, ddIndex) => (
                        <DropdownMenuItem key={ddIndex} asChild>
                          <Link to={dropdownItem.href}>{dropdownItem.label}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button variant="ghost" asChild className="text-base font-medium">
                    <Link to={item.href}>{item.label}</Link>
                  </Button>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          {showGridIcon && (
            <Button variant="ghost" size="icon" onClick={() => showInfo("Grid icon clicked")}>
              <Grid className="h-5 w-5" />
            </Button>
          )}
          {showCartIcon && (
            <Button variant="ghost" size="icon" onClick={() => showInfo("Shopping cart clicked")}>
              <ShoppingCart className="h-5 w-5" />
            </Button>
          )}
          {showWishlistIcon && (
            <Button variant="ghost" size="icon" onClick={() => showInfo("Wishlist clicked")}>
              <Heart className="h-5 w-5" />
            </Button>
          )}
          {showCompareIcon && (
            <Button variant="ghost" size="icon" onClick={() => showInfo("Compare clicked")}>
              <RefreshCw className="h-5 w-5" />
            </Button>
          )}
          {showSearchIcon && (
            <Button variant="ghost" size="icon" onClick={() => showInfo("Search clicked")}>
              <Search className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MainNav;