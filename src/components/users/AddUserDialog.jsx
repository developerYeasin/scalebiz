"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.jsx";
import { toast } from "@/utils/toast.js";

const AddUserDialog = ({ isOpen, onClose }) => {
  const handleAddUser = () => {
    toast.success("User added successfully!");
    onClose(); // Close dialog after adding user
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add shop users</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <Label htmlFor="emailOrPhone" className="sr-only">Email or Phone</Label>
            <Input id="emailOrPhone" placeholder="Email or Phone" />
          </div>
          <div>
            <Label htmlFor="selectRole" className="sr-only">Select Role</Label>
            <Select>
              <SelectTrigger id="selectRole">
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="shopOwner">Shop Owner</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
                <SelectItem value="staff">Staff</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>Close</Button>
          <Button onClick={handleAddUser}>Add User</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserDialog;