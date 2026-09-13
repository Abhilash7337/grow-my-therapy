"use client";

import { useEffect, useState } from "react";
import UnderlineCTA from "./UnderlineCTA";

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "APPROACH", href: "#approach" },
  { label: "FAQS", href: "#faqs" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-cream transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-[padding] duration-300 md:px-10 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <a href="#" className="leading-none">
          <span
            className={`block font-serif text-ink transition-[font-size] duration-300 ${
              scrolled ? "text-xl" : "text-2xl"
            }`}
          >
            Dr. Maya Reynolds
          </span>
          <span className="block font-sans text-[10px] tracking-[0.25em] text-accent">
            PSYD · LICENSED PSYCHOLOGIST
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-xs tracking-[0.15em] text-ink hover:opacity-60"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-ink px-5 py-2 font-sans text-xs tracking-[0.15em] text-ink hover:opacity-60"
          >
            CONTACT
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="relative flex h-4 w-6 flex-col justify-between md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "[transform:translateY(7px)_rotate(45deg)]" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "[transform:translateY(-7px)_rotate(-45deg)]" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-ink/10 px-6 py-6 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-xs tracking-[0.15em] text-ink"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <UnderlineCTA href="#contact" onClick={() => setOpen(false)}>
            CONTACT
          </UnderlineCTA>
        </nav>
      )}
    </header>
  );
}
