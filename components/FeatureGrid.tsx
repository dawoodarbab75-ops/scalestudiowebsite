import React from 'react';
import { motion } from 'framer-motion';
import { Bell, RefreshCcw, TrendingUp, Bitcoin } from 'lucide-react';

const Card = ({ children, className }: { children?: React.ReactNode, className?: string }) => (
    <motion.div 
        whileHover={{ scale: 1.02 }}
        className={`bg-[#111] rounded-[2rem] p-8 md:p-10 border border-white/10 relative overflow-hidden group ${className}`}
    >
        {children}
    </motion.div>
);

export default function FeatureGrid() {
  return (
    <section className="px-4 max-w-7xl mx-auto mb-32">
        <div className="text-center mb-24 max-w-3xl mx-auto">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight text-white"
            >
                Your ultimate Shopify companion, packed with features to simplify your business
            </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Notifications Card */}
            <Card className="min-h-[500px] flex flex-col justify-end">
                <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-emerald-900/10 to-transparent z-0 opacity-50" />
                
                {/* Visual Content: Floating Notifications */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-xs space-y-3 z-10">
                    <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="bg-[#1a1a1a]/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-start gap-3"
                    >
                        <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center shrink-0">
                            <Bitcoin size={16} className="text-white" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-white">New Order $45.00 🚀</p>
                            <p className="text-xs text-gray-400">Tap to view details</p>
                        </div>
                        <span className="text-[10px] text-gray-500 ml-auto">9:41 AM</span>
                    </motion.div>

                    <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                        className="bg-[#1a1a1a]/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-start gap-3 scale-95 opacity-80"
                    >
                        <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center shrink-0">
                            <RefreshCcw size={16} className="text-white" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-white">Inventory Updated</p>
                            <p className="text-xs text-gray-400">View details</p>
                        </div>
                    </motion.div>
                </div>

                <div className="relative z-10">
                    <Bell className="mb-4 text-emerald-500" size={28} />
                    <h3 className="text-2xl font-medium text-white mb-2">Push Notifications</h3>
                    <p className="text-gray-400 leading-relaxed">Stay on top of your store's activity with instant alerts for every sale.</p>
                </div>
            </Card>

            {/* Transactions Card */}
            <Card className="min-h-[500px] flex flex-col justify-end">
                {/* Visual Content: Coin Graphic */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                        animate={{ rotateY: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-48 h-48 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-[0_0_60px_rgba(16,185,129,0.3)] border-4 border-emerald-300 relative"
                    >
                        <span className="text-8xl font-bold text-white">$</span>
                        {/* Shine effect */}
                        <div className="absolute top-4 right-8 w-8 h-8 bg-white rounded-full blur-xl opacity-40"></div>
                    </motion.div>
                </div>

                <div className="relative z-10">
                    <TrendingUp className="mb-4 text-emerald-500" size={28} />
                    <h3 className="text-2xl font-medium text-white mb-2">Effortless Growth</h3>
                    <p className="text-gray-400 leading-relaxed">Track revenue and sales trends instantly with a user-friendly interface.</p>
                </div>
            </Card>

            {/* Portfolio Card */}
            <Card className="min-h-[500px] flex flex-col justify-end overflow-hidden">
                {/* Visual Content: Rich Image Background */}
                <div className="absolute inset-0 z-0">
                    <img src="https://picsum.photos/seed/business/800/600" alt="Art" className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/80 to-transparent"></div>
                </div>

                <div className="relative z-10">
                   <div className="mb-6">
                        <p className="text-lg md:text-xl font-medium text-gray-200 italic">"Commerce is about connecting people to products they love, seamlessly."</p>
                        <p className="mt-4 text-sm text-gray-500">— E-commerce Vision</p>
                   </div>
                </div>
            </Card>

             <Card className="min-h-[500px] flex flex-col justify-end">
                 {/* Visual Content: Chart */}
                 <div className="absolute top-10 left-10 right-10 h-64 bg-[#1a1a1a] rounded-xl p-4 shadow-2xl transform rotate-[-2deg] border border-white/5 opacity-90">
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-white font-bold text-lg">Sales</span>
                        <span className="text-gray-500 text-xs">1D</span>
                    </div>
                    {/* SVG Chart Line */}
                    <div className="relative h-32 w-full">
                        <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                            <path d="M0 35 Q 10 30, 20 32 T 40 20 T 60 25 T 80 10 T 100 5" fill="none" stroke="#10b981" strokeWidth="2" />
                            <circle cx="60" cy="25" r="3" fill="#10b981" stroke="white" strokeWidth="2" />
                        </svg>
                        <div className="absolute top-1/2 left-[60%] -translate-y-[150%] bg-emerald-500 text-white text-xs px-2 py-1 rounded">
                            $2,540
                        </div>
                    </div>
                 </div>

                <div className="relative z-10">
                    <RefreshCcw className="mb-4 text-emerald-500" size={28} />
                    <h3 className="text-2xl font-medium text-white mb-2">Real-Time Insights</h3>
                    <p className="text-gray-400 leading-relaxed">Track your business performance and transaction history with live updates.</p>
                </div>
            </Card>

        </div>
    </section>
  );
}