import Image from "next/image";
import Section from "../Section";
import EyebrowLabel from "../EyebrowLabel";
import SectionHeading from "../SectionHeading";
import Accent from "../Accent";
import UnderlineCTA from "../UnderlineCTA";

export default function Hero() {
  return (
    <Section background="cream">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <EyebrowLabel>Anxiety, trauma &amp; burnout therapy in Santa Monica, CA</EyebrowLabel>
          <SectionHeading as="h1">
            Anxiety therapy in Santa Monica for feeling like{" "}
            <Accent>yourself</Accent> again.
          </SectionHeading>
          <p className="font-sans text-base text-ink/80 md:text-lg">
            In-person sessions in Santa Monica or secure telehealth anywhere in California — for
            high-achieving adults ready to feel steady again.
          </p>
          <UnderlineCTA className="w-fit">Schedule a Consultation</UnderlineCTA>
        </div>

        <div className="relative grid grid-cols-3 gap-4">
          <div className="relative col-span-2 aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/hero-main.jpg"
              alt="Adult finding a moment of calm in warm natural light"
              fill
              sizes="(min-width: 768px) 35vw, 60vw"
              className="object-cover"
            />
          </div>
          <div className="relative col-span-1 aspect-[4/5] translate-y-8 overflow-hidden rounded-sm">
            <Image
              src="/images/hero-wave.jpg"
              alt="Warm golden-hour wave along the California coast"
              fill
              sizes="(min-width: 768px) 18vw, 30vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
