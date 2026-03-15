import type { RelatedProduct } from "@/lib/types/product";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface SimilarClothingSectionProps {
  products: RelatedProduct[];
}

const BADGE_COLORS: Record<string, string> = {
  "Best Seller": "bg-[#C9A84C] text-[#2C2416]",
  "New Arrival": "bg-[#1E4D2B] text-[#FAF7F0]",
  Handloom: "bg-[#5C3D1E] text-[#FAF7F0]",
  "Festival Pick": "bg-[#7A2036] text-[#FAF7F0]",
};

const CARD_BG = [
  "#F0EBD8",
  "#E8D8C0",
  "#EEE4D0",
  "#F5EFE0",
  "#EDE5D5",
  "#E8DECA",
];

function SimilarProductCard({
  product,
  bgColor,
}: {
  product: RelatedProduct;
  bgColor: string;
}) {
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block"
      aria-label={`View ${product.name}`}
    >
      <div className="overflow-hidden rounded-sm border border-[#E8DFC8] bg-white transition-shadow duration-300 hover:shadow-md">
        {/* Image placeholder */}
        <div
          className="relative flex aspect-[3/4] items-center justify-center overflow-hidden"
          style={{ backgroundColor: bgColor }}
        >
          <div className="flex flex-col items-center gap-2 opacity-50">
            <div className="h-px w-10 bg-[#C9A84C]" />
            <span className="font-heading text-xs uppercase tracking-widest text-[#5C3D1E]">
              {product.category}
            </span>
            <div className="h-px w-10 bg-[#C9A84C]" />
          </div>
          {product.badge && (
            <Badge
              className={`absolute left-2.5 top-2.5 border-0 text-[10px] font-medium ${
                BADGE_COLORS[product.badge] ?? "bg-[#C9A84C] text-[#2C2416]"
              }`}
            >
              {product.badge}
            </Badge>
          )}
          {!product.inStock && (
            <Badge className="absolute left-2.5 top-2.5 border-0 bg-[#2C2416]/60 text-[10px] text-[#FAF7F0]">
              Out of Stock
            </Badge>
          )}
        </div>

        {/* Info */}
        <div className="p-3.5">
          <span className="font-body text-[10px] uppercase tracking-widest text-[#C9A84C]">
            {product.category}
          </span>
          <h3 className="mt-0.5 font-heading text-sm font-semibold leading-snug text-[#2C2416] transition-colors group-hover:text-[#5C3D1E]">
            {product.name}
          </h3>
          <p className="mt-1 line-clamp-1 font-body text-xs text-[#7A6A52]">
            {product.shortDescription}
          </p>
          <div className="mt-2 flex items-center gap-2">
            <span className="font-body text-sm font-semibold text-[#2C2416]">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {product.originalPrice && (
              <span className="font-body text-xs text-[#7A6A52] line-through">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
            )}
            {discount > 0 && (
              <span className="font-body text-xs text-[#1E4D2B] font-medium">
                {discount}% off
              </span>
            )}
          </div>
          <Button
            asChild
            className="mt-3 w-full rounded-none bg-[#2C2416] py-2 font-body text-[10px] tracking-widest text-[#FAF7F0] uppercase hover:bg-[#5C3D1E] transition-colors duration-200 h-auto"
          >
            <Link href={`/shop/${product.slug}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </Link>
  );
}

export default function SimilarClothingSection({
  products,
}: SimilarClothingSectionProps) {
  if (!products.length) return null;

  return (
    <section aria-labelledby="similar-heading">
      <div className="mb-8 flex items-center gap-4">
        <span className="h-0.5 w-10 bg-[#C9A84C]" aria-hidden="true" />
        <h2
          id="similar-heading"
          className="font-heading text-2xl font-semibold text-[#2C2416]"
        >
          You May Also Like
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {products.slice(0, 4).map((p, i) => (
          <SimilarProductCard
            key={p.id}
            product={p}
            bgColor={CARD_BG[i % CARD_BG.length]}
          />
        ))}
      </div>
    </section>
  );
}
