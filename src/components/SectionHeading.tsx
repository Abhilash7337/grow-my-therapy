import { ReactNode } from "react";

export default function SectionHeading({
  children,
  className = "",
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <Tag
      className={`font-serif font-normal leading-tight text-ink text-3xl md:text-5xl ${className}`}
    >
      {children}
    </Tag>
  );
}
