import Link from "next/link";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ProductCard from "@/components/common/ProductCard";
import { FEATURED_COLLECTIONS } from "@/lib/data/collections";

export default function FeaturedCollections() {
  return (
    <section
      className="bg-[#FAF7F0] py-20 lg:py-28"
      aria-labelledby="featured-heading"
    >
      <Container>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between mb-12">
          <SectionHeading
            id="featured-heading"
            title="Featured Collections"
            subtitle="Our most loved and best-selling pieces."
            center={false}
            kaviLine
          />
          <Link
            href="/collections"
            className="font-body text-sm tracking-widest text-[#C9A84C] uppercase hover:text-[#2C2416] transition-colors duration-200 whitespace-nowrap"
            aria-label="View all collections"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_COLLECTIONS.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              badge={product.badge}
              image={product.image}
              href={product.href}
              category={product.category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
