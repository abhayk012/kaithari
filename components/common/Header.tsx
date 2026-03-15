"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Container from "@/components/common/Container";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "Occasions", href: "/occasions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E8DFC8] bg-[#FAF7F0]/95 backdrop-blur-sm">
      {/* Top announcement bar */}
      <div className="bg-[#2C2416] py-2 text-center">
        <p className="font-body text-xs tracking-widest text-[#C9A84C] uppercase">
          Free shipping across India on orders above ₹999
        </p>
      </div>

      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col leading-none group"
          aria-label="Kaithari — Kerala Handloom"
        >
          <span className="font-heading text-2xl font-semibold tracking-wide text-[#2C2416] group-hover:text-[#5C3D1E] transition-colors duration-200">
            Kaithari
          </span>
          <span className="font-body text-[10px] tracking-[0.25em] text-[#C9A84C] uppercase">
            Kerala Handloom
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm tracking-wide text-[#5C3D1E] transition-colors duration-200 hover:text-[#C9A84C] relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-[#C9A84C] after:transition-all after:duration-200 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            className="border border-[#2C2416] bg-transparent text-[#2C2416] hover:bg-[#2C2416] hover:text-[#FAF7F0] transition-colors duration-200 text-xs tracking-widest uppercase font-body rounded-none h-9 px-5"
          >
            <Link href="/contact">Enquire Now</Link>
          </Button>
        </div>

        {/* Mobile: Shopping bag + Hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="rounded p-1 text-[#2C2416] hover:text-[#C9A84C] transition-colors duration-200"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] border-l border-[#E8DFC8] bg-[#FAF7F0] p-0"
            >
              {/* Sheet Header */}
              <div className="flex items-center justify-between border-b border-[#E8DFC8] px-6 py-5">
                <div className="flex flex-col leading-none">
                  <span className="font-heading text-xl font-semibold text-[#2C2416]">
                    Kaithari
                  </span>
                  <span className="font-body text-[9px] tracking-[0.25em] text-[#C9A84C] uppercase">
                    Kerala Handloom
                  </span>
                </div>
                <SheetClose asChild>
                  <button
                    aria-label="Close menu"
                    className="text-[#5C3D1E] hover:text-[#C9A84C] transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </SheetClose>
              </div>

              {/* Sheet Nav Links */}
              <nav
                className="flex flex-col px-6 py-6 gap-1"
                aria-label="Mobile navigation"
              >
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body py-3 text-sm tracking-wide text-[#2C2416] border-b border-[#E8DFC8] last:border-0 hover:text-[#C9A84C] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <div className="px-6 pt-2">
                <Button
                  asChild
                  className="w-full border border-[#2C2416] bg-[#2C2416] text-[#FAF7F0] hover:bg-[#5C3D1E] transition-colors duration-200 text-xs tracking-widest uppercase font-body rounded-none h-10"
                >
                  <Link href="/contact">Enquire Now</Link>
                </Button>
              </div>

              {/* Footer note */}
              <div className="absolute bottom-6 left-6 right-6">
                <Separator className="mb-4 bg-[#E8DFC8]" />
                <p className="font-body text-xs text-[#7A6A52] text-center">
                  Free shipping on orders above ₹999
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
