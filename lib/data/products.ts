// ─── Product Type ────────────────────────────────────────────────────────────

export type ProductCategory =
  | "Single Dhoti"
  | "Double Dhoti"
  | "Kasavu Dhoti"
  | "Premium Handloom"
  | "Set Mundu"
  | "Wedding Collection";

export type ProductFabric = "Cotton" | "Fine Cotton" | "Handloom Cotton";

export type BorderStyle =
  | "Plain Border"
  | "Kasavu Border"
  | "Colored Border"
  | "Temple Border";

export type Occasion =
  | "Wedding"
  | "Onam"
  | "Temple"
  | "Daily Wear"
  | "Gifting";

export type ProductBadge = "Best Seller" | "New Arrival" | "Handloom" | "Festival Pick";

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

// ─── Mock Products ────────────────────────────────────────────────────────────

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
    image: "/images/products/kasavu-single.jpg",
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
    image: "/images/products/wedding-double.jpg",
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
    image: "/images/products/set-mundu.jpg",
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
    image: "/images/products/fine-handloom.jpg",
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
    image: "/images/products/plain-single.jpg",
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
    image: "/images/products/temple-double.jpg",
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
    image: "/images/products/gifting-set.jpg",
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
    image: "/images/products/colored-kasavu.jpg",
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
    image: "/images/products/ultra-fine-single.jpg",
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
    image: "/images/products/bridal-kasavu.jpg",
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
    image: "/images/products/double-plain.jpg",
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
    image: "/images/products/onam-set.jpg",
    badge: "Festival Pick",
    inStock: true,
    featured: true,
  },
];
