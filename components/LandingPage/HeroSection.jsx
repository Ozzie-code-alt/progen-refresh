"use client"
import React from "react";
import { useState, useEffect } from "react";
import PageTransition from "@/components/Global/PageTransition";
import {LazyLoadImage} from "react-lazy-load-image-component";
import StarsCanvas from "@/components/Global/StarCanvas";
import backgroundImage from "../../public/LandingPageAssets/astro-bg.jpg"
import { motion } from 'framer-motion';
const HeroSection = () => {
    const [activeText, setActiveText] = useState(0);
    const [play, setPlay] = useState(false);
    const heroText = { text: 'BE LIMITLESS' }
    const glitchCharacterOptions = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[{]}|;:,<.>/?';
    const starshipsLogos = ['CORTX', 'CRAETR', 'JPEP', 'NERV', 'SPECTR', 'WARP', 'PROMISES']
    const click = () => {
        if (activeText === textArray.length - 1) {
            setActiveText(0);
        }
        setPlay(true);
    };
    useEffect(() => {
        let interval = null;
        if (play && activeText < textArray.length - 1) {
            interval = setInterval(() => {
                setActiveText(activeText + 1);
            }, 90); // Increase the interval to 2000 milliseconds (2 seconds)
        } else if (!play) {
            click();
        }
        return () => clearInterval(interval);
    }, [play, activeText]);
    const generateGlitch = (text) => {
        let glitchedText = '';
        for (let i = 0; i < text.length; i++) {
            const originalChar = text[i];
            if (Math.random() < 0.50) {
                const randomIndex = Math.floor(Math.random() * glitchCharacterOptions.length);
                glitchedText += glitchCharacterOptions[randomIndex];
            } else {
                glitchedText += originalChar;
            }
        }
        return glitchedText;
    };
    const gen = () => {
        let textArray = [];
        if (heroText.text) {

            for (let i = 0; i < heroText.text.length + 15; i++) {

                textArray.push(generateGlitch(heroText.text.substring(0, i)));

            }

            textArray.push(heroText.text);
        }
        return textArray;
    };

    const [textArray] = useState(gen);
  return (
    <PageTransition>
      <div className="overflow-hidden" >
        <div className="relative flex justify-center items-center">
          <div className="w-full md:w-auto h-auto md:h-screen">
            <LazyLoadImage
              loading="lazy"
              alt={"background image"}
              src="/LandingPageAssets/astro-bg.jpg"
              effect="blurry"
              className="w-full h-auto md:w-screen  md:h-screen object-cover"
              placeholderSrc="/LandingPageAssets/astro-bg.jpg"
            />
          </div>

          <div className="absolute inset-0 flex justify-center items-center z-10">
            <StarsCanvas />
          </div>

          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="flex flex-col space-y-1 absolute bottom-20 left-0 right-0 font-moonlander font-black text-md  md:text-3xl lg:text-4xl text-white text-center items-center justify-center">
              <div className="flex flex-row">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  className="ml-3  text-white text-xl md:text-3xl lg:text-5xl"
                  style={{ marginLeft: "0.75rem" }} // Adjust the margin for proper alignment
                  animate={{ opacity: 1, y: 0 }} // Animation to show after delay
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                 
                    {textArray[activeText].substring(0, 3)} {}
                    <span className="text-prOrange">
                      {textArray[activeText].substring(3)}{" "}
                      {/* Removing 'BE ' from the glitched text */}
                    </span>
                
                </motion.h1>
              </div>
              <div className="w-auto md:w-1/2 mt-52 z-10 mx-10">
                <h1 className="hidden md:flex md:text-2xl font-ox font-black text-white text-center">
                  Prometheus is Western Visayas&apos;s leading full-service marketing
                  agency and public relations firm.
                </h1>
              </div>
              <motion.div
                className="flex flex-row flex-wrap justify-center my-10 items-center text-center space-x-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 100 }}
                transition={{ delay: 1 }}
              >
                {starshipsLogos.map((starship, index) => (
                  <motion.div
                    key={starship}
                    initial={{ opacity: 0, y: 100, scale: 0.001 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                      delay: index * 0.7,
                    }}
                    className="w-10 h-10 md:w-14 md:h-14  lg:w-24 lg:h-24 xl:w-32 xl:h-32 flex justify-center items-center text-center"
                    style={{ marginLeft: "0.75rem" }}
                  >
                    <img
                      src={`../../LandingPageAssets/starships/${starship}.png`}
                      alt={`Starship ${starship}`}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default HeroSection;
