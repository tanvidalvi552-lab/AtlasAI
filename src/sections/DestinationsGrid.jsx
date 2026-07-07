import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ArrowRight } from 'lucide-react';
import { destinations } from '../data/destinations';
import DestinationCard from '../components/cards/DestinationCard';

const filterCategories = ['All', 'Asia', 'Europe', 'Americas'];

function DestinationsGrid() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Calculates structural lists dynamically according to client hook state triggers
  const filteredDestinations = activeFilter === 'All'
    ? destinations
    : destinations.filter(dest => dest.category === activeFilter);

  return (
    // Change the opening section tag to look exactly like this:
<section id="destinations-core" className="py-24 max-w-7xl mx-auto px-6 relative z-30">
      
      {/* Header Headline Group */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary-neon font-display">
            <Globe className="w-4 h-4 animate-spin-slow" />
            Trending Frameworks
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white">
            Popular Destinations
          </h2>
          <p className="text-text-muted text-sm md:text-base max-w-xl font-body">
            Explore curated hyper-local coordinate hubs voted by global data logs this week.
          </p>
        </div>

        {/* Micro Layout Control Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 bg-[#090d22]/40 p-1.5 rounded-xl border border-white/5 glass-panel">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-xs font-medium rounded-lg font-display transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-primary-neon text-white shadow-md shadow-primary-neon/20'
                  : 'text-text-muted hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Grid Mount Pipeline Workspace */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredDestinations.map((dest) => (
            <motion.div key={dest.id} layout>
              <DestinationCard data={dest} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Footer Forward Redirect Link Button */}
      <div className="mt-12 text-center">
        <button className="inline-flex items-center gap-2 text-sm font-semibold font-display text-primary-neon hover:text-accent-cyan transition-colors duration-300 group cursor-pointer">
          View All Worldwide Hubs
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}

export default DestinationsGrid;