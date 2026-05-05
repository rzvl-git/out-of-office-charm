import { motion, useScroll, useTransform } from "framer-motion";
import { PropsWithChildren, useRef } from "react";

/**
 * Wraps a section to add a subtle scroll-linked parallax fade,
 * giving fluid transitions between sections.
 */
export default function SectionReveal({ children }: PropsWithChildren) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.4, 1, 1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.2], [40, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.985, 1]);

  return (
    <motion.div ref={ref} style={{ opacity, y, scale }}>
      {children}
    </motion.div>
  );
}
