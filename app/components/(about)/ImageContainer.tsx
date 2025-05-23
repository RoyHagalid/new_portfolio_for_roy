"use client";
import React, { useState } from "react";
import { Image as SanityImage } from "next-sanity/image";
import PushPin from "./PushPin";
import { motion } from "framer-motion";
import HiddenImage from "./(specialEffects)/HiddenImage";
type Props = {
  portrait: string;
  fullName: string;
};

const ImageContainer = ({ portrait, fullName }: Props) => {
  const [isFalling, setIsFalling] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false)

  const handlePushPinClick = () => {
    setIsFalling(true);
  };

  const offScreenDistance = 2000;

  return (
    <div className="w-[185px] h-[185px] md:w-[300px] md:h-[300px] xl:w-[600px] xl:h-[600px] flex  relative items-center justify-center  bg-[#F3E9D6] inner-shadow-image-card">
      <HiddenImage hasPlayed={hasPlayed} setHasPlayed={setHasPlayed}/>
      <motion.div
        onClick={handlePushPinClick}
        className={`top-[0] md:top-[-20] left-[65%] z-[30] absolute custom-mouse-pointer
             `}
        initial={{ x: 0, y: 0, rotate: 0 }}
        animate={
          isFalling
            ? {
                x: 800,
                y: offScreenDistance - 150,
                rotate: 720,
              }
            : {}
        }
        transition={{
          type: "keyframes",
          duration: 1,
          ease: "easeIn",
          rotate: {
            duration: 1,
            repeat: 0,
            ease: "linear",
          },
        }}
      >
        <PushPin />
      </motion.div>
      <motion.div
        className="w-[90%] h-[90%] md:w-[280px] md:h-[280px] xl:w-[500px] xl:h-[500px] z-[20] absolute"
        initial={{ rotate: 3 }}
        animate={
          isFalling
            ? {
                x: -200,
                y: offScreenDistance - 600,
                rotate: -220,
              }
            : {}
        }
        transition={{
          type: "keyframes",
          duration: 1.5,
          ease: "easeIn",
          rotate: {
            duration: 2.5,
            repeat: 0,
            ease: "linear",
          },
        }}
      >
        <SanityImage
          className="w-full  h-fullshadow-project-image"
          src={portrait}
          alt={fullName || "Portrait Image"}
          width={500}
          height={500}
        />
      </motion.div>
    </div>
  );
};

export default ImageContainer;
