"use client";

import React from "react";
import { motion } from "framer-motion";
import Logo from "../icons/Logo";
import Button from "../ui/ButtonSlide";
import { useAnimation } from "../../context/AnimationContext";

const Header = () => {
  const { animationCompleteLogo, setAnimationCompleteLogo, animationComplete } =
    useAnimation();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setIsScrolled(scrollPosition > viewportHeight * 0.7);
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
        animationCompleteLogo
          ? "fixed top-0 left-0 w-full h-20"
          : "relative w-screen h-screen"
      } flex justify-end items-center z-20 px-5 gap-4 transition-colors duration-300`}
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
          height: animationComplete ? "80px" : "100%",
          width: animationComplete ? "80px" : "100%",
          top: animationComplete ? "16px" : "50%",
          left: animationComplete ? "16px" : "50%",
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
        <Button action={() => {}}>Artistes</Button>
        <Button action={() => {}}>Se connecter</Button>
      </div>
    </header>
  );
};

export default Header;
