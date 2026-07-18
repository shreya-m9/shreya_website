import { motion } from "framer-motion";
export default function ProjectTab({ title, onSelect, isSelected }) {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        originX: 1,
        backgroundColor: "var(--accent-bg)",
      }}
      onClick={onSelect}
      animate={{
        borderColor: isSelected ? "var(--accent)" : "var(--accent-bg)",
        borderRightWidth: isSelected ? "3px" : "1px",
      }}
      className="flex w-20 h-10 justify-center items-center"
    >
      <p className="text-xs">{title}</p>
    </motion.button>
  );
}
