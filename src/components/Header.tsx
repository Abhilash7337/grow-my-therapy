"use client";

import { useState } from "react";
import UnderlineCTA from "./UnderlineCTA";

const NAV_LINKS = ["ABOUT", "SERVICES", "APPROACH", "FAQS"];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#" className="leading-none">
          <span className="block font-serif text-2xl text-ink">Dr. Maya Reynolds</span>
          <span className="block font-sans text-[10px] tracking-[0.25em] text-accent">
            PSYD · LICENSED PSYCHOLOGIST
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="font-sans text-xs tracking-[0.15em] text-ink hover:opacity-60"
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="rounded-full border border-ink px-5 py-2 font-sans text-xs tracking-[0.15em] text-ink hover:opacity-60"
          >
            CONTACT
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-px w-6 bg-ink" />
          <span className="h-px w-6 bg-ink" />
          <span className="h-px w-6 bg-ink" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-ink/10 px-6 py-6 md:hidden">
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className="font-sans text-xs tracking-[0.15em] text-ink">
              {link}
            </a>
          ))}
          <UnderlineCTA>CONTACT</UnderlineCTA>
        </nav>
      )}
    </header>
  );
}
