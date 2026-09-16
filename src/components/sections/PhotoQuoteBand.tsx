"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "../Reveal";

export default function PhotoQuoteBand() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const node = sectionRef.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
        setOffset((elementCenter - viewportCenter) * 0.08);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[420px] items-center justify-center overflow-hidden px-6 py-24 md:px-10"
    >
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${offset}px) scale(1.15)` }}
      >
        <Image
          src="/images/quote-band.jpg"
          alt="Friends walking together along the shore"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/50 to-ink/30"
          aria-hidden="true"
        />
      </div>
      <Reveal className="relative max-w-2xl">
        <p className="text-center font-serif text-2xl font-light leading-relaxed text-white md:text-3xl">
          You don&apos;t have to have it all figured out to start.{" "}
          <em className="italic">
            Therapy works best when you feel respected, understood, and actively involved in your
            own process.
          </em>
        </p>
      </Reveal>
    </section>
  );
}
