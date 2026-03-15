import type { Occasion } from "@/lib/data/occasions";

export interface OccasionDetail extends Occasion {
  description: string;
  productCount: number;
  color: string;
  accentColor: string;
  malayalam: string;
  tags: string[];
}

export const OCCASIONS_DETAIL: OccasionDetail[] = [
  {
    id: "wedding",
    title: "Wedding",
    subtitle: "Grace for your sacred union",
    description:
      "Kerala weddings are among the most serene celebrations of tradition. The white and gold kasavu drape is not just attire — it is heritage worn with devotion. Our wedding collection features premium double kasavu dhotis, matched set mundus, and bridal kasavu sets crafted by master weavers for your most sacred day.",
    productCount: 3,
    image: "https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?w=800&auto=format&fit=crop&q=80",
    href: "/occasions/wedding",
    color: "#F5EFE0",
    accentColor: "#C9A84C",
    malayalam: "വിവാഹം",
    tags: ["Double Kasavu", "Set Mundu", "Wedding Collection", "Bridal"],
  },
  {
    id: "onam",
    title: "Onam",
    subtitle: "Celebrate the harvest in white & gold",
    description:
      "Onam is Kerala's most joyous festival — a reunion with heritage, nature, and one another. Wearing a pure kasavu dhoti or set mundu on Onam is tradition carried across generations. Our Onam collection brings you the finest handloom weaves, pristine white cotton, and the signature gold border that defines this festival.",
    productCount: 5,
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&auto=format&fit=crop&q=80",
    href: "/occasions/onam",
    color: "#FBF5E6",
    accentColor: "#C9A84C",
    malayalam: "ഓണം",
    tags: ["Kasavu Dhoti", "Set Mundu", "Festival Pick", "Pure Cotton"],
  },
  {
    id: "temple",
    title: "Temple",
    subtitle: "Pure, traditional, and reverent",
    description:
      "The dhoti worn at a temple is a mark of purity and devotion. Our temple-wear collection features plain and kasavu border dhotis in fine cotton — light, breathable, and perfectly draped for long hours of worship and ritual. Designed for comfort without compromising reverence.",
    productCount: 4,
    image: "https://images.unsplash.com/photo-1596040033229-e4f6e2e5e39a?w=800&auto=format&fit=crop&q=80",
    href: "/occasions/temple",
    color: "#EEEAE2",
    accentColor: "#1E4D2B",
    malayalam: "ക്ഷേത്രം",
    tags: ["Plain Border", "Temple Border", "Cotton", "Daily Wear"],
  },
  {
    id: "daily-wear",
    title: "Daily Wear",
    subtitle: "Comfort woven into every thread",
    description:
      "A quality daily dhoti should breathe, drape beautifully, and hold its shape day after day. Our everyday collection features soft single-ply cotton dhotis and fine handloom mundus — durable, cool, and crafted to be worn from morning puja to evening rest.",
    productCount: 4,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
    href: "/occasions/daily-wear",
    color: "#F0EBE2",
    accentColor: "#5C3D1E",
    malayalam: "ദൈനംദിനം",
    tags: ["Single Dhoti", "Plain Border", "Cotton", "Fine Cotton"],
  },
  {
    id: "gifting",
    title: "Gifting",
    subtitle: "The timeless gift of heritage",
    description:
      "Nothing conveys respect, warmth, and tradition like a beautifully packed premium handloom dhoti. Our gifting collection has been curated with heritage presentation, premium weave quality, and elegant packaging — perfect for birthdays, anniversaries, housewarming, and festivals.",
    productCount: 2,
    image: "https://images.unsplash.com/photo-1464699908537-0954e50791ee?w=800&auto=format&fit=crop&q=80",
    href: "/occasions/gifting",
    color: "#EDE5D8",
    accentColor: "#7A2036",
    malayalam: "സമ്മാനം",
    tags: ["Premium Handloom", "Gifting", "Kasavu Border"],
  },
];
