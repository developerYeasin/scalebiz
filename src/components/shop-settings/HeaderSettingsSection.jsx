"use client";

import React from "react";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Switch } from "@/components/ui/switch.jsx";
import { Plus, Trash2, Image as ImageIcon, X } from "lucide-react";
import { useStoreConfig } from "@/contexts/StoreConfigurationContext.jsx";
import { Skeleton } from "@/components/ui/skeleton.jsx";
import CollapsibleCard from "@/components/ui/CollapsibleCard.jsx";
import { showSuccess, showError } from "@/utils/toast.js";
import { uploadSingleImage } from "@/utils/upload.js";

const HeaderSettingsSection = () => {
  const { config, isLoading, updateNested, save, isUpdating } = useStoreConfig();
  const logoInputRef = React.useRef(null);

  if (isLoading || !config) {
    return (
      <div className="space-y-6">
        <CollapsibleCard title="Top Bar Settings">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-20 w-full" />
        </CollapsibleCard>
        <CollapsibleCard title="Utility Bar Settings">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </CollapsibleCard>
        <CollapsibleCard title="Main Navigation Settings">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-20 w-full" />
        </CollapsibleCard>
      </div>
    );
  }

  const header = config.layout_settings?.header || {};
  const topBar = header.topBar || {};
  const utilityBar = header.utilityBar || {};
  const mainNav = header.mainNav || {};

  // --- Top Bar Handlers ---
  const handleAddTopBarMessage = () => {
    updateNested('layout_settings.header.topBar.messages', [...topBar.messages, ""]);
  };

  const handleUpdateTopBarMessage = (index, value) => {
    const newMessages = [...topBar.messages];
    newMessages[index] = value;
    updateNested('layout_settings.header.topBar.messages', newMessages);
  };

  const handleRemoveTopBarMessage = (index) => {
    const newMessages = topBar.messages.filter((_, i) => i !== index);
    updateNested('layout_settings.header.topBar.messages', newMessages);
  };

  // --- Main Nav Handlers ---
  const handleUploadLogo = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    try {
      const { imageUrl } = await uploadSingleImage(file);
      updateNested('layout_settings.header.mainNav.logoUrl', imageUrl);
      save(); // Save immediately after successful upload
    } catch (error) {
      // Error is handled by the toast in the upload utility
    }
  };

  const handleRemoveLogo = () => {
    updateNested('layout_settings.header.mainNav.logoUrl', '');
    save();
    showError("Logo removed.");
  };

  const handleAddNavItem = () => {
    updateNested('layout_settings.header.mainNav.navItems', [...mainNav.navItems, { label: '', href: '', hasDropdown: false, dropdownItems: [] }]);
  };

  const handleUpdateNavItem = (index, field, value) => {
    const newNavItems = [...mainNav.navItems];
    newNavItems[index] = { ...newNavItems[index], [field]: value };
    updateNested('layout_settings.header.mainNav.navItems', newNavItems);
  };

  const handleRemoveNavItem = (index) => {
    const newNavItems = mainNav.navItems.filter((_, i) => i !== index);
    updateNested('layout_settings.header.mainNav.navItems', newNavItems);
  };

  const handleAddDropdownItem = (navItemIndex) => {
    const newNavItems = [...mainNav.navItems];
    newNavItems[navItemIndex].dropdownItems = [...(newNavItems[navItemIndex].dropdownItems || []), { label: '', href: '' }];
    updateNested('layout_settings.header.mainNav.navItems', newNavItems);
  };

  const handleUpdateDropdownItem = (navItemIndex, dropdownItemIndex, field, value) => {
    const newNavItems = [...mainNav.navItems];
    newNavItems[navItemIndex].dropdownItems[dropdownItemIndex] = { ...newNavItems[navItemIndex].dropdownItems[dropdownItemIndex], [field]: value };
    updateNested('layout_settings.header.mainNav.navItems', newNavItems);
  };

  const handleRemoveDropdownItem = (navItemIndex, dropdownItemIndex) => {
    const newNavItems = [...mainNav.navItems];
    newNavItems[navItemIndex].dropdownItems = newNavItems[navItemIndex].dropdownItems.filter((_, i) => i !== dropdownItemIndex);
    updateNested('layout_settings.header.mainNav.navItems', newNavItems);
  };


  return (
    <div className="space-y-6">
      {/* Top Bar Settings */}
      <CollapsibleCard title="Top Bar Settings">
        <div className="flex items-center justify-between mb-4">
          <Label htmlFor="topBarEnabled" className="text-base">
            Enable Top Bar
          </Label>
          <Switch
            id="topBarEnabled"
            checked={topBar.enabled}
            onCheckedChange={(checked) => updateNested('layout_settings.header.topBar.enabled', checked)}
            disabled={isUpdating}
          />
        </div>
        <h3 className="text-lg font-semibold mb-2">Messages</h3>
        <div className="space-y-2 mb-4">
          {topBar.messages.map((message, index) => (
            <div key={index} className="flex items-center gap-2">
              <Input
                value={message}
                onChange={(e) => handleUpdateTopBarMessage(index, e.target.value)}
                placeholder="Enter message"
                disabled={isUpdating}
              />
              <Button variant="outline" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleRemoveTopBarMessage(index)} disabled={isUpdating}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        <Button variant="outline" onClick={handleAddTopBarMessage} disabled={isUpdating}>
          <Plus className="h-4 w-4 mr-2" />
          Add Message
        </Button>
      </CollapsibleCard>

      {/* Utility Bar Settings */}
      <CollapsibleCard title="Utility Bar Settings">
        <div className="flex items-center justify-between mb-4">
          <Label htmlFor="utilityBarEnabled" className="text-base">
            Enable Utility Bar
          </Label>
          <Switch
            id="utilityBarEnabled"
            checked={utilityBar.enabled}
            onCheckedChange={(checked) => updateNested('layout_settings.header.utilityBar.enabled', checked)}
            disabled={isUpdating}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="announcementText">Announcement Text</Label>
          <Input
            id="announcementText"
            value={utilityBar.announcementText}
            onChange={(e) => updateNested('layout_settings.header.utilityBar.announcementText', e.target.value)}
            placeholder="Add anything here or just remove it..."
            className="mt-1"
            disabled={isUpdating}
          />
        </div>
        <div className="flex items-center justify-between mb-2">
          <Label htmlFor="showLanguageSelector" className="text-sm">
            Show Language Selector
          </Label>
          <Switch
            id="showLanguageSelector"
            checked={utilityBar.showLanguageSelector}
            onCheckedChange={(checked) => updateNested('layout_settings.header.utilityBar.showLanguageSelector', checked)}
            disabled={isUpdating}
          />
        </div>
        <div className="flex items-center justify-between mb-2">
          <Label htmlFor="showCurrencySelector" className="text-sm">
            Show Currency Selector
          </Label>
          <Switch
            id="showCurrencySelector"
            checked={utilityBar.showCurrencySelector}
            onCheckedChange={(checked) => updateNested('layout_settings.header.utilityBar.showCurrencySelector', checked)}
            disabled={isUpdating}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="showAuthLinks" className="text-sm">
            Show Login/Register Links
          </Label>
          <Switch
            id="showAuthLinks"
            checked={utilityBar.showAuthLinks}
            onCheckedChange={(checked) => updateNested('layout_settings.header.utilityBar.showAuthLinks', checked)}
            disabled={isUpdating}
          />
        </div>
      </CollapsibleCard>

      {/* Main Navigation Settings */}
      <CollapsibleCard title="Main Navigation Settings">
        <div className="flex items-center justify-between mb-4">
          <Label htmlFor="mainNavEnabled" className="text-base">
            Enable Main Navigation
          </Label>
          <Switch
            id="mainNavEnabled"
            checked={mainNav.enabled}
            onCheckedChange={(checked) => updateNested('layout_settings.header.mainNav.enabled', checked)}
            disabled={isUpdating}
          />
        </div>
        <h3 className="text-lg font-semibold mb-2">Shop Logo</h3>
        <div className="flex flex-col items-center justify-center p-4 border rounded-md mb-4 min-h-[120px]">
          {mainNav.logoUrl ? (
            <img src={mainNav.logoUrl} alt="Shop Logo" className="h-16 object-contain mb-2" />
          ) : (
            <p className="text-muted-foreground">No logo uploaded.</p>
          )}
          <p className="text-sm text-muted-foreground">Recommended size is 100×30 pixels. Max size: 4MB.</p>
        </div>
        <input
          type="file"
          ref={logoInputRef}
          onChange={handleUploadLogo}
          accept="image/png, image/jpeg, image/gif"
          style={{ display: 'none' }}
          disabled={isUpdating}
        />
        <div className="flex gap-2 mb-6">
          <Button variant="outline" className="flex-1" onClick={() => logoInputRef.current.click()} disabled={isUpdating}>
            <ImageIcon className="h-4 w-4 mr-2" />
            {mainNav.logoUrl ? "Change Logo" : "Upload Logo"}
          </Button>
          {mainNav.logoUrl && (
            <Button variant="destructive" className="flex-1" onClick={handleRemoveLogo} disabled={isUpdating}>
              <X className="h-4 w-4 mr-2" />
              Remove Logo
            </Button>
          )}
        </div>

        <h3 className="text-lg font-semibold mb-2">Navigation Items</h3>
        <div className="space-y-4 mb-4">
          {mainNav.navItems.map((item, itemIndex) => (
            <div key={itemIndex} className="border p-4 rounded-md relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 text-destructive hover:text-destructive"
                onClick={() => handleRemoveNavItem(itemIndex)}
                disabled={isUpdating}
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor={`navLabel-${itemIndex}`}>Label</Label>
                  <Input
                    id={`navLabel-${itemIndex}`}
                    value={item.label}
                    onChange={(e) => handleUpdateNavItem(itemIndex, 'label', e.target.value)}
                    placeholder="e.g., Home, Shop"
                    className="mt-1"
                    disabled={isUpdating}
                  />
                </div>
                <div>
                  <Label htmlFor={`navHref-${itemIndex}`}>Path/URL</Label>
                  <Input
                    id={`navHref-${itemIndex}`}
                    value={item.href}
                    onChange={(e) => handleUpdateNavItem(itemIndex, 'href', e.target.value)}
                    placeholder="/home or https://example.com"
                    className="mt-1"
                    disabled={isUpdating}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <Label htmlFor={`hasDropdown-${itemIndex}`} className="text-sm">
                  Has Dropdown
                </Label>
                <Switch
                  id={`hasDropdown-${itemIndex}`}
                  checked={item.hasDropdown}
                  onCheckedChange={(checked) => handleUpdateNavItem(itemIndex, 'hasDropdown', checked)}
                  disabled={isUpdating}
                />
              </div>

              {item.hasDropdown && (
                <div className="ml-4 border-l pl-4 space-y-2">
                  <h4 className="font-medium mb-2">Dropdown Items</h4>
                  {(item.dropdownItems || []).map((dropdownItem, ddIndex) => (
                    <div key={ddIndex} className="flex items-center gap-2">
                      <Input
                        value={dropdownItem.label}
                        onChange={(e) => handleUpdateDropdownItem(itemIndex, ddIndex, 'label', e.target.value)}
                        placeholder="Dropdown Item Label"
                        disabled={isUpdating}
                      />
                      <Input
                        value={dropdownItem.href}
                        onChange={(e) => handleUpdateDropdownItem(itemIndex, ddIndex, 'href', e.target.value)}
                        placeholder="Dropdown Item Path"
                        disabled={isUpdating}
                      />
                      <Button variant="outline" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleRemoveDropdownItem(itemIndex, ddIndex)} disabled={isUpdating}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" onClick={() => handleAddDropdownItem(itemIndex)} disabled={isUpdating}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Dropdown Item
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
        <Button variant="outline" onClick={handleAddNavItem} disabled={isUpdating}>
          <Plus className="h-4 w-4 mr-2" />
          Add Navigation Item
        </Button>

        <h3 className="text-lg font-semibold mt-6 mb-2">Utility Icons</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="showGridIcon" className="text-sm">
              Show Grid Icon
            </Label>
            <Switch
              id="showGridIcon"
              checked={mainNav.showGridIcon}
              onCheckedChange={(checked) => updateNested('layout_settings.header.mainNav.showGridIcon', checked)}
              disabled={isUpdating}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="showCartIcon" className="text-sm">
              Show Cart Icon
            </Label>
            <Switch
              id="showCartIcon"
              checked={mainNav.showCartIcon}
              onCheckedChange={(checked) => updateNested('layout_settings.header.mainNav.showCartIcon', checked)}
              disabled={isUpdating}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="showWishlistIcon" className="text-sm">
              Show Wishlist Icon
            </Label>
            <Switch
              id="showWishlistIcon"
              checked={mainNav.showWishlistIcon}
              onCheckedChange={(checked) => updateNested('layout_settings.header.mainNav.showWishlistIcon', checked)}
              disabled={isUpdating}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="showCompareIcon" className="text-sm">
              Show Compare Icon
            </Label>
            <Switch
              id="showCompareIcon"
              checked={mainNav.showCompareIcon}
              onCheckedChange={(checked) => updateNested('layout_settings.header.mainNav.showCompareIcon', checked)}
              disabled={isUpdating}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="showSearchIcon" className="text-sm">
              Show Search Icon
            </Label>
            <Switch
              id="showSearchIcon"
              checked={mainNav.showSearchIcon}
              onCheckedChange={(checked) => updateNested('layout_settings.header.mainNav.showSearchIcon', checked)}
              disabled={isUpdating}
            />
          </div>
        </div>
      </CollapsibleCard>

      <div className="flex justify-end mt-8">
        <Button onClick={save} disabled={isUpdating}>
          {isUpdating ? 'Saving...' : 'Save Header Settings'}
        </Button>
      </div>
    </div>
  );
};

export default HeaderSettingsSection;