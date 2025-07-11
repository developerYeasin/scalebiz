"use client";

import React from "react";
import PromoCodeHeader from "@/components/promo-codes/PromoCodeHeader.jsx";
import CreatePromoCodeDialog from "@/components/promo-codes/CreatePromoCodeDialog.jsx";

const PromoCodes = () => {
  const [isCreatePromoCodeDialogOpen, setIsCreatePromoCodeDialogOpen] = React.useState(false);

  const handleNewPromoCodeClick = () => {
    setIsCreatePromoCodeDialogOpen(true);
  };

  const handleCloseCreatePromoCodeDialog = () => {
    setIsCreatePromoCodeDialogOpen(false);
  };

  return (
    <div className="p-4 md:p-6">
      <PromoCodeHeader onNewPromoCodeClick={handleNewPromoCodeClick} />
      {/* Placeholder for promo code list/table if needed later */}
      <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] text-muted-foreground">
        <p className="text-lg">No promo codes found. Click "New Promo Code" to create one.</p>
      </div>
      <CreatePromoCodeDialog
        isOpen={isCreatePromoCodeDialogOpen}
        onClose={handleCloseCreatePromoCodeDialog}
      />
    </div>
  );
};

export default PromoCodes;