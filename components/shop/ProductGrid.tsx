import ShopProductCard from "./ShopProductCard";
import type { Product } from "@/lib/data/products";

interface ProductGridProps {
  products: Product[];
}

function EmptyProductsState() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-24 text-center">
      <div className="mb-4 flex flex-col items-center gap-2">
        <span className="h-px w-12 bg-[#C9A84C]" aria-hidden="true" />
        <span className="font-heading text-5xl font-light text-[#2C2416]/10 select-none">
          ∅
        </span>
      </div>
      <h3 className="font-heading text-xl font-semibold text-[#2C2416]">
        No products found
      </h3>
      <p className="mt-2 max-w-xs font-body text-sm leading-relaxed text-[#7A6A52]">
        Try adjusting your filters or search term. Our full collection is only a
        few clicks away.
      </p>
    </div>
  );
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="grid">
        <EmptyProductsState />
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 xl:grid-cols-3"
      aria-label="Product listing"
    >
      {products.map((product) => (
        <ShopProductCard
          key={product.id}
          id={product.id}
          slug={product.slug}
          name={product.name}
          shortDescription={product.shortDescription}
          category={product.category}
          fabric={product.fabric}
          borderStyle={product.borderStyle}
          price={product.price}
          originalPrice={product.originalPrice}
          badge={product.badge}
          inStock={product.inStock}
        />
      ))}
    </div>
  );
}
