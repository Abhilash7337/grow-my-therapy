import Section from "../Section";
import SectionHeading from "../SectionHeading";

const FAQS = [
  {
    q: "Do you offer therapy in person or online?",
    a: "Both — I offer in-person sessions at my Santa Monica office and secure telehealth for clients anywhere in California.",
  },
  {
    q: "What therapy approaches do you use?",
    a: "I integrate CBT, EMDR, and mindfulness-based, body-oriented techniques, tailored to whether you're working through anxiety, trauma, or burnout.",
  },
  {
    q: "Who do you typically work with?",
    a: "Most of the people I work with are high-achieving adults — entrepreneurs, creatives, and professionals — who look fine on the outside but feel overwhelmed, stuck, or exhausted internally.",
  },
  {
    q: "How do I know if therapy is right for me?",
    a: "If you want to feel respected, understood, and be an active partner in your own growth, therapy can help — you don't need to have it all figured out to start.",
  },
];

export default function FAQSection() {
  return (
    <Section background="white" id="faqs">
      <SectionHeading className="mb-12">Frequently asked questions</SectionHeading>

      <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
        {FAQS.map((item) => (
          <div key={item.q} className="flex flex-col gap-2">
            <h3 className="font-serif text-lg text-ink">{item.q}</h3>
            <p className="font-sans text-sm text-ink/80">{item.a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
