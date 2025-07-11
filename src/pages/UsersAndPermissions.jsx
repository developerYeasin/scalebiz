"use client";

import React from "react";
import UsersHeader from "@/components/users/UsersHeader.jsx";
import UserCard from "@/components/users/UserCard.jsx";
import AddUserDialog from "@/components/users/AddUserDialog.jsx";

const UsersAndPermissions = () => {
  const [isAddUserDialogOpen, setIsAddUserDialogOpen] = React.useState(false);

  const handleAddUserClick = () => {
    setIsAddUserDialogOpen(true);
  };

  const handleCloseAddUserDialog = () => {
    setIsAddUserDialogOpen(false);
  };

  return (
    <div className="p-4 md:p-6">
      <UsersHeader onAddUserClick={handleAddUserClick} />
      <div className="space-y-4">
        <UserCard
          name="Omor Faruk"
          email="info.omnionlineshopbd@gmail.com"
          role="Shop Owner"
          isYou={true}
        />
        {/* Additional user cards would go here */}
      </div>
      <AddUserDialog
        isOpen={isAddUserDialogOpen}
        onClose={handleCloseAddUserDialog}
      />
    </div>
  );
};

export default UsersAndPermissions;