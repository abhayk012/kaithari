import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="bg-[#FAF7F0] min-h-screen">
      {/* Page Header */}
      <div className="bg-[#2C2416] py-16 text-center">
        <p className="font-body text-xs tracking-[0.25em] text-[#C9A84C] uppercase mb-3">
          Get in Touch
        </p>
        <h1 className="font-heading text-4xl font-semibold text-[#FAF7F0] sm:text-5xl">
          Contact Us
        </h1>
        <p className="mt-3 font-body text-sm text-[#B8A88A]">
          We&rsquo;d love to hear from you — orders, enquiries, or wholesale
        </p>
      </div>

      <Container className="py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <span
              className="h-px w-10 bg-[#C9A84C] mb-5 block"
              aria-hidden="true"
            />
            <h2 className="font-heading text-3xl font-semibold text-[#2C2416]">
              Kaithari Handlooms
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-[#7A6A52] max-w-sm">
              Reach out to us for product enquiries, bulk orders, gifting, or
              wedding collections. We typically respond within one business day.
            </p>

            <Separator className="my-8 bg-[#E8DFC8]" />

            <address className="not-italic space-y-5 font-body text-sm text-[#5C3D1E]">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#C9A84C] mb-1">
                  Address
                </p>
                <p>Kaithari Handlooms</p>
                <p>Near Sakthan Thampuran Market</p>
                <p>Thrissur, Kerala — 680 001</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#C9A84C] mb-1">
                  Phone
                </p>
                <a
                  href="tel:+919876543210"
                  className="hover:text-[#C9A84C] transition-colors duration-200"
                >
                  +91 98765 43210
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#C9A84C] mb-1">
                  Email
                </p>
                <a
                  href="mailto:hello@kaithari.in"
                  className="hover:text-[#C9A84C] transition-colors duration-200"
                >
                  hello@kaithari.in
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#C9A84C] mb-1">
                  Hours
                </p>
                <p>Monday – Saturday: 9 AM – 7 PM IST</p>
                <p className="text-[#7A6A52]">Sunday: Closed</p>
              </div>
            </address>
          </div>

          {/* Contact Form */}
          <div className="rounded-sm border border-[#E8DFC8] bg-white p-8 shadow-sm">
            <h2 className="font-heading text-2xl font-semibold text-[#2C2416] mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-5" aria-label="Contact form">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="font-body mb-2 block text-xs uppercase tracking-widest text-[#7A6A52]"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Rajesh Nair"
                    required
                    className="rounded-none border-[#E8DFC8] bg-[#FAF7F0] font-body text-sm text-[#2C2416] placeholder:text-[#B8A88A] focus:border-[#C9A84C] focus:ring-[#C9A84C]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="font-body mb-2 block text-xs uppercase tracking-widest text-[#7A6A52]"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="rounded-none border-[#E8DFC8] bg-[#FAF7F0] font-body text-sm text-[#2C2416] placeholder:text-[#B8A88A] focus:border-[#C9A84C] focus:ring-[#C9A84C]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="font-body mb-2 block text-xs uppercase tracking-widest text-[#7A6A52]"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="rounded-none border-[#E8DFC8] bg-[#FAF7F0] font-body text-sm text-[#2C2416] placeholder:text-[#B8A88A] focus:border-[#C9A84C] focus:ring-[#C9A84C]"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="font-body mb-2 block text-xs uppercase tracking-widest text-[#7A6A52]"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Wedding order, bulk enquiry, etc."
                  className="rounded-none border-[#E8DFC8] bg-[#FAF7F0] font-body text-sm text-[#2C2416] placeholder:text-[#B8A88A] focus:border-[#C9A84C] focus:ring-[#C9A84C]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="font-body mb-2 block text-xs uppercase tracking-widest text-[#7A6A52]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us what you need…"
                  className="w-full rounded-none border border-[#E8DFC8] bg-[#FAF7F0] px-3 py-2.5 font-body text-sm text-[#2C2416] placeholder:text-[#B8A88A] focus:border-[#C9A84C] focus:outline-none focus:ring-1 focus:ring-[#C9A84C] resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-none bg-[#2C2416] py-5 font-body text-sm tracking-widest text-[#FAF7F0] uppercase hover:bg-[#5C3D1E] transition-colors duration-200"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
