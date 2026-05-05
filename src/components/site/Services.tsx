import { motion } from "framer-motion";

const services = [
  { n: "01", t: "Digital Marketing", d: "Performance campaigns engineered for measurable, compounding growth." },
  { n: "02", t: "Branding & Identity", d: "Visual systems, naming and verbal identity that age beautifully." },
  { n: "03", t: "Social Media Marketing", d: "Editorial-led content strategy and community building across platforms." },
  { n: "04", t: "Web Design & Development", d: "Fast, considered websites built with design-led engineering." },
  { n: "05", t: "SEO Optimization", d: "Technical SEO and content systems that earn durable visibility." },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  return (
    <section id="services" className="relative py-32 md:py-48 border-t hairline bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">/ 02 — Services</p>
            <h2 className="display text-4xl md:text-6xl font-light max-w-2xl leading-[1.05]">
              A studio built around five disciplines.
            </h2>
          </div>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
        >
          {services.map((s) => (
            <motion.li
              key={s.n}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
              }}
              whileHover={{ scale: 1.015, rotate: -0.4 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="group relative bg-background p-8 md:p-10 min-h-[280px] flex flex-col justify-between cursor-default"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs tracking-[0.25em] text-muted-foreground">{s.n}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm">↗</span>
              </div>
              <div>
                <h3 className="display text-2xl md:text-3xl font-light leading-tight mb-4">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light max-w-xs">{s.d}</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-foreground origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
