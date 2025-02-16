"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import MyImage from "../../../public/maz1.webp";
import MyImage2 from "../../../public/yoko.jpg";
import Image from "next/image";
import ArrowRight from "../icons/ArrowRight";

// const images = Array.from({ length: 5 }, (_, i) => i + 1);
const images = [
  MyImage,
  MyImage2,
  MyImage,
  MyImage,
  MyImage2,
  MyImage,
  MyImage,
  MyImage,
  MyImage2,
  MyImage,
  MyImage,
  MyImage,
  MyImage,
  MyImage,
  MyImage,
];
const Carousel3D = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [cellCount, setCellCount] = useState(images.length);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [radius, setRadius] = useState(0);
  const theta = 360 / images.length;
  const [currentRotation, setCurrentRotation] = useState(0);
  const parentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start end", "end end"],
    layoutEffect: false,
  });

  const opacity = useTransform(scrollYProgress, [0, 0.99, 1], [0, 0, 1]); // De 0 à 1
  const imageOpacity = useTransform(scrollYProgress, [0, 0.99, 1], [1, 1, 0]);

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const imageWidth = useTransform(scrollYProgress, [0, 1], ["600px", "400px"]);
  const imageHeight = useTransform(scrollYProgress, [0, 1], ["800px", "600px"]);
  useEffect(() => {
    if (carouselRef.current) {
      const containerSize = carouselRef.current.offsetWidth;
      const cellSize = containerSize * 0.9;
      const minRadius =
        cellSize / (2 * Math.tan(Math.PI / Math.min(cellCount, images.length)));
      setRadius(Math.round(minRadius * 1.5));
    }
  }, [cellCount]);

  const rotateCarousel = () => {
    if (carouselRef.current) {
      const angle = currentRotation;
      carouselRef.current.style.transform = `translateZ(${-radius}px) rotateY(${angle}deg)`;
    }
  };

  useEffect(() => {
    rotateCarousel();
  }, [currentRotation, radius]);

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    setCurrentRotation((prev) => prev + theta);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
    setCurrentRotation((prev) => prev - theta);
  };

  useEffect(() => {
    setCurrentImage(images[selectedIndex]);
  }, [selectedIndex]);

  return (
    <section className="w-full h-[200vh] relative z-10">
      <motion.div
        className="w-full h-screen flex items-center justify-center overflow-hidden sticky top-0 bg-white"
        style={{ y }}
      >
        <motion.div
          style={{
            height: imageHeight,
            width: imageWidth,
            opacity: imageOpacity,
          }}
        >
          <Image src={currentImage} alt="maz" className="h-full object-cover" />
        </motion.div>
      </motion.div>
      <motion.div
        className="carousel-container w-full h-screen flex flex-col items-center justify-center bg-gray-100"
        ref={parentRef}
        style={{ opacity: opacity }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="scene w-full max-w-[100vw] aspect-[21/9] max-sm:aspect-square">
          <motion.div ref={carouselRef} className="carousel">
            {images.map((num, index) => (
              <motion.div
                key={index}
                className={`carousel__cell bg-black/10 transition-all duration-300`}
                style={{
                  transform: `rotateY(${
                    theta * index
                  }deg) translateZ(${radius}px)`,
                  width: "100%",
                  height: "100%",
                  left: 0,
                  top: 0,
                  zIndex: selectedIndex === index ? 1 : 0,
                  opacity: selectedIndex === index ? 1 : 0.15,
                }}
              >
                <motion.div
                  className={`relative w-full h-full`}
                  whileHover="hover"
                >
                  <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    animate={{
                      y: selectedIndex === index ? 0 : 100,
                      opacity: selectedIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={`font-satoshi tracking-wider text-black text-4xl font-bold absolute -top-[50px] w-full flex items-center justify-center uppercase ${
                      selectedIndex === index ? "block" : "hidden"
                    }`}
                  >
                    Title
                  </motion.span>
                  <motion.div
                    className="w-full h-full relative cursor-pointer overflow-hidden"
                    transition={{ duration: 2 }}
                  >
                    <Image
                      src={num}
                      alt="maz"
                      fill
                      className={`transition-all duration-300 object-cover h-auto ${
                        selectedIndex === index
                          ? "hover:scale-105 opacity-100"
                          : "grayscale"
                      }`}
                    />
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    variants={{
                      hover: { y: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.3 }}
                    className={`font-satoshi px-5 tracking-wider h-auto text-white text-base font-bold absolute bottom-[10px] w-full text-right ${
                      selectedIndex === index ? "block" : "hidden"
                    }`}
                  >
                    En savoir plus
                  </motion.span>{" "}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="w-screen px-4 lg:w-full absolute flex items-center justify-between">
          <button
            onClick={handlePrevious}
            className="max-sm:bg-white max-sm:border max-sm:border-black rotate-180 max-sm:w-10 max-sm:h-10 hover:-translate-x-[5px] transition-all duration-300 flex items-center justify-center"
          >
            <ArrowRight />
          </button>
          <button
            onClick={handleNext}
            className="max-sm:bg-white max-sm:border max-sm:border-black max-sm:w-10 max-sm:h-10 hover:translate-x-[5px] transition-all duration-300 flex items-center justify-center"
          >
            <ArrowRight />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Carousel3D;
