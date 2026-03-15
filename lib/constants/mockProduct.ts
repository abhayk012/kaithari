import type { ProductDetail, RelatedProduct } from "@/lib/types/product";
import type { Review, RatingSummary } from "@/lib/types/review";

// ─── Mock Reviews ─────────────────────────────────────────────────────────────

export const MOCK_REVIEWS: Review[] = [
  {
    id: "r1",
    userName: "Rajesh Nair",
    title: "Flawless quality — exceeded expectations",
    rating: 5,
    date: "2025-12-10",
    comment:
      "Ordered for my son's wedding. The kasavu border was thick, even, and deeply golden. The cotton is genuinely pure — soft, breathable, and it draped beautifully. Everyone asked where I got it. Will definitely order again.",
    likes: 14,
    likedByUser: false,
  },
  {
    id: "r2",
    userName: "Suresh Menon",
    title: "Exactly as described",
    rating: 5,
    date: "2025-11-28",
    comment:
      "The fabric is pure and breathable. If you are used to market mundus, you will immediately feel the difference. Delivered in three days — packaging was also very good.",
    likes: 9,
    likedByUser: false,
  },
  {
    id: "r3",
    userName: "Anoop Varma",
    title: "Great for temple use",
    rating: 4,
    date: "2025-10-15",
    comment:
      "Bought for daily temple visits. Very comfortable and the border is clean. The only reason for 4 stars is I wish it came in a slightly larger size, but the fabric and weave are top class.",
    likes: 5,
    likedByUser: false,
  },
  {
    id: "r4",
    userName: "Pradeep Kumar",
    title: "Authentic handloom — worth every rupee",
    rating: 5,
    date: "2025-09-02",
    comment:
      "As a Malayali in Bangalore, authentic handloom is hard to find. This arrived beautifully packed, exactly as shown. The gold border catches light beautifully. Felt like a piece of Kerala. Perfect.",
    likes: 21,
    likedByUser: false,
  },
];

export const MOCK_RATING_SUMMARY: RatingSummary = {
  average: 4.8,
  total: 4,
  breakdown: { 5: 3, 4: 1, 3: 0, 2: 0, 1: 0 },
};

// ─── Related Products ─────────────────────────────────────────────────────────

export const RELATED_PRODUCTS: RelatedProduct[] = [
  {
    id: "rp1",
    slug: "temple-border-double-dhoti",
    name: "Temple Border Double Dhoti",
    shortDescription: "Traditional temple motif border, double-layered for ceremonial drape.",
    category: "Double Dhoti",
    price: 1650,
    originalPrice: 1900,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: "rp2",
    slug: "kaithari-set-mundu-neriyathu",
    name: "Kaithari Set Mundu with Neriyathu",
    shortDescription: "Matched set mundu — mundu and neriyathu woven from the same loom.",
    category: "Set Mundu",
    price: 1450,
    originalPrice: 1800,
    badge: "Festival Pick",
    inStock: true,
  },
  {
    id: "rp3",
    slug: "onam-special-kasavu-set",
    name: "Onam Special Kasavu Set Mundu",
    shortDescription: "Celebratory Onam set in pristine white with rich kasavu border.",
    category: "Set Mundu",
    price: 1600,
    originalPrice: 2000,
    badge: "Festival Pick",
    inStock: true,
  },
  {
    id: "rp4",
    slug: "fine-handloom-cotton-dhoti",
    name: "Fine Handloom Cotton Dhoti",
    shortDescription: "Featherlight fine cotton, hand-woven on traditional pit-looms.",
    category: "Premium Handloom",
    price: 1250,
    badge: "Handloom",
    inStock: true,
  },
];

// ─── Mock Product ─────────────────────────────────────────────────────────────

export const MOCK_PRODUCT: ProductDetail = {
  id: "p1",
  slug: "pure-kasavu-single-dhoti",
  name: "Pure Kasavu Single Dhoti",
  shortDescription: "Classic kasavu border, soft cotton weave for daily and festive use.",
  description:
    "Woven on traditional pit-looms by skilled artisans in Thrissur, this single kasavu dhoti represents the finest of Kerala's handloom heritage. The pristine white cotton body is offset by a rich golden kasavu border — a mark of purity and celebration worn at temples, on Onam, and at every auspicious occasion. Each piece is individually inspected for evenness, softness, and border consistency before dispatch.",
  category: "Kasavu Dhoti",
  fabric: "Cotton",
  borderStyle: "Kasavu Border",
  occasion: ["Onam", "Temple", "Daily Wear"],
  price: 850,
  originalPrice: 1100,
  images: [
    { id: "img1", alt: "Pure Kasavu Single Dhoti — front view",  color: "White & Gold" },
    { id: "img2", alt: "Kasavu border close-up — rich gold weave", color: "Border Detail" },
    { id: "img3", alt: "Fabric texture — fine handloom cotton",    color: "Fabric" },
    { id: "img4", alt: "Draped view — full length",                color: "Draped" },
  ],
  badge: "Best Seller",
  inStock: true,
  featured: true,
  details: [
    { label: "Fabric",       value: "100% Pure Cotton"            },
    { label: "Weave",        value: "Handloom Pit-Loom"           },
    { label: "Border",       value: "Traditional Kasavu (Zari)"   },
    { label: "Length",       value: "2 yards (Single)"            },
    { label: "Width",        value: "54 inches"                   },
    { label: "Weight",       value: "Approx. 180 GSM"             },
    { label: "Origin",       value: "Thrissur, Kerala"            },
    { label: "Certification",value: "Handloom Mark Certified"     },
  ],
  washCare: [
    "Gentle hand wash in cold water with mild detergent.",
    "Do not wring or twist — lay flat to dry in shade.",
    "For kasavu items, avoid prolonged soaking to preserve the gold border.",
    "Do not bleach or use harsh chemicals.",
    "Iron on medium setting while slightly damp. Do not iron the kasavu border directly.",
    "Dry clean recommended for best care of premium pieces.",
  ],
  shippingInfo:
    "We ship pan-India within 1–2 business days of order confirmation. Standard delivery takes 3–5 business days. Free shipping on orders above ₹999. Express delivery (1–2 days) available for select pincodes at ₹99 extra.",
  returnInfo:
    "Returns accepted within 7 days of delivery for unused, unwashed items in original packaging. Exchange requests within 10 days. Wedding and custom-size orders are non-refundable. To initiate a return, email hello@kaithari.in with your order ID.",
  relatedSlugs: [
    "temple-border-double-dhoti",
    "kaithari-set-mundu-neriyathu",
    "onam-special-kasavu-set",
    "fine-handloom-cotton-dhoti",
  ],
  averageRating: 4.8,
  reviewCount: 4,
};
