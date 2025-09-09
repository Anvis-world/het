'use client'

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#030014] dark:bg-[#030014] light:bg-white"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
            Portfolio
          </h1>
          <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mt-2">
            Welcome to my digital space
          </p>
        </motion.div>

        <div className="w-64 h-2 bg-gray-800 dark:bg-gray-800 light:bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <motion.p
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-500 dark:text-gray-500 light:text-gray-600 mt-4"
        >
          Loading... {progress}%
        </motion.p>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;