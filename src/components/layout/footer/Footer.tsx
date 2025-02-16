"use client";
import FormFooter from "../footer/FormFooter";
import { useAnimation } from "../../../context/AnimationContext";
import { useState, useEffect } from "react";
const Footer = () => {
  const { animationCompleteLogo } = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (animationCompleteLogo) {
      setTimeout(() => {
        setIsVisible(true);
      }, 2000);
    }
  }, [animationCompleteLogo]);
  return (
    <div
      className={`bg-black text-white min-h-screen w-screen relative ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <div className="container mx-auto px-4 pt-28 h-full w-full flex flex-col items-center justify-center">
        <h2 className="w-full text-left uppercase tracking-widest">
          Inscrivez-vous
        </h2>
        <FormFooter />
        <p className="text-center text-sm absolute bottom-0">
          &copy; {new Date().getFullYear()} Art Goes On. Tous droits réservés.
        </p>
      </div>
    </div>
  );
};

export default Footer;
