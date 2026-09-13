import Image from "next/image";
import Section from "../Section";
import EyebrowLabel from "../EyebrowLabel";
import SectionHeading from "../SectionHeading";
import UnderlineCTA from "../UnderlineCTA";

export default function HowWeWork() {
  return (
    <Section background="tan" id="about">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_1.4fr]">
        <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-sm">
          <Image
            src="/images/maya-headshot.jpg"
            alt="Dr. Maya Reynolds, PsyD"
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            priority={false}
          />
        </div>

        <div className="flex flex-col gap-6">
          <EyebrowLabel>About Dr. Reynolds</EyebrowLabel>
          <SectionHeading>You stay involved every step of the way.</SectionHeading>
          <p className="font-sans text-base text-ink/80">
            I&apos;m a licensed clinical psychologist based in Santa Monica, California, offering
            therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects
            of past experiences. Many of the people I work with are high-achieving, thoughtful,
            and self-aware — but internally feel exhausted, stuck in overthinking, or emotionally
            on edge. My work often focuses on anxiety, panic, trauma, and burnout. My approach is
            warm, collaborative, and grounded — integrating CBT, EMDR, mindfulness, and
            body-oriented techniques to support both the emotional and physiological sides of what
            you&apos;re going through.
          </p>
          <UnderlineCTA href="#faqs" className="w-fit">
            Learn more about my approach
          </UnderlineCTA>
        </div>
      </div>
    </Section>
  );
}
