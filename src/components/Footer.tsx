export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-28 border-t-4 border-accent bg-cream-dark">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3 md:px-10">
        <div>
          <span className="block font-serif text-2xl text-ink">Dr. Maya Reynolds, PsyD</span>
          <span className="mb-4 block font-sans text-[10px] tracking-[0.25em] text-accent">
            LICENSED CLINICAL PSYCHOLOGIST
          </span>
          <p className="font-sans text-sm text-ink/80">
            In-person sessions are available at my Santa Monica office, or connect over secure
            telehealth from anywhere in California — whichever works best for you.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-sans text-xs tracking-[0.2em] text-ink/60">NAVIGATE</h3>
          <ul className="space-y-2 font-sans text-sm text-ink/80">
            {[
              { label: "Home", href: "#" },
              { label: "About", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "FAQs", href: "#faqs" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group relative inline-block text-ink/80 transition-transform duration-150 hover:text-ink active:scale-95 motion-reduce:active:scale-100"
                >
                  {link.label}
                  <span
                    className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-sans text-xs tracking-[0.2em] text-ink/60">CONTACT</h3>
          <ul className="space-y-2 font-sans text-sm text-ink/80">
            <li>123th Street 45 W</li>
            <li>Santa Monica, CA 90401</li>
            <li>In-person &amp; telehealth for clients across California</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10 px-6 py-6 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 font-sans text-xs text-ink/60 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-4">
            <span>Terms</span>
            <span>Privacy Policy</span>
            <span>Disclaimer</span>
          </div>
          <span>&copy; {new Date().getFullYear()} Dr. Maya Reynolds, PsyD</span>
        </div>
      </div>
    </footer>
  );
}
