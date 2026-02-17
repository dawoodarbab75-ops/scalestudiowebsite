import React from 'react';

export default function Footer() {
  return (
    <footer className="px-4 max-w-7xl mx-auto pt-12 pb-8">
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <div className="font-bold text-2xl tracking-tighter text-white">
                ss
            </div>
            
            {/* Email */}
            <a 
              href="mailto:info@thescalestudiomarketing.com" 
              className="text-gray-400 hover:text-emerald-500 transition-colors font-medium text-sm"
            >
              info@thescalestudiomarketing.com
            </a>
        </div>
        <div className="mt-8 text-center">
           <p className="text-xs text-gray-500">© {new Date().getFullYear()} The Scale Studio. All rights reserved.</p>
        </div>
    </footer>
  );
}