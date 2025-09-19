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
import { showSuccess } from "@/utils/toast.js";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area.jsx"; // Added ScrollArea and ScrollBar imports

const AddUserDialog = ({ isOpen, onClose }) => {
  const handleAddUser = () => {
    showSuccess("User added successfully!");
    onClose(); // Close dialog after adding user
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] h-[90vh] max-h-[90vh] flex flex-col overflow-hidden"> {/* Added height and flex classes */}
        <DialogHeader className="p-4 pb-0"> {/* Added padding to header */}
          <DialogTitle>Add shop users</DialogTitle>
        </DialogHeader>
        <ScrollArea className="flex-1 h-0 px-4"> {/* Added ScrollArea with flex-1 h-0 and horizontal padding */}
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
          <ScrollBar orientation="vertical" />
        </ScrollArea>
        <div className="flex justify-end gap-2 mt-4 p-4 border-t"> {/* Added padding and border-t for consistency */}
          <Button variant="outline" onClick={onClose}>Close</Button>
          <Button onClick={handleAddUser}>Add User</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserDialog;