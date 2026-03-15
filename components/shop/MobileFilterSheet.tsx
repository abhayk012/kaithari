"use client";

import { SlidersHorizontal } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import ProductFilters from "./ProductFilters";
import type { ActiveFilters } from "@/lib/data/filterConfig";

interface MobileFilterSheetProps {
  filters: ActiveFilters;
  onChange: (filters: ActiveFilters) => void;
  activeCount: number;
}

export default function MobileFilterSheet({
  filters,
  onChange,
  activeCount,
}: MobileFilterSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 rounded-none border-[#E8DFC8] bg-white font-body text-xs tracking-widest text-[#2C2416] uppercase hover:border-[#C9A84C] transition-colors"
        >
          <SlidersHorizontal className="h-3.5 w-3.5" />
          Filters
          {activeCount > 0 && (
            <span className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#C9A84C] text-[10px] font-bold text-[#2C2416]">
              {activeCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[300px] overflow-y-auto border-r border-[#E8DFC8] bg-[#FAF7F0] p-0"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E8DFC8] px-5 py-4">
          <span className="font-heading text-lg font-semibold text-[#2C2416]">
            Filters
          </span>
          <SheetClose asChild>
            <button
              aria-label="Close filters"
              className="text-[#7A6A52] hover:text-[#C9A84C] transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </SheetClose>
        </div>

        {/* Filters panel */}
        <div className="px-5 py-4">
          <ProductFilters
            filters={filters}
            onChange={onChange}
            activeCount={activeCount}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
