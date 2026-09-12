import { ReactNode } from "react";

/** One accent word per major heading, rendered in the script font + teal (see docs/04-SITE-RECON.md). */
export default function Accent({ children }: { children: ReactNode }) {
  return <span className="font-script text-3xl md:text-5xl text-accent">{children}</span>;
}
