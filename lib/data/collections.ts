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
    image: "/images/product-kasavu-single.jpg",
    href: "/collections/kasavu-dhoti/single-plain",
  },
  {
    id: "wedding-double-kasavu",
    name: "Wedding Grade Double Kasavu",
    category: "Wedding Collection",
    price: "₹2,200",
    badge: "New Arrival",
    image: "/images/product-wedding-double.jpg",
    href: "/collections/wedding/double-kasavu",
  },
  {
    id: "set-mundu-neriyathu",
    name: "Kaithari Set Mundu with Neriyathu",
    category: "Set Mundu",
    price: "₹1,450",
    originalPrice: "₹1,800",
    badge: "Festival Pick",
    image: "/images/product-set-mundu.jpg",
    href: "/collections/set-mundu/neriyathu",
  },
  {
    id: "premium-handloom-fine",
    name: "Fine Handloom Cotton Dhoti",
    category: "Premium Handloom",
    price: "₹1,250",
    image: "/images/product-handloom-fine.jpg",
    href: "/collections/premium-handloom/fine-cotton",
  },
];
