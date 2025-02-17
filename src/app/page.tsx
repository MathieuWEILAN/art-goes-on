"use client";

import React, { useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { useAnimation } from "../context/AnimationContext";
import { Swiper as SwiperType } from "swiper"; // Ajouter cet import
import Marquee from "react-fast-marquee";
const videoUrl = "/videos/joconde.mp4"; // La vidéo doit être dans le dossier public
import Image, { StaticImageData } from "next/image";
import Image1 from "../../public/images/img11.jpg";
import Image2 from "../../public/images/img22.jpg";
import Image3 from "../../public/images/img33.jpg";
import Image4 from "../../public/images/img44.jpeg";
import Image5 from "../../public/images/vertou.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import { Fade } from "react-awesome-reveal";
import ButtonDefault from "../components/ui/ButtonDefault";
import Close from "../components/icons/Close";
import LogoSmall from "../components/icons/LogoSmall";

type Institution = {
  name: string;
  description: string;
  text: string;
  image: StaticImageData;
};

const institutions: Institution[] = [
  {
    name: "Hotel & Palace",
    description: "Luxe & Expérience client",
    text: "Transformez votre hôtel en un espace artistique exclusif où l'art dialogue avec l'architecture et le design intérieur. Nos expositions permettent de sublimer chaque espace – hall, suites, restaurants – et d'offrir à vos clients une immersion artistique inédite. En proposant une sélection d'œuvres contemporaines adaptées à votre univers, vous renforcez votre attractivité et créez une signature visuelle unique. Nous gérons l'ensemble du processus : sélection des œuvres, transport, installation et communication.",
    image: Image1,
  },
  {
    name: "Secteur public",
    description: "Patrimoine & Culture",
    text: "L'art doit être accessible à tous et sortir des cadres traditionnels. En intégrant des expositions dans les musées, monuments ou mairies, vous offrez à votre public une nouvelle façon de découvrir l'art. Nos installations sont pensées pour respecter l'âme du lieu tout en apportant une touche contemporaine. Que ce soit pour un événement temporaire ou une mise en valeur permanente, nous vous accompagnons dans le choix des œuvres et assurons leur installation clé en main.",
    image: Image2,
  },
  {
    name: "Événementiel / Corporate / Immobilier d'exception",
    description: "Prestige & Expérience immersive",
    text: "L'art donne une dimension unique à un événement et renforce l'image d'une marque ou d'un espace. Que ce soit pour une conférence, un lancement de produit, un showroom immobilier ou un siège social, nous créons des expositions sur-mesure qui s'intègrent à votre univers. En mettant en avant des artistes talentueux, vous offrez à votre audience une expérience sensorielle et mémorable. Notre offre inclut la sélection des œuvres, la logistique, et l'installation, pour un rendu spectaculaire et sans contrainte.",
    image: Image3,
  },
  {
    name: "Particulier",
    description: "Collection & Intérieur d'exception",
    text: "Vous souhaitez transformer votre intérieur en une véritable galerie privée ? Nous vous accompagnons dans la sélection d'œuvres uniques qui correspondent à votre style et à l'ambiance de votre espace. Que ce soit pour un salon, une villa ou un appartement de prestige, nous vous proposons des installations sur-mesure pour sublimer votre cadre de vie. Nos services incluent le transport, l'accrochage et le suivi de vos acquisitions artistiques.",
    image: Image4,
  },
];

const imagesData = [
  {
    img: Image1,
    title: "Exposition Bassompierre",
    location: "Paris",
    date: "Janvier 2022",
  },
  {
    img: Image2,
    title: "Exposition Lumière et Ombres",
    location: "Lyon",
    date: "Décembre 2024",
  },
  {
    img: Image3,
    title: "Exposition Art Contemporain",
    location: "Marseille",
    date: "Septembre 2023",
  },
  {
    img: Image4,
    title: "Exposition Couleurs et Formes",
    location: "Bordeaux",
    date: "Mai 2024",
  },
  {
    img: Image5,
    title: "Exposition Perspectives Urbaines",
    location: "Nice",
    date: "Avril 2024",
  },
];

type CursorContent =
  | { type: "info"; data: (typeof imagesData)[0] }
  | { type: "navigation"; text: "Précédent" | "Suivant" }
  | false;

export default function Home() {
  const { animationCompleteLogo, isModalOpen, setIsModalOpen, isMobile } =
    useAnimation();
  const { scrollY } = useScroll();
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.5 }); // Trigger at 50% visibility

  const [modal, setModal] = useState<
    | {
        name: string;
        description: string;
        text: string;
        image: StaticImageData; // Changé pour correspondre à la structure de institution
      }
    | false
  >(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClosing, setIsClosing] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cursorContent, setCursorContent] = useState<CursorContent>(false);
  const [hoveredSlideIndex, setHoveredSlideIndex] = useState<number | null>(
    null
  );

  const videoY = useTransform(scrollY, [0, 1000], [0, 1000]);
  const opacityMarquee = useTransform(scrollY, [0, 850], [1, 0]);

  const updateMousePosition = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleModalToggle = (institution: Institution) => {
    setModal(institution);
    setIsModalOpen(true);
  };
  const handleModalClose = async () => {
    setIsClosing(true);
    await new Promise((resolve) => setTimeout(resolve, 100));
    setIsClosing(false);
    setModal(false);
    setIsModalOpen(false);
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`overflow-hidden flex flex-col justify-center items-center relative`}
    >
      <motion.section
        className="relative w-screen h-screen overflow-hidden"
        initial={{ width: animationCompleteLogo ? 0 : "100vw" }}
        animate={{ width: animationCompleteLogo ? "100vw" : 0 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
      >
        <motion.video
          style={{ y: videoY }}
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-[100%] object-cover"
        />{" "}
        <motion.div
          className="h-full w-full"
          initial={{ y: "100%" }}
          animate={{ y: animationCompleteLogo ? "0%" : "100%" }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className="bg-gradient-to-t from-white via-white/40 to-transparent h-[50vh] absolute bottom-0 left-0 w-full z-10 pb-28 lg:pb-0">
            <Marquee
              className="flex items-end overflow-hidden h-full"
              speed={200}
              delay={6.5}
              direction="right"
            >
              <motion.div
                style={{ opacity: opacityMarquee }}
                className="leading-none font-satoshi font-bold text-[10vh] lg:text-[20vh] z-10 uppercase flex items-center justify-between"
              >
                <span>&nbsp;l&apos;art sans limites&nbsp;</span>
                <LogoSmall color="black" />
              </motion.div>
            </Marquee>
          </div>
        </motion.div>
      </motion.section>
      <motion.section className="w-screen h-auto overflow-hidden px-5 flex justify-end items-center">
        <div className="w-full lg:w-2/3 text-left pt-40 lg:pt-80 pb-40 flex flex-col justify-center items-start">
          <Fade
            direction="up"
            fraction={0.3}
            triggerOnce={isMobile ? true : false}
          >
            <h2>Transformez votre espace en galerie d&apos;exception</h2>
          </Fade>
          <Fade
            direction="up"
            fraction={0.3}
            triggerOnce={isMobile ? true : false}
          >
            <p>
              L&apos;art ne se limite pas aux galeries. Il s&apos;invite là où
              on ne l&apos;attend pas. <strong>ArtGoesOn</strong> réinvente la
              manière dont l&apos;art dialogue avec les espaces en créant un
              pont entre les artistes et les lieux d&apos;exception pour
              sublimer leurs environnements à travers des expositions uniques.
            </p>
          </Fade>
        </div>
      </motion.section>
      <motion.section className="w-full lg:w-screen flex overflow-auto bg-white gap-8 p-4 h-[240px] lg:h-screen relative">
        {cursorContent && (
          <motion.div
            className={`shadow-xl fixed p-4 rounded-full flex items-center justify-center text-black pointer-events-none z-50 ${
              cursorContent.type === "info"
                ? "w-[200px] h-[200px] bg-white text-black"
                : "w-[130px] h-[130px] bg-black text-white uppercase"
            }`}
            style={{
              left: mousePosition.x - 50,
              top: mousePosition.y - 50,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {cursorContent.type === "info" ? (
              <div className="flex flex-col items-center justify-center">
                <span className="font-bold text-base">
                  {cursorContent.data.title}
                </span>
                <span className="text-sm">{cursorContent.data.location}</span>
                <time className="text-sm italic">
                  {cursorContent.data.date}
                </time>
              </div>
            ) : (
              <span className="font-bold text-sm uppercase font-satoshi tracking-widest">
                {cursorContent.text}
              </span>
            )}
          </motion.div>
        )}

        <Swiper
          slidesPerView={1.3}
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
            if (hoveredSlideIndex !== null) {
              const image = imagesData[swiper.activeIndex];
              if (hoveredSlideIndex === swiper.activeIndex) {
                setCursorContent({ type: "info", data: image });
              } else {
                setCursorContent({
                  type: "navigation",
                  text:
                    hoveredSlideIndex < swiper.activeIndex
                      ? "Précédent"
                      : "Suivant",
                });
              }
            }
          }}
        >
          {imagesData.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative overflow-hidden h-full"
                onMouseEnter={() => {
                  setHoveredSlideIndex(index);
                  if (index === activeIndex) {
                    setCursorContent({ type: "info", data: image });
                  } else {
                    setCursorContent({
                      type: "navigation",
                      text: index < activeIndex ? "Précédent" : "Suivant",
                    });
                  }
                }}
                onMouseLeave={() => {
                  setHoveredSlideIndex(null);
                  setCursorContent(false);
                }}
                onMouseMove={updateMousePosition}
                onClick={() => {
                  if (index !== activeIndex) {
                    const swiperEl = document.querySelector(
                      ".swiper"
                    ) as HTMLElement & { swiper: SwiperType };
                    swiperEl?.swiper?.slideTo(index);
                  }
                }}
              >
                <Image
                  src={image.img}
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  alt="Image"
                  className={`w-full h-full object-cover transition-all duration-1000 hover:scale-105 ${
                    index === activeIndex
                      ? "grayscale hover:grayscale-0"
                      : "grayscale"
                  }`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>
      <motion.section className="w-screen min-h-screen overflow-hidden px-5 flex justify-end items-center">
        <div className="w-full lg:w-2/3 text-left">
          <Fade
            direction="up"
            fraction={0.3}
            triggerOnce={isMobile ? true : false}
          >
            <h2 className="">Pourquoi choisir ArtGoesOn ?</h2>
          </Fade>
          <ul className="space-y-4">
            <Fade
              direction="up"
              fraction={0.3}
              triggerOnce={isMobile ? true : false}
            >
              <li>
                <span className="font-bold">Un concept novateur :</span> Offrez
                à vos clients et collaborateurs une immersion artistique hors du
                commun.
              </li>
            </Fade>
            <Fade
              direction="up"
              fraction={0.3}
              triggerOnce={isMobile ? true : false}
            >
              <li>
                <span className="font-bold">
                  Des œuvres sélectionnées avec soin :
                </span>{" "}
                Des pièces uniques d&apos;artistes contemporains, adaptées à
                l&apos;âme de votre lieu.
              </li>
            </Fade>
            <Fade
              direction="up"
              fraction={0.3}
              triggerOnce={isMobile ? true : false}
            >
              <li>
                <span className="font-bold">
                  Une prise en charge complète :
                </span>{" "}
                Nous nous occupons de tout – logistique, transport,
                installation, et communication.
              </li>
            </Fade>
            <Fade
              direction="up"
              fraction={0.3}
              triggerOnce={isMobile ? true : false}
            >
              <li>
                <span className="font-bold">
                  Un levier d&apos;image et d&apos;attractivité :
                </span>{" "}
                Différenciez-vous et marquez les esprits avec une scénographie
                artistique impactante.
              </li>
            </Fade>
            <Fade
              direction="up"
              fraction={0.3}
              triggerOnce={isMobile ? true : false}
            >
              <li>
                <span className="font-bold">
                  Une opportunité d&apos;achat exclusive :
                </span>{" "}
                Offrez à vos visiteurs la possibilité d&apos;acquérir des œuvres
                directement dans un cadre inattendu.
              </li>
            </Fade>
          </ul>
        </div>
      </motion.section>
      <motion.section className="w-screen h-screen overflow-hidden pl-5 pr-10 flex justify-end items-center relative">
        <div className="w-full lg:w-2/3 text-left">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 0.1 : 0 }}
            transition={{ duration: 2 }}
            className="text-[18vw] lg:text-[15vw] font-bold h-full absolute top-[180px] lg:top-1/4 right-[20px] lg:left-[40px]"
          >
            Vous êtes :
          </motion.h2>
          <ul className="w-auto mb-10">
            {institutions.map((institution, index) => (
              <Fade
                direction="up"
                fraction={0.3}
                key={index}
                cascade
                duration={1000}
                triggerOnce={isMobile ? true : false}
              >
                <motion.li
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => handleModalToggle(institution)}
                  className={`overflow-hidden text-lg lg:text-3xl cursor-pointer font-bold border-b border-black py-4 text-black transition-all duration-300 ${
                    hovered === index || hovered === null
                      ? "opacity-100"
                      : "opacity-20"
                  }`}
                >
                  <motion.span>{institution.name}</motion.span>
                </motion.li>
              </Fade>
            ))}
          </ul>
          <Fade
            direction="up"
            fraction={0.3}
            className="flex justify-end"
            triggerOnce={isMobile ? true : false}
          >
            <ButtonDefault action={scrollToBottom}>
              Inscrivez-vous
            </ButtonDefault>
          </Fade>
        </div>
      </motion.section>
      <AnimatePresence>
        {modal && (
          <motion.section
            className="w-[99.5vw] rounded-bl-[50px] h-[99vh] overflow-hidden flex text-white justify-end items-center fixed top-0 right-0 bg-black z-50"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, delay: isClosing ? 0.8 : 0 }}
          >
            <motion.div className="w-full text-left relative pt-28 lg:pt-0 h-full flex flex-col lg:flex-row justify-start lg:justify-end items-center">
              <motion.button
                className="absolute  top-[60px] right-0"
                onClick={handleModalClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.4,
                  delay: isModalOpen ? 0.8 : isClosing ? 0.2 : 0,
                }}
              >
                <Close isClosing={isClosing} isModalOpen={isModalOpen} />
              </motion.button>
              <div className="flex flex-col lg:flex-row justify-end items-center p-4 lg:p-10">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, delay: isClosing ? 0 : 1 }}
                  className="w-full lg:w-1/3 lg:ml-10 order-2 lg:order-1"
                >
                  <Image
                    src={modal.image}
                    alt={modal.name}
                    className="w-full h-auto object-cover grayscale rounded-bl-[50px] lg:rounded-br-[0px]"
                  />
                </motion.div>
                <div className="flex flex-col lg:p-10 h-full justify-center w-full lg:w-2/3 order-1 lg:order-2">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: isClosing ? 0 : 0.4 }}
                    className="text-2xl lg:text-4xl"
                  >
                    {modal.name}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: isClosing ? 0.2 : 0.6 }}
                  >
                    {modal.description}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: isClosing ? 0.4 : 0.8 }}
                    className="text-base lg:text-lg"
                  >
                    {modal.text}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
