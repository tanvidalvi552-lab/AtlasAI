import React from 'react';
import { motion } from 'framer-motion';

function RotatingGlobe() {
  return (
    <div className="absolute right-[-5%] lg:right-[5%] top-[12%] w-[320px] md:w-[500px] h-[320px] md:h-[500px] pointer-events-none z-10 opacity-[0.06] hidden md:block">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="w-full h-full relative flex items-center justify-center"
      >
        {/* Outer Grid Latitudes */}
        <div className="absolute inset-0 rounded-full border border-dashed border-primary-neon" />
        <div className="absolute inset-12 rounded-full border border-white/40" />
        <div className="absolute inset-28 rounded-full border border-dashed border-accent-cyan" />
        
        {/* Axis Geometries */}
        <div className="absolute w-full h-[1px] bg-white/30 top-1/2 left-0" />
        <div className="absolute h-full w-[1px] bg-white/30 left-1/2 top-0" />
        
        {/* Curved Spherical Simulators */}
        <div className="absolute w-full h-[60%] rounded-[50%] border border-white/20 top-1/2 -translate-y-1/2" />
        <div className="absolute h-full w-[60%] rounded-[50%] border border-white/20 left-1/2 -translate-x-1/2" />
      </motion.div>
    </div>
  );
}

export default RotatingGlobe;