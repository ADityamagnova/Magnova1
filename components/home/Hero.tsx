'use client';

import LinkNext from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative w-full min-h-screen flex items-center justify-center bg-transparent pt-28 pb-16 overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
      aria-labelledby="hero-heading"
    >
      {/* Splitscreen Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* LEFT COLUMN: BRAND & VALUE COPY (5 columns on desktop) */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left max-w-[560px] w-full mx-auto lg:mx-0">
          
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 mb-6 w-fit px-3.5 py-1.5 rounded-full bg-[#0F141F]/80 border border-white/10 text-[0.62rem] font-mono tracking-wider uppercase text-white/70"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5B842] animate-pulse" />
            <span>INDIA'S FIRST COMMERCIAL SINTERED MAGNET MANUFACTURING CAMPUS</span>
          </motion.div>

          {/* Headline - Exact line breaks matching reference image */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.6rem] sm:text-[3.6rem] lg:text-[72px] font-bold text-white tracking-tight leading-[1.04] mb-6 font-sans"
          >
            Engineering<br />
            India's Future<br />
            with<br />
            <span className="text-[#E5B842] block">
              Advanced<br />
              Permanent<br />
              Magnet
            </span>
            Manufacturing.
          </motion.h1>

          {/* Paragraph description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-[#A0AABA] text-sm sm:text-base leading-[1.65] max-w-[500px] mb-8 font-sans"
          >
            A 25-acre campus engineered for sovereign supply of sintered NdFeB magnets — the critical material behind EV traction motors, wind turbines and defence systems.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <LinkNext
              href="/technology"
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#E5B842] hover:bg-[#f0c44f] text-[#05080E] font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-[#E5B842]/10"
            >
              <span>Explore Technology</span>
              <ArrowRight size={16} />
            </LinkNext>

            <LinkNext
              href="/about"
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#0B1019] hover:bg-[#151c2a] text-white font-medium text-sm border border-white/15 hover:border-white/30 transition-all duration-200 flex items-center justify-center"
            >
              View Manufacturing Campus
            </LinkNext>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: FRAMED TECHNICAL HUD CARD (7 columns on desktop) */}
        <div className="lg:col-span-7 w-full relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative w-full rounded-xl border border-white/15 bg-[#060910]/85 backdrop-blur-xl p-5 md:p-6 overflow-hidden shadow-2xl flex flex-col justify-between min-h-[540px]"
          >
            {/* CAD Corner Crosshairs */}
            <div className="absolute top-2.5 left-2.5 text-[10px] font-mono text-white/20 select-none">┌</div>
            <div className="absolute top-2.5 right-2.5 text-[10px] font-mono text-white/20 select-none">┐</div>
            <div className="absolute bottom-2.5 left-2.5 text-[10px] font-mono text-white/20 select-none">└</div>
            <div className="absolute bottom-2.5 right-2.5 text-[10px] font-mono text-white/20 select-none">┘</div>

            {/* Top HUD Header Bar */}
            <div className="flex items-center justify-between text-[0.68rem] font-mono tracking-wider border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-white/60">
                <span>FIG. 01</span>
                <span>SINTERED NDFEB DIPOLE FIELD</span>
                <span className="text-[#4DA9FF] font-bold">// LIVE</span>
              </div>
            </div>

            {/* Top-Right Telemetry Card (MATERIAL SPEC A1) */}
            <div className="absolute top-14 right-6 bg-[#0B101D]/90 border border-white/15 rounded-md p-3 text-[0.68rem] font-mono w-[170px] shadow-xl z-20 backdrop-blur-md pointer-events-none">
              <div className="flex justify-between items-center text-[#E5B842] font-bold border-b border-white/10 pb-1.5 mb-2">
                <span>MATERIAL SPEC</span>
                <span className="text-white/40 font-normal">A1</span>
              </div>
              <div className="space-y-1 text-white/70">
                <div className="flex justify-between"><span>Grade</span> <span className="text-white font-bold">N52</span></div>
                <div className="flex justify-between"><span>Remanence</span> <span className="text-white font-bold">1.48 T</span></div>
                <div className="flex justify-between"><span>Coercivity</span> <span className="text-white font-bold">&gt;820 kA/m</span></div>
                <div className="flex justify-between"><span>BHmax</span> <span className="text-white font-bold">410 kJ/m³</span></div>
              </div>
            </div>

            {/* Center 3D Space & Circular Compass Background */}
            <div className="relative flex-1 min-h-[280px] pointer-events-none flex items-center justify-center">
              {/* Concentric polar HUD grid circles */}
              <div className="absolute w-[240px] h-[240px] rounded-full border border-[#E5B842]/20 pointer-events-none animate-pulse" />
              <div className="absolute w-[340px] h-[340px] rounded-full border border-white/5 pointer-events-none" />
              <div className="absolute w-[440px] h-[440px] rounded-full border border-white/[0.03] pointer-events-none" />
            </div>

            {/* Bottom-Left Telemetry Card (SINTER CELL 02) */}
            <div className="absolute bottom-28 left-6 bg-[#0B101D]/90 border border-white/15 rounded-md p-3 text-[0.68rem] font-mono w-[170px] shadow-xl z-20 backdrop-blur-md pointer-events-none">
              <div className="flex justify-between items-center text-[#4DA9FF] font-bold border-b border-white/10 pb-1.5 mb-2">
                <span>SINTER CELL</span>
                <span className="text-white/40 font-normal">02</span>
              </div>
              <div className="space-y-1 text-white/70">
                <div className="flex justify-between"><span>Atmosphere</span> <span className="text-white font-bold">Ar 99.99%</span></div>
                <div className="flex justify-between"><span>Pressure</span> <span className="text-white font-bold">1.02 bar</span></div>
                <div className="flex justify-between"><span>Temp</span> <span className="text-white font-bold">1,080 °C</span></div>
              </div>
            </div>

            {/* Right Border Vertical Monospace Label */}
            <div className="absolute right-1 top-1/2 -translate-y-1/2 rotate-90 text-[8px] font-mono tracking-widest text-white/25 pointer-events-none origin-right">
              MAGNOVA ADVANCED MATERIALS - CAMPUS 01
            </div>

            {/* Bottom Telemetry Metrics Bar */}
            <div className="border-t border-white/10 pt-4 mt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left font-mono">
              <div className="border-r border-white/10 pr-2">
                <p className="text-[9px] text-white/40 uppercase tracking-wider">FLUX DENSITY</p>
                <p className="text-sm md:text-base font-bold text-white font-sans mt-0.5">1.48 T</p>
              </div>
              <div className="border-r border-white/10 pr-2">
                <p className="text-[9px] text-white/40 uppercase tracking-wider">OPERATING TEMP</p>
                <p className="text-sm md:text-base font-bold text-white font-sans mt-0.5">220 °C</p>
              </div>
              <div className="border-r border-white/10 pr-2">
                <p className="text-[9px] text-white/40 uppercase tracking-wider">DIMENSIONAL TOL.</p>
                <p className="text-sm md:text-base font-bold text-white font-sans mt-0.5">±0.05 mm</p>
              </div>
              <div>
                <p className="text-[9px] text-white/40 uppercase tracking-wider">RARE-EARTH CONTENT</p>
                <p className="text-sm md:text-base font-bold text-white font-sans mt-0.5">31 wt%</p>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
