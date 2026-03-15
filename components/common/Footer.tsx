import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Container from "@/components/common/Container";

const SHOP_LINKS = [
  { label: "Single Dhoti", href: "/collections/single-dhoti" },
  { label: "Double Dhoti", href: "/collections/double-dhoti" },
  { label: "Kasavu Dhoti", href: "/collections/kasavu-dhoti" },
  { label: "Set Mundu", href: "/collections/set-mundu" },
  { label: "Wedding Collection", href: "/collections/wedding" },
  { label: "Premium Handloom", href: "/collections/premium-handloom" },
];

const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Story", href: "/story" },
  { label: "Occasions", href: "/occasions" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/#faq" },
  { label: "Shipping Info", href: "/shipping" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#E8DFC8] bg-[#2C2416] text-[#E8DFC8]">
      {/* Main footer grid */}
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block" aria-label="Kaithari home">
              <span className="font-heading text-2xl font-semibold text-[#FAF7F0]">
                Kaithari
              </span>
              <span className="mt-0.5 block font-body text-[9px] tracking-[0.25em] text-[#C9A84C] uppercase">
                Kerala Handloom
              </span>
            </Link>
            <p className="mt-4 font-body text-sm leading-relaxed text-[#B8A88A]">
              Preserving the weaving heritage of Kerala, one thread at a time.
              Authentic handloom dhotis and mundus crafted with devotion.
            </p>
            <div className="mt-5 h-px w-10 bg-[#C9A84C]" />
            <p className="mt-4 font-body text-xs text-[#7A6A52] italic">
              &ldquo;Woven with tradition. Worn with pride.&rdquo;
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-heading text-base font-semibold text-[#FAF7F0] mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5">
              {SHOP_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[#B8A88A] hover:text-[#C9A84C] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base font-semibold text-[#FAF7F0] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[#B8A88A] hover:text-[#C9A84C] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-base font-semibold text-[#FAF7F0] mb-4">
              Contact
            </h4>
            <address className="not-italic space-y-3 font-body text-sm text-[#B8A88A]">
              <p>Kaithari Handlooms</p>
              <p>Thrissur, Kerala — 680 001</p>
              <p>India</p>
              <Separator className="my-3 bg-[#3D3020]" />
              <p>
                <a
                  href="tel:+919876543210"
                  className="hover:text-[#C9A84C] transition-colors duration-200"
                >
                  +91 98765 43210
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@kaithari.in"
                  className="hover:text-[#C9A84C] transition-colors duration-200"
                >
                  hello@kaithari.in
                </a>
              </p>
            </address>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-[#3D3020]">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <p className="font-body text-xs text-[#7A6A52]">
            &copy; {new Date().getFullYear()} Kaithari Handlooms. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="font-body text-xs text-[#7A6A52] hover:text-[#C9A84C] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-body text-xs text-[#7A6A52] hover:text-[#C9A84C] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
