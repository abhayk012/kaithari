import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import CollectionCard from "@/components/common/CollectionCard";
import { CATEGORIES } from "@/lib/data/categories";

export default function CategoryShowcase() {
  return (
    <section
      className="bg-[#F5EFE0] py-20 lg:py-28"
      aria-labelledby="category-heading"
    >
      <Container>
        <SectionHeading
          id="category-heading"
          title="Shop by Category"
          subtitle="From everyday wear to ceremonial drapes — every weave for every occasion."
          center
          kaviLine
          className="mb-12"
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {CATEGORIES.map((cat) => (
            <CollectionCard
              key={cat.id}
              title={cat.title}
              description={cat.description}
              image={cat.image}
              href={cat.href}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
