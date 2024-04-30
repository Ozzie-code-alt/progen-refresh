"use client"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const items = [
    'Strategy',
    'Digital Marketing',
    'Creative',
    'Branding',
    'Event Management',
    'Media',
    'Social Media',
    'Software Solutions',
    'Wedding Studio',
  ];

function Services() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.7,
    });

    const isVisibleInAnimation = inView;
    

    return (
        <div
         className='w-full flex flex-col justify-center md:py-40 mb-8'
   
         >
            <motion.div
                 ref={ref}
                className="w-ful flex flex-col justify-center items-center text-center z-10 mb-20"
                initial={{ opacity: 0, scale: 0.0001, y: 300 }}
                animate={{
                    opacity: isVisibleInAnimation ? 1 : 0,
                    y: isVisibleInAnimation ? 0 : 20,
                    scale: isVisibleInAnimation ? 1 : 0,
                    transition: {
                        duration: 1,
                     

                    },
                }}
                exit={{ opacity: 0, y: -20 }}
                >
                <h1 className="font-moonlander font-black justify-center text-md md:text-4xl text-prOrange mb-20">
                    SERVICES
                </h1>
                <div className="relative font-ox text-md md:text-4xl text-white">
                    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:gap-6 gap-2">
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`flex justify-center border-prOrange rounded-xl border-2 relative p-5 box-border items-center 
                                    
                                `}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: inView ? 1 : 0,
                                    y: inView ? 0 : 20,
                                }}
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>

            </motion.div>
        </div>
    );
}

export default Services;