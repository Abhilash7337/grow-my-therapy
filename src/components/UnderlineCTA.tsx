import { ReactNode } from "react";

export default function UnderlineCTA({
  children,
  href = "#",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-block rounded-none border-b border-ink pb-1 font-sans text-xs md:text-sm uppercase tracking-[0.15em] text-ink transition-opacity hover:opacity-60 ${className}`}
    >
      {children}
    </a>
  );
}
