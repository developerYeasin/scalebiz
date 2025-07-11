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
import { Switch } from "@/components/ui/switch.jsx";
import { Calendar as CalendarIcon, Info } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover.jsx";
import { Calendar } from "@/components/ui/calendar.jsx";
import { format } from "date-fns";
import { cn } from "@/lib/utils.js";

const CreatePromoCodeDialog = ({ isOpen, onClose }) => {
  const [expiryDate, setExpiryDate] = React.useState();
  const [discountType, setDiscountType] = React.useState("amount");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create Promo Code</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <Label htmlFor="codeName">Code Name <span className="text-destructive">*</span></Label>
            <Input id="codeName" placeholder="Promo Code" className="mt-1" />
            <p className="text-sm text-muted-foreground mt-1">
              Enter a unique promo code. This will help you identify it later.
            </p>
          </div>

          <div className="mb-2">
            <Label>Discount Type (Amount/Percentage)</Label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <Button
                variant={discountType === "amount" ? "default" : "outline"}
                onClick={() => setDiscountType("amount")}
                className={cn(
                  discountType === "amount"
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                Amount
              </Button>
              <Button
                variant={discountType === "percentage" ? "default" : "outline"}
                onClick={() => setDiscountType("percentage")}
                className={cn(
                  discountType === "percentage"
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                Percentage
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="maxDiscount" className="text-sm flex items-center gap-1">
                Max Discount
                <Popover>
                  <PopoverTrigger asChild>
                    <Info className="h-3 w-3 text-muted-foreground cursor-pointer" />
                  </PopoverTrigger>
                  <PopoverContent className="w-60 text-sm">
                    Apply the highest available discount on eligible purchases.
                  </PopoverContent>
                </Popover>
              </Label>
              <Switch id="maxDiscount" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="minPurchase" className="text-sm flex items-center gap-1">
                Min Purchase
                <Popover>
                  <PopoverTrigger asChild>
                    <Info className="h-3 w-3 text-muted-foreground cursor-pointer" />
                  </PopoverTrigger>
                  <PopoverContent className="w-60 text-sm">
                    Set a minimum purchase requirement for discounts to apply.
                  </PopoverContent>
                </Popover>
              </Label>
              <Switch id="minPurchase" />
            </div>
          </div>

          <div>
            <Label htmlFor="expiryDate">Expiry Date:</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal mt-1",
                    !expiryDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {expiryDate ? format(expiryDate, "MM/dd/yyyy") : "mm/dd/yyyy"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={expiryDate}
                  onSelect={setExpiryDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">Create</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePromoCodeDialog;