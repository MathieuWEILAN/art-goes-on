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
};

const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined
);

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [animationCompleteLogo, setAnimationCompleteLogo] = useState(false);
  const [valueModal, setValueModal] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
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
