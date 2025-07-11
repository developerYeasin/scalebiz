"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

interface UsersHeaderProps {
  onAddUserClick: () => void;
}

const UsersHeader: React.FC<UsersHeaderProps> = ({ onAddUserClick }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold">Manage Users & Permissions</h1>
      <Button onClick={onAddUserClick}>
        <UserPlus className="h-4 w-4 mr-2" />
        Add User
      </Button>
    </div>
  );
};

export default UsersHeader;