import Link from "next/link";
import Container from "@/components/common/Container";

export default function CraftStory() {
  return (
    <section
      className="bg-[#FAF7F0] py-20 lg:py-28"
      aria-labelledby="craft-heading"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Visual panel */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-sm bg-[#2C2416] aspect-[4/5]">
              {/* Gold border accent */}
              <div className="absolute inset-4 border border-[#C9A84C]/40 rounded-sm pointer-events-none z-10" />

              {/* Decorative content */}
              <div className="flex h-full flex-col items-center justify-center gap-8 p-10 text-center">
                {/* Weave pattern simulation */}
                <div className="flex flex-col gap-2 w-full opacity-20">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex gap-1"
                      style={{ paddingLeft: i % 2 === 0 ? "0" : "8px" }}
                    >
                      {Array.from({ length: 6 }).map((_, j) => (
                        <div
                          key={j}
                          className="h-2 flex-1 rounded-full"
                          style={{
                            backgroundColor:
                              (i + j) % 3 === 0
                                ? "#C9A84C"
                                : (i + j) % 3 === 1
                                  ? "#FAF7F0"
                                  : "#5C3D1E",
                          }}
                        />
                      ))}
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="z-10">
                  <div className="mb-3 h-px w-12 bg-[#C9A84C] mx-auto" />
                  <p className="font-heading text-2xl font-light italic leading-relaxed text-[#FAF7F0]">
                    &ldquo;Every thread tells the story of a weaver&rsquo;s
                    hands, a family&rsquo;s dreams.&rdquo;
                  </p>
                  <div className="mt-3 h-px w-12 bg-[#C9A84C] mx-auto" />
                  <p className="mt-3 font-body text-xs tracking-widest text-[#C9A84C] uppercase">
                    Kerala Weaving Tradition
                  </p>
                </div>
              </div>
            </div>

            {/* Small floating card */}
            <div className="absolute -right-4 -top-4 rounded-sm border border-[#E8DFC8] bg-[#FAF7F0] p-4 shadow-md lg:-right-8">
              <p className="font-heading text-2xl font-semibold text-[#C9A84C]">
                400+
              </p>
              <p className="font-body text-xs text-[#7A6A52]">
                Years of heritage
              </p>
            </div>
          </div>

          {/* Text content */}
          <div className="order-1 lg:order-2">
            <span
              className="h-px w-10 bg-[#C9A84C] mb-4 block"
              aria-hidden="true"
            />
            <h2
              className="font-heading text-4xl font-semibold leading-tight text-[#2C2416] sm:text-5xl"
              id="craft-heading"
            >
              The Soul of
              <br />
              <em className="not-italic text-[#5C3D1E]">Kerala Weaving</em>
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-[#7A6A52]">
              In the villages of Thrissur and Chendamangalam, looms have sung
              the same rhythm for generations. Master weavers — whose craft was
              passed from father to son, mother to daughter — transform raw
              cotton threads into the pristine white fabric that has clothed
              Kerala&rsquo;s people for centuries.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-[#7A6A52]">
              The kasavu border — that iconic band of gold woven into the edge
              of every dhoti and mundu — is not merely decorative. It is a mark
              of celebration, of purity, of belonging. It is worn to temples, to
              weddings, on the morning of Onam, at every moment that matters.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-[#7A6A52]">
              At Kaithari, we work directly with weaver families to bring you
              fabric that is 100% authentic, ethically made, and worthy of your
              most cherished occasions.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 border-t border-[#E8DFC8] pt-6">
              {[
                { label: "Weaving families supported", value: "50+" },
                { label: "Products sold", value: "10,000+" },
                { label: "States delivered to", value: "28" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-2xl font-semibold text-[#2C2416]">
                    {stat.value}
                  </p>
                  <p className="font-body text-xs text-[#7A6A52]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-8 inline-block font-body text-sm tracking-widest text-[#C9A84C] uppercase hover:text-[#2C2416] transition-colors duration-200"
            >
              Read Our Full Story →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
