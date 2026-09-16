import Image from "next/image";
import Section from "../Section";
import EyebrowLabel from "../EyebrowLabel";
import SectionHeading from "../SectionHeading";

export default function IntroHope() {
  return (
    <Section background="cream" id="approach">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <SectionHeading>
          You&apos;ve built a life that looks successful. It doesn&apos;t always have to feel this
          exhausting.
        </SectionHeading>

        <div className="flex flex-col gap-6">
          <EyebrowLabel>My approach is warm, collaborative, and grounded</EyebrowLabel>
          <p className="font-sans text-base text-ink/80">
            Maybe you&apos;ve built the career, the reputation, the life that looks like success
            from the outside — but inside, anxiety and old patterns keep pulling you back to the
            same overwhelmed, stuck feeling. That&apos;s often exactly where therapy starts.
          </p>
          <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src="/images/intro-journaling.jpg"
              alt="Reading quietly on a calm morning"
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
