import { CheckCircle } from "lucide-react";

const HIGHLIGHTS = [
  {
    id: "certified",
    icon: "🏷️",
    title: "Handloom Mark Certified",
    description:
      "Officially certified by the Indian government for authentic handloom origin.",
  },
  {
    id: "cotton",
    icon: "🌿",
    title: "100% Pure Cotton",
    description:
      "Single-ply natural cotton — no synthetic blends, no compromise.",
  },
  {
    id: "artisan",
    icon: "🪡",
    title: "Artisan Woven",
    description:
      "Every piece woven by hand on pit-looms by master weavers of Kerala.",
  },
  {
    id: "climate",
    icon: "☀️",
    title: "Kerala Climate Ready",
    description:
      "Breathable weave engineered for tropical comfort and all-day wear.",
  },
];

export default function ProductHighlights() {
  return (
    <div className="rounded-sm border border-[#E8DFC8] bg-[#F5EFE0] p-5 sm:p-6">
      <div className="mb-4 flex items-center gap-2">
        <CheckCircle className="h-4 w-4 text-[#C9A84C]" />
        <h3 className="font-heading text-base font-semibold text-[#2C2416]">
          Why This Piece?
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {HIGHLIGHTS.map((h) => (
          <div key={h.id} className="flex items-start gap-3">
            <span className="text-xl" aria-hidden="true">
              {h.icon}
            </span>
            <div>
              <p className="font-heading text-sm font-semibold text-[#2C2416]">
                {h.title}
              </p>
              <p className="mt-0.5 font-body text-xs leading-relaxed text-[#7A6A52]">
                {h.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
