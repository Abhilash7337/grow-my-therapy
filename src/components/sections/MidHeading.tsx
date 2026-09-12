import Section from "../Section";
import SectionHeading from "../SectionHeading";
import Accent from "../Accent";

export default function MidHeading() {
  return (
    <Section background="cream">
      <div className="ml-auto max-w-xl text-right">
        <SectionHeading>
          Honoring the trauma you&apos;ve carried <Accent>&amp;</Accent> helping you build the
          calm you deserve.
        </SectionHeading>
      </div>
    </Section>
  );
}
