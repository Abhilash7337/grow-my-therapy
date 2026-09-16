import Section from "../Section";
import SectionHeading from "../SectionHeading";
import Accent from "../Accent";
import Reveal from "../Reveal";

const COLUMN_LEFT = ["ANXIETY", "PANIC ATTACKS", "BURNOUT", "TRAUMA", "PERFECTIONISM", "OVERTHINKING"];

const COLUMN_RIGHT = [
  "STRESS MANAGEMENT",
  "EMOTIONAL REGULATION",
  "SELF-WORTH",
  "WORK-LIFE BALANCE",
  "MINDFULNESS",
  "...AND MORE",
];

function AreaColumn({ items }: { items: string[] }) {
  return (
    <div className="divide-y divide-ink/10">
      {items.map((area, index) => (
        <Reveal key={area} delayMs={index * 70} className="py-4">
          <span className="font-sans text-sm tracking-[0.1em] text-ink/80">{area}</span>
        </Reveal>
      ))}
    </div>
  );
}

export default function AreasOfExpertise() {
  return (
    <Section background="white">
      <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
        <SectionHeading>
          My areas of <Accent>expertise</Accent>
        </SectionHeading>

        <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
          <AreaColumn items={COLUMN_LEFT} />
          <AreaColumn items={COLUMN_RIGHT} />
        </div>
      </div>
    </Section>
  );
}
