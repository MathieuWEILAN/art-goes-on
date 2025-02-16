import { motion } from "framer-motion";

interface CloseProps {
  isClosing: boolean;
  isModalOpen: boolean;
}

const Close = ({ isClosing, isModalOpen }: CloseProps) => {
  return (
    <motion.svg
      className={`h-10 w-10 lg:h-20 lg:w-20`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: isModalOpen ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, delay: isClosing ? 0.8 : 0 }}
    >
      <path
        d="M5.29289 12L18.7071 12"
        stroke="#fff"
        strokeWidth="1"
        style={{
          transform: isClosing ? "rotate(0deg)" : "rotate(45deg)",
          transformOrigin: "center",
          transition: "transform 0.3s ease-in-out",
        }}
      />
      <path
        d="M12 5.29289L12 18.7071"
        stroke="#fff"
        strokeWidth="1"
        style={{
          transform: isClosing ? "rotate(90deg)" : "rotate(45deg)",
          transformOrigin: "center",
          transition: "transform 0.3s ease-in-out",
          opacity: isClosing ? 0 : 1,
        }}
      />
    </motion.svg>
  );
};

export default Close;
