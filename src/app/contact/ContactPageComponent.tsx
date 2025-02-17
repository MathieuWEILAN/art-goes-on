"use client";

import { motion, useInView } from "framer-motion";
import LogoSmall from "../../components/icons/LogoSmall";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import React from "react";

const ContactPageComponent = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.5 }); // Trigger at 50% visibility

  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div
      className={`overflow-hidden flex flex-col justify-center items-center min-h-screen min-w-screen`}
    >
      <motion.section className="h-screen w-screen overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full container mx-auto px-5 relative">
          <motion.h1
            className="text-[18vh] absolute top-0 left-0 top-[200px] font-bold hidden lg:block"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 0.1 : 0 }}
            transition={{ duration: 3 }}
          >
            Contactez-nous
          </motion.h1>
          <div
            className="flex flex-col items-start justify-center w-full max-lg:mb-20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Fade direction="up" delay={1} className="block lg:hidden">
              <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
            </Fade>
            <Fade direction="up" delay={1.5}>
              <p className="text-left max-sm:text-base">
                Nous sommes à votre écoute pour toute question ou demande.
              </p>
            </Fade>
            <div className="flex flex-col gap-2">
              <Fade direction="up" delay={2}>
                <span className="flex items-center gap-2 text-base lg:text-2xl font-satoshi">
                  email :{" "}
                  <a href="mailto:contact@artgoeson.fr" className="font-bold">
                    contact@artgoeson.fr
                  </a>
                </span>
              </Fade>
              <Fade direction="up" delay={2.5}>
                <span className="flex items-center gap-2 text-base lg:text-2xl font-satoshi">
                  téléphone :{" "}
                  <a href="tel:+33666666666" className="font-bold">
                    +33 6 66 66 66 66
                  </a>
                </span>
              </Fade>
              <Fade direction="up" delay={3}>
                <span className="flex items-center gap-2 text-base lg:text-2xl font-satoshi">
                  adresse :{" "}
                  <address className="font-bold">
                    26 rue de la paix, 75000 Paris
                  </address>
                </span>
              </Fade>
            </div>
          </div>
          <Fade direction="down" delay={3.5} triggerOnce>
            <motion.div className="flex items-center justify-center w-full">
              <LogoSmall
                color="black"
                className="w-[200px] h-[200px] lg:w-[500px] lg:h-[500px]"
                isHovered={isHovered}
              />
            </motion.div>
          </Fade>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPageComponent;
