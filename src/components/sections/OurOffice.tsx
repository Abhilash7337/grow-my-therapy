import Image from "next/image";
import Section from "../Section";
import EyebrowLabel from "../EyebrowLabel";
import SectionHeading from "../SectionHeading";

export default function OurOffice() {
  return (
    <Section background="tan">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <EyebrowLabel>My office</EyebrowLabel>
          <SectionHeading>A calm space to do this work.</SectionHeading>
          <p className="font-sans text-base text-ink/80">
            My office in Santa Monica is designed to feel calm and grounding — natural light, a
            comfortable and uncluttered space, nothing clinical about it. Clients often tell me
            the room itself helps them settle before we even start talking.
          </p>
          <p className="font-sans text-base text-ink/80">
            Prefer to stay home? Every session is also available by secure telehealth, anywhere in
            California — whichever feels safer and more comfortable for you.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src="/images/office-lounge-1.jpg"
              alt="A quiet, sunlit corner of the office with comfortable seating"
              fill
              sizes="(min-width: 768px) 22vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/5] w-full translate-y-8 overflow-hidden rounded-sm">
            <Image
              src="/images/office-lounge-2.jpg"
              alt="A calm, uncluttered therapy room with natural light"
              fill
              sizes="(min-width: 768px) 22vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
