import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, Wallet, Users, Play, Compass, ChevronDown } from 'lucide-react';
import Aurora from '../../components/animations/Aurora';
import CurvedPlane from '../../components/animations/CurvedPlane';
import Particles from '../../components/animations/Particles';
import RotatingGlobe from '../../components/animations/RotatingGlobe';

function Hero() {
  return (
    <section id="home-core" className="relative min-h-screen w-full flex flex-col justify-center items-center pt-32 pb-28 px-6 overflow-hidden z-20">
      
      {/* 🌌 Complete Atmospheric Dynamic Layers */}
      <Aurora />
      <Particles />
      <CurvedPlane />
      <RotatingGlobe />

      {/* Main Content Layout Shield */}
      <div className="max-w-7xl mx-auto w-full text-center flex flex-col items-center relative z-30">
        
        {/* Decorative Badge Tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase font-numeric text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 mb-6 glass-panel select-none"
        >
          <Sparkles className="w-3.5 h-3.5 text-accent-cyan animate-pulse" />
          The Next Generation of Travel Architecture
        </motion.div>

        {/* Premium Typography Headlines */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight text-white max-w-4xl leading-[1.1] mb-6"
        >
          Discover the World, <br />
          One <span className="bg-gradient-to-r from-primary-neon via-secondary-neon to-accent-cyan bg-clip-text text-transparent drop-shadow-sm">Intelligent Journey</span> at a Time.
        </motion.h1>

        {/* Subtext Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg text-text-muted max-w-2xl font-body leading-relaxed mb-10"
        >
          AI builds personalized itineraries, recommends hidden gems, estimates budgets, and helps you travel smarter.
        </motion.p>

        {/* 🎯 Upgraded Action Buttons with Premium Micro-interactions */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto"
        >
          <motion.a
            href="#planner-core"
            whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(79, 140, 255, 0.45)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-4 bg-primary-neon text-white font-medium rounded-xl font-display flex items-center justify-center gap-2 group transition-colors duration-200 cursor-pointer select-none"
          >
            <Compass className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            Start Exploring
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-4 glass-panel border border-white/10 text-white font-medium rounded-xl transition-all duration-200 flex items-center justify-center gap-2 font-display cursor-pointer"
          >
            <Play className="w-4 h-4 text-accent-cyan fill-accent-cyan/20" />
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Floating Search Console UI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="w-full max-w-5xl glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 shadow-2xl relative neon-glow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end text-left"
        >
          {/* Destination Selection */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-text-muted tracking-wider uppercase block font-display flex items-center gap-1.5 select-none">
              <MapPin className="w-3.5 h-3.5 text-primary-neon" />
              Where to?
            </label>
            <input 
              type="text" 
              placeholder="e.g. Tokyo, Switzerland" 
              className="w-full bg-[#090d22]/60 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-neon transition-colors placeholder:text-text-muted/40 font-body"
            />
          </div>

          {/* Travel Style */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-text-muted tracking-wider uppercase block font-display flex items-center gap-1.5 select-none">
              <Sparkles className="w-3.5 h-3.5 text-secondary-neon" />
              Travel Style
            </label>
            <select className="w-full bg-[#090d22]/60 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-secondary-neon transition-colors appearance-none font-body cursor-pointer">
              <option value="adventure">Adventure</option>
              <option value="luxury">Luxury</option>
              <option value="backpacking">Backpacking</option>
            </select>
          </div>

          {/* Budget */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-text-muted tracking-wider uppercase block font-display flex items-center gap-1.5 select-none">
              <Wallet className="w-3.5 h-3.5 text-accent-cyan" />
              Budget Limit
            </label>
            <select className="w-full bg-[#090d22]/60 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-cyan transition-colors appearance-none font-numeric cursor-pointer">
              <option value="40k">₹40,000</option>
              <option value="80k">₹80,000</option>
              <option value="150k">₹1,50,000</option>
            </select>
          </div>

          {/* Travelers */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-text-muted tracking-wider uppercase block font-display flex items-center gap-1.5 select-none">
              <Users className="w-3.5 h-3.5 text-white" />
              Travelers
            </label>
            <select className="w-full bg-[#090d22]/60 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/20 transition-colors appearance-none font-numeric cursor-pointer">
              <option value="1">1 Explorer</option>
              <option value="2">2 Explorers</option>
              <option value="4">4 Explorers</option>
            </select>
          </div>

          {/* Trigger button */}
          <div>
            <motion.button 
              whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-primary-neon to-secondary-neon text-white font-medium text-sm py-3.5 px-4 rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 font-display cursor-pointer select-none border border-white/10"
            >
              <Sparkles className="w-4 h-4 text-accent-cyan" />
              Generate Trip
            </motion.button>
          </div>
        </motion.div>

      </div>

      {/* 👇 Sleek Tech Mouse Scroll Indicator */}
      <motion.a
        href="#destinations-core"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-text-muted/40 hover:text-primary-neon transition-colors duration-300 select-none cursor-pointer group z-30"
      >
        <span className="text-[9px] font-bold tracking-widest uppercase font-display">Explore Grid</span>
        <div className="w-[18px] h-[30px] rounded-full border border-white/20 group-hover:border-primary-neon/40 flex justify-center p-1 transition-colors">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 bg-accent-cyan rounded-full shadow-[0_0_4px_#22D3EE]" 
          />
        </div>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce text-text-muted/30 group-hover:text-primary-neon/50 transition-colors" />
      </motion.a>

    </section>
  );
}

export default Hero;