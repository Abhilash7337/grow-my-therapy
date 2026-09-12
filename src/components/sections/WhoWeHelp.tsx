import Image from "next/image";
import Section from "../Section";
import SectionHeading from "../SectionHeading";
import Accent from "../Accent";

const CARDS = [
  {
    title: "High-Achievers",
    body: "Entrepreneurs, executives, and professionals who look like they have it all together — but feel anxious, perfectionistic, or stretched too thin underneath.",
    image: "/images/who-high-achievers.jpg",
    alt: "Focused late-night work session",
  },
  {
    title: "Creatives & Founders",
    body: "Independent, self-driven people carrying constant pressure and decision fatigue, who need space to process it without judgment.",
    image: "/images/who-creatives.jpg",
    alt: "Artist at work in a creative studio",
  },
  {
    title: "Anyone Feeling Stuck",
    body: "Whether it's trauma resurfacing or burnout that crept up slowly, therapy gives you room to understand it — and move through it, not just around it.",
    image: "/images/who-feeling-stuck.jpg",
    alt: "Overwhelmed at a busy desk, covering face",
  },
];

export default function WhoWeHelp() {
  return (
    <Section background="white">
      <SectionHeading className="mb-12">
        Who I <Accent>help</Accent>
      </SectionHeading>

      <div className="grid gap-10 md:grid-cols-3">
        {CARDS.map((card) => (
          <div key={card.title} className="flex flex-col gap-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes="(min-width: 768px) 25vw, 90vw"
                className="object-cover"
              />
            </div>
            <h3 className="font-serif text-xl text-ink">{card.title}</h3>
            <p className="font-sans text-sm text-ink/80">{card.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
