export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "fabric-type",
    question: "What type of fabric do you use?",
    answer:
      "All our products are made from 100% pure cotton, handwoven on traditional pit-looms by skilled artisans in Kerala. We source only certified natural cotton, ensuring softness, breathability, and authenticity.",
  },
  {
    id: "kasavu-gold",
    question: "Is the kasavu gold border real zari?",
    answer:
      "Our kasavu border is woven with traditional cotton-core zari threads, the same style used in authentic Kerala handloom for generations. For premium and wedding collections, we use higher-grade zari with greater gold density.",
  },
  {
    id: "sizing",
    question: "What are the available sizes?",
    answer:
      "We offer dhotis in standard sizes — 2 yards (single) and 4 yards (double). Set mundus come with matched neriyathu. Custom sizing is available on request for bulk or wedding orders.",
  },
  {
    id: "washing",
    question: "How should I wash and care for the dhoti?",
    answer:
      "Gentle hand wash in cold water with a mild detergent is recommended. Do not wring — lay flat to dry in shade. For kasavu pieces, avoid soaking for long periods to preserve the gold border.",
  },
  {
    id: "delivery",
    question: "How long does shipping take?",
    answer:
      "We ship pan-India within 1–2 business days of order confirmation. Standard delivery takes 3–5 business days. Express delivery is available for select pincodes.",
  },
  {
    id: "returns",
    question: "What is your return and exchange policy?",
    answer:
      "We accept returns within 7 days of delivery for unused, unwashed products in original packaging. Exchange requests can be raised within 10 days. Wedding and custom orders are non-refundable.",
  },
];
