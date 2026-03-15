"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { SlidersHorizontal } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import Container from "@/components/common/Container";
import ProductFilters from "@/components/shop/ProductFilters";
import MobileFilterSheet from "@/components/shop/MobileFilterSheet";
import ProductToolbar from "@/components/shop/ProductToolbar";
import ActiveFilterChips from "@/components/shop/ActiveFilterChips";
import ProductGrid from "@/components/shop/ProductGrid";
import LoadMoreSection from "@/components/shop/LoadMoreSection";
import { PRODUCTS } from "@/lib/data/products";
import {
  DEFAULT_FILTERS,
  PRICE_RANGE_MIN,
  PRICE_RANGE_MAX,
  CATEGORY_OPTIONS,
  type ActiveFilters,
  type SortValue,
} from "@/lib/data/filterConfig";

const PAGE_SIZE = 9;

// ─── Count active filters ──────────────────────────────────────────────────────

function countActiveFilters(f: ActiveFilters): number {
  let n =
    f.categories.length +
    f.fabrics.length +
    f.borderStyles.length +
    f.occasions.length;
  if (
    f.priceRange[0] !== PRICE_RANGE_MIN ||
    f.priceRange[1] !== PRICE_RANGE_MAX
  )
    n++;
  if (f.inStockOnly) n++;
  if (f.featuredOnly) n++;
  return n;
}

// ─── Category quick chips ─────────────────────────────────────────────────────

function CategoryChips({
  selected,
  onToggle,
}: {
  selected: string[];
  onToggle: (c: string) => void;
}) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label="Quick category filters"
    >
      {CATEGORY_OPTIONS.map((cat) => {
        const active = selected.includes(cat);
        return (
          <button
            key={cat}
            onClick={() => onToggle(cat)}
            className={`rounded-none border px-3.5 py-1.5 font-body text-xs tracking-wide transition-colors duration-200 ${
              active
                ? "border-[#2C2416] bg-[#2C2416] text-[#FAF7F0]"
                : "border-[#E8DFC8] bg-white text-[#5C3D1E] hover:border-[#C9A84C] hover:text-[#C9A84C]"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ShopPage() {
  const [filters, setFilters] = useState<ActiveFilters>(DEFAULT_FILTERS);
  const [sort, setSort] = useState<SortValue>("featured");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const activeCount = countActiveFilters(filters);

  // ── Filter + sort logic ──────────────────────────────────────────────────────
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      );
    }
    if (filters.categories.length)
      result = result.filter((p) => filters.categories.includes(p.category));
    if (filters.fabrics.length)
      result = result.filter((p) => filters.fabrics.includes(p.fabric));
    if (filters.borderStyles.length)
      result = result.filter((p) =>
        filters.borderStyles.includes(p.borderStyle),
      );
    if (filters.occasions.length)
      result = result.filter((p) =>
        p.occasion.some((o) => filters.occasions.includes(o)),
      );
    if (filters.inStockOnly) result = result.filter((p) => p.inStock);
    if (filters.featuredOnly) result = result.filter((p) => p.featured);

    result = result.filter(
      (p) =>
        p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1],
    );

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "new":
        result.sort((a, _) => (a.badge === "New Arrival" ? -1 : 1));
        break;
      case "bestseller":
        result.sort((a, _) => (a.badge === "Best Seller" ? -1 : 1));
        break;
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [filters, sort, search]);

  // Reset pagination when filters change
  const handleFiltersChange = (f: ActiveFilters) => {
    setFilters(f);
    setVisibleCount(PAGE_SIZE);
  };
  const handleSortChange = (v: SortValue) => {
    setSort(v);
    setVisibleCount(PAGE_SIZE);
  };
  const handleSearchChange = (v: string) => {
    setSearch(v);
    setVisibleCount(PAGE_SIZE);
  };

  const toggleCategory = (cat: string) => {
    const cats = filters.categories as string[];
    handleFiltersChange({
      ...filters,
      categories: cats.includes(cat)
        ? (cats.filter((c) => c !== cat) as ActiveFilters["categories"])
        : ([...cats, cat] as ActiveFilters["categories"]),
    });
  };

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-[#FAF7F0]">
      {/* ── Page Hero ──────────────────────────────────────────────────────── */}
      <div className="border-b border-[#E8DFC8] bg-[#F5EFE0] py-10">
        <Container>
          {/* Breadcrumb */}
          <Breadcrumb className="mb-4">
            <BreadcrumbList className="font-body text-xs">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    href="/"
                    className="text-[#7A6A52] hover:text-[#C9A84C] transition-colors"
                  >
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-[#C9A84C]" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[#2C2416]">
                  Collections
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Title */}
          <span
            className="mb-3 block h-0.5 w-10 bg-[#C9A84C]"
            aria-hidden="true"
          />
          <h1 className="font-heading text-3xl font-semibold text-[#2C2416] sm:text-4xl">
            Shop Kaithari &amp; Dhothis
          </h1>
          <p className="mt-2 max-w-xl font-body text-sm leading-relaxed text-[#7A6A52]">
            Pure handloom cotton dhotis and mundus, crafted by skilled Kerala
            weavers. Browse our full collection and find the perfect drape for
            every occasion.
          </p>

          {/* Category quick chips */}
          <div className="mt-6">
            <CategoryChips
              selected={filters.categories as string[]}
              onToggle={toggleCategory}
            />
          </div>
        </Container>
      </div>

      {/* ── Main Content ───────────────────────────────────────────────────── */}
      <Container className="py-8 lg:py-12">
        <div className="flex gap-8 lg:gap-10">
          {/* ── Desktop Sidebar ─────────────────────────────────────────────── */}
          <aside className="hidden w-56 flex-shrink-0 lg:block xl:w-64">
            <div className="sticky top-24">
              <ProductFilters
                filters={filters}
                onChange={handleFiltersChange}
                activeCount={activeCount}
              />
            </div>
          </aside>

          {/* ── Product Area ─────────────────────────────────────────────────── */}
          <div className="flex-1 min-w-0">
            {/* Toolbar row */}
            <div className="mb-4 flex items-center gap-3">
              {/* Mobile filter trigger */}
              <div className="lg:hidden">
                <MobileFilterSheet
                  filters={filters}
                  onChange={handleFiltersChange}
                  activeCount={activeCount}
                />
              </div>
              <div className="flex-1">
                <ProductToolbar
                  search={search}
                  onSearchChange={handleSearchChange}
                  sort={sort}
                  onSortChange={handleSortChange}
                  resultCount={filteredProducts.length}
                  totalCount={PRODUCTS.length}
                />
              </div>
            </div>

            {/* Active filter chips */}
            {activeCount > 0 && (
              <>
                <ActiveFilterChips
                  filters={filters}
                  onChange={handleFiltersChange}
                />
                <Separator className="my-4 bg-[#E8DFC8]" />
              </>
            )}

            {/* Grid */}
            <ProductGrid products={visibleProducts} />

            {/* Load more */}
            <LoadMoreSection
              visibleCount={visibleCount}
              totalCount={filteredProducts.length}
              onLoadMore={() => setVisibleCount((n) => n + PAGE_SIZE)}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
