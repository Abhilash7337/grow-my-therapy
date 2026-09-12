import Section from "../Section";
import EyebrowLabel from "../EyebrowLabel";
import SectionHeading from "../SectionHeading";
import Accent from "../Accent";
import UnderlineCTA from "../UnderlineCTA";

export default function FinalCTA() {
  return (
    <Section background="cream">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <EyebrowLabel>Schedule a consultation</EyebrowLabel>
        <SectionHeading>
          Find a space to finally <Accent>exhale</Accent>.
        </SectionHeading>
        <p className="font-sans text-base text-ink/80">
          Reaching out is often the hardest part. If you&apos;re ready to feel steadier, more
          grounded, and more like yourself, I&apos;d be glad to talk it through with you — whether
          that&apos;s in person in Santa Monica or over telehealth anywhere in California.
        </p>
        <UnderlineCTA>Schedule a Consultation</UnderlineCTA>
      </div>
    </Section>
  );
}
