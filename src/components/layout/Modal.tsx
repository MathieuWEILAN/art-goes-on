"use client";

import { useAnimation } from "../../context/AnimationContext";
import { motion } from "framer-motion";
import Yako from "../../../public/yayo.webp";
import Image from "next/image";
import Marquee from "react-fast-marquee";
const Modal = () => {
  const { setIsModalOpen } = useAnimation();
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 1 }}
      className="border-t-2 border-black fixed top-[110px] left-0 w-full h-[calc(100vh-110px)] bg-gradient-to-b from-gray-200 to-white flex flex-col justify-center items-center z-50 text-black overflow-y-auto"
    >
      <button
        onClick={() => setIsModalOpen(false)}
        className="fixed border-t-2 border-black rounded-full bg-gray-200 w-[100px] h-[100px] top-[65px] text-white flex justify-center items-center text-4xl"
      >
        X
      </button>
      <div className="w-full h-full border-2 border-white pt-10">
        <Marquee
          speed={50}
          className="text-6xl border-2 border-blue-500 overflow-hidden"
        >
          <h2>SECTEUR PUBLIC</h2>{" "}
        </Marquee>{" "}
        <div className="flex justify-center items-center container border-2 border-green-500 mx-auto h-fit">
          <Image src={Yako} alt="Yako" className="h-full w-1/2" />
          <div className="w-full"> </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;
