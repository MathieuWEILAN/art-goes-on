"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useAnimation } from "../../context/AnimationContext";
// Définir les couleurs possibles comme un type
type CardColor = "blue" | "orange" | "green"; // ajouter les couleurs dont vous avez besoin

export default function Cards({
  color,
  animationComplete,
  index,
  category,
  ref,
}: {
  color: CardColor;
  animationComplete: boolean;
  index: number;
  category: string;
  ref: any;
}) {
  const isInView = useInView(ref, { once: true });

  const { setIsModalOpen, setValueModal, isModalOpen } = useAnimation();
  const bgColor =
    color === "blue"
      ? "bg-red-300/50"
      : color === "orange"
      ? "bg-orange-200/50"
      : "bg-black/50";
  const borderColor =
    color === "blue"
      ? "border-red-300/50"
      : color === "orange"
      ? "border-orange-200/50"
      : "border-black/50";
  return (
    <motion.div
      ref={ref}
      className={`${
        animationComplete ? "block" : "hidden"
      } overflow-hidden group relative w-auto max-w-[460px] h-[610px] uppercase font-satoshi cursor-pointer backdrop-blur-sm bg-white/60 hover:bg-white/0 transition-all duration-300 hover:backdrop-blur-none`}
      whileHover="hover"
      initial={{
        opacity: 0,
      }}
      animate={
        animationComplete
          ? {
              opacity: 1,
            }
          : {}
      }
      transition={{ duration: 2, delay: 1.6 + index * 0.5 }}
      onClick={() => {
        setIsModalOpen(!isModalOpen);
      }}
    >
      <motion.div
        className={`absolute inset-0 ${bgColor} h-full w-full flex justify-center items-center ${borderColor} -z-10`}
        initial={{ y: isModalOpen ? "100%" : "0%" }}
        animate={{ y: isModalOpen ? "0%" : "100%" }}
        transition={{ duration: 0.3 }}
      ></motion.div>

      {!isModalOpen && (
        <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 absolute bottom-0 right-0 text-xs tracking-widest font-semibold">
          En savoir plus
        </span>
      )}
      <motion.div className="w-full h-full flex flex-col">
        <h2 className="h-full text-black text-4xl font-bold p-12 tracking-wider flex justify-center items-center">
          {category}
        </h2>
      </motion.div>
      <motion.div
        className={`absolute bottom-0 left-0 ${bgColor}`}
        initial={{ width: "100%", height: "82px" }}
        variants={{
          hover: { width: "50%", height: "12px" },
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className={`absolute top-0 right-0 ${bgColor}`}
        initial={{ height: "100%", width: "28px" }}
        variants={{
          hover: { height: "50%", width: "12px" },
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        initial={{ borderTopWidth: "82px", borderLeftWidth: "28px" }}
        variants={{
          hover: { borderTopWidth: "12px", borderLeftWidth: "12px" },
        }}
        transition={{ duration: 0.2 }}
        className={`absolute inset-0 ${borderColor}`}
      />
    </motion.div>
  );
}
