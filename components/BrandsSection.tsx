import React from 'react';
import { motion } from 'framer-motion';

export default function BrandsSection() {
  return (
    <section className="px-4 max-w-7xl mx-auto py-24">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
        >
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-16">
                Brands we have worked with
            </h2>
            
            <div className="flex justify-center items-center">
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="group relative cursor-default"
                >
                    {/* Recreated Logo to ensure perfect background removal */}
                    <span className="text-7xl md:text-9xl font-bold tracking-tighter text-white select-none">
                        azen
                    </span>
                    
                    {/* Subtle ambient glow effect behind the logo */}
                    <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </motion.div>
            </div>
        </motion.div>
    </section>
  );
}