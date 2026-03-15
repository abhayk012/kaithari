"use client";

import { useState } from "react";
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

  const IMAGE_BG: Record<number, string> = {
    0: "#F0EBD8",
    1: "#E8D8C0",
    2: "#EEE4D0",
    3: "#F5EFE0",
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div className="relative overflow-hidden rounded-sm bg-[#F5EFE0] aspect-[4/5]">
        {/* Decorative panel */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 transition-colors duration-300"
          style={{ backgroundColor: IMAGE_BG[active] ?? "#F5EFE0" }}
        >
          {/* Kasavu accent strips */}
          <div className="absolute left-0 top-0 h-full w-2 bg-[#C9A84C]/60" />
          <div className="absolute right-0 top-0 h-full w-2 bg-[#C9A84C]/60" />

          <div className="flex flex-col items-center gap-3 px-8 text-center">
            <div className="h-px w-16 bg-[#C9A84C]" />
            <span
              className="font-heading text-7xl font-light text-[#2C2416]/8 select-none"
              aria-hidden="true"
            >
              ക
            </span>
            <p className="font-heading text-lg font-medium italic text-[#5C3D1E]">
              {productName}
            </p>
            <span className="font-body text-xs tracking-[0.2em] text-[#C9A84C] uppercase">
              {images[active]?.color ?? "Handloom"}
            </span>
            <div className="h-px w-16 bg-[#C9A84C]" />
          </div>
        </div>

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

        {/* Image counter */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
          <span className="font-body text-xs text-[#7A6A52]">
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
              className={`relative overflow-hidden rounded-sm aspect-square transition-all duration-200 ${
                active === i
                  ? "ring-2 ring-[#C9A84C] ring-offset-1"
                  : "border border-[#E8DFC8] hover:border-[#C9A84C]"
              }`}
              style={{ backgroundColor: IMAGE_BG[i] ?? "#F5EFE0" }}
            >
              <div className="flex h-full items-center justify-center">
                <span className="font-body text-[9px] tracking-widest text-[#7A6A52] uppercase px-1 text-center">
                  {img.color}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
