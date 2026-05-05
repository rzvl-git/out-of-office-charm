import { motion } from "framer-motion";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const projects = [
  { img: p2, title: "Carplino", tag: "Branding", year: "2025" },
  { img: p3, title: "Maison Noir", tag: "Campaign", year: "2025" },
  { img: p1, title: "Atelier Light", tag: "Web Design", year: "2024" },
  { img: p4, title: "Lume Audio", tag: "Product Launch", year: "2024" },
  { img: p5, title: "Silenzio", tag: "Identity", year: "2024" },
  { img: p6, title: "Maru Coffee", tag: "Social", year: "2023" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Portfolio() {
  return (
    <section id="work" className="relative py-32 md:py-48 border-t hairline">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-end justify-between mb-16 md:mb-24 flex-wrap gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">/ 03 — Selected Work</p>
            <h2 className="display text-4xl md:text-6xl font-light max-w-2xl leading-[1.05]">
              Recent work, quietly considered.
            </h2>
          </div>
          <a href="#contact" className="text-sm border-b border-foreground pb-1 hover:gap-3">All projects →</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, ease, delay: (i % 3) * 0.08 }}
              className="group block"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <motion.img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="absolute inset-0 h-full w-full object-cover grayscale"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 1.2, ease }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-500" />
                <motion.div
                  initial={false}
                  className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <div className="text-background">
                    <div className="text-xs uppercase tracking-[0.25em] mb-2">{p.tag} · {p.year}</div>
                    <div className="display text-2xl md:text-3xl font-light">{p.title}</div>
                  </div>
                </motion.div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-medium">{p.title}</span>
                <span className="text-xs text-muted-foreground tracking-wide">{p.tag}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
