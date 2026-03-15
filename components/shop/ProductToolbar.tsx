"use client";

import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SORT_OPTIONS, type SortValue } from "@/lib/data/filterConfig";

interface ProductToolbarProps {
  search: string;
  onSearchChange: (v: string) => void;
  sort: SortValue;
  onSortChange: (v: SortValue) => void;
  resultCount: number;
  totalCount: number;
}

export default function ProductToolbar({
  search,
  onSearchChange,
  sort,
  onSortChange,
  resultCount,
  totalCount,
}: ProductToolbarProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      {/* Search */}
      <div className="relative w-full sm:max-w-xs">
        <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#7A6A52]" />
        <Input
          type="search"
          placeholder="Search products…"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="rounded-none border-[#E8DFC8] bg-white pl-9 pr-8 font-body text-sm text-[#2C2416] placeholder:text-[#B8A88A] focus:border-[#C9A84C] focus:ring-[#C9A84C]"
        />
        {search && (
          <button
            onClick={() => onSearchChange("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7A6A52] hover:text-[#C9A84C] transition-colors"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      <div className="flex items-center gap-4">
        {/* Count */}
        <span className="font-body text-xs text-[#7A6A52] whitespace-nowrap">
          {resultCount === totalCount
            ? `${totalCount} products`
            : `${resultCount} of ${totalCount} products`}
        </span>

        {/* Sort */}
        <Select
          value={sort}
          onValueChange={(v) => onSortChange(v as SortValue)}
        >
          <SelectTrigger className="w-[180px] rounded-none border-[#E8DFC8] bg-white font-body text-xs text-[#2C2416] focus:ring-[#C9A84C]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent className="rounded-sm border-[#E8DFC8] bg-[#FAF7F0] font-body text-sm">
            {SORT_OPTIONS.map((opt) => (
              <SelectItem
                key={opt.value}
                value={opt.value}
                className="text-[#2C2416] focus:bg-[#F5EFE0] focus:text-[#2C2416]"
              >
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
