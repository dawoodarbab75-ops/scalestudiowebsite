import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center items-center pointer-events-none px-4">
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-[#111]/80 backdrop-blur-md rounded-full px-4 sm:pl-6 sm:pr-2 py-2 flex items-center gap-4 sm:gap-1 shadow-2xl pointer-events-auto border border-white/10 max-w-full"
      >
        <a 
            href="#" 
            onClick={(e) => handleScroll(e, 'top')}
            className="font-bold text-2xl tracking-tighter text-white sm:mr-auto pb-1 cursor-pointer hover:text-emerald-400 transition-colors"
        >
            ss
        </a>
        
        <div className="hidden sm:flex items-center gap-1 text-sm font-medium text-gray-300 mr-2">
          <a 
            href="#" 
            onClick={(e) => handleScroll(e, 'services')}
            className="px-4 py-1.5 hover:text-white transition-colors"
          >
            Services
          </a>
          <a 
            href="#" 
            onClick={(e) => handleScroll(e, 'results')}
            className="px-4 py-1.5 hover:text-white transition-colors"
          >
            Results
          </a>
          <a 
            href="#" 
            onClick={(e) => handleScroll(e, 'booking')}
            className="px-4 py-1.5 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>

        <a 
          href="https://form.typeform.com/to/quysaUeA"
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white hover:bg-gray-200 text-black text-sm font-medium px-5 py-2 rounded-full transition-colors whitespace-nowrap"
        >
          Apply Now!
        </a>
      </motion.nav>
    </div>
  );
}