import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import TrustBadge from "@/components/common/TrustBadge";
import { TRUST_BADGES } from "@/lib/data/trustBadges";

export default function WhyChooseUs() {
  return (
    <section
      className="border-y border-[#E8DFC8] bg-[#F5EFE0] py-20 lg:py-28"
      aria-labelledby="why-heading"
    >
      <Container>
        <SectionHeading
          id="why-heading"
          title="Why Kaithari?"
          subtitle="Every dhoti we make carries the promise of authenticity, comfort, and craft."
          center
          kaviLine
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {TRUST_BADGES.map((badge) => (
            <div
              key={badge.id}
              className="rounded-sm border border-[#E8DFC8] bg-[#FAF7F0] transition-shadow duration-300 hover:shadow-sm"
            >
              <TrustBadge badge={badge} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
