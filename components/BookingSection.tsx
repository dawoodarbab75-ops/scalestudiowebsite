import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function BookingSection() {
  return (
    <section id="booking" className="px-4 max-w-7xl mx-auto py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                <span className="text-gray-300 font-medium text-sm">Contact</span>
            </div>
        </div>

        <p className="text-3xl md:text-5xl font-semibold text-white max-w-2xl mx-auto tracking-tight mb-8">
          Ready to scale?
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <a 
                href="https://form.typeform.com/to/quysaUeA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-medium hover:bg-emerald-500 transition-all hover:scale-105 shadow-lg shadow-emerald-900/20"
             >
                <Calendar size={20} />
                Apply Now!
             </a>
        </div>
      </motion.div>
    </section>
  );
}