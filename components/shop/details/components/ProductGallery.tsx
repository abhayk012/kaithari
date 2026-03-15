"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProductImage } from "@/lib/types/product";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
}

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setActive((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#F5EFE0]">
        <Image
          key={images[active]?.id}
          src={
            images[active]?.src ??
            "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&auto=format&fit=crop&q=85"
          }
          alt={images[active]?.alt ?? productName}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-opacity duration-300"
          priority={active === 0}
        />

        {/* Kasavu accent strips */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-2 bg-[#C9A84C]/40" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-2 bg-[#C9A84C]/40" />

        {/* Nav arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-[#FAF7F0]/80 p-1.5 text-[#5C3D1E] shadow-sm hover:bg-[#FAF7F0] transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-[#FAF7F0]/80 p-1.5 text-[#5C3D1E] shadow-sm hover:bg-[#FAF7F0] transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}

        {/* Counter */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-[#2C2416]/40 px-2.5 py-0.5">
          <span className="font-body text-[10px] text-[#FAF7F0]">
            {active + 1} / {images.length}
          </span>
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((img, i) => (
            <button
              key={img.id}
              onClick={() => setActive(i)}
              aria-label={img.alt}
              className={`relative aspect-square overflow-hidden rounded-sm transition-all duration-200 ${
                active === i
                  ? "ring-2 ring-[#C9A84C] ring-offset-1"
                  : "border border-[#E8DFC8] hover:border-[#C9A84C] opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
