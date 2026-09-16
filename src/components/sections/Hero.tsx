import Image from "next/image";
import Section from "../Section";
import EyebrowLabel from "../EyebrowLabel";
import SectionHeading from "../SectionHeading";
import Accent from "../Accent";
import ScheduleDialog from "../ScheduleDialog";

export default function Hero() {
  return (
    <Section background="cream">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <EyebrowLabel className="animate-fade-up">
            Anxiety, trauma &amp; burnout therapy in Santa Monica, CA
          </EyebrowLabel>
          <SectionHeading as="h1" className="animate-fade-up [animation-delay:120ms]">
            Anxiety therapy in Santa Monica for feeling like{" "}
            <Accent>yourself</Accent> again.
          </SectionHeading>
          <p className="animate-fade-up font-sans text-base text-ink/80 [animation-delay:240ms] md:text-lg">
            In-person sessions in Santa Monica or secure telehealth anywhere in California — for
            high-achieving adults ready to feel steady again.
          </p>
          <ScheduleDialog className="w-fit animate-fade-up [animation-delay:360ms]" />
        </div>

        <div className="relative grid animate-fade-up grid-cols-3 gap-4 [animation-delay:200ms]">
          <div className="group relative col-span-2 aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/hero-main.jpg"
              alt="Adult finding a moment of calm in warm natural light"
              fill
              sizes="(min-width: 768px) 35vw, 60vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
          <div className="group relative col-span-1 aspect-[4/5] translate-y-8 overflow-hidden rounded-sm">
            <Image
              src="/images/hero-wave.jpg"
              alt="Warm golden-hour wave along the California coast"
              fill
              sizes="(min-width: 768px) 18vw, 30vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
