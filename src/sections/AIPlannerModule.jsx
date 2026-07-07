import React from 'react';
import { Sparkles } from 'lucide-react';
import { PlannerProvider } from '../context/PlannerContext';
import PlannerForm from '../components/planner/PlannerForm';
import PlannerResult from '../components/planner/PlannerResult';

function AIPlannerModule() {
  return (
    <PlannerProvider>
      <section id="planner-core" className="py-24 max-w-7xl mx-auto px-6 border-t border-white/5 relative z-30">
        
        {/* Core Header Titles */}
        <div className="space-y-2 text-left mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-secondary-neon font-display">
            <Sparkles className="w-4 h-4 text-secondary-neon" />
            Neural Compute Layer
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white">
            AI Journey Workspace
          </h2>
          <p className="text-text-muted text-sm md:text-base max-w-xl font-body">
            Input localized data tags to instruct AtlasAI to compile specialized route parameters.
          </p>
        </div>

        {/* Unified Dashboard Grid Split Window */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <PlannerForm />
          </div>
          <div className="lg:col-span-2">
            <PlannerResult />
          </div>
        </div>

      </section>
    </PlannerProvider>
  );
}

export default AIPlannerModule;