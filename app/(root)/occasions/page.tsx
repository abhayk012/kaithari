import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Container from "@/components/common/Container";
import { OCCASIONS_DETAIL } from "@/lib/data/occasionsDetail";

export const metadata = {
  title: "Shop by Occasion — Kerala Handloom | Kaithari",
  description:
    "Find the perfect Kerala dhoti or mundu for every occasion — weddings, Onam, temple, daily wear, and gifting. Authentic handloom, delivered pan-India.",
};

// ─── Occasion Card ────────────────────────────────────────────────────────────

function OccasionDetailCard({
  occasion,
  reversed,
}: {
  occasion: (typeof OCCASIONS_DETAIL)[0];
  reversed: boolean;
}) {
  return (
    <article
      id={occasion.id}
      className="scroll-mt-24 rounded-sm border border-[#E8DFC8] overflow-hidden"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 ${reversed ? "lg:grid-flow-dense" : ""}`}
      >
        {/* Visual panel */}
        <div
          className={`relative flex flex-col items-center justify-center px-8 py-12 min-h-[260px] lg:min-h-[360px] ${reversed ? "lg:col-start-2" : ""}`}
          style={{ backgroundColor: occasion.color }}
        >
          {/* Kasavu side accent */}
          <div
            className="absolute left-0 top-0 h-full w-2"
            style={{ backgroundColor: occasion.accentColor }}
            aria-hidden="true"
          />
          <div
            className="absolute right-0 top-0 h-full w-2"
            style={{ backgroundColor: occasion.accentColor }}
            aria-hidden="true"
          />

          {/* Malayalam decorative word */}
          <span
            className="font-heading text-7xl font-light text-[#2C2416]/8 select-none leading-none"
            aria-hidden="true"
          >
            {occasion.malayalam}
          </span>

          <div className="mt-3 flex flex-col items-center gap-2 text-center">
            <div
              className="h-px w-12"
              style={{ backgroundColor: occasion.accentColor }}
            />
            <h2 className="font-heading text-3xl font-semibold text-[#2C2416]">
              {occasion.title}
            </h2>
            <p className="font-body text-sm italic text-[#7A6A52]">
              {occasion.subtitle}
            </p>
            <div
              className="h-px w-12"
              style={{ backgroundColor: occasion.accentColor }}
            />
          </div>

          {/* Product count chip */}
          <div className="mt-5 rounded-sm border border-[#E8DFC8] bg-white/60 px-4 py-2 text-center backdrop-blur-sm">
            <span className="font-heading text-lg font-semibold text-[#2C2416]">
              {occasion.productCount}
            </span>
            <span className="ml-1.5 font-body text-xs text-[#7A6A52]">
              curated pieces
            </span>
          </div>
        </div>

        {/* Content panel */}
        <div
          className={`flex flex-col justify-center gap-5 bg-white p-8 lg:p-10 ${reversed ? "lg:col-start-1 lg:row-start-1" : ""}`}
        >
          <p className="font-body text-sm leading-relaxed text-[#5C3D1E]">
            {occasion.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {occasion.tags.map((tag) => (
              <Badge
                key={tag}
                className="rounded-none border border-[#E8DFC8] bg-transparent font-body text-xs text-[#7A6A52] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors cursor-default"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <Separator className="bg-[#E8DFC8]" />

          {/* CTA */}
          <Button
            asChild
            className="w-fit rounded-none bg-[#2C2416] px-8 py-5 font-body text-xs tracking-widest text-[#FAF7F0] uppercase hover:bg-[#5C3D1E] transition-colors duration-200"
          >
            <Link href={`/collections?occasion=${occasion.id}`}>
              Shop {occasion.title} Collection
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function OccasionsPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F0]">
      {/* Breadcrumb bar */}
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
                  Occasions
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Container>
      </div>

      {/* Hero */}
      <div className="border-b border-[#E8DFC8] bg-[#F5EFE0] pb-10 pt-8">
        <Container>
          <span
            className="mb-3 block h-0.5 w-10 bg-[#C9A84C]"
            aria-hidden="true"
          />
          <h1 className="font-heading text-3xl font-semibold text-[#2C2416] sm:text-4xl lg:text-5xl">
            Shop by Occasion
          </h1>
          <p className="mt-3 max-w-xl font-body text-base leading-relaxed text-[#7A6A52]">
            Every occasion in Kerala has its own drape, its own story. Browse
            our curated handloom collections crafted for life&apos;s most
            meaningful moments.
          </p>

          {/* Quick nav chips */}
          <nav
            className="mt-6 flex flex-wrap gap-2"
            aria-label="Jump to occasion"
          >
            {OCCASIONS_DETAIL.map((o) => (
              <Link
                key={o.id}
                href={`#${o.id}`}
                className="rounded-none border border-[#E8DFC8] bg-white px-4 py-1.5 font-body text-xs tracking-wide text-[#5C3D1E] transition-colors hover:border-[#C9A84C] hover:text-[#C9A84C]"
              >
                {o.title}
              </Link>
            ))}
          </nav>
        </Container>
      </div>

      {/* Occasion cards */}
      <Container className="py-10 lg:py-14">
        <div className="flex flex-col gap-8">
          {OCCASIONS_DETAIL.map((occasion, i) => (
            <OccasionDetailCard
              key={occasion.id}
              occasion={occasion}
              reversed={i % 2 !== 0}
            />
          ))}
        </div>
      </Container>

      {/* Bottom CTA strip */}
      <div className="border-t border-[#E8DFC8] bg-[#2C2416] py-12">
        <Container className="flex flex-col items-center gap-4 text-center">
          <span className="block h-0.5 w-10 bg-[#C9A84C]" aria-hidden="true" />
          <h2 className="font-heading text-2xl font-semibold text-[#FAF7F0] sm:text-3xl">
            Can&apos;t find your occasion?
          </h2>
          <p className="max-w-md font-body text-sm leading-relaxed text-[#C9A84C]/80">
            Browse our full collection or reach out — we&apos;ll help you find
            the perfect handloom for any occasion.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="rounded-none border border-[#C9A84C] bg-transparent px-8 py-5 font-body text-xs tracking-widest text-[#C9A84C] uppercase hover:bg-[#C9A84C] hover:text-[#2C2416] transition-colors duration-200"
            >
              <Link href="/collections">Browse All Products</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="rounded-none px-8 py-5 font-body text-xs tracking-widest text-[#FAF7F0]/70 uppercase hover:text-[#FAF7F0] hover:bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
