"use client";

import React, { useState } from "react";
import Logo from "../components/icons/Logo";
import { motion, useTransform, useScroll, useInView } from "framer-motion";
import Cards from "../components/ui/Cards";
import { useAnimation } from "../context/AnimationContext";
import Modal from "../components/layout/Modal";
import Marquee from "react-fast-marquee";
const videoUrl = "/videos/joconde.mp4"; // La vidéo doit être dans le dossier public
import Image from "next/image";
import Image1 from "../../public/images/img11.jpg";
import Image2 from "../../public/images/img22.jpg";
import Image3 from "../../public/images/img33.jpg";
import Image4 from "../../public/images/img44.jpeg";
import Image5 from "../../public/images/vertou.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

const institutions = [
  {
    name: "Hotel & Palace",
    description: "Un hôtel ou un palais",
  },
  {
    name: "Secteur public",
    description: "Un musée, un monument, une mairie",
  },
  {
    name: "Événementiel / Corporate / Immobilier d'exception",
    description: "Un événement, une entreprise, un immeuble",
  },
  {
    name: "Particulier",
    description: "Un particulier",
  },
];

const images = [Image1, Image2, Image3, Image4, Image5];
export default function Home() {
  const { animationCompleteLogo } = useAnimation();
  const { scrollY } = useScroll();
  const [hovered, setHovered] = useState<number | null>(null);

  const videoY = useTransform(scrollY, [0, 1000], [0, 1000]);
  const opacityMarquee = useTransform(scrollY, [0, 1000], [1, 0]);

  return (
    <div
      className={`overflow-hidden flex flex-col justify-center items-center relative`}
    >
      <motion.section
        className="relative w-screen h-screen overflow-hidden"
        initial={{ width: animationCompleteLogo ? 0 : "100vw" }}
        animate={{ width: animationCompleteLogo ? "100vw" : 0 }}
        transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
      >
        <motion.video
          style={{ y: videoY }}
          src={videoUrl}
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-[100%] object-cover"
        />{" "}
        <motion.div
          className="h-full w-full"
          initial={{ y: "100%" }}
          animate={{ y: animationCompleteLogo ? "0%" : "100%" }}
          transition={{ duration: 2, delay: 2, ease: "easeOut" }}
        >
          <div className="bg-gradient-to-t from-white via-white/40 to-transparent h-[50vh] absolute bottom-0 left-0 w-full z-10">
            <Marquee
              className="flex items-end overflow-hidden h-full"
              speed={200}
              autoFill
              delay={11}
            >
              <motion.div
                style={{ opacity: opacityMarquee }}
                className="leading-none font-satoshi font-bold text-[20vh] z-20 uppercase"
              >
                l&apos;art à porter de tous &nbsp;*&nbsp;
              </motion.div>
            </Marquee>
          </div>
        </motion.div>
      </motion.section>
      <motion.section className="w-screen h-auto overflow-hidden px-5 flex justify-end items-center">
        <div className="w-2/3 text-left h-screen flex flex-col justify-center items-start">
          <h2>Transformez votre espace en galerie d'exception</h2>
          <p>
            L'art ne se limite pas aux galeries. Il s'invite là où on ne
            l'attend pas. <strong>ArtGoesOn</strong> réinvente la manière dont
            l'art dialogue avec les espaces en créant un pont entre les artistes
            et les lieux d'exception pour sublimer leurs environnements à
            travers des expositions uniques.
          </p>
        </div>
      </motion.section>
      <motion.section className="w-screen flex overflow-auto bg-white gap-8 p-8 h-screen">
        <Swiper
          slidesPerView={1.3} // Affiche 1.3 slides visibles
          spaceBetween={20} // Espacement entre les slides
          pagination={{ clickable: true }} // Dots de pagination
          modules={[Pagination]} // Active les modules nécessaires
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden h-full">
                <Image
                  src={image}
                  alt="Image"
                  className="h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>
      <motion.section className="w-screen min-h-screen overflow-hidden px-5 flex justify-end items-center">
        <div className="w-2/3 text-left">
          <h2 className="">Pourquoi choisir ArtGoesOn ?</h2>
          <ul className="space-y-4">
            <li>
              <span className="font-bold">Un concept novateur :</span> Offrez à
              vos clients et collaborateurs une immersion artistique hors du
              commun.
            </li>
            <li>
              <span className="font-bold">
                Des œuvres sélectionnées avec soin :
              </span>{" "}
              Des pièces uniques d'artistes contemporains, adaptées à l'âme de
              votre lieu.
            </li>
            <li>
              <span className="font-bold">Une prise en charge complète :</span>{" "}
              Nous nous occupons de tout – logistique, transport, installation,
              et communication.
            </li>
            <li>
              <span className="font-bold">
                Un levier d'image et d'attractivité :
              </span>{" "}
              Différenciez-vous et marquez les esprits avec une scénographie
              artistique impactante.
            </li>
            <li>
              <span className="font-bold">
                Une opportunité d'achat exclusive :
              </span>{" "}
              Offrez à vos visiteurs la possibilité d'acquérir des œuvres
              directement dans un cadre inattendu.
            </li>
          </ul>
        </div>
      </motion.section>
      <motion.section className="w-screen h-screen overflow-hidden pl-5 pr-10 flex justify-end items-center relative">
        <div className="w-2/3 text-left">
          <h2 className="text-[15vw] -z-10 font-bold opacity-10 h-full absolute top-[200px] left-[40px]">
            Vous êtes :
          </h2>
          <ul className="w-auto">
            {institutions.map((institution, index) => (
              <li
                key={index}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className={`text-3xl cursor-pointer font-bold border-b border-black py-4 text-black transition-all duration-300 ${
                  hovered === index || hovered === null
                    ? "opacity-100"
                    : "opacity-20"
                }`}
              >
                {institution.name}
              </li>
            ))}
          </ul>
        </div>
      </motion.section>
    </div>
  );
}
