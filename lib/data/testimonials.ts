export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Nair",
    location: "Thrissur, Kerala",
    rating: 5,
    review:
      "The kasavu dhoti I ordered for my son's wedding was absolutely flawless. The gold border was thick and even, the cotton finely woven. Everyone at the ceremony commented on it. Will order again for Onam.",
  },
  {
    id: "2",
    name: "Suresh Menon",
    location: "Ernakulam, Kerala",
    rating: 5,
    review:
      "I have been wearing mundus from many shops, but the quality here is exceptional. The fabric is pure, breathable, and drapes beautifully. Delivered in three days — very impressed.",
  },
  {
    id: "3",
    name: "Anoop Varma",
    location: "Kozhikode, Kerala",
    rating: 5,
    review:
      "Bought the set mundu for temple visits. The softness of the cotton is unlike anything from the market. You can feel the handloom quality immediately. Highly recommend Kaithari.",
  },
  {
    id: "4",
    name: "Pradeep Kumar",
    location: "Bangalore, Karnataka",
    rating: 5,
    review:
      "As a Malayali living outside Kerala, finding authentic handloom is hard. Kaithari solved that for me. The dhoti arrived beautifully packed, exactly as described. Felt like home.",
  },
];
