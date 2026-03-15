"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "@/components/common/Container";

const reviews = [
  {
    name: "Rajesh Nair",
    role: "Thrissur, Kerala",
    initials: "RN",
    initBg: "#5C3D1E",
    review:
      "The kasavu dhoti I ordered for my son's wedding was absolutely flawless. The gold border was thick and even, the cotton finely woven. Everyone at the ceremony commented on it. Will order again for Onam.",
  },
  {
    name: "Suresh Menon",
    role: "Ernakulam, Kerala",
    initials: "SM",
    initBg: "#1E4D2B",
    review:
      "I have worn mundus from many shops, but the quality here is exceptional. The fabric is pure, breathable, and drapes beautifully. Delivered in three days — very impressed with Kaithari.",
  },
  {
    name: "Anoop Varma",
    role: "Kozhikode, Kerala",
    initials: "AV",
    initBg: "#7A2036",
    review:
      "Bought the set mundu for temple visits. The softness of the cotton is unlike anything from the market. You can feel the handloom quality immediately. Highly recommend Kaithari.",
  },
  {
    name: "Pradeep Kumar",
    role: "Bangalore, Karnataka",
    initials: "PK",
    initBg: "#2C2416",
    review:
      "As a Malayali living outside Kerala, finding authentic handloom is hard. Kaithari solved that for me. The dhoti arrived beautifully packed, exactly as described. Felt like home.",
  },
  {
    name: "Vineeth Krishnan",
    role: "Palakkad, Kerala",
    initials: "VK",
    initBg: "#5C3D1E",
    review:
      "Gifted a premium double kasavu dhoti to my father-in-law for his birthday. He was overjoyed — said it reminded him of the dhotis from his childhood. Superb craftsmanship.",
  },
  {
    name: "Ramesh Pillai",
    role: "Kottayam, Kerala",
    initials: "RP",
    initBg: "#1E4D2B",
    review:
      "Ordered three mundus for the Onam sadya celebrations. All three arrived on time, perfectly folded and packed. The kasavu border was rich and consistent. Will order every year.",
  },
];

// Triple the array for a seamless infinite loop
const duplicatedReviews = [...reviews, ...reviews, ...reviews];

export default function Testimonials() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      className="overflow-hidden bg-[#FAF7F0] py-20 lg:py-28"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        {/* Heading */}
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span
            className="mx-auto mb-4 block h-0.5 w-12 bg-[#C9A84C]"
            aria-hidden="true"
          />
          <h2
            id="testimonials-heading"
            className="font-heading text-3xl font-semibold leading-tight text-[#2C2416] sm:text-4xl lg:text-5xl"
          >
            Trusted Across Kerala &amp; India
          </h2>
          <p className="mt-3 font-body text-base leading-relaxed text-[#7A6A52] sm:text-lg">
            Thousands of families choose Kaithari for their most cherished
            occasions, season after season.
          </p>
        </motion.div>
      </Container>

      {/* Scrolling Carousel — full-bleed */}
      <div className="relative">
        <div className="flex">
          <motion.div
            className="flex gap-4 md:gap-6"
            initial={{ opacity: 0 }}
            animate={{
              opacity: isMounted ? 1 : 0,
              x: isMounted ? ["0%", `-${100 / 3}%`] : 0,
            }}
            transition={{
              opacity: { duration: 0.3 },
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
                delay: 0.3,
              },
            }}
          >
            {duplicatedReviews.map((review, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 min-w-[280px] max-w-[280px] sm:min-w-[320px] sm:max-w-[320px] md:min-w-[390px] md:max-w-[390px] rounded-sm border border-[#E8DFC8] bg-white p-6 md:p-8 shadow-none"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 8px 24px rgba(44,36,22,0.08)",
                }}
                transition={{ duration: 0.2 }}
              >
                {/* User Info */}
                <div className="mb-5 flex items-center gap-3 md:gap-4">
                  {/* Monogram avatar */}
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full md:h-[52px] md:w-[52px]"
                    style={{ backgroundColor: review.initBg }}
                    aria-hidden="true"
                  >
                    <span className="font-heading text-sm font-semibold text-[#FAF7F0] md:text-base">
                      {review.initials}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-[#2C2416] md:text-lg">
                      {review.name}
                    </h3>
                    <p className="font-body text-xs text-[#C9A84C] md:text-sm">
                      {review.role}
                    </p>
                  </div>
                </div>

                {/* Gold quote mark */}
                <span
                  className="font-heading block text-4xl leading-none text-[#C9A84C]/30 select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                {/* Review Text */}
                <p className="mt-1 font-body text-sm leading-relaxed text-[#5C3D1E]">
                  {review.review}
                </p>

                {/* Stars */}
                <div
                  className="mt-4 flex gap-0.5"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-3.5 w-3.5 text-[#C9A84C]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Gradient fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#FAF7F0] to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#FAF7F0] to-transparent md:w-32" />
      </div>
    </section>
  );
}
