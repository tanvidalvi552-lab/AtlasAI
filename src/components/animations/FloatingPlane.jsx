import React from 'react';
import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';

function FloatingPlane() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {/* Flight Path Container Grid */}
      <motion.div
        initial={{ x: '-10%', y: '40%', opacity: 0 }}
        animate={{ 
          x: ['0%', '110%'], 
          y: ['40%', '15%'],
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
          delay: 1
        }}
        className="absolute w-full h-full"
      >
        {/* The Airplane Aerodynamic Micro Floating Hull */}
        <motion.div
          animate={{
            y: [0, -6, 6, 0],
            rotate: [0, 1, -1, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center gap-1 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]"
        >
          {/* Plane Icon rotated to point forward along its trajectory */}
          <Plane 
            className="w-5 h-5 text-accent-cyan transform rotate-45 select-none" 
            fill="rgba(34, 211, 238, 0.2)"
          />
          
          {/* Micro Jet Condensation Jetstream Trail */}
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-accent-cyan/40 transform -translate-x-9 -translate-y-3 rounded-full blur-[0.5px]" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default FloatingPlane;