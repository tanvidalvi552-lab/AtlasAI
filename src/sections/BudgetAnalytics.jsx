import React from 'react';
import { Wallet, TrendingUp, PieChart as PieIcon, ArrowUpRight, DollarSign } from 'lucide-react';
import { budgetCategories, monthlyTrendData } from '../data/budgetData';

function BudgetAnalytics() {
  const totalBudget = budgetCategories.reduce((sum, item) => sum + item.value, 0);

  return (
    // Change the opening section tag to look exactly like this:
<section id="analytics-core" className="py-24 max-w-7xl mx-auto px-6 border-t border-white/5 relative z-30">
      
      {/* Dynamic Section Header Title */}
      <div className="space-y-2 text-left mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent-cyan font-display">
          <Wallet className="w-4 h-4 text-accent-cyan" />
          Financial Ledger Analytics
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white">
          Cost & Budget Analytics
        </h2>
        <p className="text-text-muted text-sm md:text-base max-w-xl font-body">
          Review clean resource allocation projections and spending parameters for your upcoming journey.
        </p>
      </div>

      {/* Main Grid Layout System */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Cost Stream Summary Indicators */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-white/5 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent-cyan/5 blur-2xl pointer-events-none" />
            <span className="text-xs font-semibold uppercase tracking-wider text-text-muted font-display block mb-1">Total Allocated Cost</span>
            <h4 className="text-4xl font-bold font-numeric text-white tracking-tight mb-2">₹{totalBudget.toLocaleString('en-IN')}</h4>
            <div className="inline-flex items-center gap-1 text-xs text-emerald-400 bg-emerald-400/10 px-2.5 py-0.5 rounded-full font-numeric font-medium">
              <ArrowUpRight className="w-3 h-3" /> Optima Route 12% saved
            </div>
          </div>

          {/* Allocation Progress Bar Stack */}
          <div className="glass-panel p-6 rounded-2xl border border-white/5 text-left space-y-4">
            <h5 className="text-xs font-semibold text-white uppercase tracking-wider font-display flex items-center gap-1.5">
              <PieIcon className="w-4 h-4 text-primary-neon" /> Stream Breakdown
            </h5>
            <div className="space-y-3">
              {budgetCategories.map((category) => (
                <div key={category.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-body">
                    <span className="text-text-muted flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ backgroundColor: category.color }} />
                      {category.name}
                    </span>
                    <span className="font-numeric font-semibold text-white">{category.percentage}%</span>
                  </div>
                  {/* Outer Bar */}
                  <div className="w-full h-2 bg-[#090d22]/80 rounded-full overflow-hidden border border-white/5">
                    {/* Inner Progressive fill */}
                    <div 
                      className="h-full rounded-full transition-all duration-500" 
                      style={{ 
                        width: `${category.percentage}%`,
                        backgroundColor: category.color 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Columns: Trend Analytics Comparison Framework Grid Viewport */}
        <div className="lg:col-span-2 glass-panel p-6 rounded-2xl border border-white/5 text-left flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
              <h5 className="text-sm font-semibold text-white tracking-wide font-display flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-secondary-neon" /> Operational Travel Forecast
              </h5>
              <div className="flex items-center gap-3 text-xs font-display">
                <span className="flex items-center gap-1.5 text-text-muted"><span className="w-2.5 h-2.5 rounded-full bg-primary-neon" /> Target Limit</span>
                <span className="flex items-center gap-1.5 text-text-muted"><span className="w-2.5 h-2.5 rounded-full bg-accent-cyan" /> Actual Cost</span>
              </div>
            </div>

            {/* Simulated Modern CSS Flex-Graph Engine */}
            <div className="h-64 flex items-end gap-3 sm:gap-6 border-b border-l border-white/5 pl-4 pb-2 relative">
              {monthlyTrendData.map((data) => {
                const maxVal = 160000;
                const budgetHeight = (data.Budget / maxVal) * 100;
                const spentHeight = (data.Spent / maxVal) * 100;

                return (
                  <div key={data.month} className="flex-1 flex flex-col items-center justify-end h-full group relative">
                    {/* Multi-Bar Stack */}
                    <div className="w-full flex items-end gap-1.5 h-full">
                      {/* Budget Target Line Pillar */}
                      <div 
                        className="flex-1 bg-primary-neon/20 group-hover:bg-primary-neon/30 border border-primary-neon/30 rounded-t-sm transition-all duration-300 relative"
                        style={{ height: `${budgetHeight}%` }}
                      >
                        <span className="absolute -top-7 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 bg-[#090d22] border border-white/10 text-white text-[10px] font-numeric px-1.5 py-0.5 rounded shadow-xl transition-all pointer-events-none z-40">
                          ₹{data.Budget / 1000}k
                        </span>
                      </div>
                      {/* Spent Actual Cost Pillar */}
                      <div 
                        className="flex-1 bg-accent-cyan/40 group-hover:bg-accent-cyan/60 border border-accent-cyan/40 rounded-t-sm transition-all duration-300 relative"
                        style={{ height: `${spentHeight}%` }}
                      >
                        <span className="absolute -top-7 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 bg-[#090d22] border border-white/10 text-white text-[10px] font-numeric px-1.5 py-0.5 rounded shadow-xl transition-all pointer-events-none z-40">
                          ₹{data.Spent / 1000}k
                        </span>
                      </div>
                    </div>
                    {/* Label */}
                    <span className="text-[11px] font-medium font-display text-text-muted mt-2 block">{data.month}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-[11px] text-text-muted/60 leading-relaxed font-body mt-4">
            * All expense allocations map dynamically to active route data variables. Analytics compute automatically based on recent regional flight indices.
          </p>
        </div>

      </div>
    </section>
  );
}

export default BudgetAnalytics;