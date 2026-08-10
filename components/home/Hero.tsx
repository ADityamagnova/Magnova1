'use client';

import LinkNext from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative w-full min-h-[90vh] flex items-center justify-center bg-transparent pt-32 pb-24 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Subtle Ambient Lighting */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-[#D6A84A]/8 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-radial from-[#3B82F6]/5 via-transparent to-transparent pointer-events-none" />

      {/* 12-Column Grid Container (1536px Max Width Centered) */}
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: BRAND & VALUE COPY (7 columns on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 mb-6 w-fit px-4 py-1.5 rounded-full bg-[#0B1220] border border-[#D6A84A]/30 text-xs font-mono tracking-widest text-[#D6A84A] uppercase shadow-md"
            >
              <span className="w-2 h-2 rounded-full bg-[#D6A84A] animate-pulse" />
              <span>SINTERED NdFeB MAGNETS</span>
            </motion.div>

            {/* Large Premium Headline */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-h1 text-white tracking-tight mb-8 font-sans"
            >
              Precision Magnet Shapes &{' '}
              <span className="gold-text block mt-2">
                Engineered Rare-Earth Grades
              </span>
            </motion.h1>

            {/* Concise Value Proposition Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-body-lg text-[#F3F4F6] max-w-2xl mb-10 font-sans leading-relaxed"
            >
              Commercial-scale sintered NdFeB magnets engineered for EV traction, industrial motors, wind energy, aerospace and advanced motion systems.
            </motion.p>

            {/* Primary & Secondary Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex flex-col sm:flex-row items-center gap-5"
            >
              <LinkNext
                href="/contact"
                className="btn-primary w-full sm:w-auto"
              >
                <span>Request Custom Quote</span>
                <ArrowRight size={18} />
              </LinkNext>

              <LinkNext
                href="#product-catalog"
                className="btn-outline w-full sm:w-auto"
              >
                Explore Magnet Grades
              </LinkNext>
            </motion.div>

            {/* Key Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center gap-8 text-xs text-gray-400 font-mono"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#D6A84A]" />
                <span>25-Acre Commercial Plant</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-[#3B82F6]" />
                <span>1,200 TPA Initial Sintering Capacity</span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: 3D MAGNET PRODUCT VISUALIZATION (5 columns on desktop) */}
          <div className="lg:col-span-5 w-full relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="relative w-full rounded-2xl border border-white/15 bg-gradient-to-br from-[#0B1220]/90 to-[#070C18]/90 backdrop-blur-xl p-8 overflow-hidden shadow-2xl flex flex-col justify-between min-h-[480px] lg:min-h-[540px]"
            >
              {/* Product Focal Graphic Container */}
              <div className="relative flex-1 flex flex-col items-center justify-center text-center my-auto pointer-events-none">
                
                {/* Concentric Polar Vector Field Rings */}
                <div className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full border border-[#D6A84A]/25 pointer-events-none animate-pulse" />
                <div className="absolute w-[400px] h-[400px] rounded-full border border-white/10 pointer-events-none" />

                {/* Metallic Magnet Block Render Representation */}
                <div className="relative z-10 w-44 h-56 sm:w-52 sm:h-64 rounded-xl bg-gradient-to-tr from-[#D6A84A]/20 via-[#F5CD6C]/30 to-amber-200/10 border-2 border-[#D6A84A] shadow-[0_0_50px_rgba(214,168,74,0.25)] flex flex-col items-center justify-center p-6 backdrop-blur-md transform rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
                  <div className="text-4xl mb-2">⬛</div>
                  <span className="font-mono text-xs font-bold text-[#D6A84A] tracking-widest uppercase">NdFeB-N52</span>
                  <span className="text-[11px] text-white/70 font-mono mt-1">Dipole Vector Active</span>
                </div>

                <p className="mt-8 font-mono text-xs text-white/60 tracking-wider">
                  HIGH-ENERGY SINTERED NdFeB BLOCK
                </p>
              </div>

              {/* Bottom Feature Specs */}
              <div className="border-t border-white/10 pt-5 mt-4 grid grid-cols-2 gap-4 font-mono text-left text-xs">
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase">Remanence (Br)</span>
                  <span className="text-white font-bold text-sm">1.43 – 1.48 Tesla</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase">Coercivity (Hcj)</span>
                  <span className="text-[#D6A84A] font-bold text-sm">≥ 955 – 2,387 kA/m</span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
