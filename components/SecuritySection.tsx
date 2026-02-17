import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, Fingerprint } from 'lucide-react';

export default function SecuritySection() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Text Side */}
        <div className="flex-1 space-y-8">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-semibold text-white leading-tight"
            >
                Security that lets you <br/>
                sleep easy
            </motion.h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Enable multi-factor authentication for high-value transactions to enhance protection against unauthorized access.
            </p>

            <div className="space-y-4 pt-4">
                {[
                    { icon: <ShieldCheck size={20} />, text: "Fraud Protection" },
                    { icon: <Eye size={20} />, text: "24/7 Monitoring" },
                    { icon: <Fingerprint size={20} />, text: "Biometric Login" },
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors"
                    >
                        <div className="text-emerald-500">{item.icon}</div>
                        <span className="text-gray-200 font-medium">{item.text}</span>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Visual Side - Security Modal Mockup */}
        <div className="flex-1 w-full flex justify-center">
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="relative bg-[#1a1a1a] border border-white/10 rounded-3xl p-2 w-full max-w-md shadow-2xl"
            >
                {/* Glow behind */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/5 blur-3xl rounded-full pointer-events-none" />

                <div className="bg-[#EBE9E0] rounded-[1.5rem] p-6 space-y-6 relative z-10 text-gray-900">
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Action</label>
                        <div className="font-medium text-sm bg-white p-3 rounded border border-gray-200 shadow-sm">Refund Order #1029</div>
                    </div>
                    
                    <div className="space-y-2">
                         <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Authorized By</label>
                         <div className="font-medium">Admin Store Owner</div>
                    </div>

                    <div className="space-y-2">
                         <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Verification</label>
                         <div className="space-y-2">
                             <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                 <div className="w-4 h-4 rounded-full bg-emerald-500" />
                                 Device Recognized
                             </div>
                             <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                 <div className="w-4 h-4 rounded-full bg-emerald-500" />
                                 Location Verified
                             </div>
                         </div>
                    </div>

                    <button className="w-full bg-[#1A1A1A] text-white font-semibold py-3 rounded-xl shadow-lg hover:bg-black transition-transform active:scale-95">
                        Approve
                    </button>
                </div>
            </motion.div>
        </div>
    </section>
  );
}