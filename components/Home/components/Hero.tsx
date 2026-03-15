"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Container from "@/components/common/Container";

// ─── Animation helpers ───────────────────────────────────────────────────────

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  };
}

function fadeIn(delay: number) {
  return {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  };
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const HEADLINE_LINES = [
  { text: "The Art of", bold: false },
  { text: "Kerala", bold: true },
  { text: "Handloom", bold: false },
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
            {/* Category label */}
            <motion.div className="mb-6 flex items-center gap-3" {...fadeIn(0)}>
              <span className="h-px w-10 bg-[#C9A84C]" aria-hidden="true" />
              <span className="font-body text-xs tracking-[0.25em] text-[#C9A84C] uppercase">
                Kerala Handloom · Est. Tradition
              </span>
            </motion.div>

            {/* Headline — each line fades in one by one */}
            <h1 className="font-heading text-5xl font-semibold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              {HEADLINE_LINES.map((line, i) => (
                <motion.span
                  key={line.text}
                  className={`block ${line.bold ? "text-[#5C3D1E] italic" : "text-[#2C2416]"}`}
                  {...fadeUp(0.12 + i * 0.15)}
                >
                  {line.text}
                </motion.span>
              ))}
            </h1>

            {/* Subheadline */}
            <motion.p
              className="mt-6 max-w-md font-body text-base leading-relaxed text-[#7A6A52] sm:text-lg"
              {...fadeIn(0.65)}
            >
              Authentic dhotis and mundus, woven by master artisans on
              traditional pit-looms. Pure cotton. Pure heritage. Delivered to
              your door.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="mt-8 flex flex-wrap gap-4" {...fadeIn(0.82)}>
              <Button
                asChild
                className="rounded-none bg-[#2C2416] px-8 py-5 font-body text-sm tracking-widest text-[#FAF7F0] uppercase hover:bg-[#5C3D1E] transition-colors duration-200"
              >
                <Link href="/collections">Shop Collections</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-none border-[#2C2416] bg-transparent px-8 py-5 font-body text-sm tracking-widest text-[#2C2416] uppercase hover:bg-[#2C2416] hover:text-[#FAF7F0] transition-colors duration-200"
              >
                <Link href="/about">Our Story</Link>
              </Button>
            </motion.div>

            {/* Trust stats row — staggered */}
            <motion.div
              className="mt-10 border-t border-[#E8DFC8] pt-6"
              {...fadeIn(0.96)}
            >
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {HERO_STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    {...fadeUp(1.05 + i * 0.08)}
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
            {...fadeIn(0.35)}
          >
            <div className="relative h-[420px] w-full max-w-md overflow-hidden rounded-sm bg-[#F5EFE0] lg:h-[560px]">
              <div className="absolute left-0 top-0 h-full w-3 bg-[#C9A84C]" />
              <div className="absolute right-0 top-0 h-full w-3 bg-[#C9A84C]" />

              <div className="flex h-full flex-col items-center justify-center gap-6 px-10">
                <div className="h-px w-full bg-[#C9A84C]" />
                <div className="flex flex-col items-center gap-3 text-center">
                  <span
                    className="font-heading text-8xl font-light text-[#2C2416]/10 select-none"
                    aria-hidden="true"
                  >
                    ക
                  </span>
                  <span className="font-heading text-xl font-medium italic text-[#5C3D1E]">
                    Handwoven in Kerala
                  </span>
                  <span className="font-body text-xs tracking-[0.2em] text-[#C9A84C] uppercase">
                    Pure Cotton · Pure Tradition
                  </span>
                </div>
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
            <motion.div
              className="absolute -left-4 bottom-8 rounded-sm border border-[#E8DFC8] bg-[#FAF7F0] px-4 py-3 shadow-sm lg:-left-8"
              {...fadeIn(1.1)}
            >
              <p className="font-heading text-sm font-semibold text-[#2C2416]">
                Kasavu Collection
              </p>
              <p className="font-body text-xs text-[#C9A84C]">Now in stock</p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
