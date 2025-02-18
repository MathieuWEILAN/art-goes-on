"use client";

import { motion } from "framer-motion";

const ButtonDefault = ({
  children,
  action,
  type = "button",
  color = "black",
  className,
}: {
  children: React.ReactNode;
  action: () => void;
  type?: "submit" | "button";
  color?: "white" | "black";
  className?: string;
}) => {
  return (
    <motion.button
      className={`w-fit relative py-2 px-4 uppercase font-satoshi font-bold ${className}`}
      whileHover="hover"
      onClick={action}
      type={type}
    >
      <motion.span
        className="relative z-10 inline-block text-xs tracking-widest"
        initial={{ x: 0, y: 0 }}
        variants={{
          hover: { x: "20%", y: "80%" },
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.span>{" "}
      <motion.div
        className={`absolute bottom-0 left-0 ${
          type === "submit" || color === "white" ? "bg-white" : "bg-black"
        }`}
        initial={{ width: "100%", height: "2px" }}
        variants={{
          hover: { width: "20%" },
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className={`absolute top-0 right-0 ${
          type === "submit" || color === "white" ? "bg-white" : "bg-black"
        }`}
        initial={{ height: "100%", width: "2px" }}
        variants={{
          hover: { height: "50%" },
        }}
        transition={{ duration: 0.2 }}
      />
      <div
        className={`absolute inset-0 border-t-2 border-l-2 ${
          type === "submit" || color === "white"
            ? "border-white"
            : "border-black"
        }`}
      />
    </motion.button>
  );
};

export default ButtonDefault;
