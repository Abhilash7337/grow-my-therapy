import { ReactNode } from "react";

export default function UnderlineCTA({
  children,
  href = "#",
  className = "",
  onClick,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group relative inline-block rounded-none pb-1 font-sans text-xs md:text-sm uppercase tracking-[0.15em] text-ink ${className}`}
    >
      {children}
      <span className="absolute inset-x-0 bottom-0 h-px bg-ink" aria-hidden="true" />
      <span
        className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-[width] duration-300 ease-out group-hover:w-full motion-reduce:transition-none"
        aria-hidden="true"
      />
    </a>
  );
}
