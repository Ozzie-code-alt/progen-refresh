"use client"

import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ position: 'relative', height: ' h-auto md:100vh' }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;


