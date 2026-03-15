export interface Collection {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  image: string;
  href: string;
  category: string;
}

export const FEATURED_COLLECTIONS: Collection[] = [
  {
    id: "kasavu-single-plain",
    name: "Pure Kasavu Single Dhoti",
    category: "Kasavu Dhoti",
    price: "₹850",
    originalPrice: "₹1,100",
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1603252109360-909baaf261c7?auto=format&fit=crop&w=800&q=80",
    href: "/shop/pure-kasavu-single-dhoti",
  },
  {
    id: "wedding-double-kasavu",
    name: "Wedding Grade Double Kasavu",
    category: "Wedding Collection",
    price: "₹2,200",
    badge: "New Arrival",
    image:
      "https://images.unsplash.com/photo-1602810319428-019690571b5b?auto=format&fit=crop&w=800&q=80",
    href: "/shop/wedding-grade-double-kasavu",
  },
  {
    id: "set-mundu-neriyathu",
    name: "Kaithari Set Mundu with Neriyathu",
    category: "Set Mundu",
    price: "₹1,450",
    originalPrice: "₹1,800",
    badge: "Festival Pick",
    image:
      "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?auto=format&fit=crop&w=800&q=80",
    href: "/shop/kaithari-set-mundu-neriyathu",
  },
  {
    id: "premium-handloom-fine",
    name: "Fine Handloom Cotton Dhoti",
    category: "Premium Handloom",
    price: "₹1,250",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
    href: "/shop/fine-handloom-cotton-dhoti",
  },
];