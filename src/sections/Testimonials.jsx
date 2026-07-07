import React from "react";
import { MessageSquare, Star, Quote } from "lucide-react";
import { testimonials } from "../data/testimonials";

function Testimonials() {
  return (
    <section
      id="reviews-core"
      className="py-24 max-w-7xl mx-auto px-6 border-t border-white/5 relative z-30"
    >
      {/* Header */}
      <div className="space-y-2 text-left mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-secondary-neon font-display">
          <MessageSquare className="w-4 h-4 text-secondary-neon" />
          Global Log Entries
        </div>

        <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white">
          Explorer Testimonials
        </h2>

        <p className="text-text-muted text-sm md:text-base max-w-xl font-body">
          See how travelers are utilizing our neural network framework to
          navigate international hubs.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="relative group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:border-secondary-neon/40 hover:bg-white/10"
          >
            {/* Quote Icon */}
            <Quote className="absolute right-6 top-6 w-8 h-8 text-white/5 group-hover:text-secondary-neon/10 transition-colors duration-300 pointer-events-none" />

            <div className="space-y-4">
              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className={`w-3.5 h-3.5 ${
                      starIndex < (item.rating || 5)
                        ? "text-amber-400 fill-amber-400"
                        : "text-white/10"
                    }`}
                  />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-sm font-body text-text-muted group-hover:text-white/95 leading-relaxed transition-colors duration-200">
                "{item.feedback}"
              </p>
            </div>

            {/* User */}
            <div className="flex items-center gap-3 pt-4 mt-6 border-t border-white/5">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 group-hover:border-secondary-neon/40 transition-colors duration-300 shrink-0">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="space-y-0.5">
                <h5 className="text-sm font-bold font-display text-white tracking-wide">
                  {item.name}
                </h5>
                <span className="text-[11px] font-medium font-body text-text-muted block">
                  {item.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;