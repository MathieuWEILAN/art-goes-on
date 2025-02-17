"use client";

import React from "react";
import { motion } from "framer-motion";
import Logo from "../icons/Logo";
import ButtonDefault from "../ui/ButtonDefault";
import { useAnimation } from "../../context/AnimationContext";

const Header = () => {
  const {
    animationCompleteLogo,
    setAnimationCompleteLogo,
    animationComplete,
    isModalOpen,
    isAtBottom,
    isMobile,
  } = useAnimation();

  const height = isMobile ? "60px" : "80px";
  const width = isMobile ? "60px" : "80px";
  const left = isMobile ? "10px" : "15px";
  const top = isMobile ? "5px" : "0px";
  const [hasScrolledPastScreen, setHasScrolledPastScreen] =
    React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setHasScrolledPastScreen(scrollPosition >= windowHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (!animationCompleteLogo) {
      document.body.style.overflow = "hidden";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [animationCompleteLogo]);

  return (
    <header
      className={`${
        animationCompleteLogo ? "h-auto lg:h-20" : "h-screen bg-white"
      } fixed w-screen top-0 left-0 flex justify-end items-center z-[100] gap-4 px-5 2xl:px-10 transition-colors duration-300 py-2.5 backdrop-blur-sm ${
        hasScrolledPastScreen ? "md:bg-transparent bg-white" : "bg-transparent"
      } ${(isAtBottom || isModalOpen) && isMobile ? "!bg-transparent" : ""}`}
    >
      <motion.div
        className={`${
          animationCompleteLogo ? "fixed inset-0" : "absolute"
        } flex justify-center items-center`}
        initial={{
          height: "100%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          height: animationComplete ? height : "100%",
          width: animationComplete ? width : "100%",
          top: animationComplete ? top : "50%",
          left: animationComplete ? left : "50%",
          transform: animationComplete ? "none" : "translate(-50%, -50%)",
        }}
        transition={{ duration: 0.8, ease: "linear" }}
        onAnimationComplete={() => {
          if (animationComplete) {
            setAnimationCompleteLogo(true);
          }
        }}
      >
        <Logo />
      </motion.div>
      <div
        className={`${
          animationCompleteLogo ? "flex gap-4" : "hidden"
        } flex justify-center items-center`}
      >
        <ButtonDefault
          action={() => {}}
          color={isAtBottom || isModalOpen ? "white" : "black"}
        >
          <span
            className={`${
              isAtBottom || isModalOpen ? "text-white" : "text-black"
            } text-xs tracking-widest`}
          >
            Artistes
          </span>
        </ButtonDefault>
        <ButtonDefault
          action={() => {}}
          color={isAtBottom || isModalOpen ? "white" : "black"}
        >
          <span
            className={`${
              isAtBottom || isModalOpen ? "text-white" : "text-black"
            } text-xs tracking-widest`}
          >
            Se connecter
          </span>
        </ButtonDefault>
      </div>
    </header>
  );
};

export default Header;
