import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Monitor } from 'lucide-react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 448 512" fill="currentColor" className={className}>
    <path d="M448 209.91a210.06 210.06 0 0 1 -122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
  </svg>
);

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
  </svg>
);

interface ServiceItemProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="flex flex-col items-center text-center group w-full sm:w-[320px]"
  >
    <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-900/20 group-hover:scale-110 transition-transform duration-300">
        <Icon className="text-white w-8 h-8" />
    </div>
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-base">
        {description}
    </p>
  </motion.div>
);

export default function ServicesSection() {
  const adServices = [
    {
      title: "TikTok Ads",
      description: "Leverage TikTok's powerful algorithm to reach a highly engaged audience with creative, short-form video ads that capture attention.",
      icon: TikTokIcon
    },
    {
      title: "Facebook & Instagram Ads",
      description: "Create targeted campaigns on Meta platforms that connect with the right audience, increasing engagement and driving measurable results.",
      icon: InstagramIcon
    },
    {
      title: "Google Ads",
      description: "Capture high-intent traffic with precision-targeted search and display campaigns on the world's largest advertising platform.",
      icon: GoogleIcon
    }
  ];

  const otherServices = [
     {
      title: "Email and SMS",
      description: "Reach your audience directly through personalized email and SMS campaigns that drive engagement and nurture customer relationships.",
      icon: Mail
    },
    {
      title: "Website Design",
      description: "Custom, high-converting websites designed to showcase your brand identity and optimize user experience across all devices.",
      icon: Monitor
    }
  ];

  return (
    <section id="services" className="px-4 max-w-7xl mx-auto py-24 border-t border-white/5">
      
      {/* Top Header */}
      <div className="text-center mb-24 max-w-3xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
            <span className="text-gray-300 font-medium text-sm">Services</span>
          </div>
        </motion.div>
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight"
        >
          All the tools you need to grow your brand
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed"
        >
          From strategy to analytics, we offer everything you need to boost engagement, drive conversions, and expand your brand's reach.
        </motion.p>
      </div>

      {/* Ad Services Row */}
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-16 mb-16 max-w-7xl mx-auto">
        {adServices.map((service, index) => (
          <ServiceItem key={index} {...service} delay={index * 0.1} />
        ))}
      </div>

      {/* Other Services Row */}
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-16 mb-20 max-w-4xl mx-auto">
        {otherServices.map((service, index) => (
          <ServiceItem key={index + 3} {...service} delay={(index + 3) * 0.1} />
        ))}
      </div>
    </section>
  );
}