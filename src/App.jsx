import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './sections/Hero/Hero';
import DestinationsGrid from './sections/DestinationsGrid';
import AIPlannerModule from './sections/AIPlannerModule';
import BudgetAnalytics from './sections/BudgetAnalytics';
import Testimonials from './sections/Testimonials';
import Footer from './components/layout/Footer'; // <-- Check this path carefully!

function App() {
  return (
    <div className="min-h-screen bg-bg-dark text-text-main font-body selection:bg-primary-neon/30 antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <DestinationsGrid />
      <AIPlannerModule />
      <BudgetAnalytics />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;