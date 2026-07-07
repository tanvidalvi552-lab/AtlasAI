import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock } from 'lucide-react';

function DestinationCard({ data }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-2xl overflow-hidden glass-panel border border-white/5 hover:border-primary-neon/30 transition-all duration-300 shadow-xl flex flex-col h-full"
    >
      {/* High-Resolution Cover Image Container */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80" />
        
        {/* Absolute Floating Badge Overlay */}
        <span className="absolute top-4 left-4 bg-primary-neon/80 backdrop-blur-md text-white text-[11px] font-semibold font-display tracking-wider px-3 py-1 rounded-md uppercase border border-white/10">
          {data.tag}
        </span>
      </div>

      {/* Card Metadata Description Base */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs font-numeric font-medium text-text-muted">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
              {data.location}
            </span>
            <span className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/5 text-white">
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              {data.rating}
            </span>
          </div>
          <h3 className="text-lg font-bold text-white font-display tracking-tight group-hover:text-primary-neon transition-colors duration-200">
            {data.title}
          </h3>
        </div>

        {/* Pricing Layout Breakdown Divider Row */}
        <div className="pt-3 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-text-muted font-body">
            <Clock className="w-3.5 h-3.5 text-secondary-neon" />
            {data.duration}
          </div>
          <div className="text-right">
            <span className="text-[10px] text-text-muted block font-display uppercase tracking-wider">From</span>
            <span className="text-base font-bold font-numeric text-accent-cyan">{data.price}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default DestinationCard;