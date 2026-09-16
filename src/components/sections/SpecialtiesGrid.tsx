import Section from "../Section";
import SectionHeading from "../SectionHeading";
import Accent from "../Accent";
import UnderlineCTA from "../UnderlineCTA";

const SERVICES = [
  {
    title: "Anxiety & Panic Treatment",
    body: "Using CBT and mindfulness-based techniques, we work to calm the physical and mental symptoms of anxiety and panic — so you're not just managing it, but actually feeling steadier day to day.",
  },
  {
    title: "Trauma-Informed & EMDR Therapy",
    body: "EMDR helps reprocess painful or overwhelming experiences so they no longer run the show. This work moves at your pace, always grounded in safety and choice.",
  },
  {
    title: "Burnout Recovery for High-Achievers",
    body: "For the exhausted overachiever: therapy that addresses both the mindset patterns and the nervous-system depletion behind burnout, so rest doesn't feel like falling behind.",
  },
];

export default function SpecialtiesGrid() {
  return (
    <Section background="white" id="services">
      <SectionHeading className="mb-12">
        My <Accent>services</Accent> include...
      </SectionHeading>

      <div className="grid gap-x-10 gap-y-12 md:grid-cols-3">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className="-m-3 flex flex-col gap-3 rounded-md p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-22px_rgba(56,47,45,0.4)] motion-reduce:hover:translate-y-0"
          >
            <h3 className="font-serif text-xl text-ink">{s.title}</h3>
            <p className="font-sans text-sm text-ink/80">{s.body}</p>
            <UnderlineCTA href="#faqs" className="w-fit">
              Learn more
            </UnderlineCTA>
          </div>
        ))}
      </div>
    </Section>
  );
}
