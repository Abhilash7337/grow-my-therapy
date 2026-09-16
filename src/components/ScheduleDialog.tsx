"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function ScheduleDialog({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  const close = () => {
    setOpen(false);
    setSubmitted(false);
  };

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group relative inline-block rounded-none pb-1 font-sans text-xs md:text-sm uppercase tracking-[0.15em] text-ink transition-transform duration-150 active:scale-95 motion-reduce:active:scale-100 ${className}`}
      >
        Schedule a Consultation
        <span className="absolute inset-x-0 bottom-0 h-px bg-ink" aria-hidden="true" />
        <span
          className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-[width] duration-300 ease-out group-hover:w-full motion-reduce:transition-none"
          aria-hidden="true"
        />
      </button>

      {open &&
        createPortal(
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 text-left">
          <div
            className="absolute inset-0 animate-overlay-in bg-ink/50 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="schedule-dialog-title"
            className="relative w-full max-w-md animate-dialog-in rounded-md bg-cream p-8 shadow-2xl md:p-10"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 font-sans text-xl text-ink/50 transition-colors hover:text-ink"
            >
              &times;
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <h3
                    id="schedule-dialog-title"
                    className="font-serif text-2xl text-ink"
                  >
                    Schedule a Consultation
                  </h3>
                  <p className="mt-2 font-sans text-sm text-ink/70">
                    Share a few details and a time that works for you — I&apos;ll follow up by
                    email to confirm.
                  </p>
                </div>

                <label className="flex flex-col gap-1.5">
                  <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-ink/60">
                    Name
                  </span>
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    className="border-b border-ink/20 bg-transparent py-2 font-sans text-sm text-ink outline-none transition-colors focus:border-accent"
                  />
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-ink/60">
                    Email
                  </span>
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    className="border-b border-ink/20 bg-transparent py-2 font-sans text-sm text-ink outline-none transition-colors focus:border-accent"
                  />
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-ink/60">
                    Phone
                  </span>
                  <input
                    type="tel"
                    autoComplete="tel"
                    className="border-b border-ink/20 bg-transparent py-2 font-sans text-sm text-ink outline-none transition-colors focus:border-accent"
                  />
                </label>

                <div className="grid grid-cols-2 gap-4">
                  <label className="flex flex-col gap-1.5">
                    <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-ink/60">
                      Date
                    </span>
                    <input
                      type="date"
                      required
                      className="border-b border-ink/20 bg-transparent py-2 font-sans text-sm text-ink outline-none transition-colors focus:border-accent"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-ink/60">
                      Time
                    </span>
                    <input
                      type="time"
                      required
                      className="border-b border-ink/20 bg-transparent py-2 font-sans text-sm text-ink outline-none transition-colors focus:border-accent"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-2 rounded-full bg-ink px-6 py-3 font-sans text-xs uppercase tracking-[0.15em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-12px_rgba(56,47,45,0.5)] active:translate-y-0 active:scale-95 motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100"
                >
                  Request Consultation
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center gap-3 py-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-2xl text-accent">
                  ✓
                </div>
                <h3 className="font-serif text-2xl text-ink">Thank you</h3>
                <p className="font-sans text-sm text-ink/70">
                  I&apos;ll reach out to you by email shortly to confirm your consultation.
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="mt-2 rounded-full border border-ink px-6 py-2.5 font-sans text-xs uppercase tracking-[0.15em] text-ink transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100"
                >
                  Close
                </button>
              </div>
            )}
          </div>
          </div>,
          document.body
        )}
    </>
  );
}
