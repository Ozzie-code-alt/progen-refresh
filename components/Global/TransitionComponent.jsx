import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';


function TransitionComponent() {
  
    const scale = 2
    const duration = 0.3
  
    const [animationComplete, setAnimationComplete] = useState(false);
    const [animationLineComplete, setAnimationLineComplete] = useState(false);

    // Function to handle the animation completion
    const handleAnimationComplete = () => {
        setAnimationComplete(true); // Set animationComplete to true when the animation is complete
    };

    const handleAnimationLineComplete = () => {
        setAnimationLineComplete(true); // Set animationComplete to true when the animation is complete
    };

    return (<div className='relative'>
        {
            !animationComplete ? (
                <div className='fixed inset-0 z-20'>
                    <motion.div
                        initial={{ scaleX: scale }}
                        animate={{ scaleX: 0 }}
                        exit={{ scaleX: 0, scaleY: 0 }}
                        transition={{ duration: duration, delay: 1.5 }}
                        className="relative w-screen h-screen overflow-hidden "
                        style={{ transformOrigin: "top left" }}
                        onAnimationComplete={handleAnimationComplete}
                    >
                        <div className="fixed top-0 left-0 w-0 h-0 border-t-transparent border-l-[56vw] border-l-customGray border-b-[500vh] border-b-transparent"

                        ></div>


                    </motion.div>

                    {
                        !animationLineComplete ? (
                            <div className="fixed inset-0 z-50 flex w-screen justify-center items-center text-center">
                                <motion.div className="w-[1px] h-screen bg-white"
                                    initial={{ rotate: 0, }}
                                    animate={{ rotate: 25, scaleX: 1, scaleY: 2 }}
                                    transition={{ duration: 0.5, delay: 1 }}
                                    onAnimationComplete={handleAnimationLineComplete}
                                >
                                </motion.div>
                            </div>
                        ) : ''
                    }

                    <motion.div
                        initial={{ scaleX: scale }}
                        animate={{ scaleX: 0 }}
                        exit={{ scaleX: 0 }}
                        transition={{ duration: duration, delay: 1.5 }}
                        className="h-screen absolute inset-0 "
                        onAnimationComplete={handleAnimationComplete}
                        style={{ transformOrigin: "bottom right" }}
                    >
                        <div className="fixed bottom-0 right-0 w-0 h-0 border-b-transparent border-r-[56vw] border-r-customGray border-t-[500vh] border-t-transparent"></div>
                    </motion.div>
                </div>
            ) : ''
        }
    </div>);
}

export default TransitionComponent;