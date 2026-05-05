import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  const lines = [
    "We are Out of Office —",
    "a quiet studio for loud ideas.",
    "We craft brand systems, digital products",
    "and campaigns that compound over time.",
  ];

  return (
    <section id="about" className="relative py-32 md:py-48 border-t hairline">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">/ 01 — About</p>
        </div>
        <div className="md:col-span-9">
          <h2 className="display text-3xl md:text-5xl lg:text-6xl font-light leading-[1.1] max-w-4xl">
            {lines.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1, ease, delay: i * 0.12 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.6 }}
            className="mt-16 grid sm:grid-cols-3 gap-10 max-w-3xl"
          >
            {[
              { k: "120+", v: "Brands launched" },
              { k: "07", v: "Industry awards" },
              { k: "94%", v: "Client retention" },
            ].map((s) => (
              <div key={s.k}>
                <div className="display text-4xl md:text-5xl font-light">{s.k}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
