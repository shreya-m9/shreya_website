import { motion } from "framer-motion";
export default function ArtContainer({ flipped, image, onSelect, title }) {
  return (
    <button onClick={onSelect}>
      <div className="relative">
        <motion.img
          whileHover={{
            x: 5,
            y: -5,
            boxShadow: "-8px 8px 20px var(--accent)",
          }}
          src={image}
          className={`${flipped ? "invisible" : ""}`}
        />
        {flipped && (
          <motion.div
            whileHover={{
              x: 5,
              y: -5,
              boxShadow: "-8px 8px 20px var(--accent-bg)",
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.h3
              whileHover={{ scale: 1.05, originX: 0, color: "var(--accent)" }}
            >
              {title}
            </motion.h3>
          </motion.div>
        )}
      </div>
    </button>
  );
}
