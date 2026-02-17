import { useRef, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { User, Star, TrendingUp, ArrowUpRight } from 'lucide-react';

const Counter = ({ value, prefix = "" }: { value: number, prefix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const node = ref.current;
      const controls = animate(0, value, {
        duration: 2.5,
        ease: [0.25, 1, 0.5, 1], // Cubic bezier for smooth landing
        onUpdate: (latest) => {
          node.textContent = prefix + Math.floor(latest).toLocaleString();
        }
      });
      return () => controls.stop();
    }
  }, [inView, value, prefix]);

  return <span ref={ref}>{prefix}0</span>;
};

export default function GrowthSection() {
  const scrollToResults = () => {
    const element = document.getElementById('results');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="px-4 max-w-6xl mx-auto py-20 md:py-32 relative overflow-hidden">

      {/* Background Decor - Adjusted positioning to prevent overflow */}
      <div className="absolute top-0 right-0 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none translate-x-1/2 md:translate-x-1/3" />

      {/* Section Header */}
      <div className="text-center mb-12 md:mb-20 space-y-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 font-medium text-sm mb-4"
        >
          <TrendingUp size={14} />
          <span>Proven Growth</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]"
        >
          Systems & Offers <br /> <span className="text-gray-500">That Scale.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-2"
        >
          We implement automated systems and irresistible offers designed to compound your revenue month over month.
        </motion.p>
      </div>

      {/* Main Feature Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-4xl mx-auto w-full"
      >
        {/* Glow behind card */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 via-transparent to-transparent blur-3xl -z-10" />

        <div className="bg-[#0A0A0A] rounded-[2rem] md:rounded-[2.5rem] border border-white/10 p-6 md:p-12 shadow-2xl relative overflow-hidden group">

          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none" />

          {/* Content Container */}
          <div className="relative z-10 flex flex-col h-full min-h-[350px] md:min-h-[400px]">

            {/* Header Row */}
            <div className="flex flex-col sm:flex-row justify-between items-start mb-8 gap-4 sm:gap-0">
              <div className="space-y-1">
                <div className="text-sm font-medium text-emerald-500 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Metrics
                </div>
                <h3 className="text-gray-300 font-medium text-lg">Revenue Generated</h3>
              </div>
              <div className="bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs font-medium text-gray-400 self-start sm:self-auto">
                Last 60 Days
              </div>
            </div>

            {/* Big Number */}
            <div className="mb-8">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tighter flex flex-wrap items-baseline gap-2">
                <Counter value={152674} prefix="$" />
              </div>
              <div className="text-emerald-500 font-medium mt-2 flex items-center gap-1 text-sm md:text-base">
                <ArrowUpRight size={16} />
                <span>+24.5% vs previous period</span>
              </div>
            </div>

            {/* The Graph */}
            <div className="flex-grow relative w-[85%] md:w-full mx-auto h-32 md:h-40 mt-auto">
              <svg className="w-full h-full visible overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 50">
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#34d399" stopOpacity="1" />
                  </linearGradient>
                </defs>

                {/* Area Fill */}
                <motion.path
                  d="M0,50 L0,40 C50,40 50,10 100,10 L100,50 Z"
                  fill="url(#areaGradient)"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                />

                {/* The Line */}
                <motion.path
                  d="M0,40 C50,40 50,10 100,10"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </svg>

              {/* Animated Knob */}
              <motion.div
                className="absolute w-4 h-4 bg-emerald-500 rounded-full border-[3px] border-[#0A0A0A] shadow-[0_0_20px_rgba(16,185,129,0.5)] z-20"
                initial={{ left: "0%", top: "80%" }}
                whileInView={{ left: "100%", top: "20%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                {/* Tooltip on Knob */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-[#1a1a1a] px-3 py-1.5 rounded-lg border border-white/10 whitespace-nowrap shadow-xl">
                  <span className="text-xs font-bold text-white">$152k</span>
                  <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1a1a1a] border-r border-b border-white/10 rotate-45" />
                </div>
              </motion.div>
            </div>

            {/* Footer Elements */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-8 mt-4 border-t border-white/5 gap-4">
              <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-start">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1A1A1A] border-2 border-[#0A0A0A] flex items-center justify-center text-xs text-gray-500">
                      <User size={14} />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="text-white font-medium">Trusted by Growth Brands</p>
                  <div className="flex items-center gap-1 justify-center sm:justify-start">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={10} className="text-yellow-500 fill-yellow-500" />)}
                  </div>
                </div>
              </div>

              <motion.button
                onClick={scrollToResults}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-emerald-400 hover:text-white transition-colors shadow-lg w-full sm:w-auto"
              >
                View Results
              </motion.button>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}