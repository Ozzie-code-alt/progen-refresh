import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";





import { useInView } from "react-intersection-observer";
export const fadeInFromLeft = (delay, duration) => {
  return {
    hidden: {
      x: -100, // Start from the left side
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const cortx =  "/LandingPageAssets/starshipsAnimated/CORTX.webp";
const craetr =  "/LandingPageAssets/starshipsAnimated/craetr.webp";
const JPEP =  "/LandingPageAssets/starshipsAnimated/JPEP.webp";
const nerv =  "/LandingPageAssets/starshipsAnimated/nerv.webp";
const spectr =  "/LandingPageAssets/starshipsAnimated/spectr.webp";
const warp =  "/LandingPageAssets/starshipsAnimated/warp.webp";
const promises =  "/LandingPageAssets/starshipsAnimated/promises.webp"

const cortxColor =  "/LandingPageAssets/starshipsAnimated/cortx-color.webp";
const craetrColor =  "/LandingPageAssets/starshipsAnimated/craetr-color.webp";
const JPEPColor =  "/LandingPageAssets/starshipsAnimated/JPEP-color.webp";
const nervColor =  "/LandingPageAssets/starshipsAnimated/nerv-color.webp";
const spectrColor =  "/LandingPageAssets/starshipsAnimated/spectr-color.webp";
const warpColor =  "/LandingPageAssets/starshipsAnimated/warp-color.webp";
const promisesColor =  "/LandingPageAssets/starshipsAnimated/promises-color.webp";


function Starship({ coloredIcon, icon, index, activeShip }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Check if the ship should be visible and not active
  const isVisibleInAnimation = inView;



  return (
    <motion.div
      ref={ref}
      className="relative "
      initial={{ opacity: 0, y: 300, scale: 0.001 }}
      style={{ marginLeft: '0.75rem' }}
      animate={{
        opacity: isVisibleInAnimation ? 1 : 0,
        y: isVisibleInAnimation ? 0 : 20,
        scale: isVisibleInAnimation ? 1 : 0,
      }}
      transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.3 }}
   
    >
      <motion.img
        className={`w-24 h-24 md:w-48 md:h-48`}
        alt="Starship"
        src={activeShip === index ? coloredIcon : icon}
        animate={controls}
      />
    </motion.div>
  );
}

function StarshipLanding({ size }) {

  const starshipIcons = [cortx, craetr, JPEP, nerv, spectr, warp, promises];
  const starshipIconsColored = [cortxColor, craetrColor, JPEPColor, nervColor, spectrColor, warpColor, promisesColor];
  const starshipTitle = ["cortx", "craetr", "JPEP", "NERV", "SPECTR", "WARP", "PROMISES"]
  const [activeShip, setActiveShip] = useState(0);

  useEffect(() => {
    // You might want to update the active ship using some logic here
    // For now, let's just update the active ship every 2 seconds
    const interval = setInterval(() => {
      setActiveShip(activeShip => (activeShip + 1) % starshipIcons.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Run this effect only once

  return (
    <div>
        <h1 className="text-white font-black font-moonlander text-lg md:text-4xl">{starshipTitle[activeShip]}</h1>
    <div className="flex flex-row flex-wrap justify-around mt-10">
      {starshipIcons.map((starship, index) => (
        <Starship
          key={index}
          icon={starship}
          coloredIcon={starshipIconsColored[index]}
          activeShip={activeShip}
          index={index}
          size={size}
        />
      ))}
    </div>

    </div>

  );
}

export default StarshipLanding;
