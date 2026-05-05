import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Marquee strip used as a transition between sections.
 * Combines an infinite horizontal scroll with a scroll-linked
 * subtle skew + opacity ramp to make sections feel connected.
 */
export default function Marquee({
  text = "Out of Office — Brand · Digital · Growth",
  invert = false,
}: {
  text?: string;
  invert?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);

  const items = Array.from({ length: 8 });

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden border-y hairline py-6 md:py-8 ${
        invert ? "bg-foreground text-background" : "bg-background text-foreground"
      }`}
    >
      <motion.div
        style={{ x, opacity }}
        className="flex whitespace-nowrap will-change-transform"
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          className="flex shrink-0"
        >
          {items.concat(items).map((_, i) => (
            <span
              key={i}
              className="display text-5xl md:text-7xl font-light px-8 flex items-center gap-8"
            >
              {text}
              <span aria-hidden className="opacity-40">✦</span>
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
