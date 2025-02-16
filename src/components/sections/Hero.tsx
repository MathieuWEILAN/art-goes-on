"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Yoko from "../../../public/yoko.jpg";
import TextRevealFromBottom from "../animations/TextRevealFromBottom";
import TextRevealLineByLine from "../animations/TextRevealLineByLine";

const Hero = () => {
  return (
    <motion.section className="w-full h-screen flex">
      <motion.div className="w-1/2 h-full relative overflow-hidden">
        <motion.div
          className="h-full w-full"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <Image src={Yoko} alt="Hero" fill className="object-cover w-1/2" />
        </motion.div>
      </motion.div>
      <motion.div className="w-1/2 h-full relative py-28 px-8 text-left flex flex-col gap-5">
        <TextRevealFromBottom>
          <h1 className="text-6xl font-bold h-full w-full">Yayoi Kusama</h1>
        </TextRevealFromBottom>
        <TextRevealLineByLine delay={1}>
          Yayoi Kusama is a Japanese artist known for her immersive
          installations and bold use of color.
        </TextRevealLineByLine>
        <TextRevealFromBottom delay={2}>
          <p className="text-xl font-satoshi ">
            Prêtresse d’un art total, hypnotique et coloré, la Japonaise Yayoi
            Kusama (née en 1929) est connue dans le monde entier pour ses
            impressionnantes installations immersives. Elle est également une
            figure emblématique des années hippies. Touchée par un trouble
            obsessionnel, elle décline les pois à l’infini, envahissant
            entièrement l’espace. L’artiste, à la personnalité excentrique, a
            aussi marqué les années 1960 avec ses performances liées à la nudité
            et à la liberté de jouir de son corps. Depuis 1973, elle vit dans un
            hôpital psychiatrique au Japon et continue de créer des œuvres
            d’art.
          </p>
        </TextRevealFromBottom>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
