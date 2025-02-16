"use client";

import { splitStringWithRegex } from "../../utils/splitStringwithRegex";
import { motion } from "framer-motion";

const TextRevealLineByLine = ({
  children,
  delay = 0,
}: {
  children: string;
  delay?: number;
}) => {
  const lines = splitStringWithRegex(children);
  return (
    <motion.p className="overflow-hidden">
      {lines.map((line, index) => (
        <motion.span
          key={line + index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: index * 0.01 + delay,
          }}
          className="font-satoshi text-xl italic"
        >
          {line}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default TextRevealLineByLine;
