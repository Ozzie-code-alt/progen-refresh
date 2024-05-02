"use client"
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
// import cortx from "../assets/icons/starships/CORTX.webp";
// import craetr from "../assets/icons/starships/craetr.webp";
// import JPEP from "../assets/icons/starships/JPEP.webp";
// import nerv from "../assets/icons/starships/nerv.webp";
// import spectr from "../assets/icons/starships/spectr.webp";
// import warp from "../assets/icons/starships/warp.webp";
// import promises from "../assets/icons/starships/promises.webp"

// import cortxColor from "../assets/icons/starships/cortx-color.webp";
// import craetrColor from "../assets/icons/starships/craetr-color.webp";
// import JPEPColor from "../assets/icons/starships/JPEP-color.webp";
// import nervColor from "../assets/icons/starships/nerv-color.webp";
// import spectrColor from "../assets/icons/starships/spectr-color.webp";
// import warpColor from "../assets/icons/starships/warp-color.webp";
// import promisesColor from "../assets/icons/starships/promises-color.webp";
import { useInView } from "react-intersection-observer";

const cortx = "../LandingPageAssets/starshipsAnimated/CORTX.webp";
const craetr = "../LandingPageAssets/starshipsAnimated/craetr.webp";
const JPEP = "../LandingPageAssets/starshipsAnimated/JPEP.webp";
const nerv = "../LandingPageAssets/starshipsAnimated/nerv.webp";
const spectr = "../LandingPageAssets/starshipsAnimated/spectr.webp";
const warp = "../LandingPageAssets/starshipsAnimated/warp.webp";
const promises = "../LandingPageAssets/starshipsAnimated/promises.webp"

const cortxColor = "../LandingPageAssets/starshipsAnimated/cortx-color.webp";
const craetrColor = "../LandingPageAssets/starshipsAnimated/craetr-color.webp";
const JPEPColor = "../LandingPageAssets/starshipsAnimated/JPEP-color.webp";
const nervColor = "../LandingPageAssets/starshipsAnimated/nerv-color.webp";
const spectrColor = "../LandingPageAssets/starshipsAnimated/spectr-color.webp";
const warpColor = "../LandingPageAssets/starshipsAnimated/warp-color.webp";
const promisesColor = "../LandingPageAssets/starshipsAnimated/promises-color.webp";



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



function Starship({ coloredIcon, icon, index, setActiveShip, size, setCurrentActive, currentActive, landing }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Check if the ship should be visible and not active
  const isVisibleInAnimation = inView;

  const [isHovered, setIsHovered] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    // After the component has mounted and the initial animation is done,
    // set the firstLoad flag to false
    setFirstLoad(false);
  }, []);

  
  const handleShipClick = async () => {
    if (!landing) {
      await controls.start({
        opacity: 0,
        y: -100, // Animate the ship upward
        scale: 0,
      });

      setCurrentActive(index);
      setActiveShip(index);
    }

  };

  useEffect(() => {
    if (currentActive !== index) {
      controls.start({
        opacity: 1,
        y: 0, // Animate the ship upward
        scale: 1,
      });
    }
  }, [currentActive]);

  return (
    <motion.div
      ref={ref}
      className="relative hover:cursor-pointer"
      initial={{ opacity: 0, y: 300, scale: 0.001 }}
      style={{ marginLeft: '0.75rem' }}
      animate={{
        opacity: isVisibleInAnimation ? 1 : 0,
        y: isVisibleInAnimation ? 0 : 20,
        scale: (isVisibleInAnimation && currentActive !== index) ? 1 : 0,
      }}
      transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.3 }}
      onClick={handleShipClick}
      onMouseEnter={() => {
        if(landing) {
          setActiveShip(index)
          setIsHovered(true)
        }
    
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img
        className={`w-24 h-24 md:w-48 md:h-48`}
        alt="Starship"
        src={isHovered && landing ? coloredIcon : icon}
        animate={controls}
      />
    </motion.div>
  );
}

function Starships({ setActiveShip, size, landing }) {
  const starshipIcons = [cortx, craetr, JPEP, nerv, spectr, warp, promises];
  const starshipIconsColored = [cortxColor, craetrColor, JPEPColor, nervColor, spectrColor, warpColor, promisesColor];
  const starshipToolTip = ["cortx", "craetr", "jpep", "nerv", "spectr", "warp",]
  const [currentActive, setCurrentActive] = useState(5)


  const swayVariants = {
    swaying: {
      x: [-3, 3, -3],
      transition: {
        yoyo: Infinity,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
    resting: {
      x: 0,
    },
  };

  return (
    <div className="flex flex-row flex-wrap justify-around mt-10">
      {starshipIcons.map((starship, index) => (
        <Starship
          key={index}
          icon={starship}
          coloredIcon={starshipIconsColored[index]}
          swayVariants={swayVariants}
          index={index}
          setActiveShip={setActiveShip}
          setCurrentActive={setCurrentActive}
          currentActive={currentActive}
          size={size}
          landing={landing}
        />
      ))}
    </div>
  );
}

export default Starships;
