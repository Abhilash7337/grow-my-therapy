import type { Metadata } from "next";
import { Playfair_Display, Inter, Parisienne } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const parisienne = Parisienne({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica, CA",
  description:
    "In-person and telehealth therapy for anxiety, trauma, and burnout in Santa Monica, CA. Dr. Maya Reynolds, PsyD offers a warm, collaborative approach for high-achieving adults ready to feel like themselves again.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} ${parisienne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-ink">{children}</body>
    </html>
  );
}
