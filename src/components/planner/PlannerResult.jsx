import React from 'react';
import { usePlanner } from '../../context/PlannerContext';
import { motion } from 'framer-motion';
import { Sparkles, Sun, Map, Hotel, Utensils, Calendar, Clock, Star, Landmark, HelpCircle } from 'lucide-react';

function PlannerResult() {
  const { currentPlan, loading } = usePlanner();

  // 1. Loading Matrix Placeholder Animation
  if (loading) {
    return (
      <div className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center space-y-4 min-h-[500px] animate-pulse">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary-neon to-accent-cyan flex items-center justify-center shadow-lg shadow-primary-neon/20">
          <Sparkles className="w-6 h-6 text-white animate-spin" />
        </div>
        <div className="space-y-1.5">
          <p className="font-display font-bold text-white tracking-wide text-lg">Compiling Dossier Matrix</p>
          <p className="text-text-muted text-xs max-w-xs">Structuring Apple Calendar timelines, parsing Airbnb stay layouts, and reading climate modules...</p>
        </div>
      </div>
    );
  }

  // 2. Initial Setup State Warning
  if (!currentPlan) {
    return (
      <div className="glass-panel p-8 rounded-2xl border border-white/5 border-dashed flex flex-col items-center justify-center text-center space-y-4 min-h-[500px]">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-text-muted/40">
          <Calendar className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <p className="font-display font-medium text-text-muted text-sm">Workspace Deployment Standby</p>
          <p className="text-text-muted/40 text-xs max-w-xs">Configure your next destination vector coordinates inside the input panel array to manifest the terminal timeline layout.</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 text-left"
    >
      
      {/* =========================================================================
          📌 NOTION HEADER INTERFACE LAYER 
         ========================================================================= */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 space-y-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary-neon/10 to-transparent blur-3xl pointer-events-none" />
        
        <div className="flex items-start gap-4">
          <div className="text-3xl p-3 bg-[#0a0e24] border border-white/10 rounded-2xl shadow-inner select-none">🗺️</div>
          <div className="space-y-1 flex-grow">
            <div className="flex flex-wrap items-center gap-2.5">
              <h4 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">{currentPlan.destination}</h4>
              <span className="px-2.5 py-0.5 bg-primary-neon/10 border border-primary-neon/20 rounded-md text-[10px] uppercase font-bold tracking-wider text-primary-neon font-display">
                {currentPlan.style} Dossier
              </span>
            </div>
            <p className="text-xs text-text-muted/60 font-numeric font-medium flex items-center gap-4 pt-1">
              <span>📅 Duration: {currentPlan.duration}</span>
              <span>💳 Limit: {currentPlan.budget} Max</span>
            </p>
          </div>
        </div>
        
        <div className="h-[1px] bg-white/5 w-full" />
        <p className="text-text-muted text-sm font-body leading-relaxed pl-1">
          <span className="text-accent-cyan font-bold mr-1">⚡ System Executive Brief:</span>
          {currentPlan.summary}
        </p>
      </div>

      {/* =========================================================================
          🏡 AIRBNB MASTER LODGING CARD & MAP INFRASTRUCTURE ROW
         ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Lodging Deck */}
        <div className="glass-panel rounded-2xl overflow-hidden border border-white/5 flex flex-col justify-between group shadow-2xl">
          <div className="relative h-44 w-full overflow-hidden bg-bg-dark">
            <img 
              src={currentPlan.hotel?.image || "https://images.unsplash.com/photo-1566073771259-6a8506099945"} 
              alt="Accommodation Architecture" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-90" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <span className="px-2 py-0.5 bg-black/40 backdrop-blur-md rounded border border-white/15 text-[10px] font-bold text-accent-cyan uppercase tracking-wider font-display">
                Verified Stay Node
              </span>
              <span className="text-sm font-bold font-numeric text-white px-2 py-1 bg-white/10 backdrop-blur-md rounded-lg border border-white/10">
                {currentPlan.hotel?.price || "₹12,500/night"}
              </span>
            </div>
          </div>
          
          <div className="p-5 text-left space-y-2 flex-grow">
            <div className="flex items-center justify-between">
              <h5 className="text-base font-bold font-display text-white tracking-wide flex items-center gap-1.5">
                <Hotel className="w-4 h-4 text-primary-neon" />
                {currentPlan.hotel?.name || "The Architectural Boutique Stay"}
              </h5>
              <span className="flex items-center gap-1 text-xs font-numeric font-semibold text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" /> {currentPlan.hotel?.rating || "4.9"}
              </span>
            </div>
            <p className="text-xs text-text-muted font-body leading-relaxed">
              {currentPlan.hotel?.desc || "Curated space structured directly alongside municipal transport channels."}
            </p>
          </div>
        </div>

        {/* Mock Map Geo Snippet */}
        <div className="glass-panel p-5 rounded-2xl border border-white/5 text-left flex flex-col justify-between relative overflow-hidden bg-[#070b1f]/40 min-h-[220px]">
          {/* Futuristic Map Vector Tech Lines Background */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, transparent 40%, rgba(34,211,238,0.2) 41%, transparent 45%),
                              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '100% 100%, 20px 20px'
          }} />

          <div className="flex items-center justify-between relative z-10">
            <span className="text-xs font-bold font-display uppercase tracking-wider text-text-muted flex items-center gap-1.5">
              <Map className="w-3.5 h-3.5 text-accent-cyan" /> Geo Vector Core
            </span>
            <div className="px-2 py-0.5 rounded bg-accent-cyan/10 border border-accent-cyan/20 text-[10px] font-numeric font-bold text-accent-cyan">
              ZOOM 13.5
            </div>
          </div>

          <div className="space-y-1 relative z-10 pt-12">
            <span className="text-[10px] font-bold text-text-muted/40 uppercase tracking-widest block font-display">Active Anchor Target</span>
            <p className="text-base font-bold text-white font-display tracking-tight">
              {currentPlan.timeline?.[0]?.mapSnippet?.zoneName || "Central Coordinates Index"}
            </p>
            <div className="text-[11px] font-numeric text-accent-cyan font-medium pt-0.5 flex gap-3">
              <span>LAT: {currentPlan.timeline?.[0]?.mapSnippet?.lat || "35.6762"}</span>
              <span>LNG: {currentPlan.timeline?.[0]?.mapSnippet?.lng || "139.6503"}</span>
            </div>
          </div>
        </div>

      </div>

      {/* =========================================================================
          📅 APPLE CALENDAR SCHEDULER SYSTEM MATRIX
         ========================================================================= */}
      <div className="space-y-4">
        <h5 className="text-xs font-bold text-text-muted uppercase tracking-widest font-display px-1">
          Chronological Pipeline Array
        </h5>

        <div className="space-y-6">
          {currentPlan.timeline?.map((dayNode) => {
            const theme = dayNode.colorTheme || { border: 'border-l-primary-neon', text: 'text-primary-neon', bg: 'bg-primary-neon/5' };
            
            return (
              <div 
                key={dayNode.day || dayNode.dateLabel} 
                className={`glass-panel border border-white/5 border-l-3 ${theme.border} rounded-r-2xl overflow-hidden transition-all duration-300 shadow-xl`}
              >
                {/* Day Meta Heading Row */}
                <div className="bg-white/[0.01] border-b border-white/5 px-5 py-4 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className={`text-lg font-black font-display tracking-tight ${theme.text}`}>
                      {dayNode.dateLabel || `Day 0${dayNode.day}`}
                    </span>
                    <div className="h-4 w-[1px] bg-white/10" />
                    <span className="text-xs font-bold font-display text-white tracking-wide">
                      Core Operations Schedule
                    </span>
                  </div>
                  
                  {/* Floating Weather Condition Chip */}
                  <div className="flex items-center gap-2 bg-[#0a0e25] border border-white/5 px-3 py-1 rounded-xl">
                    <Sun className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
                    <span className="text-xs font-numeric font-bold text-white">{dayNode.weather?.temp || "22°C"}</span>
                    <span className="text-[10px] text-text-muted font-body hidden sm:inline">{dayNode.weather?.condition || "Clear"}</span>
                  </div>
                </div>

                {/* Grid Framework: Time Slots Columns & Recommendations Column */}
                <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
                  
                  {/* Calendar Blocks (Takes 2 columns) */}
                  <div className="lg:col-span-2 p-5 space-y-4 bg-gradient-to-br from-transparent to-white/[0.01]">
                    {dayNode.activities?.map((activity, actIdx) => (
                      <div 
                        key={actIdx}
                        className="group flex gap-4 items-start relative p-3 rounded-xl hover:bg-white/[0.02] transition-colors duration-200"
                      >
                        {/* Time Block Tracking Pill */}
                        <div className="w-20 shrink-0 pt-0.5">
                          <span className="text-xs font-numeric font-bold text-accent-cyan bg-accent-cyan/5 border border-accent-cyan/10 px-2 py-1 rounded-md tracking-wide block text-center shadow-inner">
                            {activity.time}
                          </span>
                        </div>

                        {/* Calendar Entry Event Details */}
                        <div className="space-y-1 flex-grow text-left">
                          <div className="flex items-center justify-between gap-4">
                            <h6 className="text-sm font-bold text-white font-display tracking-wide group-hover:text-primary-neon transition-colors">
                              {activity.title}
                            </h6>
                            <span className="text-[10px] font-numeric font-semibold text-text-muted/60 bg-white/5 px-2 py-0.5 rounded">
                              {activity.cost}
                            </span>
                          </div>
                          <p className="text-xs text-text-muted font-body leading-relaxed">
                            {activity.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Airbnb/Notion Style Airbnb Restaurant Card Panel (Takes 1 column) */}
                  <div className={`lg:col-span-1 p-5 ${theme.bg} flex flex-col justify-between space-y-4`}>
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted/50 font-display flex items-center gap-1.5">
                        <Utensils className="w-3.5 h-3.5 text-secondary-neon" /> Gastro Checkpoint
                      </span>
                      <div className="space-y-0.5 text-left">
                        <h6 className="text-sm font-bold text-white font-display tracking-wide">
                          {dayNode.restaurant?.name || "The Local Artisan Kitchen"}
                        </h6>
                        <span className="text-[11px] font-medium text-secondary-neon font-body block">
                          {dayNode.restaurant?.cuisine || "Regional Fine Fusion"}
                        </span>
                      </div>
                    </div>

                    <div className="bg-[#050816]/60 border border-white/5 p-3 rounded-xl text-left">
                      <span className="text-[9px] font-bold text-text-muted/40 uppercase tracking-wider block font-display">Architect's Order</span>
                      <p className="text-xs text-text-muted font-body italic leading-snug pt-0.5">
                        "{dayNode.restaurant?.highlight || "Request the off-menu seasonal tasting flight."}"
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      </div>

    </motion.div>
  );
}

export default PlannerResult;