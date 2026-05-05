import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const items = [
  {
    quote:
      "Out of Office rebuilt our brand system end-to-end. The team feels like an extension of ours — fast, sharp and quietly obsessive about the work.",
    name: "Amelia Rhodes",
    role: "CMO, Carplino",
  },
  {
    quote:
      "The most considered studio we've worked with. Every deliverable looked like a final draft on the first pass.",
    name: "Daichi Mori",
    role: "Founder, Maru Coffee",
  },
  {
    quote:
      "They moved our paid acquisition needle in a quarter and made our identity feel ten years more mature.",
    name: "Sara Lindqvist",
    role: "Head of Growth, Lume",
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % items.length), 6500);
    return () => clearInterval(id);
  }, []);

  const t = items[i];

  return (
    <section className="relative py-32 md:py-48 border-t hairline overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 md:px-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12">/ 05 — Testimonials</p>

        <div className="relative min-h-[260px] md:min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.8, ease }}
              className="display text-2xl md:text-4xl font-light leading-snug"
            >
              <span className="text-muted-foreground">“</span>
              {t.quote}
              <span className="text-muted-foreground">”</span>
              <footer className="mt-10 text-xs uppercase tracking-[0.25em] text-muted-foreground not-italic">
                {t.name} — {t.role}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3">
          {items.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-px transition-all ${idx === i ? "w-12 bg-foreground" : "w-6 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
