"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Container from "@/components/common/Container";

// ─── Animation helpers ───────────────────────────────────────────────────────

function slideInLeft(delay = 0) {
  return {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
    transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  };
}

function lineVariant(index: number) {
  return {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      delay: 0.12 + index * 0.16,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };
}

// ─── Data ─────────────────────────────────────────────────────────────────────

type HeroContent = {
  id: number;
  eyebrow: string;
  headlineLines: { text: string; bold?: boolean }[];
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  floatingBadge: {
    title: string;
    subtitle: string;
  };
};

const HERO_CONTENTS: HeroContent[] = [
  {
    id: 1,
    eyebrow: "Kerala Handloom · Est. Tradition",
    headlineLines: [
      { text: "The Art of" },
      { text: "Kerala", bold: true },
      { text: "Handloom" },
    ],
    description:
      "Authentic dhotis and mundus, woven by master artisans on traditional pit-looms. Pure cotton. Pure heritage. Delivered to your door.",
    primaryCta: {
      label: "Shop Collections",
      href: "/collections",
    },
    secondaryCta: {
      label: "Our Story",
      href: "/about",
    },
    floatingBadge: {
      title: "Kasavu Collection",
      subtitle: "Now in stock",
    },
  },
  {
    id: 2,
    eyebrow: "Timeless Kerala Wear · Crafted with Care",
    headlineLines: [
      { text: "Tradition in" },
      { text: "Every", bold: true },
      { text: "Thread" },
    ],
    description:
      "Explore elegant kaithari dhotis and premium mundus designed for weddings, temple visits, festivals, and everyday grace.",
    primaryCta: {
      label: "Explore Dhothis",
      href: "/collections",
    },
    secondaryCta: {
      label: "View Best Sellers",
      href: "/collections",
    },
    floatingBadge: {
      title: "Wedding Edit",
      subtitle: "Premium festive styles",
    },
  },
  {
    id: 3,
    eyebrow: "Pure Cotton · Woven in Kerala",
    headlineLines: [
      { text: "Grace for" },
      { text: "Every", bold: true },
      { text: "Occasion" },
    ],
    description:
      "From classic kasavu borders to refined everyday handloom essentials, discover garments that feel light, elegant, and rooted in heritage.",
    primaryCta: {
      label: "Shop Occasion Wear",
      href: "/collections",
    },
    secondaryCta: {
      label: "Learn About Weaving",
      href: "/about",
    },
    floatingBadge: {
      title: "Artisan Woven",
      subtitle: "Traditional loom finish",
    },
  },
  {
    id: 4,
    eyebrow: "Heritage Textiles · Contemporary Ease",
    headlineLines: [
      { text: "Pure Cotton." },
      { text: "Pure", bold: true },
      { text: "Tradition." },
    ],
    description:
      "Celebrate Kerala’s weaving legacy with breathable handloom dhotis, crafted for comfort, elegance, and the beauty of simple dressing.",
    primaryCta: {
      label: "Discover Handloom",
      href: "/collections",
    },
    secondaryCta: {
      label: "See New Arrivals",
      href: "/collections",
    },
    floatingBadge: {
      title: "New Arrivals",
      subtitle: "Freshly curated pieces",
    },
  },
];

const HERO_STATS = [
  { value: "100%", label: "Pure Cotton" },
  { value: "Handwoven", label: "By Artisans" },
  { value: "50+", label: "Weaver Families" },
  { value: "Pan-India", label: "Delivery" },
  { value: "10,000+", label: "Orders Shipped" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeContent = useMemo(
    () => HERO_CONTENTS[activeIndex],
    [activeIndex]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_CONTENTS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-[#FAF7F0]"
      aria-label="Hero"
    >
      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#C9A84C,#C9A84C 1px,transparent 1px,transparent 40px)," +
            "repeating-linear-gradient(90deg,#C9A84C,#C9A84C 1px,transparent 1px,transparent 40px)",
        }}
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid min-h-[90vh] grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          {/* ── Left: Text ───────────────────────────────────────────────── */}
          <div className="flex flex-col items-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeContent.id}
                className="w-full"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Category label */}
                <motion.div
                  className="mb-6 flex items-center gap-3"
                  {...slideInLeft(0)}
                >
                  <span className="h-px w-10 bg-[#C9A84C]" aria-hidden="true" />
                  <span className="font-body text-xs uppercase tracking-[0.25em] text-[#C9A84C]">
                    {activeContent.eyebrow}
                  </span>
                </motion.div>

                {/* Headline */}
                <h1 className="font-heading text-5xl font-semibold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
                  {activeContent.headlineLines.map((line, i) => (
                    <motion.span
                      key={`${activeContent.id}-${line.text}`}
                      className={`block ${
                        line.bold
                          ? "text-[#5C3D1E] italic"
                          : "text-[#2C2416]"
                      }`}
                      {...lineVariant(i)}
                    >
                      {line.text}
                    </motion.span>
                  ))}
                </h1>

                {/* Subheadline */}
                <motion.p
                  className="mt-6 max-w-md font-body text-base leading-relaxed text-[#7A6A52] sm:text-lg"
                  {...slideInLeft(0.62)}
                >
                  {activeContent.description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  className="mt-8 flex flex-wrap gap-4"
                  {...slideInLeft(0.78)}
                >
                  <Button
                    asChild
                    className="rounded-none bg-[#2C2416] px-8 py-5 font-body text-sm uppercase tracking-widest text-[#FAF7F0] transition-colors duration-200 hover:bg-[#5C3D1E]"
                  >
                    <Link href={activeContent.primaryCta.href}>
                      {activeContent.primaryCta.label}
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="rounded-none border-[#2C2416] bg-transparent px-8 py-5 font-body text-sm uppercase tracking-widest text-[#2C2416] transition-colors duration-200 hover:bg-[#2C2416] hover:text-[#FAF7F0]"
                  >
                    <Link href={activeContent.secondaryCta.href}>
                      {activeContent.secondaryCta.label}
                    </Link>
                  </Button>
                </motion.div>

                {/* Slider dots */}
                <motion.div
                  className="mt-8 flex items-center gap-2"
                  {...slideInLeft(0.9)}
                >
                  {HERO_CONTENTS.map((item, index) => {
                    const isActive = index === activeIndex;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        aria-label={`Show hero slide ${index + 1}`}
                        aria-pressed={isActive}
                        onClick={() => setActiveIndex(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          isActive
                            ? "w-10 bg-[#C9A84C]"
                            : "w-2.5 bg-[#D8CCB2] hover:bg-[#C9A84C]/70"
                        }`}
                      />
                    );
                  })}
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Trust stats row */}
            <motion.div
              className="mt-10 border-t border-[#E8DFC8] pt-6"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.96, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {HERO_STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 1.02 + i * 0.08,
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <p className="font-heading text-base font-semibold text-[#2C2416]">
                      {stat.value}
                    </p>
                    <p className="font-body text-xs text-[#7A6A52]">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: Visual panel ───────────────────────────────────────── */}
          <motion.div
            className="relative flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative h-[420px] w-full max-w-md overflow-hidden rounded-sm bg-[#F5EFE0] lg:h-[560px]">
              <div className="absolute left-0 top-0 h-full w-3 bg-[#C9A84C]" />
              <div className="absolute right-0 top-0 h-full w-3 bg-[#C9A84C]" />

              <div className="flex h-full flex-col items-center justify-center gap-6 px-10">
                <div className="h-px w-full bg-[#C9A84C]" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeContent.id}
                    className="flex flex-col items-center gap-3 text-center"
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 24 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span
                      className="select-none font-heading text-8xl font-light text-[#2C2416]/10"
                      aria-hidden="true"
                    >
                      ക
                    </span>
                    <span className="font-heading text-xl font-medium italic text-[#5C3D1E]">
                      {activeContent.headlineLines.map((line) => line.text).join(" ")}
                    </span>
                    <span className="font-body text-xs uppercase tracking-[0.2em] text-[#C9A84C]">
                      Pure Cotton · Pure Tradition
                    </span>
                  </motion.div>
                </AnimatePresence>

                <div className="h-px w-full bg-[#C9A84C]" />

                <div className="flex w-full flex-col gap-1.5 opacity-20">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-0.5 w-full"
                      style={{
                        background:
                          i % 3 === 0
                            ? "#C9A84C"
                            : i % 3 === 1
                            ? "#2C2416"
                            : "#F5EFE0",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeContent.floatingBadge.title}
                className="absolute -left-4 bottom-8 rounded-sm border border-[#E8DFC8] bg-[#FAF7F0] px-4 py-3 shadow-sm lg:-left-8"
                initial={{ opacity: 0, y: 20, x: -12 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: 10, x: 12 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-heading text-sm font-semibold text-[#2C2416]">
                  {activeContent.floatingBadge.title}
                </p>
                <p className="font-body text-xs text-[#C9A84C]">
                  {activeContent.floatingBadge.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}