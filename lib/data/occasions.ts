export interface Occasion {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

export const OCCASIONS: Occasion[] = [
  {
    id: "wedding",
    title: "Wedding",
    subtitle: "Grace for your sacred union",
    image: "/images/occasion-wedding.jpg",
    href: "/occasions/wedding",
  },
  {
    id: "onam",
    title: "Onam",
    subtitle: "Celebrate the harvest in white & gold",
    image: "/images/occasion-onam.jpg",
    href: "/occasions/onam",
  },
  {
    id: "temple",
    title: "Temple",
    subtitle: "Pure, traditional, and reverent",
    image: "/images/occasion-temple.jpg",
    href: "/occasions/temple",
  },
  {
    id: "gifting",
    title: "Gifting",
    subtitle: "The timeless gift of heritage",
    image: "/images/occasion-gifting.jpg",
    href: "/occasions/gifting",
  },
];
