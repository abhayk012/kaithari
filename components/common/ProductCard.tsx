import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  image: string;
  href?: string;
  category?: string;
}

export default function ProductCard({
  name,
  price,
  originalPrice,
  badge,
  image,
  href = "#",
  category,
}: ProductCardProps) {
  return (
    <Link href={href} className="group block" aria-label={`View ${name}`}>
      <div className="overflow-hidden rounded-md border border-[#E8DFC8] bg-white transition-shadow duration-300 hover:shadow-md">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-[#F5EFE0]">
          {/* Placeholder fabric texture */}
          <div className="absolute inset-0 flex items-center justify-center bg-[#F5EFE0]">
            <div className="flex flex-col items-center gap-2 opacity-40">
              <div className="h-0.5 w-16 bg-[#C9A84C]" />
              <span className="font-heading text-xs tracking-widest text-[#5C3D1E] uppercase">
                {category ?? "Handloom"}
              </span>
              <div className="h-0.5 w-16 bg-[#C9A84C]" />
            </div>
          </div>
          {badge && (
            <Badge className="absolute left-3 top-3 bg-[#C9A84C] text-[#2C2416] text-xs font-medium hover:bg-[#C9A84C]">
              {badge}
            </Badge>
          )}
          <div className="absolute inset-0 bg-[#2C2416]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Details */}
        <div className="p-4">
          {category && (
            <p className="mb-1 font-body text-xs uppercase tracking-widest text-[#C9A84C]">
              {category}
            </p>
          )}
          <h3 className="font-heading text-base font-medium leading-snug text-[#2C2416] group-hover:text-[#5C3D1E] transition-colors duration-200">
            {name}
          </h3>
          <div className="mt-2 flex items-center gap-2">
            <span className="font-body text-base font-semibold text-[#2C2416]">
              {price}
            </span>
            {originalPrice && (
              <span className="font-body text-sm text-[#7A6A52] line-through">
                {originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
