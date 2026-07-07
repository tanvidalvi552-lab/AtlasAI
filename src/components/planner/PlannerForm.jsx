import React, { useState } from 'react';
import { usePlanner } from '../../context/PlannerContext';
import { Sparkles, Compass, Calendar, Plane, Layers } from 'lucide-react';

function PlannerForm() {
  const { generateItinerary, loading } = usePlanner();
  const [formData, setFormData] = useState({
    destination: '',
    days: '3',
    style: 'adventure',
    budget: '80k'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.destination.trim()) return;
    generateItinerary(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 shadow-2xl space-y-6 text-left relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-neon/5 blur-3xl pointer-events-none" />
      
      <h3 className="text-xl font-bold font-display text-white flex items-center gap-2">
        <Compass className="w-5 h-5 text-primary-neon" />
        Configuration Engine
      </h3>

      {/* Input Group: Destination Target */}
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-text-muted font-display">Target Coordinate / City</label>
        <div className="relative">
          <input
            type="text"
            required
            value={formData.destination}
            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
            placeholder="Where should AtlasAI plan next?"
            className="w-full bg-[#090d22]/80 border border-white/5 rounded-xl pl-4 pr-10 py-3.5 text-sm text-white focus:outline-none focus:border-primary-neon transition-colors placeholder:text-text-muted/30 font-body"
          />
          <Plane className="absolute right-3.5 top-3.5 w-4 h-4 text-text-muted/40" />
        </div>
      </div>

      {/* Grid Allocation row: Days & Style */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-text-muted font-display flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-accent-cyan" /> Duration (Days)
          </label>
          <select 
            value={formData.days}
            onChange={(e) => setFormData({ ...formData, days: e.target.value })}
            className="w-full bg-[#090d22]/80 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent-cyan appearance-none font-numeric cursor-pointer"
          >
            <option value="3">3 Days Vector</option>
            <option value="5">5 Days Vector</option>
            <option value="7">7 Days Vector</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-text-muted font-display flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-secondary-neon" /> Matrix Style
          </label>
          <select 
            value={formData.style}
            onChange={(e) => setFormData({ ...formData, style: e.target.value })}
            className="w-full bg-[#090d22]/80 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-secondary-neon appearance-none font-body cursor-pointer"
          >
            <option value="adventure">High-Octane Adventure</option>
            <option value="luxury">Immersive Luxury</option>
            <option value="backpacking">Minimalist Backpacking</option>
          </select>
        </div>
      </div>

      {/* Submission Trigger Dispatched Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-primary-neon to-secondary-neon disabled:from-white/10 disabled:to-white/10 text-white disabled:text-text-muted/40 font-medium py-4 rounded-xl shadow-lg transition-all duration-300 font-display flex items-center justify-center gap-2 group border border-white/10 disabled:border-none cursor-pointer select-none"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-text-muted border-t-transparent rounded-full animate-spin" />
            Analyzing Travel Matrices...
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4 text-accent-cyan group-hover:rotate-12 transition-transform" />
            Initialize AI Sequence
          </>
        )}
      </button>
    </form>
  );
}

export default PlannerForm;