import type { ProductCategory, ProductFabric, BorderStyle, Occasion } from "./products";

// ─── Filter Config ────────────────────────────────────────────────────────────

export const CATEGORY_OPTIONS: ProductCategory[] = [
  "Single Dhoti",
  "Double Dhoti",
  "Kasavu Dhoti",
  "Premium Handloom",
  "Set Mundu",
  "Wedding Collection",
];

export const FABRIC_OPTIONS: ProductFabric[] = [
  "Cotton",
  "Fine Cotton",
  "Handloom Cotton",
];

export const BORDER_STYLE_OPTIONS: BorderStyle[] = [
  "Plain Border",
  "Kasavu Border",
  "Colored Border",
  "Temple Border",
];

export const OCCASION_OPTIONS: Occasion[] = [
  "Wedding",
  "Onam",
  "Temple",
  "Daily Wear",
  "Gifting",
];

export const SORT_OPTIONS = [
  { value: "featured",   label: "Featured" },
  { value: "new",        label: "New Arrivals" },
  { value: "price-asc",  label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "bestseller", label: "Best Selling" },
] as const;

export type SortValue = (typeof SORT_OPTIONS)[number]["value"];

export const PRICE_RANGE_MIN = 0;
export const PRICE_RANGE_MAX = 4000;

// ─── Active Filters Shape ─────────────────────────────────────────────────────

export interface ActiveFilters {
  categories: ProductCategory[];
  fabrics: ProductFabric[];
  borderStyles: BorderStyle[];
  occasions: Occasion[];
  priceRange: [number, number];
  inStockOnly: boolean;
  featuredOnly: boolean;
}

export const DEFAULT_FILTERS: ActiveFilters = {
  categories: [],
  fabrics: [],
  borderStyles: [],
  occasions: [],
  priceRange: [PRICE_RANGE_MIN, PRICE_RANGE_MAX],
  inStockOnly: false,
  featuredOnly: false,
};
