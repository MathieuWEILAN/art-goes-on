"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "../../context/AnimationContext";
import InputLogin from "../../components/ui/InputLogin";
import ButtonDefault from "../../components/ui/ButtonDefault";

const LoginPageComponent = () => {
  const { animationCompleteLogo } = useAnimation();
  const [isCreatingAccount, setIsCreatingAccount] = useState<boolean>(false);
  useEffect(() => {
    if (!isCreatingAccount) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }
  }, [isCreatingAccount]);

  return (
    <div
      className={`flex justify-center items-center w-screen h-screen overflow-hidden gap-10 mx-auto overflow-visible relative bg-white mb-[100vh] ${
        animationCompleteLogo ? "opacity-100" : "opacity-0"
      }`}
    >
      <CardLogin setIsCreatingAccount={setIsCreatingAccount} />
    </div>
  );
};

export default LoginPageComponent;

const CardLogin = ({
  setIsCreatingAccount,
}: {
  setIsCreatingAccount: (isCreatingAccount: boolean) => void;
}) => {
  const { animationCompleteLogo, isMobile } = useAnimation();
  const scrollToBottom = () => {
    setIsCreatingAccount(true);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  if (!animationCompleteLogo) return null;
  return (
    <motion.div
      className={`w-full relative py-2 px-4 uppercase font-satoshi font-bold h-[calc(100vw-20px)] lg:h-[500px] w-[calc(100vw-20px)] lg:w-[500px] flex justify-center items-center`}
    >
      <motion.div
        className="text-[30px] sm:text-[50px] tracking-widest absolute bottom-0 right-0 flex flex-col text-right leading-[1]"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <span className="">Artistes &</span>
        <span className="">Exposants</span>
      </motion.div>
      <div className="flex flex-col justify-center pb-20 items-center h-full w-3/4 space-y-2 sm:space-y-4 z-50">
        <InputLogin
          name="email"
          label="Email"
          value=""
          handleInputChange={() => {}}
          delay={0.5}
        />
        <InputLogin
          name="password"
          label="Mot de passe"
          value=""
          handleInputChange={() => {}}
          delay={0.7}
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.9 }}
          className="flex flex-col items-center space-y-4"
        >
          <ButtonDefault className="!mt-8" action={() => {}} color="black">
            Se connecter
          </ButtonDefault>
          <span className="text-base normal-case">
            ou{" "}
            <span className="underline" onClick={scrollToBottom}>
              Créer un compte
            </span>
          </span>
        </motion.div>
      </div>

      <motion.div
        className={`absolute bottom-0 left-0 bg-black`}
        initial={{ width: "100%", height: "8px" }}
        whileInView={{ width: isMobile ? "40%" : "20%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />
      <motion.div
        className={`absolute top-0 right-0 bg-black`}
        initial={{ height: "100%", width: "8px" }}
        whileInView={{ height: isMobile ? "80%" : "70%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />
      <div className={`absolute inset-0 border-t-8 border-l-8 border-black`} />
    </motion.div>
  );
};
