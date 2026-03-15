// ─── Extended Product Type for Detail Page ────────────────────────────────────

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

export interface ProductImage {
  id: string;
  src: string;    // real image URL (Unsplash or /public path)
  alt: string;
  color?: string; // swatch label
}

export interface ProductDetailItem {
  label: string;
  value: string;
}

export interface ProductDetail {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: ProductCategory;
  fabric: ProductFabric;
  borderStyle: BorderStyle;
  occasion: Occasion[];
  price: number;
  originalPrice?: number;
  images: ProductImage[];         // first = main
  badge?: ProductBadge;
  inStock: boolean;
  featured: boolean;
  details: ProductDetailItem[];   // fabric & weave
  washCare: string[];
  shippingInfo: string;
  returnInfo: string;
  relatedSlugs: string[];
  averageRating: number;
  reviewCount: number;
}

// ─── Related / Similar product (lightweight) ─────────────────────────────────

export interface RelatedProduct {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  category: string;
  price: number;
  originalPrice?: number;
  badge?: ProductBadge;
  inStock: boolean;
  image?: string;
}
