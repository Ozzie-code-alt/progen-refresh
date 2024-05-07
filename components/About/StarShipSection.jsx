"use client";
import React, { useState } from "react";
import Starships from "./Starships";
import { motion } from "framer-motion";
import StarshipComponent from "./StarshipComponent";
import { Oxanium } from "next/font/google";
const OxaniumFont = Oxanium({ weights: 100, subsets: ["latin"] });
const starshipTitle = [
  "cortx",
  "craetr",
  "JPEP",
  "nerv",
  "spectr",
  "warp",
  "promises",
];
const starshipDescription = [
  `Data-driven strategies and science-backed campaign plans come to life here.`,
  `Hand-crafted graphic visuals and copywriting for unique, creative engagements.`,
  `Prometheus' official photography affiliate.`,
  `Data-gathering, market information tabulation and interpretation, and precision monitoring for more informed decision-making processes.`,
  `Complete production services through multiple media`,
  `Web development, SEO, and software solutions purposed for stability and efficiency online and offline.`,
  `Production services specializing in artistic, narrative commemorations of intimacy through various platforms.`,
];

const StarShipSection = () => {
  const [activeShip, setActiveShip] = useState(5);
  return (
    <>
      <div className="relative flex flex-col justify-center items-center md:flex-row px-10 mt-10">
        <div className="relative flex-1 h-96 md:flex justify-center items-center text-center">
          <div className="absolute inset-0 flex justify-center items-center">
            <motion.img
              className="w-96 "
              src="/AboutAssets/circle_logo.webp"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
          <StarshipComponent index={activeShip} setActiveShip={setActiveShip} />
        </div>
        <div
          className={`md:flex flex-col md:justify-center flex-1 text-white ${OxaniumFont.className}`}
        >
          <div className="w-auto flex justify-center md:justify-start">
            <h1 className="text-4xl md:text-4xl lg:text-8xl font-black">
              {starshipTitle[activeShip].toLocaleUpperCase()}
            </h1>
          </div>
          <p className="text-sm md:text-md lg:text-4xl">
            {starshipDescription[activeShip]}
          </p>
        </div>
      </div>
      <div className="pb-20 lg:pb-0">
        <Starships setActiveShip={setActiveShip} size={"32"} landing={false} />
      </div>
    </>
  );
};

export default StarShipSection;
