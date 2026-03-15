import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import OccasionCard from "@/components/common/OccasionCard";
import { OCCASIONS } from "@/lib/data/occasions";

export default function OccasionShop() {
  return (
    <section
      className="bg-[#F5EFE0] py-20 lg:py-28"
      aria-labelledby="occasion-heading"
    >
      <Container>
        <SectionHeading
          id="occasion-heading"
          title="Shop by Occasion"
          subtitle="The right drape for every meaningful moment in your life."
          center
          kaviLine
          className="mb-12"
        />

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {OCCASIONS.map((occasion) => (
            <OccasionCard
              key={occasion.id}
              title={occasion.title}
              subtitle={occasion.subtitle}
              image={occasion.image}
              href={occasion.href}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
