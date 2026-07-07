import React from 'react';
import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';

function CurvedPlane() {
  // Direct mathematical path representation for modern browser offset engines
  const dynamicCurve = "path('M -80,360 Q 380,120 720,290 T 1600,140')";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {/* Visual Sub-Vector Path Line */}
      <svg className="absolute w-full h-full opacity-[0.07]" fill="none" viewBox="0 0 1440 800">
        <path d="M -80,360 Q 380,120 720,290 T 1600,140" stroke="#22D3EE" strokeWidth="1.5" strokeDasharray="6 4" />
      </svg>
      
      <motion.div
        style={{
          offsetPath: dynamicCurve,
          offsetRotate: "auto 90deg",
        }}
        animate={{
          offsetDistance: ["0%", "100%"]
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
          delay: 1
        }}
        className="absolute flex items-center justify-center drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
      >
        <Plane className="w-4 h-4 text-accent-cyan transform rotate-90" fill="rgba(34, 211, 238, 0.15)" />
      </motion.div>
    </div>
  );
}

export default CurvedPlane;