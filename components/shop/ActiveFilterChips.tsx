import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ActiveFilters } from "@/lib/data/filterConfig";
import { PRICE_RANGE_MIN, PRICE_RANGE_MAX } from "@/lib/data/filterConfig";

interface ActiveFilterChipsProps {
  filters: ActiveFilters;
  onChange: (filters: ActiveFilters) => void;
}

interface Chip {
  label: string;
  onRemove: () => void;
}

export default function ActiveFilterChips({
  filters,
  onChange,
}: ActiveFilterChipsProps) {
  const chips: Chip[] = [];

  filters.categories.forEach((c) =>
    chips.push({
      label: c,
      onRemove: () =>
        onChange({
          ...filters,
          categories: filters.categories.filter((x) => x !== c),
        }),
    }),
  );
  filters.fabrics.forEach((f) =>
    chips.push({
      label: f,
      onRemove: () =>
        onChange({
          ...filters,
          fabrics: filters.fabrics.filter((x) => x !== f),
        }),
    }),
  );
  filters.borderStyles.forEach((b) =>
    chips.push({
      label: b,
      onRemove: () =>
        onChange({
          ...filters,
          borderStyles: filters.borderStyles.filter((x) => x !== b),
        }),
    }),
  );
  filters.occasions.forEach((o) =>
    chips.push({
      label: o,
      onRemove: () =>
        onChange({
          ...filters,
          occasions: filters.occasions.filter((x) => x !== o),
        }),
    }),
  );

  const hasPriceFilter =
    filters.priceRange[0] !== PRICE_RANGE_MIN ||
    filters.priceRange[1] !== PRICE_RANGE_MAX;
  if (hasPriceFilter) {
    chips.push({
      label: `₹${filters.priceRange[0].toLocaleString("en-IN")} – ₹${filters.priceRange[1].toLocaleString("en-IN")}`,
      onRemove: () =>
        onChange({
          ...filters,
          priceRange: [PRICE_RANGE_MIN, PRICE_RANGE_MAX],
        }),
    });
  }
  if (filters.inStockOnly)
    chips.push({
      label: "In Stock",
      onRemove: () => onChange({ ...filters, inStockOnly: false }),
    });
  if (filters.featuredOnly)
    chips.push({
      label: "Featured",
      onRemove: () => onChange({ ...filters, featuredOnly: false }),
    });

  if (chips.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {chips.map((chip) => (
        <Badge
          key={chip.label}
          className="flex items-center gap-1 rounded-none border border-[#C9A84C] bg-[#FAF7F0] px-2.5 py-1 font-body text-xs text-[#2C2416] hover:bg-[#F5EFE0] transition-colors cursor-default"
        >
          {chip.label}
          <button
            onClick={chip.onRemove}
            aria-label={`Remove ${chip.label} filter`}
            className="ml-1 text-[#7A6A52] hover:text-[#C9A84C] transition-colors"
          >
            <X className="h-3 w-3" />
          </button>
        </Badge>
      ))}
      <Button
        variant="ghost"
        onClick={() =>
          onChange({
            categories: [],
            fabrics: [],
            borderStyles: [],
            occasions: [],
            priceRange: [PRICE_RANGE_MIN, PRICE_RANGE_MAX],
            inStockOnly: false,
            featuredOnly: false,
          })
        }
        className="h-auto p-0 font-body text-xs text-[#7A6A52] hover:text-[#C9A84C] transition-colors"
      >
        Clear all
      </Button>
    </div>
  );
}
