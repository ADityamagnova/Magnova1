'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Landmark, ArrowRight, CheckCircle2, Flag, Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';

interface Milestone {
  year: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
  status: 'Completed' | 'In Progress' | 'Upcoming';
}

const milestones: Milestone[] = [
  {
    year: '2024',
    phase: 'PHASE 01',
    title: 'Site Acquisition & Policy Subsidy',
    description: 'Secured 25-acre commercial manufacturing parcel in Gujarat with environmental clearances and Ministry of Heavy Industries 50% capital subsidy approval.',
    deliverables: ['25-Acre Land Clearance', '50% Capital Subsidy Approval', 'Architectural Plant Blueprint'],
    status: 'Completed',
  },
  {
    year: '2025',
    phase: 'PHASE 02',
    title: 'Equipment Installation & Metallurgy Setup',
    description: 'Procurement and commissioning of Vacuum Induction Melting (VIM) furnaces, inert Nitrogen Jet Mills, and 2.2T transverse magnetic orientation presses.',
    deliverables: ['Automated VIM Line', '3.2μm Jet Mill System', 'Argon Atmosphere Closed-Loop'],
    status: 'In Progress',
  },
  {
    year: '2026',
    phase: 'PHASE 03',
    title: 'OEM Qualification & Sample Dispatch',
    description: 'Prototype sampling and automotive IATF 16949 qualification of 45SH and 42UH NdFeB arc segments for Tier-1 EV motor manufacturers.',
    deliverables: ['IATF 16949 Certification', 'Tier-1 EV OEM Sampling', 'Defense System Qualification'],
    status: 'Upcoming',
  },
  {
    year: '2027',
    phase: 'PHASE 04',
    title: 'Commercial Production (1,200 TPA)',
    description: 'Commercial plant commissioning at 1,200 TPA initial capacity, supplying EV traction motors, wind turbines, and aerospace actuators.',
    deliverables: ['1,200 TPA Commercial Dispatch', '50+ Enterprise Clients', 'Zero Liquid Discharge (ZLD) Active'],
    status: 'Upcoming',
  },
  {
    year: '2029',
    phase: 'PHASE 05',
    title: 'Phase 2 Scale-Up (3,000 TPA)',
    description: 'Expanding manufacturing capacity to 3,000 TPA and establishing direct export channels to EV and clean energy OEMs across North America & Europe.',
    deliverables: ['3,000 TPA Expanded Facility', 'Global Export Hub', 'REPM Closed-Loop Recycling Line'],
    status: 'Upcoming',
  },
  {
    year: '2032',
    phase: 'PHASE 06',
    title: 'Institutional Listing & Global Leadership',
    description: 'Execution of Magnova strategic IPO roadmap, cementing India as a dominant global hub for advanced rare-earth permanent magnet technology.',
    deliverables: ['Institutional IPO Listing', 'Heavy Rare Earth Refining', 'Global Magnetics Leadership'],
    status: 'Upcoming',
  },
];

export default function VisionSection() {
  const [activeYearIdx, setActiveYearIdx] = useState<number>(1); // 2025 default active
  const activeMilestone = milestones[activeYearIdx];

  return (
    <section
      id="vision-roadmap"
      className="relative w-full py-24 bg-[#02050B] border-t border-b border-white/10 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial from-[#4DA9FF]/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Integrated 2-Column Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5B842]/10 border border-[#E5B842]/25 text-[0.7rem] font-mono tracking-widest text-[#E5B842] uppercase mb-4">
              <TrendingUp size={12} />
              <span>STRATEGIC GROWTH ROADMAP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Designed for Long-Term <br className="hidden sm:block" />
              <span className="gold-text">Industrial & Sovereign Impact</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm md:text-base text-white/80 leading-relaxed border-l-2 border-[#E5B842] pl-4">
              Grounded in precision metallurgy, operational scale, and institutional backing to build a multi-billion dollar rare-earth magnet enterprise.
            </p>
          </div>
        </div>

        {/* --- TIMELINE YEAR BUTTONS --- */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-12 p-3 rounded-2xl bg-[#080D1A] border border-white/10">
          {milestones.map((m, idx) => {
            const isActive = idx === activeYearIdx;
            return (
              <button
                key={m.year}
                onClick={() => setActiveYearIdx(idx)}
                className={`flex-1 min-w-[120px] py-3.5 px-4 rounded-xl text-center font-mono transition-all duration-300 ${
                  isActive
                    ? 'bg-[#E5B842] text-[#05080E] font-bold shadow-lg shadow-[#E5B842]/20 scale-105'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="text-base font-bold">{m.year}</div>
                <div className={`text-[10px] uppercase ${isActive ? 'text-[#05080E]' : 'text-white/40'}`}>
                  {m.status}
                </div>
              </button>
            );
          })}
        </div>

        {/* --- ACTIVE MILESTONE DISPLAY CARD --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMilestone.year}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl border border-white/15 bg-gradient-to-br from-[#0B1220]/95 to-[#060A14]/95 p-8 md:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-[#4DA9FF]/10 border border-[#4DA9FF]/30 text-xs font-mono font-bold text-[#4DA9FF]">
                    {activeMilestone.phase} // TARGET {activeMilestone.year}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${
                    activeMilestone.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' :
                    activeMilestone.status === 'In Progress' ? 'bg-[#E5B842]/10 text-[#E5B842] border border-[#E5B842]/30 animate-pulse' :
                    'bg-white/5 text-white/50 border border-white/10'
                  }`}>
                    STATUS: {activeMilestone.status.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {activeMilestone.title}
                </h3>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-6">
                  {activeMilestone.description}
                </p>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#E5B842] hover:bg-[#f0c44f] text-[#05080E] font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Explore Strategic Vision
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Right Column Deliverables List (5 cols) */}
              <div className="lg:col-span-5 p-6 rounded-xl bg-[#080D1A] border border-white/10 flex flex-col justify-between">
                <h4 className="text-xs font-mono tracking-widest text-white/50 uppercase mb-4">Key Phase Deliverables</h4>
                <div className="space-y-3 mb-4">
                  {activeMilestone.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-3 text-xs text-white/90">
                      <CheckCircle2 size={16} className="text-[#E5B842] shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 text-[0.68rem] font-mono text-white/40">
                  INSTITUTIONAL ALIGNMENT // MAGNOVA STRATEGIC PLAN
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
