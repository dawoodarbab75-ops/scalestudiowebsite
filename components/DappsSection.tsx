import React from 'react';
import { motion } from 'framer-motion';

const DappCard = ({ title, desc, icon, color, rotate, delay }: any) => (
    <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        animate={{ y: [0, -15, 0] }}
        transition={{ 
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay },
            opacity: { duration: 0.5 }
        }}
        style={{ rotate: rotate }}
        className={`w-64 h-80 ${color} rounded-[2.5rem] p-6 flex flex-col justify-between shadow-2xl relative group cursor-pointer hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-shadow border border-white/10`}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl shadow-inner text-white">
            {icon}
        </div>

        <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
        </div>
    </motion.div>
);

export default function DappsSection() {
  return (
    <section className="py-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 text-center mb-20 relative z-10">
             <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-semibold mb-4 text-white"
            >
                Explore, create, and trade <br/>
                seamlessly <span className="text-gray-500">in the e-commerce <br/> ecosystem.</span>
            </motion.h2>
        </div>

        {/* Floating Cards Container */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 px-4 perspective-1000">
             {/* Magic Eden */}
             <div className="relative">
                <DappCard 
                    title="Marketing" 
                    icon="M" 
                    color="bg-[#C617C8]" 
                    rotate="-6deg" 
                    delay={0} 
                />
                 <div className="mt-8 text-center max-w-[200px] mx-auto opacity-0 md:opacity-100 transition-opacity">
                    <h4 className="text-white font-medium">Run effective campaigns</h4>
                </div>
             </div>

             {/* Ora */}
             <div className="relative mt-12 md:mt-0">
                <DappCard 
                    title="Analytics" 
                    icon="👁️" 
                    color="bg-[#007AFF]" 
                    rotate="2deg" 
                    delay={1.5} 
                />
                 <div className="mt-8 text-center max-w-[200px] mx-auto">
                    <h4 className="text-white font-medium">Deep dive into data</h4>
                </div>
             </div>

             {/* Gamma */}
             <div className="relative mt-4 md:-mt-8">
                <DappCard 
                    title="Shipping" 
                    icon="📦" 
                    color="bg-gradient-to-br from-[#FF3B30] to-black" 
                    rotate="6deg" 
                    delay={0.5} 
                />
                <div className="mt-8 text-center max-w-[200px] mx-auto">
                    <h4 className="text-white font-medium">Streamline fulfillment</h4>
                </div>
             </div>
        </div>
    </section>
  );
}