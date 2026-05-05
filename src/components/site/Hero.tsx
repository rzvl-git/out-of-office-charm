import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const headline = ["We Grow Brands", "While You're", "Out of Office."];

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden noise bg-background">
      {/* Animated background — soft moving radial wash */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
      >
        <div className="absolute -top-40 -left-40 w-[60vw] h-[60vw] rounded-full bg-foreground/[0.04] blur-3xl animate-drift" />
        <div className="absolute bottom-0 -right-32 w-[50vw] h-[50vw] rounded-full bg-foreground/[0.06] blur-3xl animate-drift" style={{ animationDelay: "-6s" }} />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 pt-40 md:pt-48 pb-20 min-h-screen flex flex-col justify-between">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10"
          >
            <span className="h-px w-10 bg-foreground" />
            Independent Studio · Est. 2019
          </motion.div>

          <h1 className="display text-[14vw] md:text-[9.5vw] lg:text-[8.5vw] font-medium leading-[0.9]">
            {headline.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease, delay: 0.35 + i * 0.12 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-10 items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.9 }}
            className="text-base md:text-lg text-muted-foreground max-w-md font-light leading-relaxed"
          >
            A small, senior team designing brand systems, websites and growth campaigns
            for ambitious companies that prefer substance over noise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 1.05 }}
            className="flex md:justify-end items-center gap-6"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-4 bg-foreground text-background pl-7 pr-3 py-3 text-sm tracking-wide hover:gap-6 transition-all"
            >
              Let's Talk
              <span className="h-8 w-8 rounded-full bg-background text-foreground flex items-center justify-center group-hover:rotate-45 transition-transform">
                →
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll
        </motion.div>
      </motion.div>
    </section>
  );
}
