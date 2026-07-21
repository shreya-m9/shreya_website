import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { useIsVisible } from "../hooks/useIsVisible";
import { Cascade } from "./BackgroundCascade";
import ScrollScramble from "./ScrollScramble";

export default function Tagline() {
  const { ref, opacity, scale } = useIsVisible(true);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "start end"],
  });

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Cascade />
      </div>
      <div ref={ref} className="relative h-[150vh] pt-35">
        <motion.p
          ref={scrollRef}
          style={{ opacity, scale }}
          className="text-[30px] text-center sticky top-0 h-screen flex items-center justify-center"
        >
          <ScrollScramble
            title={
              "PASSIONATE ABOUT THE CONVERGENCE OF GENOMICS, DATA, AND DESIGN"
            }
            progress={scrollYProgress}
            length={100}
          />
        </motion.p>
      </div>
    </div>
  );
}
