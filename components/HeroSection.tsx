import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Layers } from 'lucide-react';

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="top" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 pb-12 px-4 md:pt-32 w-full">
      
      {/* Local Hero Glow Effect (Subtle) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1200px] pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/5 blur-[120px] rounded-[100%] mix-blend-screen" />
        {/* Reduced green opacity significantly */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-emerald-500/5 blur-[100px] rounded-[100%] mix-blend-screen" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center text-center w-full max-w-5xl mx-auto relative z-10 mb-12">
        
        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-6 md:mb-8 break-words w-full"
        >
          Scaling Brands & <br />
          <span className="text-gray-400">Businesses.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-4"
        >
            We scale your business with high-converting paid media and retention strategies, so you can focus on expanding your brand's vision.
        </motion.p>

        {/* Buttons */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 relative z-30 w-full sm:w-auto px-4 sm:px-0"
        >
            <a 
                href="https://form.typeform.com/to/quysaUeA"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
                Get Started Now
                <ArrowUpRight size={20} className="transition-transform group-hover:rotate-45" />
            </a>
            
            <button 
                onClick={() => scrollTo('services')}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-lg text-white border border-white/10 hover:bg-white/5 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
                <Layers size={20} />
                View Services
            </button>
        </motion.div>
      </div>

    </section>
  );
}