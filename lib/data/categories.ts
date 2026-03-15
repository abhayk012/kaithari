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
    image: "/images/category-single-dhoti.jpg",
    href: "/collections/single-dhoti",
  },
  {
    id: "double-dhoti",
    title: "Double Dhoti",
    description: "Traditional double-layered festive dhoti",
    image: "/images/category-double-dhoti.jpg",
    href: "/collections/double-dhoti",
  },
  {
    id: "kasavu-dhoti",
    title: "Kasavu Dhoti",
    description: "Gold-bordered kasavu for ceremonies & Onam",
    image: "/images/category-kasavu-dhoti.jpg",
    href: "/collections/kasavu-dhoti",
  },
  {
    id: "premium-handloom",
    title: "Premium Handloom",
    description: "Hand-woven by master weavers of Kerala",
    image: "/images/category-handloom.jpg",
    href: "/collections/premium-handloom",
  },
  {
    id: "set-mundu",
    title: "Set Mundu",
    description: "Matched mundu set with neriyathu",
    image: "/images/category-set-mundu.jpg",
    href: "/collections/set-mundu",
  },
  {
    id: "wedding-collection",
    title: "Wedding Collection",
    description: "Exquisite pieces for your most sacred day",
    image: "/images/category-wedding.jpg",
    href: "/collections/wedding",
  },
];
