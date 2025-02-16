"use client";

import { motion } from "framer-motion";

type NavigationButtonProps = {
  direction: "prev" | "next";
  onClick: () => void;
};

const NavigationButton = ({ direction, onClick }: NavigationButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      className="relative px-4 py-2"
      whileHover="hover"
      initial="initial"
    >
      {/* Arrow */}
      <motion.span
        className="relative z-10 inline-block text-xl pointer-events-none"
        variants={{
          initial: { x: 0 },
          hover: { x: direction === "next" ? 5 : -5 },
        }}
        transition={{ duration: 0.3 }}
      >
        {direction === "next" ? "→" : "←"}
      </motion.span>

      {/* Animated borders */}
      <motion.div
        className="absolute bottom-0 left-0 bg-black"
        initial={{ width: "100%", height: "2px" }}
        variants={{
          hover: { width: "50%" },
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute top-0 right-0 bg-black"
        initial={{ height: "100%", width: "2px" }}
        variants={{
          hover: { height: "50%" },
        }}
        transition={{ duration: 0.3 }}
      />
      <div className="absolute inset-0 border-t-2 border-l-2 border-black" />
    </motion.button>
  );
};

export default NavigationButton;
