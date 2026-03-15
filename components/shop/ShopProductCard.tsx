import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ShopProductCardProps {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  category: string;
  fabric: string;
  borderStyle: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  inStock: boolean;
  image?: string;
}

const BADGE_COLORS: Record<string, string> = {
  "Best Seller": "bg-[#C9A84C] text-[#2C2416]",
  "New Arrival": "bg-[#1E4D2B] text-[#FAF7F0]",
  Handloom: "bg-[#5C3D1E] text-[#FAF7F0]",
  "Festival Pick": "bg-[#7A2036] text-[#FAF7F0]",
};

export default function ShopProductCard({
  slug,
  name,
  shortDescription,
  category,
  fabric,
  borderStyle,
  price,
  originalPrice,
  badge,
  inStock,
  image,
}: ShopProductCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-[#E8DFC8] bg-white transition-shadow duration-300 hover:shadow-md">
      <Link href={`/shop/${slug}`} className="flex flex-col flex-1">
        {/* Image area */}
        <div className="relative aspect-[3/4] overflow-hidden bg-[#F5EFE0]">
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            /* Fabric placeholder when no image yet */
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-50">
              <div className="h-px w-12 bg-[#C9A84C]" />
              <span className="font-heading text-xs tracking-widest text-[#5C3D1E] uppercase">
                {category}
              </span>
              <div className="h-px w-12 bg-[#C9A84C]" />
            </div>
          )}

          {/* Badges */}
          <div className="absolute left-3 top-3 flex flex-col gap-1.5">
            {badge && (
              <Badge
                className={`text-[10px] font-medium tracking-wide border-0 ${BADGE_COLORS[badge] ?? "bg-[#C9A84C] text-[#2C2416]"}`}
              >
                {badge}
              </Badge>
            )}
            {!inStock && (
              <Badge className="bg-[#2C2416]/70 text-[#FAF7F0] text-[10px] border-0">
                Out of Stock
              </Badge>
            )}
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#2C2416]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-4">
          <div className="mb-1.5 flex flex-wrap items-center gap-1.5">
            <span className="font-body text-[10px] uppercase tracking-widest text-[#C9A84C]">
              {category}
            </span>
            <span className="font-body text-[10px] text-[#E8DFC8]">·</span>
            <span className="font-body text-[10px] text-[#7A6A52]">
              {fabric}
            </span>
          </div>

          <h3 className="font-heading text-base font-semibold leading-snug text-[#2C2416] transition-colors duration-200 group-hover:text-[#5C3D1E]">
            {name}
          </h3>

          <p className="mt-1.5 line-clamp-2 font-body text-xs leading-relaxed text-[#7A6A52]">
            {shortDescription}
          </p>

          <span className="mt-2 inline-block font-body text-[10px] text-[#7A6A52] italic">
            {borderStyle}
          </span>

          <div className="mt-3 flex items-center gap-2">
            <span className="font-body text-base font-semibold text-[#2C2416]">
              ₹{price.toLocaleString("en-IN")}
            </span>
            {originalPrice && (
              <span className="font-body text-sm text-[#7A6A52] line-through">
                ₹{originalPrice.toLocaleString("en-IN")}
              </span>
            )}
            {originalPrice && (
              <span className="font-body text-xs text-[#1E4D2B] font-medium">
                {Math.round(((originalPrice - price) / originalPrice) * 100)}%
                off
              </span>
            )}
          </div>

          <div className="mt-4 flex-1 flex items-end">
            <Button
              disabled={!inStock}
              className={`w-full rounded-none py-2.5 font-body text-xs tracking-widest uppercase transition-colors duration-200 ${
                inStock
                  ? "bg-[#2C2416] text-[#FAF7F0] hover:bg-[#5C3D1E]"
                  : "bg-[#E8DFC8] text-[#7A6A52] cursor-not-allowed"
              }`}
            >
              {inStock ? "View Details" : "Out of Stock"}
            </Button>
          </div>
        </div>
      </Link>
    </article>
  );
}
