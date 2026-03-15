"use client";

import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ActiveFilters } from "@/lib/data/filterConfig";
import {
  CATEGORY_OPTIONS,
  FABRIC_OPTIONS,
  BORDER_STYLE_OPTIONS,
  OCCASION_OPTIONS,
  PRICE_RANGE_MIN,
  PRICE_RANGE_MAX,
} from "@/lib/data/filterConfig";
import type {
  ProductCategory,
  ProductFabric,
  BorderStyle,
  Occasion,
} from "@/lib/data/products";

interface ProductFiltersProps {
  filters: ActiveFilters;
  onChange: (filters: ActiveFilters) => void;
  activeCount: number;
}

// ─── Generic checkbox group ───────────────────────────────────────────────────

function CheckGroup<T extends string>({
  options,
  selected,
  onToggle,
}: {
  options: T[];
  selected: T[];
  onToggle: (val: T) => void;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      {options.map((opt) => (
        <label
          key={opt}
          htmlFor={`filter-${opt}`}
          className="flex cursor-pointer items-center gap-2.5"
        >
          <Checkbox
            id={`filter-${opt}`}
            checked={selected.includes(opt)}
            onCheckedChange={() => onToggle(opt)}
            className="rounded-none border-[#C9A84C] data-[state=checked]:bg-[#C9A84C] data-[state=checked]:border-[#C9A84C]"
          />
          <span className="font-body text-sm text-[#2C2416]">{opt}</span>
        </label>
      ))}
    </div>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function toggle<T>(arr: T[], val: T): T[] {
  return arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val];
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ProductFilters({
  filters,
  onChange,
  activeCount,
}: ProductFiltersProps) {
  const set = <K extends keyof ActiveFilters>(key: K, val: ActiveFilters[K]) =>
    onChange({ ...filters, [key]: val });

  return (
    <aside className="w-full">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-heading text-lg font-semibold text-[#2C2416]">
          Filters
          {activeCount > 0 && (
            <span className="ml-2 font-body text-xs text-[#C9A84C]">
              ({activeCount})
            </span>
          )}
        </h2>
        {activeCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
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
            className="font-body text-xs text-[#7A6A52] hover:text-[#C9A84C] transition-colors p-0 h-auto"
          >
            Clear all
          </Button>
        )}
      </div>

      <Separator className="mb-4 bg-[#E8DFC8]" />

      <Accordion
        type="multiple"
        defaultValue={["category", "price", "occasion"]}
        className="space-y-0"
      >
        {/* Category */}
        <AccordionItem value="category" className="border-b border-[#E8DFC8]">
          <AccordionTrigger className="font-heading text-sm font-semibold text-[#2C2416] hover:no-underline py-3 [&>svg]:text-[#C9A84C]">
            Category
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <CheckGroup
              options={CATEGORY_OPTIONS}
              selected={filters.categories}
              onToggle={(v) =>
                set(
                  "categories",
                  toggle(filters.categories, v as ProductCategory),
                )
              }
            />
          </AccordionContent>
        </AccordionItem>

        {/* Price Range */}
        <AccordionItem value="price" className="border-b border-[#E8DFC8]">
          <AccordionTrigger className="font-heading text-sm font-semibold text-[#2C2416] hover:no-underline py-3 [&>svg]:text-[#C9A84C]">
            Price Range
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <div className="px-1">
              <Slider
                min={PRICE_RANGE_MIN}
                max={PRICE_RANGE_MAX}
                step={50}
                value={filters.priceRange}
                onValueChange={(v) => set("priceRange", v as [number, number])}
                className="[&_[role=slider]]:border-[#C9A84C] [&_[role=slider]]:bg-[#C9A84C] [&_.range]:bg-[#C9A84C]"
              />
              <div className="mt-3 flex justify-between">
                <span className="font-body text-xs text-[#7A6A52]">
                  ₹{filters.priceRange[0].toLocaleString("en-IN")}
                </span>
                <span className="font-body text-xs text-[#7A6A52]">
                  ₹{filters.priceRange[1].toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Fabric */}
        <AccordionItem value="fabric" className="border-b border-[#E8DFC8]">
          <AccordionTrigger className="font-heading text-sm font-semibold text-[#2C2416] hover:no-underline py-3 [&>svg]:text-[#C9A84C]">
            Fabric
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <CheckGroup
              options={FABRIC_OPTIONS}
              selected={filters.fabrics}
              onToggle={(v) =>
                set("fabrics", toggle(filters.fabrics, v as ProductFabric))
              }
            />
          </AccordionContent>
        </AccordionItem>

        {/* Border Style */}
        <AccordionItem value="border" className="border-b border-[#E8DFC8]">
          <AccordionTrigger className="font-heading text-sm font-semibold text-[#2C2416] hover:no-underline py-3 [&>svg]:text-[#C9A84C]">
            Border Style
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <CheckGroup
              options={BORDER_STYLE_OPTIONS}
              selected={filters.borderStyles}
              onToggle={(v) =>
                set(
                  "borderStyles",
                  toggle(filters.borderStyles, v as BorderStyle),
                )
              }
            />
          </AccordionContent>
        </AccordionItem>

        {/* Occasion */}
        <AccordionItem value="occasion" className="border-b border-[#E8DFC8]">
          <AccordionTrigger className="font-heading text-sm font-semibold text-[#2C2416] hover:no-underline py-3 [&>svg]:text-[#C9A84C]">
            Occasion
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <CheckGroup
              options={OCCASION_OPTIONS}
              selected={filters.occasions}
              onToggle={(v) =>
                set("occasions", toggle(filters.occasions, v as Occasion))
              }
            />
          </AccordionContent>
        </AccordionItem>

        {/* Availability */}
        <AccordionItem value="availability" className="border-0">
          <AccordionTrigger className="font-heading text-sm font-semibold text-[#2C2416] hover:no-underline py-3 [&>svg]:text-[#C9A84C]">
            Availability
          </AccordionTrigger>
          <AccordionContent className="pb-4 flex flex-col gap-2.5">
            <label className="flex cursor-pointer items-center gap-2.5">
              <Checkbox
                id="in-stock"
                checked={filters.inStockOnly}
                onCheckedChange={(c) => set("inStockOnly", !!c)}
                className="rounded-none border-[#C9A84C] data-[state=checked]:bg-[#C9A84C] data-[state=checked]:border-[#C9A84C]"
              />
              <span className="font-body text-sm text-[#2C2416]">
                In Stock Only
              </span>
            </label>
            <label className="flex cursor-pointer items-center gap-2.5">
              <Checkbox
                id="featured"
                checked={filters.featuredOnly}
                onCheckedChange={(c) => set("featuredOnly", !!c)}
                className="rounded-none border-[#C9A84C] data-[state=checked]:bg-[#C9A84C] data-[state=checked]:border-[#C9A84C]"
              />
              <span className="font-body text-sm text-[#2C2416]">
                Featured / Best Seller
              </span>
            </label>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
}
