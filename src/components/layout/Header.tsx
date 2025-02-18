"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../icons/Logo";
import ButtonDefault from "../ui/ButtonDefault";
import { useAnimation } from "../../context/AnimationContext";
import ButtonMenuMobile from "../ui/ButtonMenuMobile";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Header = () => {
  const {
    animationCompleteLogo,
    setAnimationCompleteLogo,
    animationComplete,
    isModalOpen,
    isAtBottom,
    isMobile,
    isMenuMobile,
    setIsMenuMobile,
  } = useAnimation();
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
  const height = isMobile ? "60px" : "80px";
  const width = isMobile ? "60px" : "80px";
  const left = isMobile ? "10px" : "15px";
  const top = isMobile ? "5px" : "0px";
  const [hasScrolledPastScreen, setHasScrolledPastScreen] =
    React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
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

  const handleMenuMobileClose = async () => {
    setIsClosing(true);
    console.log("closing");
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsClosing(false);
    setIsMenuMobile(false);
  };

  return (
    <header
      className={`${
        animationCompleteLogo ? "h-16 lg:h-20" : "h-screen bg-white"
      } fixed w-screen top-0 left-0 flex justify-end items-center z-[100] gap-4 px-5 lg:px-10 transition-colors duration-300 py-2.5 backdrop-blur-sm ${
        hasScrolledPastScreen
          ? "md:bg-transparent bg-white/60"
          : "bg-transparent"
      } ${(isAtBottom || isModalOpen) && isMobile ? "!bg-transparent" : ""}`}
    >
      <motion.div
        className={`${
          animationCompleteLogo ? "fixed inset-0" : "absolute"
        } flex justify-center items-center z-50`}
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
      {!isLoginPage && (
        <div
          className={`${
            animationCompleteLogo ? "flex gap-4" : "hidden"
          } flex justify-center items-center max-sm:hidden`}
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
          <Link href="/login">
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
          </Link>
        </div>
      )}
      {animationCompleteLogo && (
        <div className="max-sm:block hidden z-50">
          <ButtonMenuMobile
            isMenuMobile={isMenuMobile}
            setIsMenuMobile={setIsMenuMobile}
            handleMenuMobileClose={handleMenuMobileClose}
            isClosing={isClosing}
          />
        </div>
      )}
      <AnimatePresence mode="wait">
        {isMenuMobile && (
          <motion.div
            className="max-sm:block hidden fixed top-0 left-0 h-screen w-screen bg-black"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.5,
              delay: isClosing ? 0.8 : 0,
            }}
          >
            <motion.div className="px-5 text-left text-white text-2xl flex flex-col h-full w-full justify-center items-start font-satoshi tracking-widest uppercase gap-4">
              <motion.span
                className="border-b border-white py-5 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: isClosing ? 0.2 : 0.2 }}
              >
                Artistes
              </motion.span>
              <motion.span
                className="border-b border-white py-5 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: isClosing ? 0.4 : 0.4 }}
                onClick={() => {
                  handleMenuMobileClose();
                }}
              >
                <Link href="/login">Se connecter</Link>
              </motion.span>
              <motion.div
                className="border-b border-white py-5 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: isClosing ? 0.6 : 0.6 }}
                onClick={() => {
                  handleMenuMobileClose();
                }}
              >
                <Link href="/contact">Contact</Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
