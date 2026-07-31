'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Factory, Sun, Landmark, ArrowUpRight, Zap, Globe2 } from 'lucide-react';
import Link from 'next/link';

export default function StrategicImportance() {
  return (
    <section
      id="strategic-importance"
      className="relative w-full py-24 bg-[#02050B] overflow-hidden"
    >
      {/* Background ambient radial lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial from-[#4DA9FF]/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4DA9FF]/10 border border-[#4DA9FF]/25 text-[0.7rem] font-mono tracking-widest text-[#4DA9FF] uppercase mb-4">
              <Globe2 size={12} />
              <span>COMMERCIAL FOOTPRINT & STRATEGIC IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              India's Pioneer Commercial-Scale <br className="hidden sm:block" />
              <span className="gold-text">Sintered Rare-Earth Magnet Campus</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-white/70 max-w-md">
            Securing national self-reliance and global supply chain resilience through state-of-the-art permanent magnet sintering technology.
          </p>
        </div>

        {/* --- NEO-INSPIRED BENTO GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* BENTO CARD 1: 25-Acre Manufacturing Campus (7 cols on desktop) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-7 rounded-2xl border border-white/15 bg-gradient-to-br from-[#0B1220]/90 to-[#060A14]/90 p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-md min-h-[380px] shadow-2xl group"
          >
            {/* Ambient Background Graphic */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#E5B842]/10 via-[#4DA9FF]/5 to-transparent pointer-events-none rounded-full blur-3xl" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-[#E5B842]/10 border border-[#E5B842]/30 text-xs font-mono text-[#E5B842] font-bold">
                  GUJARAT, INDIA
                </span>
                <span className="text-xs font-mono text-white/40">CAMPUS // 01</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-[#E5B842]/10 border border-[#E5B842]/20 text-[#E5B842]">
                  <Factory size={22} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#E5B842] transition-colors">
                  25-Acre Commercial Sintering Campus
                </h3>
              </div>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6">
                Magnova's mega-facility is purpose-built to scale from <span className="text-white font-bold">1,200 TPA initial capacity to 3,000 TPA</span> of sintered NdFeB permanent magnets, equipped with automated vacuum induction furnaces, jet mills, and multi-axis magnetizers.
              </p>
            </div>

            {/* Bottom Metrics Bar inside Card */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 font-mono">
              <div>
                <p className="text-[10px] text-white/40 uppercase">Initial Capacity</p>
                <p className="text-lg font-bold text-white">1,200 TPA</p>
              </div>
              <div>
                <p className="text-[10px] text-white/40 uppercase">Expansion Target</p>
                <p className="text-lg font-bold text-[#E5B842]">3,000 TPA</p>
              </div>
              <div>
                <p className="text-[10px] text-white/40 uppercase">Land Parcel</p>
                <p className="text-lg font-bold text-[#4DA9FF]">25 Acres</p>
              </div>
            </div>
          </motion.div>

          {/* BENTO CARD 2: Sovereign Supply Chain Independence (5 cols on desktop) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-5 rounded-2xl border border-white/15 bg-gradient-to-br from-[#0B1220]/90 to-[#060A14]/90 p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-md min-h-[380px] shadow-2xl group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-[#4DA9FF]/10 border border-[#4DA9FF]/30 text-xs font-mono text-[#4DA9FF] font-bold">
                  NATIONAL SECURITY
                </span>
                <span className="text-xs font-mono text-white/40">SUPPLY // 02</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-[#4DA9FF]/10 border border-[#4DA9FF]/20 text-[#4DA9FF]">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#4DA9FF] transition-colors">
                  Sovereign Supply Independence
                </h3>
              </div>

              <p className="text-sm text-white/80 leading-relaxed mb-6">
                Eliminating 100% import dependency for critical rare-earth permanent magnets (REPM) across EV motors, defense guidance systems, aerospace actuators, and offshore wind turbines.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#050811] border border-white/10 font-mono text-xs text-white/80">
              <span className="text-[#E5B842] font-bold">Strategic Priority:</span> Sovereign manufacturing capability for high-coercivity NdFeB grades.
            </div>
          </motion.div>

          {/* BENTO CARD 3: 100% Solar-Integrated & Sustainable Sintering (5 cols) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-5 rounded-2xl border border-white/15 bg-gradient-to-br from-[#0B1220]/90 to-[#060A14]/90 p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-md min-h-[340px] shadow-2xl group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 font-bold">
                  GREEN MANUFACTURING
                </span>
                <span className="text-xs font-mono text-white/40">ESG // 03</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Sun size={22} />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  Solar Powered & Zero Waste Operations
                </h3>
              </div>

              <p className="text-sm text-white/80 leading-relaxed mb-4">
                Campus equipped with rooftop solar energy generation, closed-loop Argon gas atmosphere recycling, and Zero Liquid Discharge (ZLD) effluent management.
              </p>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
              <span>100% Solar-Integrated</span>
              <span>Closed-Loop Argon</span>
            </div>
          </motion.div>

          {/* BENTO CARD 4: Government Policy & 50% Capital Subsidy (7 cols) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-7 rounded-2xl border border-white/15 bg-gradient-to-br from-[#0B1220]/90 to-[#060A14]/90 p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-md min-h-[340px] shadow-2xl group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-[#E5B842]/10 border border-[#E5B842]/30 text-xs font-mono text-[#E5B842] font-bold">
                  POLICY BACKING
                </span>
                <span className="text-xs font-mono text-white/40">INCENTIVES // 04</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-[#E5B842]/10 border border-[#E5B842]/20 text-[#E5B842]">
                  <Landmark size={22} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#E5B842] transition-colors">
                  50% Capital Subsidy & Institutional Alignment
                </h3>
              </div>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6">
                Aligned with the Ministry of Heavy Industries REPM manufacturing mandate, securing up to <span className="text-white font-bold">50% capital subsidy support</span> for critical rare-earth processing and sintering infrastructure.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-white/70">
                <Zap size={14} className="text-[#E5B842]" />
                <span>Targeting Commercial Dispatch & IPO Roadmap</span>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#E5B842] hover:underline"
              >
                Read Strategic Whitepaper
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
