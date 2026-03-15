import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Container from "@/components/common/Container";

export const metadata = {
  title: "Our Story — Kerala Handloom Heritage | Kaithari",
  description:
    "Learn the story of Kaithari — how we bring authentic Kerala handloom dhotis and mundus from the looms of Thrissur to doorsteps across India.",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const TIMELINE = [
  {
    year: "Ancient",
    title: "The Loom Comes to Kerala",
    text: "Handloom weaving has been part of Kerala's identity for over two millennia. Communities of weavers settled along the rivers of Thrissur and Chendamangalam, producing cotton and silk textiles celebrated across South Asia.",
  },
  {
    year: "1950s",
    title: "The Weaver Families Take Root",
    text: "Post-independence, weaver cooperatives formed across Thrissur district to preserve the craft and ensure fair livelihoods. Many of our partner weaver families trace their looms to this era — three and four generations deep.",
  },
  {
    year: "2010s",
    title: "The Craft Faces Disruption",
    text: "Power-loom and mill-made imitations flooded the market, making it nearly impossible for handloom artisans to sustain their work. The kasavu border — once a mark of genuine craft — became replicated cheaply, diluting trust.",
  },
  {
    year: "Today",
    title: "Kaithari Bridges the Gap",
    text: "Kaithari was born from a simple commitment: connect India's handloom weavers directly with customers who value real craft. Every dhoti you buy here comes from a named weaver family, on a real pit-loom, with Handloom Mark certification.",
  },
];

const VALUES = [
  {
    icon: "🪡",
    title: "Authenticity First",
    text: "Every product is handloom certified. We do not sell power-loom items — ever. If it says handloom, it is.",
  },
  {
    icon: "🤝",
    title: "Weaver Partnership",
    text: "We work directly with weaver families, paying fair prices without middlemen. Their livelihood is built into every purchase.",
  },
  {
    icon: "🌿",
    title: "Natural Materials",
    text: "100% pure cotton. No synthetic blends, no chemical softeners. Just natural fibre woven the way it has been for centuries.",
  },
  {
    icon: "📦",
    title: "Pan-India Delivery",
    text: "From Thrissur looms to every corner of India — securely packed, quickly dispatched, and delivered with care.",
  },
];

const STATS = [
  { value: "50+", label: "Weaver Families" },
  { value: "10,000+", label: "Orders Delivered" },
  { value: "100%", label: "Handloom Certified" },
  { value: "7", label: "Years of Heritage" },
];

// ─── About Page ───────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F0]">
      {/* Breadcrumb */}
      <div className="border-b border-[#E8DFC8] bg-[#F5EFE0] py-3">
        <Container>
          <Breadcrumb>
            <BreadcrumbList className="font-body text-xs">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    href="/"
                    className="text-[#7A6A52] hover:text-[#C9A84C] transition-colors"
                  >
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-[#C9A84C]" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[#2C2416]">
                  Our Story
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Container>
      </div>

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <div className="bg-[#2C2416] py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span
                className="mb-4 block h-0.5 w-10 bg-[#C9A84C]"
                aria-hidden="true"
              />
              <h1 className="font-heading text-4xl font-semibold leading-tight text-[#FAF7F0] sm:text-5xl lg:text-6xl">
                We Exist to
                <span className="block italic text-[#C9A84C]">Preserve</span>
                the Loom
              </h1>
              <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-[#C9A84C]/70">
                Kaithari is a Kerala handloom brand built on one belief — that
                the artisan who weaves your dhoti deserves to thrive. We bring
                the most authentic handloom textiles from the looms of Thrissur
                to your hands, honestly.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  className="rounded-none border border-[#C9A84C] bg-transparent px-8 py-5 font-body text-xs tracking-widest text-[#C9A84C] uppercase hover:bg-[#C9A84C] hover:text-[#2C2416] transition-colors duration-200"
                >
                  <Link href="/collections">Shop the Collection</Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="rounded-none px-8 py-5 font-body text-xs tracking-widest text-[#FAF7F0]/60 uppercase hover:text-[#FAF7F0] hover:bg-transparent"
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>

            {/* Decorative panel */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative h-[280px] w-full max-w-sm border border-[#C9A84C]/20 bg-[#FAF7F0]/5 p-8 sm:h-[320px]">
                <div className="absolute left-0 top-0 h-full w-1 bg-[#C9A84C]" />
                <div className="absolute right-0 top-0 h-full w-1 bg-[#C9A84C]" />
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                  <div className="h-px w-12 bg-[#C9A84C]" />
                  <span
                    className="font-heading text-8xl font-light text-[#FAF7F0]/5 select-none"
                    aria-hidden="true"
                  >
                    ക
                  </span>
                  <p className="font-heading text-lg italic text-[#C9A84C]">
                    Handwoven in Kerala
                  </p>
                  <p className="font-body text-xs tracking-[0.2em] text-[#FAF7F0]/40 uppercase">
                    Est. on a Pit-Loom
                  </p>
                  <div className="h-px w-12 bg-[#C9A84C]" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ── Stats ──────────────────────────────────────────────────── */}
      <div className="border-y border-[#E8DFC8] bg-[#F5EFE0] py-8">
        <Container>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-heading text-3xl font-semibold text-[#2C2416] sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 font-body text-xs text-[#7A6A52]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Mission ─────────────────────────────────────────────────── */}
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span
              className="mb-4 block h-0.5 w-10 bg-[#C9A84C]"
              aria-hidden="true"
            />
            <h2 className="font-heading text-3xl font-semibold text-[#2C2416] sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-[#5C3D1E]">
              Kerala&apos;s handloom weavers are among the most skilled
              craftspeople in the world. Yet many struggle to connect with
              customers who would value their work — not because the craft is
              dying, but because the supply chain got in the way.
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-[#5C3D1E]">
              Kaithari eliminates that gap. We source directly from weaver
              families in Thrissur, Chendamangalam, and Balaramapuram — paying
              fair prices, ensuring Handloom Mark certification, and bringing
              their work to customers who care about authenticity.
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-[#5C3D1E]">
              Every dhoti you purchase is a direct investment in a weaver&apos;s
              livelihood and in the preservation of a thousand-year craft.
            </p>
          </div>

          {/* Pull quote */}
          <div className="flex items-center">
            <blockquote className="border-l-2 border-[#C9A84C] py-2 pl-6">
              <span
                className="block font-heading text-4xl leading-none text-[#C9A84C]/30"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="mt-2 font-heading text-2xl font-medium italic leading-snug text-[#2C2416] sm:text-3xl">
                The loom is not a machine. It is a conversation between the
                weaver and the thread.
              </p>
              <footer className="mt-4 font-body text-xs text-[#7A6A52]">
                — Master Weaver, Thrissur
              </footer>
            </blockquote>
          </div>
        </div>
      </Container>

      <Separator className="bg-[#E8DFC8]" />

      {/* ── Timeline ─────────────────────────────────────────────────── */}
      <div className="bg-[#F5EFE0] py-16 lg:py-20">
        <Container>
          <div className="mb-10 text-center">
            <span
              className="mx-auto mb-4 block h-0.5 w-10 bg-[#C9A84C]"
              aria-hidden="true"
            />
            <h2 className="font-heading text-3xl font-semibold text-[#2C2416] sm:text-4xl">
              A Thread Through Time
            </h2>
            <p className="mt-2 font-body text-sm text-[#7A6A52]">
              The story of Kerala handloom and how we became a part of it.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 h-full w-px bg-[#E8DFC8] sm:left-1/2" />

            <div className="flex flex-col gap-10">
              {TIMELINE.map((t, i) => (
                <div
                  key={t.year}
                  className={`relative flex gap-6 sm:w-5/12 ${
                    i % 2 === 0
                      ? "sm:self-start sm:pr-10"
                      : "sm:self-end sm:pl-10"
                  }`}
                >
                  {/* Dot */}
                  <div
                    className={`absolute top-1.5 h-3 w-3 flex-shrink-0 rounded-full border-2 border-[#C9A84C] bg-[#FAF7F0] ${
                      i % 2 === 0
                        ? "left-3.5 sm:-right-[26px] sm:left-auto"
                        : "left-3.5 sm:-left-[26px]"
                    }`}
                  />

                  <div className="ml-10 sm:ml-0 rounded-sm border border-[#E8DFC8] bg-white p-5">
                    <span className="font-body text-xs tracking-widest text-[#C9A84C] uppercase">
                      {t.year}
                    </span>
                    <h3 className="mt-1 font-heading text-base font-semibold text-[#2C2416]">
                      {t.title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-[#5C3D1E]">
                      {t.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <Separator className="bg-[#E8DFC8]" />

      {/* ── Values ───────────────────────────────────────────────────── */}
      <Container className="py-16 lg:py-20">
        <div className="mb-10 text-center">
          <span
            className="mx-auto mb-4 block h-0.5 w-10 bg-[#C9A84C]"
            aria-hidden="true"
          />
          <h2 className="font-heading text-3xl font-semibold text-[#2C2416] sm:text-4xl">
            What We Stand For
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="rounded-sm border border-[#E8DFC8] bg-[#F5EFE0] p-6"
            >
              <span className="mb-3 block text-3xl" aria-hidden="true">
                {v.icon}
              </span>
              <h3 className="font-heading text-base font-semibold text-[#2C2416]">
                {v.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-[#7A6A52]">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* ── Bottom CTA ───────────────────────────────────────────────── */}
      <div className="border-t border-[#E8DFC8] bg-[#2C2416] py-14">
        <Container className="flex flex-col items-center gap-4 text-center">
          <span className="block h-0.5 w-10 bg-[#C9A84C]" aria-hidden="true" />
          <h2 className="font-heading text-2xl font-semibold text-[#FAF7F0] sm:text-3xl">
            Wear the Craft. Support the Weaver.
          </h2>
          <p className="max-w-md font-body text-sm leading-relaxed text-[#C9A84C]/80">
            Every purchase from Kaithari is a act of preservation. Browse our
            collection and find your piece of Kerala heritage.
          </p>
          <Button
            asChild
            className="mt-2 rounded-none border border-[#C9A84C] bg-transparent px-10 py-5 font-body text-xs tracking-widest text-[#C9A84C] uppercase hover:bg-[#C9A84C] hover:text-[#2C2416] transition-colors duration-200"
          >
            <Link href="/collections">Browse All Collections</Link>
          </Button>
        </Container>
      </div>
    </div>
  );
}
