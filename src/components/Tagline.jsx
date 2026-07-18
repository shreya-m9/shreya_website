import { motion } from "framer-motion";
import { useIsVisible } from "../hooks/useIsVisible";
export default function Tagline() {
  const { ref, opacity, scale } = useIsVisible(true);
  return (
    <div ref={ref} className="relative h-[200vh] pt-35">
      <motion.p
        style={{ opacity, scale }}
        className="text-[30px] text-center sticky top-0 h-screen flex items-center justify-center"
      >
        passionate about the convergence of genomics, data, and design
      </motion.p>
    </div>
  );
}
