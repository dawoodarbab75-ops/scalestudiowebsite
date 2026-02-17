import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, Zap } from 'lucide-react';

interface StatProps {
  value: string;
  label: string;
  icon: React.ElementType;
  delay: number;
}

const StatCard: React.FC<StatProps> = ({ value, label, icon: Icon, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="relative group"
  >
    <div className="h-full p-8 md:p-10 rounded-[2rem] border border-white/10 bg-[#111] overflow-hidden shadow-2xl hover:border-white/20 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] flex flex-col items-center text-center justify-center group-hover:bg-[#161616]">
        
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 w-14 h-14 bg-[#1a1a1a] rounded-2xl border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Icon className="text-emerald-500 w-7 h-7" />
        </div>
        
        <h3 className="relative z-10 text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">{value}</h3>
        <p className="relative z-10 text-gray-400 font-medium text-lg">{label}</p>
    </div>
  </motion.div>
);

export default function ResultsSection() {
  const stats = [
    {
      value: "100+",
      label: "Leads Generated",
      icon: Users
    },
    {
      value: "350%",
      label: "Average ROI Increase",
      icon: TrendingUp
    },
    {
      value: "$5M+",
      label: "Client Revenue Driven",
      icon: Target
    },
    {
      value: "24/7",
      label: "Support & Optimization",
      icon: Zap
    }
  ];

  return (
    <section id="results" className="px-4 max-w-7xl mx-auto py-24 border-t border-white/5">
      <div className="">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
        >
            <div className="flex justify-center mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                    <span className="text-gray-300 font-medium text-sm">Results</span>
                </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Consistently Delivering Results</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <StatCard key={index} {...stat} delay={index * 0.1} />
            ))}
        </div>
      </div>
    </section>
  );
}