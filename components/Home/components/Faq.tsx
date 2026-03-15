import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/data/faq";

export default function Faq() {
  return (
    <section
      id="faq"
      className="bg-[#F5EFE0] py-20 lg:py-28"
      aria-labelledby="faq-heading"
    >
      <Container>
        <SectionHeading
          id="faq-heading"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our handloom products and orders."
          center
          kaviLine
          className="mb-12"
        />

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible>
            {FAQ_ITEMS.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-b border-[#E8DFC8]"
              >
                <AccordionTrigger className="font-heading text-left text-base font-semibold text-[#2C2416] hover:text-[#5C3D1E] hover:no-underline py-5 [&>svg]:text-[#C9A84C]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm leading-relaxed text-[#7A6A52] pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
