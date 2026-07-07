import React from 'react';
import { motion } from 'framer-motion';

function Particles() {
  const particleCount = 25;
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {Array.from({ length: particleCount }).map((_, i) => {
        const dimensions = Math.random() * 2.5 + 1; // Creates random micro-scales
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent-cyan/30 backdrop-blur-xs"
            style={{
              width: dimensions,
              height: dimensions,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -120 - 60],
              x: [0, (Math.random() - 0.5) * 40],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 6,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 4,
            }}
          />
        );
      })}
    </div>
  );
}

export default Particles;