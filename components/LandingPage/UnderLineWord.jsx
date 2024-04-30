import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const UnderlineWord = ({ word, delay }) => {
  const colors = ['#FFFFFF', '#96895F']; // White and orange
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });

const isVisibleInAnimation = inView;

  return (
    <motion.span className="inline-block relative">
      {word.split('').map((char, index) => (
        <motion.span
        ref={ref}
          key={index}
          initial={{ color: colors[0] }}
          animate={{ color: isVisibleInAnimation ?  colors[1] :  colors[0] }}
          transition={{
            duration: 1,
            delay: 0.1 + (index * 0.05),
          }}
          className="inline-block pb-1 pl-1"
        >
          {char}
        </motion.span>
      ))}
      <motion.div
      ref={ref}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: isVisibleInAnimation ? 1 : 0 }}
        transition={{ duration: 0.5, delay: delay }}
        className="w-full h-0.5 bg-gradient-to-r from-white to-prOrange mt-4 absolute bottom-0 left-0"
      />
    </motion.span>
  );
};

export default UnderlineWord;