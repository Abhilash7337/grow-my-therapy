import { ReactNode } from "react";
import Reveal from "./Reveal";

type Background = "cream" | "creamDark" | "white" | "tan";

const backgroundClass: Record<Background, string> = {
  cream: "bg-cream",
  creamDark: "bg-cream-dark",
  white: "bg-white",
  tan: "bg-tan",
};

export default function Section({
  background = "cream",
  className = "",
  id,
  children,
}: {
  background?: Background;
  className?: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-28 ${backgroundClass[background]} ${className}`}>
      <Reveal className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">{children}</Reveal>
    </section>
  );
}
