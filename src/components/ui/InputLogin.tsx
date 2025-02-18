"use client";

import { motion } from "framer-motion";

interface InputFooterProps {
  value: string;
  error?: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  label: string;
  name: string;
  isRequired?: boolean;
  delay?: number;
}

const InputLogin = ({
  value,
  handleInputChange,
  className,
  label,
  name,
  delay,
}: InputFooterProps) => {
  return (
    <motion.div
      className={`w-full py-5 overflow-hidden relative ${className}`}
      initial={{ y: "100%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: delay }}
    >
      <div className="w-full relative">
        <input
          type="text"
          name={name}
          id={name}
          placeholder=" "
          className="peer w-full bg-transparent text-base sm:text-lg text-black border-b border-black placeholder-transparent !h-8 sm:h-12 relative z-0 focus:outline-none"
          value={value}
          onChange={handleInputChange}
        />

        <label
          htmlFor={name}
          className="leading-none absolute left-0 text-left top-[-16px] font-satoshi uppercase tracking-widest text-black transition-all duration-300 ease-in-out peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-focus:top-[-20px] peer-focus:text-[10px] sm:peer-focus:text-xs"
        >
          {label}
        </label>
      </div>
      {/* {error && (
        <span className="text-black text-xs lg:text-sm block mt-1 text-left italic">
          {error}
        </span>
      )} */}
    </motion.div>
  );
};

export default InputLogin;
