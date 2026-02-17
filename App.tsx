import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GrowthSection from './components/GrowthSection';
import ServicesSection from './components/ServicesSection';
import ResultsSection from './components/ResultsSection';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-emerald-500 selection:text-white relative overflow-hidden">
      
      {/* Global Background Glow - Removed for cleaner look */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Subtle noise or very faint vignette could go here if needed, but keeping it clean black as requested */}
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <HeroSection />
        
        {/* Growth Section */}
        <div className="relative z-20">
          <GrowthSection />
        </div>

        {/* Services Section */}
        <div className="text-white pt-10 pb-10 relative z-20">
          <ServicesSection />
        </div>

        {/* Results Section */}
        <div className="text-white pb-32 relative z-20">
          <ResultsSection />
        </div>

        {/* Booking & Footer Section */}
        <div className="text-white border-t border-white/5 pt-24 pb-6 relative z-30 bg-[#050505]/50 backdrop-blur-sm">
          <BookingSection />
          <Footer />
        </div>
      </main>
    </div>
  );
}