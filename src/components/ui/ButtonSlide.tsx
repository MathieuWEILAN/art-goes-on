"use client";

import { motion, useAnimation } from "framer-motion";

const ButtonSlide = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();

  const handleHoverStart = () => {
    controls.start({ x: "0%" }); // Montée de la div
  };

  const handleHoverEnd = () => {
    controls.start({ x: "-100%" }); // Descente de la div
  };

  return (
    <motion.button
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      className={`w-auto relative inline-flex items-center justify-center overflow-hidden border-2 border-black px-4 py-2 group font-satoshi uppercase text-xs tracking-widest`}
    >
      <span className="relative z-10 text-black transition-colors duration-300 group-hover:text-white font-bold tracking-widest">
        {children}
      </span>
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ x: "-100%" }}
        animate={controls}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      ></motion.div>
    </motion.button>
  );
};

export default ButtonSlide;
