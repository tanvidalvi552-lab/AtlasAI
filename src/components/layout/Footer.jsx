import React, { useState } from 'react';
import { Compass, Send, Github, Twitter, Linkedin, Heart } from 'lucide-react';
function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="w-full bg-[#03050f] border-t border-white/5 relative z-30 pt-16 pb-8 px-6 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-primary-neon/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/5 pb-12 mb-8 text-left">
        
        {/* Column 1: Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="p-2 bg-primary-neon/10 rounded-xl border border-primary-neon/20">
              <Compass className="w-5 h-5 text-primary-neon" />
            </div>
            <span className="text-lg font-display font-bold tracking-tight text-white">
              Atlas<span className="text-primary-neon">AI</span>
            </span>
          </div>
          <p className="text-text-muted text-xs leading-relaxed font-body">
            Next-generation vector travel architecture modeling personalized global coordinate paths on a zero-friction neural layer.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-3 pt-2">
            {[Github, Twitter, Linkedin].map((Icon, idx) => (
              <a key={idx} href="#" className="p-2 rounded-lg bg-white/5 border border-white/5 text-text-muted hover:text-white hover:border-primary-neon/30 transition-all duration-200">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Navigation Ecosystem Links */}
        <div className="space-y-3">
          <h5 className="text-xs font-semibold text-white uppercase tracking-wider font-display">Navigation Node</h5>
          <ul className="space-y-2 text-xs font-body text-text-muted">
            {['#home-core', '#destinations-core', '#planner-core', '#analytics-core'].map((link, i) => (
              <li key={i}>
                <a href={link} className="hover:text-primary-neon transition-colors duration-200 capitalize">
                  {link.replace('#', '').replace('-core', '')} Index
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Utility Matrix links */}
        <div className="space-y-3">
          <h5 className="text-xs font-semibold text-white uppercase tracking-wider font-display">Legal Framework</h5>
          <ul className="space-y-2 text-xs font-body text-text-muted">
            {['Privacy Ledger', 'Term Metrics', 'Security API', 'System Status'].map((text, i) => (
              <li key={i}>
                <a href="#" className="hover:text-accent-cyan transition-colors duration-200">{text}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Newsletter Submission Console */}
        <div className="space-y-3">
          <h5 className="text-xs font-semibold text-white uppercase tracking-wider font-display">Newsletter Pipeline</h5>
          <p className="text-text-muted text-xs font-body leading-relaxed">
            Subscribe to intercept premium regional flight indices and pipeline logs weekly.
          </p>
          <form onSubmit={handleSubscribe} className="relative flex items-center mt-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter system email"
              className="w-full bg-[#090d22] border border-white/10 rounded-xl pl-4 pr-12 py-3 text-xs text-white focus:outline-none focus:border-primary-neon transition-colors placeholder:text-text-muted/30 font-body"
            />
            <button type="submit" className="absolute right-1.5 p-2 bg-primary-neon hover:bg-primary-neon/90 text-white rounded-lg transition-all duration-200 cursor-pointer">
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
          {subscribed && (
            <span className="text-[10px] font-medium text-emerald-400 block animate-fade-in">
              ✓ Email piped successfully into the server stream.
            </span>
          )}
        </div>
      </div>

      {/* Under-Footer Meta Layer */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-numeric text-text-muted/50 font-medium">
        <span>© 2026 AtlasAI Architecture Inc. All rights reserved.</span>
        <span className="flex items-center gap-1">
          Engineered with <Heart className="w-3 h-3 text-secondary-neon fill-secondary-neon/20 animate-pulse" /> for extreme UI/UX aesthetics.
        </span>
      </div>
    </footer>
  );
}

export default Footer;