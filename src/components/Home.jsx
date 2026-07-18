import { useIsVisible } from "../hooks/useIsVisible";
import { motion } from "framer-motion";
export default function Home() {
  const { ref, opacity } = useIsVisible();

  return (
    <div ref={ref} className="flex pl-10 pt-90 justify-end h-screen shrink-0">
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        <div className="flex items-center gap-10">
          <h1 className="pb-5">shreya</h1>
        </div>
        <h1 className="pl-100 pb-10"> mookherjee</h1>
      </motion.div>
    </div>
  );
}
