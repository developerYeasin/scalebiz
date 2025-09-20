"use client";

import * as React from "react";
import { X, Check, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils.js";
import { Badge } from "@/components/ui/badge.jsx";
import { Button } from "@/components/ui/button.jsx";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command.jsx";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover.jsx";
import { Checkbox } from "@/components/ui/checkbox.jsx";
import { ScrollArea } from "@/components/ui/scroll-area.jsx";

const MultiSelect = ({
  options, // Array of { value: string, label: string }
  selected, // Array of selected values (strings)
  onSelect, // Function to call when selection changes: (newSelectedValues: string[]) => void
  placeholder,
  className,
  loading = false, // New loading prop
  ...props
}) => {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  // Function to toggle selection of an option
  const toggleOption = React.useCallback((optionValue) => {
    const newSelected = selected.includes(optionValue)
      ? selected.filter((item) => item !== optionValue)
      : [...selected, optionValue];
    onSelect(newSelected);
  }, [selected, onSelect]);

  // Function to remove a selected item via its badge
  const removeBadge = React.useCallback((optionValue) => {
    onSelect(selected.filter((item) => item !== optionValue));
  }, [selected, onSelect]);

  // Get labels for selected values to display in badges
  const selectedLabels = React.useMemo(() => {
    return selected
      .map((value) => options.find((option) => option.value === value)?.label)
      .filter(Boolean);
  }, [selected, options]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between h-auto min-h-[40px] px-3 py-2", className)}
          {...props} // Pass other props like `aria-label` if needed
        >
          <div className="flex flex-wrap gap-1 items-center">
            {selected.length === 0 ? (
              <span className="text-muted-foreground">{placeholder}</span>
            ) : (
              selectedLabels.map((label, index) => {
                const optionValue = options.find(opt => opt.label === label)?.value;
                return (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1 pr-1">
                    {label}
                    <X
                      className="h-3 w-3 cursor-pointer text-muted-foreground hover:text-foreground"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent popover from closing
                        if (optionValue) {
                          removeBadge(optionValue);
                        }
                      }}
                    />
                  </Badge>
                );
              })
            )}
          </div>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
        <Command>
          <CommandInput
            placeholder="Search options..."
            value={inputValue}
            onValueChange={setInputValue}
          />
          <CommandList>
            <ScrollArea className="h-48">
              {loading ? (
                <CommandEmpty>Loading options...</CommandEmpty>
              ) : options.length === 0 ? (
                <CommandEmpty>No options found.</CommandEmpty>
              ) : (
                <CommandGroup>
                  {options.map((option) => (
                    <CommandItem
                      key={option.value}
                      value={option.label} // Use label for search filtering
                      onSelect={() => {
                        toggleOption(option.value);
                        setInputValue(""); // Clear input after selection
                        setOpen(true); // Keep popover open after selection
                      }}
                      className="flex items-center cursor-pointer"
                    >
                      <Checkbox
                        checked={selected.includes(option.value)}
                        // Removed onCheckedChange from Checkbox, as CommandItem's onSelect handles the toggle
                        className="mr-2"
                      />
                      {option.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export { MultiSelect };