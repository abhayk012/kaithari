"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import StarRating from "./StarRating";
import type { ProductDetail } from "@/lib/types/product";
import { Package, RotateCcw, Truck, ShieldCheck } from "lucide-react";

interface ProductInfoPanelProps {
  product: ProductDetail;
}

const BADGE_COLORS: Record<string, string> = {
  "Best Seller": "bg-[#C9A84C] text-[#2C2416]",
  "New Arrival": "bg-[#1E4D2B] text-[#FAF7F0]",
  Handloom: "bg-[#5C3D1E] text-[#FAF7F0]",
  "Festival Pick": "bg-[#7A2036] text-[#FAF7F0]",
};

const TRUST_NOTES = [
  { icon: Truck, text: "Free shipping on orders above ₹999" },
  { icon: Package, text: "Delivered within 3–5 business days" },
  { icon: RotateCcw, text: "7-day return policy" },
  { icon: ShieldCheck, text: "Handloom Mark Certified" },
];

export default function ProductInfoPanel({ product }: ProductInfoPanelProps) {
  const [qty, setQty] = useState(1);

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <div className="flex flex-col gap-5">
      {/* Badge */}
      {product.badge && (
        <Badge
          className={`w-fit border-0 text-xs font-medium ${
            BADGE_COLORS[product.badge] ?? "bg-[#C9A84C] text-[#2C2416]"
          }`}
        >
          {product.badge}
        </Badge>
      )}

      {/* Name */}
      <h1 className="font-heading text-3xl font-semibold leading-tight text-[#2C2416] sm:text-4xl">
        {product.name}
      </h1>

      {/* Rating row */}
      <div className="flex items-center gap-2">
        <StarRating value={product.averageRating} size="sm" />
        <span className="font-body text-sm text-[#7A6A52]">
          {product.averageRating.toFixed(1)}
        </span>
        <span className="font-body text-xs text-[#B8A88A]">
          ({product.reviewCount} reviews)
        </span>
      </div>

      {/* Price block */}
      <div className="flex items-baseline gap-3">
        <span className="font-heading text-3xl font-semibold text-[#2C2416]">
          ₹{product.price.toLocaleString("en-IN")}
        </span>
        {product.originalPrice && (
          <>
            <span className="font-body text-base text-[#7A6A52] line-through">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
            <span className="font-body text-sm font-medium text-[#1E4D2B]">
              {discount}% off
            </span>
          </>
        )}
      </div>
      <p className="font-body text-xs text-[#7A6A52]">
        Price inclusive of all taxes
      </p>

      <Separator className="bg-[#E8DFC8]" />

      {/* Short description */}
      <p className="font-body text-sm leading-relaxed text-[#5C3D1E]">
        {product.shortDescription}
      </p>

      {/* Meta */}
      <dl className="grid grid-cols-2 gap-x-4 gap-y-2.5">
        {[
          { label: "Category", value: product.category },
          { label: "Fabric", value: product.fabric },
          { label: "Border", value: product.borderStyle },
          { label: "Occasion", value: product.occasion.join(", ") },
          {
            label: "Availability",
            value: product.inStock ? "In Stock" : "Out of Stock",
            colored: true,
            inStock: product.inStock,
          },
        ].map((m) => (
          <div key={m.label}>
            <dt className="font-body text-[10px] uppercase tracking-widest text-[#7A6A52]">
              {m.label}
            </dt>
            <dd
              className={`font-body text-sm font-medium ${
                m.colored
                  ? m.inStock
                    ? "text-[#1E4D2B]"
                    : "text-[#7A2036]"
                  : "text-[#2C2416]"
              }`}
            >
              {m.value}
            </dd>
          </div>
        ))}
      </dl>

      <Separator className="bg-[#E8DFC8]" />

      {/* Quantity */}
      <div className="flex items-center gap-3">
        <span className="font-body text-xs uppercase tracking-widest text-[#7A6A52]">
          Qty
        </span>
        <div className="flex items-center rounded-none border border-[#E8DFC8]">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            className="flex h-9 w-9 items-center justify-center text-[#2C2416] hover:bg-[#F5EFE0] transition-colors font-body text-base"
          >
            −
          </button>
          <span className="w-10 text-center font-body text-sm text-[#2C2416]">
            {qty}
          </span>
          <button
            onClick={() => setQty((q) => q + 1)}
            aria-label="Increase quantity"
            className="flex h-9 w-9 items-center justify-center text-[#2C2416] hover:bg-[#F5EFE0] transition-colors font-body text-base"
          >
            +
          </button>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          disabled={!product.inStock}
          className="flex-1 rounded-none bg-[#2C2416] py-5 font-body text-sm tracking-widest text-[#FAF7F0] uppercase hover:bg-[#5C3D1E] transition-colors duration-200 disabled:bg-[#E8DFC8] disabled:text-[#7A6A52]"
        >
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
        <Button
          disabled={!product.inStock}
          variant="outline"
          className="flex-1 rounded-none border-[#C9A84C] bg-transparent py-5 font-body text-sm tracking-widest text-[#2C2416] uppercase hover:bg-[#C9A84C] hover:text-[#2C2416] transition-colors duration-200 disabled:opacity-40"
        >
          Buy Now
        </Button>
      </div>

      {/* Contact link */}
      <p className="font-body text-xs text-[#7A6A52]">
        Need help?{" "}
        <Link href="/contact" className="text-[#C9A84C] hover:underline">
          Contact us
        </Link>{" "}
        for bulk or wedding orders.
      </p>

      {/* Trust notes */}
      <div className="rounded-sm border border-[#E8DFC8] bg-[#F5EFE0] p-4">
        <ul className="flex flex-col gap-2.5">
          {TRUST_NOTES.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-start gap-2.5">
              <Icon className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#C9A84C]" />
              <span className="font-body text-xs leading-relaxed text-[#5C3D1E]">
                {text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
