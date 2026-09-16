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
              className="group relative font-sans text-xs tracking-[0.15em] text-ink transition-transform duration-150 active:scale-95 motion-reduce:active:scale-100"
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-ink px-5 py-2 font-sans text-xs tracking-[0.15em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-12px_rgba(56,47,45,0.45)] active:translate-y-0 active:scale-95 motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100"
          >
            CONTACT
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="relative flex h-4 w-6 flex-col justify-between transition-transform duration-150 active:scale-90 motion-reduce:active:scale-100 md:hidden"
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

      <nav
        aria-hidden={!open}
        className={`flex flex-col gap-4 overflow-hidden px-6 transition-all duration-300 ease-out motion-reduce:transition-none md:hidden ${
          open
            ? "max-h-80 translate-y-0 border-t border-ink/10 py-6 opacity-100"
            : "max-h-0 -translate-y-2 py-0 opacity-0"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            tabIndex={open ? 0 : -1}
            className="font-sans text-xs tracking-[0.15em] text-ink transition-transform duration-150 active:scale-95 motion-reduce:active:scale-100"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <UnderlineCTA href="#contact" onClick={() => setOpen(false)} className={open ? "" : "pointer-events-none"}>
          CONTACT
        </UnderlineCTA>
      </nav>
    </header>
  );
}
