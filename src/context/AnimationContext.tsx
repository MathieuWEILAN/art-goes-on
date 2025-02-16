"use client";

import React, { createContext, useContext, useState } from "react";

interface ValueModal {
  [key: string]: string | number | boolean | object;
}
type AnimationContextType = {
  animationComplete: boolean;
  setAnimationComplete: (value: boolean) => void;
  animationCompleteLogo: boolean;
  setAnimationCompleteLogo: (value: boolean) => void;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  valueModal: ValueModal;
  setValueModal: (value: ValueModal) => void;
  isAtBottom: boolean;
  isMobile: boolean;
};

const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined
);

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [animationCompleteLogo, setAnimationCompleteLogo] = useState(false);
  const [valueModal, setValueModal] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // ... existing code ...

  // Ajouter cette fonction pour détecter le scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      // On considère qu'on est en bas quand il reste 50px ou moins à scroller
      const isBottom = documentHeight - (scrollTop + windowHeight) <= 50;
      setIsAtBottom(isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <AnimationContext.Provider
      value={{
        animationComplete,
        setAnimationComplete,
        animationCompleteLogo,
        setAnimationCompleteLogo,
        isModalOpen,
        setIsModalOpen,
        valueModal,
        setValueModal,
        isAtBottom,
        isMobile,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
}
