"use client"
import { useEffect, useState } from "react";
// import cortx from "../assets/icons/starships/CORTX.webp";
// import craetr from "../assets/icons/starships/craetr.webp";
// import JPEP from "../assets/icons/starships/JPEP.webp";
// import nerv from "../assets/icons/starships/nerv.webp";
// import spectr from "../assets/icons/starships/spectr.webp";
// import warp from "../assets/icons/starships/warp.webp";
// import promises from "../assets/icons/starships/promises.webp";
import { motion } from "framer-motion";


const cortx = "../LandingPageAssets/starshipsAnimated/CORTX.webp";
const craetr = "../LandingPageAssets/starshipsAnimated/craetr.webp";
const JPEP = "../LandingPageAssets/starshipsAnimated/JPEP.webp";
const nerv = "../LandingPageAssets/starshipsAnimated/nerv.webp";
const spectr = "../LandingPageAssets/starshipsAnimated/spectr.webp";
const warp = "../LandingPageAssets/starshipsAnimated/warp.webp";
const promises = "../LandingPageAssets/starshipsAnimated/promises.webp";

function StarshipComponent({ index, setActiveShip }) {
    const starshipIcons = [cortx, craetr, JPEP, nerv, spectr, warp, promises];
    const [prevIndex, setPrevIndex] = useState(index);
    const [currentImageIndex, setCurrentImageIndex] = useState(index);

    useEffect(() => {
        if (index !== currentImageIndex) {
            // If the index changes, trigger the transition
            setPrevIndex(currentImageIndex);
            setCurrentImageIndex(index);
        }
    }, [index, currentImageIndex]);

    return (
        <div>
            <motion.img
                key={prevIndex} // Use the key to re-mount when the src changes
                className="h-full mt-16 absolute"
                initial={{ scale: 1 }} // Initial state for the outgoing image
                animate={{ scale: 0.001 }} // Animation for the outgoing image
                transition={{ duration: 0.5, ease: "easeOut" }}
                src={starshipIcons[prevIndex]}
            />
            <motion.img
                key={currentImageIndex} // Use the key to re-mount when the src changes
                className="h-full mt-16"
                initial={{ scale: 0.001 }} // Initial state for the incoming image
                animate={{ scale: 1 }} // Animation for the incoming image
                transition={{
                    duration: 0.2,
                    ease: "easeOut",
                    delay: 0.5, // Delay the incoming animation
                }}
                onClick={() => setActiveShip(index)}
                src={starshipIcons[currentImageIndex]}
            />
        </div>
    );
}

export default StarshipComponent;
