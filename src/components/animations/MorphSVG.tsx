import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { interpolate } from "flubber";
import {
  squarePath,
  circlePath,
  octagonPath,
  hexagonPath,
} from "../path/paths";

const MorphSVG = () => {
  const controls = useAnimation();
  const [currentShape, setCurrentShape] = useState(squarePath);

  const shapes = [squarePath, circlePath, octagonPath, hexagonPath];

  const morphToNextShape = async () => {
    const nextShape =
      shapes[(shapes.indexOf(currentShape) + 1) % shapes.length];
    const pathInterpolator = interpolate(currentShape, nextShape, {
      maxSegmentLength: 2,
    });

    await controls.start({
      d: pathInterpolator,
      transition: { duration: 1.5, ease: "easeInOut" },
    });

    setCurrentShape(nextShape);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <svg width="100" height="100" viewBox="-30 -30 60 60">
        <motion.path
          initial={{ d: squarePath }}
          animate={controls}
          fill="black"
          stroke="red"
          strokeWidth={1}
        />
      </svg>
      <button
        onClick={morphToNextShape}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Morph Next Shape
      </button>
    </div>
  );
};

export default MorphSVG;
