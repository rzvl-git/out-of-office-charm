import { motion } from "framer-motion";

const points = [
  "Senior team, no account-manager telephone game.",
  "Strategy, design and engineering under one roof.",
  "Transparent pricing and weekly working sessions.",
  "Built for measurable, compounding growth.",
  "Long-term partnerships over project transactions.",
];

const ease = [0.22, 1, 0.36, 1];

export default function WhyUs() {
  return (
    <section id="why" className="relative py-32 md:py-48 border-t hairline bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.3em] text-background/60 mb-6">/ 04 — Why Us</p>
          <h2 className="display text-4xl md:text-5xl font-light leading-[1.05]">
            Five reasons clients stay.
          </h2>
        </div>
        <ul className="md:col-span-8 divide-y divide-background/15 border-y border-background/15">
          {points.map((p, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.8, ease, delay: i * 0.1 }}
              className="py-6 md:py-8 flex items-baseline gap-6 md:gap-10 group"
            >
              <span className="text-xs tracking-[0.25em] text-background/50 w-10 shrink-0">
                0{i + 1}
              </span>
              <span className="display text-2xl md:text-3xl font-light leading-snug group-hover:translate-x-2 transition-transform duration-500">
                {p}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
