import Image from "next/image";
import Reveal from "../Reveal";

export default function PhotoQuoteBand() {
  return (
    <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden px-6 py-24 md:px-10">
      <Image
        src="/images/quote-band.jpg"
        alt="Friends walking together along the shore"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/50 to-ink/30"
        aria-hidden="true"
      />
      <Reveal className="relative max-w-2xl">
        <p className="text-center font-serif text-2xl font-light leading-relaxed text-white md:text-3xl">
          You don&apos;t have to have it all figured out to start.{" "}
          <em className="italic">
            Therapy works best when you feel respected, understood, and actively involved in your
            own process.
          </em>
        </p>
      </Reveal>
    </section>
  );
}
