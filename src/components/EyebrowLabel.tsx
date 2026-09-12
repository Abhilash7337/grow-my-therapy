import { ReactNode } from "react";

export default function EyebrowLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-ink/70 ${className}`}
    >
      {children}
    </p>
  );
}
