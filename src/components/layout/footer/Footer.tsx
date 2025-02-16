"use client";
import FormFooter from "../footer/FormFooter";
import { useAnimation } from "../../../context/AnimationContext";
import { useState, useEffect } from "react";
import Link from "next/link";
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
      className={`bg-black text-white min-h-screen h-auto w-screen relative ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <div className="container mx-auto px-4 pt-28 h-full w-full flex flex-col items-center justify-center">
        <h2 className="w-full text-left uppercase tracking-widest">
          Inscrivez-vous
        </h2>
        <FormFooter />
        <div className="w-full flex flex-col lg:flex-row justify-between items-center text-sm absolute bottom-0 px-5">
          <div className="flex gap-4">
            <Link
              href="/mentions-legales"
              className="font-satoshi text-sm mr-2 mb-4"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-de-confidentialite"
              className="font-satoshi text-sm mr-2 mb-4"
            >
              Politique de confidentialité
            </Link>
            <Link href="/contact" className="font-satoshi text-sm mr-2 mb-4">
              Contact
            </Link>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} ArtGoesOn. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
