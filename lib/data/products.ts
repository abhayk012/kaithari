// ─── Product Type ────────────────────────────────────────────────────────────

export type ProductCategory =
  | "Single Dhoti"
  | "Double Dhoti"
  | "Kasavu Dhoti"
  | "Premium Handloom"
  | "Set Mundu"
  | "Wedding Collection";

export type ProductFabric    = "Cotton" | "Fine Cotton" | "Handloom Cotton";
export type BorderStyle      = "Plain Border" | "Kasavu Border" | "Colored Border" | "Temple Border";
export type Occasion         = "Wedding" | "Onam" | "Temple" | "Daily Wear" | "Gifting";
export type ProductBadge     = "Best Seller" | "New Arrival" | "Handloom" | "Festival Pick";

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  category: ProductCategory;
  fabric: ProductFabric;
  borderStyle: BorderStyle;
  occasion: Occasion[];
  price: number;
  originalPrice?: number;
  image: string;
  badge?: ProductBadge;
  inStock: boolean;
  featured: boolean;
}

// ─── Mock Products ─────────────────────────────────────────────────────────

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    slug: "pure-kasavu-single-dhoti",
    name: "Pure Kasavu Single Dhoti",
    shortDescription: "Classic kasavu border, soft cotton weave for daily and festive use.",
    category: "Kasavu Dhoti",
    fabric: "Cotton",
    borderStyle: "Kasavu Border",
    occasion: ["Onam", "Temple", "Daily Wear"],
    price: 850,
    originalPrice: 1100,
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&auto=format&fit=crop&q=80",
    badge: "Best Seller",
    inStock: true,
    featured: true,
  },
  {
    id: "p2",
    slug: "wedding-grade-double-kasavu",
    name: "Wedding Grade Double Kasavu",
    shortDescription: "Rich double-layered kasavu with wide gold border, perfect for weddings.",
    category: "Wedding Collection",
    fabric: "Fine Cotton",
    borderStyle: "Kasavu Border",
    occasion: ["Wedding", "Onam"],
    price: 2200,
    image: "https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?w=600&auto=format&fit=crop&q=80",
    badge: "New Arrival",
    inStock: true,
    featured: true,
  },
  {
    id: "p3",
    slug: "kaithari-set-mundu-neriyathu",
    name: "Kaithari Set Mundu with Neriyathu",
    shortDescription: "Matched set mundu — mundu and neriyathu woven from the same loom.",
    category: "Set Mundu",
    fabric: "Handloom Cotton",
    borderStyle: "Kasavu Border",
    occasion: ["Wedding", "Onam", "Temple"],
    price: 1450,
    originalPrice: 1800,
    image: "https://images.unsplash.com/photo-1596040033229-e4f6e2e5e39a?w=600&auto=format&fit=crop&q=80",
    badge: "Festival Pick",
    inStock: true,
    featured: true,
  },
  {
    id: "p4",
    slug: "fine-handloom-cotton-dhoti",
    name: "Fine Handloom Cotton Dhoti",
    shortDescription: "Featherlight fine cotton, hand-woven on traditional pit-looms.",
    category: "Premium Handloom",
    fabric: "Fine Cotton",
    borderStyle: "Plain Border",
    occasion: ["Daily Wear", "Temple"],
    price: 1250,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop&q=80",
    badge: "Handloom",
    inStock: true,
    featured: false,
  },
  {
    id: "p5",
    slug: "plain-single-cotton-dhoti",
    name: "Plain Single Cotton Dhoti",
    shortDescription: "Everyday comfort — soft cotton, clean plain border, easy drape.",
    category: "Single Dhoti",
    fabric: "Cotton",
    borderStyle: "Plain Border",
    occasion: ["Daily Wear", "Temple"],
    price: 450,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=80",
    inStock: true,
    featured: false,
  },
  {
    id: "p6",
    slug: "temple-border-double-dhoti",
    name: "Temple Border Double Dhoti",
    shortDescription: "Traditional temple motif border, double-layered for ceremonial drape.",
    category: "Double Dhoti",
    fabric: "Handloom Cotton",
    borderStyle: "Temple Border",
    occasion: ["Temple", "Onam"],
    price: 1650,
    originalPrice: 1900,
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&auto=format&fit=crop&q=80",
    badge: "Best Seller",
    inStock: true,
    featured: true,
  },
  {
    id: "p7",
    slug: "premium-handloom-gifting-set",
    name: "Premium Handloom Gifting Set",
    shortDescription: "Beautifully packed handloom dhoti — the ideal heritage gift.",
    category: "Premium Handloom",
    fabric: "Fine Cotton",
    borderStyle: "Kasavu Border",
    occasion: ["Gifting", "Onam"],
    price: 1800,
    image: "https://images.unsplash.com/photo-1464699908537-0954e50791ee?w=600&auto=format&fit=crop&q=80",
    badge: "New Arrival",
    inStock: true,
    featured: false,
  },
  {
    id: "p8",
    slug: "colored-border-kasavu-dhoti",
    name: "Colored Border Kasavu Dhoti",
    shortDescription: "Contemporary kasavu with a subtle color accent — modern meets tradition.",
    category: "Kasavu Dhoti",
    fabric: "Cotton",
    borderStyle: "Colored Border",
    occasion: ["Onam", "Daily Wear"],
    price: 950,
    image: "https://images.unsplash.com/photo-1620835058400-b4f60c7f8742?w=600&auto=format&fit=crop&q=80",
    inStock: true,
    featured: false,
  },
  {
    id: "p9",
    slug: "ultra-fine-single-dhoti",
    name: "Ultra-Fine Single Dhoti",
    shortDescription: "Extra-fine weave — cool, crisp, and supremely comfortable.",
    category: "Single Dhoti",
    fabric: "Fine Cotton",
    borderStyle: "Plain Border",
    occasion: ["Daily Wear"],
    price: 750,
    originalPrice: 900,
    image: "https://images.unsplash.com/photo-1582719471384-894febb09b00?w=600&auto=format&fit=crop&q=80",
    inStock: false,
    featured: false,
  },
  {
    id: "p10",
    slug: "bridal-kasavu-set-mundu",
    name: "Bridal Kasavu Set Mundu",
    shortDescription: "Heavy gold kasavu set for the bride's family — a cherished tradition.",
    category: "Wedding Collection",
    fabric: "Handloom Cotton",
    borderStyle: "Kasavu Border",
    occasion: ["Wedding"],
    price: 3500,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80",
    badge: "Best Seller",
    inStock: true,
    featured: true,
  },
  {
    id: "p11",
    slug: "double-dhoti-plain-everyday",
    name: "Double Dhoti — Plain Everyday",
    shortDescription: "Spacious double drape in soft cotton, ideal for long wear.",
    category: "Double Dhoti",
    fabric: "Cotton",
    borderStyle: "Plain Border",
    occasion: ["Daily Wear", "Temple"],
    price: 850,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80",
    inStock: true,
    featured: false,
  },
  {
    id: "p12",
    slug: "onam-special-kasavu-set",
    name: "Onam Special Kasavu Set Mundu",
    shortDescription: "Celebratory Onam set in pristine white with rich kasavu border.",
    category: "Set Mundu",
    fabric: "Cotton",
    borderStyle: "Kasavu Border",
    occasion: ["Onam", "Temple"],
    price: 1600,
    originalPrice: 2000,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop&q=80",
    badge: "Festival Pick",
    inStock: true,
    featured: true,
  },
];
