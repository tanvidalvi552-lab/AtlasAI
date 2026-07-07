import React from 'react';
import { motion } from 'framer-motion';

function Aurora() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#050816]">
      {/* Primary Neon Blue Aurora Blob */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary-neon/15 blur-[140px]"
      />

      {/* Secondary Purple Aurora Blob */}
      <motion.div
        animate={{
          x: [0, -60, 30, 0],
          y: [0, 40, -50, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-[10%] right-[-5%] w-[550px] h-[550px] rounded-full bg-secondary-neon/10 blur-[130px]"
      />

      {/* Accent Cyan Ambient Strip */}
      <motion.div
        animate={{
          x: [-20, 30, -10, -20],
          y: [30, -20, 40, 30],
          scale: [0.9, 1.1, 1, 0.9],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[-10%] left-[25%] w-[700px] h-[400px] rounded-full bg-accent-cyan/10 blur-[150px]"
      />

      {/* Futuristic Grid Overlay Sheet */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}
export default Aurora;