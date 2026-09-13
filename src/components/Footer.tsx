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
            <li>
              <a href="#" className="hover:text-ink">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-ink">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-ink">
                Services
              </a>
            </li>
            <li>
              <a href="#faqs" className="hover:text-ink">
                FAQs
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-ink">
                Contact
              </a>
            </li>
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
