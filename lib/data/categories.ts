export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "single-dhoti",
    title: "Single Dhoti",
    description: "Classic single-layered dhoti for daily wear",
    image:
      "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?auto=format&fit=crop&w=800&q=80",
    href: "/collections/single-dhoti",
  },
  {
    id: "double-dhoti",
    title: "Double Dhoti",
    description: "Traditional double-layered festive dhoti",
    image:
      "https://images.unsplash.com/photo-1623058120760-6e0d9c1a40f1?auto=format&fit=crop&w=800&q=80",
    href: "/collections/double-dhoti",
  },
  {
    id: "kasavu-dhoti",
    title: "Kasavu Dhoti",
    description: "Gold-bordered kasavu for ceremonies & Onam",
    image:
      "https://images.unsplash.com/photo-1602810319428-019690571b5b?auto=format&fit=crop&w=800&q=80",
    href: "/collections/kasavu-dhoti",
  },
  {
    id: "premium-handloom",
    title: "Premium Handloom",
    description: "Hand-woven by master weavers of Kerala",
    image:
      "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?auto=format&fit=crop&w=800&q=80",
    href: "/collections/premium-handloom",
  },
  {
    id: "set-mundu",
    title: "Set Mundu",
    description: "Matched mundu set with neriyathu",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
    href: "/collections/set-mundu",
  },
  {
    id: "wedding-collection",
    title: "Wedding Collection",
    description: "Exquisite pieces for your most sacred day",
    image:
      "https://images.unsplash.com/photo-1603342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    href: "/collections/wedding",
  },
];