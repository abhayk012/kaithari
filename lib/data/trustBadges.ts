export interface TrustBadgeItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const TRUST_BADGES: TrustBadgeItem[] = [
  {
    id: "pure-cotton",
    icon: "🌿",
    title: "Pure Cotton",
    description: "100% natural fibres, soft on skin all day",
  },
  {
    id: "authentic-handloom",
    icon: "🪡",
    title: "Authentic Handloom",
    description: "Woven on traditional pit-looms by Kerala artisans",
  },
  {
    id: "kerala-climate",
    icon: "☀️",
    title: "Kerala Climate Ready",
    description: "Breathable weave designed for tropical comfort",
  },
  {
    id: "festive-daily",
    icon: "🎉",
    title: "Festive & Daily Wear",
    description: "Versatile drape for temple, Onam, or everyday",
  },
  {
    id: "fast-shipping",
    icon: "📦",
    title: "Fast Shipping",
    description: "Delivered across India within 3–5 business days",
  },
];
