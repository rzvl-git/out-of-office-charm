import { motion, useScroll, useSpring } from "framer-motion";

/** Thin progress bar pinned to the top, fills as the page scrolls. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-foreground origin-left z-[60]"
    />
  );
}
