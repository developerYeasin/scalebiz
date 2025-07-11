"use client";

import React from "react";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu.jsx";
import { Search, Download, Plus, ShoppingCart, User } from "lucide-react";
import { Badge } from "@/components/ui/badge.jsx";
import { Link } from "react-router-dom";

const OrdersHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold">Orders</h1>
        <Badge variant="secondary" className="text-sm">474</Badge>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-4">
              All <span className="ml-2">&#9660;</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>All</DropdownMenuItem>
            <DropdownMenuItem>Placed</DropdownMenuItem>
            <DropdownMenuItem>Confirmed</DropdownMenuItem>
            <DropdownMenuItem>Shipped</DropdownMenuItem>
            <DropdownMenuItem>Delivered</DropdownMenuItem>
            <DropdownMenuItem>Completed</DropdownMenuItem>
            <DropdownMenuItem>Cancelled</DropdownMenuItem>
            <DropdownMenuItem>Returned</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon">
          <Search className="h-4 w-4" />
        </Button>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
        <Button asChild>
          <Link to="/orders/create">
            <Plus className="h-4 w-4 mr-2" />
            Create Order
          </Link>
        </Button>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          <Badge className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 text-xs">0</Badge>
        </Button>
        <Button variant="ghost" size="icon" className="relative">
          <User className="h-5 w-5" />
          <Badge className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 text-xs">0</Badge>
        </Button>
      </div>
    </div>
  );
};

export default OrdersHeader;