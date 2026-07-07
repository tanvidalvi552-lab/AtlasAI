import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, Globe } from 'lucide-react';
import { navLinks } from '../../data/categories';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Tracks screen position to apply deep blur filters dynamically upon scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav shadow-lg py-4' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Identity / Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="p-2 bg-primary-neon/10 rounded-xl border border-primary-neon/20 group-hover:border-accent-cyan/40 transition-colors duration-300">
            <Compass className="w-6 h-6 text-primary-neon group-hover:rotate-45 transition-transform duration-500 ease-out" />
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-white">
            Atlas<span className="text-primary-neon">AI</span>
          </span>
        </div>

        {/* Desktop Interface Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-sm font-medium text-text-muted hover:text-white transition-colors duration-200 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary-neon to-accent-cyan transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Action Call-to-Actions (CTAs) */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-text-muted hover:text-white transition-colors duration-200 px-4 py-2">
            Login
          </button>
          <button className="text-sm font-medium text-white bg-primary-neon hover:bg-primary-neon/90 px-5 py-2.5 rounded-xl font-display transition-all duration-200 shadow-md hover:shadow-primary-neon/20 shadow-transparent">
            Sign Up
          </button>
        </div>

        {/* Mobile Toggle Trigger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-text-muted hover:text-white transition-colors focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-panel border-b border-white/5 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-6 py-6 flex flex-col gap-5 bg-bg-dark/95 backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-text-muted hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <div className="h-[1px] bg-white/5 my-1" />
            <div className="flex flex-col gap-3">
              <button className="w-full text-center text-sm font-medium text-text-muted hover:text-white transition-colors py-2.5 rounded-xl border border-white/5">
                Login
              </button>
              <button className="w-full text-center text-sm font-medium text-white bg-primary-neon px-4 py-3 rounded-xl font-display shadow-md">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;