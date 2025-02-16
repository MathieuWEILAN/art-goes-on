"use client";

import { motion } from "framer-motion";
import { getTextLines } from "../../utils/getTextLines";
import { useRef, useState, useEffect } from "react";

const TextRevealFromBottom = ({
  children,
  delay = 0.5,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    if (textRef.current) {
      const textLines = getTextLines(textRef.current);
      console.log("textLines", textLines);
      setLines(textLines);
    }
  }, [children]);

  return (
    <div className="overflow-hidden">
      <div
        ref={textRef}
        className="invisible absolute w-full"
        style={{ whiteSpace: "normal" }}
      >
        {children}
      </div>
      {lines.map((line, index) => (
        <div key={index} className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + index * 0.1,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            {line || "\u00A0"}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default TextRevealFromBottom;
