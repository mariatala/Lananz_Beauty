'use client';

import { motion } from 'framer-motion';
import React from 'react';

const AnimatedWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full mx-auto overflow-x-hidden"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
