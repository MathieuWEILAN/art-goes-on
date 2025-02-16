"use client";

import { motion } from "framer-motion";
import { useAnimation } from "../../context/AnimationContext";

const LogoFull = ({ color = "#000000" }: { color: string }) => {
  const { setAnimationComplete } = useAnimation();

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          delay: i * 0.3 + 2,
          duration: 1.7,
          ease: "easeInOut",
        },
        opacity: {
          delay: i * 0.3 + 2,
          duration: 0.7,
          ease: "easeIn",
        },
      },
    }),
  };

  const letterAnimation = {
    hidden: {
      scale: 2,
      y: -10,
      opacity: 0,
    },
    visible: (i: number) => ({
      scale: 1.12,
      y: 0,
      opacity: 1,
      transition: {
        opacity: {
          duration: 1,
          delay: 1,
          ease: "easeIn",
        },
        scale: {
          delay: i * (i * 0.01) + 4.5,
          duration: 0.1 + i * 0.1,
          ease: "easeIn",
        },
        y: {
          delay: i * (i * 0.005) + 4.8,
          duration: 0.1 + i * 0.1,
          ease: "easeIn",
          onComplete: () => {
            // Vérifie si c'est la dernière lettre (i === 8)
            if (i === 8) {
              setAnimationComplete(true);
            }
          },
        },
      },
    }),
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="500"
      zoomAndPan="magnify"
      viewBox="75 70 225 225" // Ajusté depuis "0 0 375 374.999991"
      height="500"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
      className="w-full h-full p-20"
      initial="hidden"
      animate="visible"
    >
      <defs>
        <motion.g />
      </defs>
      <motion.path
        variants={draw}
        custom={0}
        strokeLinecap="butt"
        transform="matrix(0.75, -0.000000000000000186, 0.000000000000000186, 0.75, 81.141422, 283.383555)"
        fill="none"
        strokeLinejoin="miter"
        d="M 184.676033 4.49901 L -0.0010621 4.49901"
        stroke={color}
        strokeWidth="9"
        strokeOpacity="1"
        strokeMiterlimit="4"
      />
      <motion.path
        variants={draw}
        custom={1}
        strokeLinecap="butt"
        transform="matrix(0, -0.75, 0.75, 0, 80.390939, 290.133058)"
        fill="none"
        strokeLinejoin="miter"
        d="M 0.000326997 4.499581 L 278.875345 4.499581"
        stroke={color}
        strokeWidth="9"
        strokeOpacity="1"
        strokeMiterlimit="4"
      />
      <motion.path
        variants={draw}
        custom={2}
        strokeLinecap="butt"
        transform="matrix(0.75, 0.000000000000000037, -0.000000000000000037, 0.75, 80.391422, 75.866421)"
        fill="none"
        strokeLinejoin="miter"
        d="M -0.00106216 4.501022 L 285.623957 4.501022"
        stroke={color}
        strokeWidth="9"
        strokeOpacity="1"
        strokeMiterlimit="4"
      />
      <motion.path
        variants={draw}
        custom={3}
        strokeLinecap="butt"
        transform="matrix(0.75, 0, 0, 0.75, 287.85857, 76.204917)"
        fill="none"
        strokeLinejoin="miter"
        d="M 4.501073 -0.00238986 L 4.501073 104.075742"
        stroke={color}
        strokeWidth="9"
        strokeOpacity="1"
        strokeMiterlimit="4"
      />
      <motion.g
        variants={letterAnimation}
        initial="hidden"
        animate="visible"
        custom={0}
        fill={color}
        fillOpacity="1"
      >
        <motion.g transform="translate(214.604652, 202.98356)">
          <motion.g>
            <motion.path d="M 22.796875 0 L 19.65625 -8.046875 L 7.109375 -8.046875 L 3.953125 0 L 0.078125 0 L 11.3125 -27.515625 L 15.546875 -27.515625 L 26.609375 0 Z M 13.375 -24.703125 L 13.203125 -24.15625 C 12.878906 -23.082031 12.398438 -21.695312 11.765625 -20 L 8.25 -10.953125 L 18.53125 -10.953125 L 15 -20.046875 C 14.632812 -20.941406 14.269531 -21.957031 13.90625 -23.09375 Z M 13.375 -24.703125 " />
          </motion.g>
        </motion.g>
      </motion.g>
      <motion.g
        variants={letterAnimation}
        initial="hidden"
        animate="visible"
        custom={2}
        fill={color}
        fillOpacity="1"
      >
        <motion.g transform="translate(241.281733, 202.98356)">
          <motion.g>
            <path d="M 22.734375 0 L 15.59375 -11.421875 L 7.015625 -11.421875 L 7.015625 0 L 3.28125 0 L 3.28125 -27.515625 L 16.234375 -27.515625 C 19.328125 -27.515625 21.71875 -26.820312 23.40625 -25.4375 C 25.09375 -24.050781 25.9375 -22.125 25.9375 -19.65625 C 25.9375 -17.601562 25.335938 -15.878906 24.140625 -14.484375 C 22.953125 -13.097656 21.3125 -12.222656 19.21875 -11.859375 L 27.03125 0 Z M 22.1875 -19.609375 C 22.1875 -21.210938 21.640625 -22.429688 20.546875 -23.265625 C 19.460938 -24.109375 17.898438 -24.53125 15.859375 -24.53125 L 7.015625 -24.53125 L 7.015625 -14.375 L 16.015625 -14.375 C 17.984375 -14.375 19.503906 -14.832031 20.578125 -15.75 C 21.648438 -16.664062 22.1875 -17.953125 22.1875 -19.609375 Z M 22.1875 -19.609375 " />
          </motion.g>
        </motion.g>
      </motion.g>
      <motion.g
        variants={letterAnimation}
        initial="hidden"
        animate="visible"
        custom={2}
        fill={color}
        fillOpacity="1"
      >
        <motion.g transform="translate(270.165634, 202.98356)">
          <motion.g>
            <motion.path d="M 14.0625 -24.46875 L 14.0625 0 L 10.359375 0 L 10.359375 -24.46875 L 0.90625 -24.46875 L 0.90625 -27.515625 L 23.515625 -27.515625 L 23.515625 -24.46875 Z M 14.0625 -24.46875 " />
          </motion.g>
        </motion.g>
      </motion.g>
      <motion.g
        variants={letterAnimation}
        initial="hidden"
        animate="visible"
        custom={5}
        fill={color}
        fillOpacity="1"
      >
        <motion.g transform="translate(179.741373, 245.733557)">
          <motion.g>
            <motion.path d="M 2.015625 -13.890625 C 2.015625 -18.359375 3.210938 -21.816406 5.609375 -24.265625 C 8.003906 -26.710938 11.367188 -27.9375 15.703125 -27.9375 C 18.753906 -27.9375 21.226562 -27.421875 23.125 -26.390625 C 25.03125 -25.359375 26.492188 -23.710938 27.515625 -21.453125 L 23.96875 -20.390625 C 23.1875 -21.953125 22.109375 -23.09375 20.734375 -23.8125 C 19.359375 -24.53125 17.648438 -24.890625 15.609375 -24.890625 C 12.429688 -24.890625 10 -23.925781 8.3125 -22 C 6.632812 -20.082031 5.796875 -17.378906 5.796875 -13.890625 C 5.796875 -10.410156 6.6875 -7.664062 8.46875 -5.65625 C 10.257812 -3.644531 12.726562 -2.640625 15.875 -2.640625 C 17.675781 -2.640625 19.351562 -2.910156 20.90625 -3.453125 C 22.46875 -4.003906 23.726562 -4.75 24.6875 -5.6875 L 24.6875 -10.640625 L 16.46875 -10.640625 L 16.46875 -13.765625 L 28.125 -13.765625 L 28.125 -4.28125 C 26.664062 -2.789062 24.878906 -1.640625 22.765625 -0.828125 C 20.648438 -0.015625 18.351562 0.390625 15.875 0.390625 C 13 0.390625 10.519531 -0.179688 8.4375 -1.328125 C 6.351562 -2.472656 4.757812 -4.125 3.65625 -6.28125 C 2.5625 -8.4375 2.015625 -10.972656 2.015625 -13.890625 Z M 2.015625 -13.890625 " />
          </motion.g>
        </motion.g>
      </motion.g>
      <motion.g
        variants={letterAnimation}
        initial="hidden"
        animate="visible"
        custom={1}
        fill={color}
        fillOpacity="1"
      >
        <motion.g transform="translate(210.85162, 245.733557)">
          <motion.g>
            <motion.path d="M 29.203125 -13.890625 C 29.203125 -11.015625 28.648438 -8.492188 27.546875 -6.328125 C 26.453125 -4.171875 24.875 -2.507812 22.8125 -1.34375 C 20.757812 -0.1875 18.332031 0.390625 15.53125 0.390625 C 12.707031 0.390625 10.269531 -0.179688 8.21875 -1.328125 C 6.164062 -2.472656 4.597656 -4.128906 3.515625 -6.296875 C 2.429688 -8.460938 1.890625 -10.992188 1.890625 -13.890625 C 1.890625 -18.285156 3.09375 -21.722656 5.5 -24.203125 C 7.914062 -26.691406 11.269531 -27.9375 15.5625 -27.9375 C 18.363281 -27.9375 20.789062 -27.378906 22.84375 -26.265625 C 24.90625 -25.148438 26.476562 -23.53125 27.5625 -21.40625 C 28.65625 -19.28125 29.203125 -16.773438 29.203125 -13.890625 Z M 25.390625 -13.890625 C 25.390625 -17.316406 24.53125 -20.003906 22.8125 -21.953125 C 21.101562 -23.910156 18.6875 -24.890625 15.5625 -24.890625 C 12.414062 -24.890625 9.984375 -23.925781 8.265625 -22 C 6.546875 -20.070312 5.6875 -17.367188 5.6875 -13.890625 C 5.6875 -10.441406 6.554688 -7.703125 8.296875 -5.671875 C 10.035156 -3.648438 12.445312 -2.640625 15.53125 -2.640625 C 18.707031 -2.640625 21.144531 -3.617188 22.84375 -5.578125 C 24.539062 -7.535156 25.390625 -10.304688 25.390625 -13.890625 Z M 25.390625 -13.890625 " />
          </motion.g>
        </motion.g>
      </motion.g>
      <motion.g
        variants={letterAnimation}
        initial="hidden"
        animate="visible"
        custom={3}
        fill={color}
        fillOpacity="1"
      >
        <motion.g transform="translate(241.961866, 245.733557)">
          <motion.g>
            <motion.path d="M 3.28125 0 L 3.28125 -27.515625 L 24.15625 -27.515625 L 24.15625 -24.46875 L 7.015625 -24.46875 L 7.015625 -15.640625 L 22.984375 -15.640625 L 22.984375 -12.640625 L 7.015625 -12.640625 L 7.015625 -3.046875 L 24.96875 -3.046875 L 24.96875 0 Z M 3.28125 0 " />
          </motion.g>
        </motion.g>
      </motion.g>
      <motion.g
        variants={letterAnimation}
        initial="hidden"
        animate="visible"
        custom={8}
        fill={color}
        fillOpacity="1"
      >
        <motion.g transform="translate(268.638946, 245.733557)">
          <motion.g>
            <motion.path d="M 24.84375 -7.59375 C 24.84375 -5.0625 23.847656 -3.097656 21.859375 -1.703125 C 19.878906 -0.304688 17.085938 0.390625 13.484375 0.390625 C 6.773438 0.390625 2.882812 -1.941406 1.8125 -6.609375 L 5.4375 -7.328125 C 5.851562 -5.671875 6.738281 -4.453125 8.09375 -3.671875 C 9.445312 -2.898438 11.285156 -2.515625 13.609375 -2.515625 C 16.023438 -2.515625 17.882812 -2.925781 19.1875 -3.75 C 20.5 -4.582031 21.15625 -5.800781 21.15625 -7.40625 C 21.15625 -8.300781 20.945312 -9.03125 20.53125 -9.59375 C 20.125 -10.15625 19.550781 -10.617188 18.8125 -10.984375 C 18.070312 -11.347656 17.1875 -11.648438 16.15625 -11.890625 C 15.125 -12.140625 13.984375 -12.410156 12.734375 -12.703125 C 10.554688 -13.179688 8.90625 -13.660156 7.78125 -14.140625 C 6.65625 -14.617188 5.765625 -15.15625 5.109375 -15.75 C 4.460938 -16.34375 3.96875 -17.035156 3.625 -17.828125 C 3.28125 -18.628906 3.109375 -19.539062 3.109375 -20.5625 C 3.109375 -22.925781 4.007812 -24.742188 5.8125 -26.015625 C 7.613281 -27.296875 10.195312 -27.9375 13.5625 -27.9375 C 16.6875 -27.9375 19.070312 -27.457031 20.71875 -26.5 C 22.375 -25.539062 23.535156 -23.910156 24.203125 -21.609375 L 20.53125 -20.953125 C 20.125 -22.410156 19.351562 -23.46875 18.21875 -24.125 C 17.09375 -24.789062 15.523438 -25.125 13.515625 -25.125 C 11.316406 -25.125 9.632812 -24.757812 8.46875 -24.03125 C 7.3125 -23.300781 6.734375 -22.210938 6.734375 -20.765625 C 6.734375 -19.921875 6.957031 -19.21875 7.40625 -18.65625 C 7.863281 -18.101562 8.515625 -17.632812 9.359375 -17.25 C 10.203125 -16.875 11.890625 -16.40625 14.421875 -15.84375 C 15.265625 -15.644531 16.101562 -15.441406 16.9375 -15.234375 C 17.78125 -15.035156 18.585938 -14.796875 19.359375 -14.515625 C 20.128906 -14.242188 20.847656 -13.914062 21.515625 -13.53125 C 22.179688 -13.15625 22.757812 -12.691406 23.25 -12.140625 C 23.75 -11.597656 24.140625 -10.957031 24.421875 -10.21875 C 24.703125 -9.476562 24.84375 -8.601562 24.84375 -7.59375 Z M 24.84375 -7.59375 " />
          </motion.g>
        </motion.g>
      </motion.g>
      <motion.g
        variants={letterAnimation}
        initial="hidden"
        animate="visible"
        custom={7}
        fill={color}
        fillOpacity="1"
      >
        <motion.g transform="translate(234.608557, 288.483555)">
          <motion.g>
            <motion.path d="M 29.203125 -13.890625 C 29.203125 -11.015625 28.648438 -8.492188 27.546875 -6.328125 C 26.453125 -4.171875 24.875 -2.507812 22.8125 -1.34375 C 20.757812 -0.1875 18.332031 0.390625 15.53125 0.390625 C 12.707031 0.390625 10.269531 -0.179688 8.21875 -1.328125 C 6.164062 -2.472656 4.597656 -4.128906 3.515625 -6.296875 C 2.429688 -8.460938 1.890625 -10.992188 1.890625 -13.890625 C 1.890625 -18.285156 3.09375 -21.722656 5.5 -24.203125 C 7.914062 -26.691406 11.269531 -27.9375 15.5625 -27.9375 C 18.363281 -27.9375 20.789062 -27.378906 22.84375 -26.265625 C 24.90625 -25.148438 26.476562 -23.53125 27.5625 -21.40625 C 28.65625 -19.28125 29.203125 -16.773438 29.203125 -13.890625 Z M 25.390625 -13.890625 C 25.390625 -17.316406 24.53125 -20.003906 22.8125 -21.953125 C 21.101562 -23.910156 18.6875 -24.890625 15.5625 -24.890625 C 12.414062 -24.890625 9.984375 -23.925781 8.265625 -22 C 6.546875 -20.070312 5.6875 -17.367188 5.6875 -13.890625 C 5.6875 -10.441406 6.554688 -7.703125 8.296875 -5.671875 C 10.035156 -3.648438 12.445312 -2.640625 15.53125 -2.640625 C 18.707031 -2.640625 21.144531 -3.617188 22.84375 -5.578125 C 24.539062 -7.535156 25.390625 -10.304688 25.390625 -13.890625 Z M 25.390625 -13.890625 " />
          </motion.g>
        </motion.g>
      </motion.g>
      <motion.g
        variants={letterAnimation}
        initial="hidden"
        animate="visible"
        custom={6}
        fill={color}
        fillOpacity="1"
        className="border-2 border-red-500"
      >
        <motion.g transform="translate(265.718804, 288.483555)">
          <motion.g>
            <motion.path d="M 21.140625 0 L 6.40625 -23.4375 L 6.5 -21.546875 L 6.609375 -18.28125 L 6.609375 0 L 3.28125 0 L 3.28125 -27.515625 L 7.625 -27.515625 L 22.5 -3.921875 C 22.34375 -6.472656 22.265625 -8.320312 22.265625 -9.46875 L 22.265625 -27.515625 L 25.625 -27.515625 L 25.625 0 Z M 21.140625 0 " />
          </motion.g>
        </motion.g>
      </motion.g>
    </motion.svg>
  );
};

export default LogoFull;
