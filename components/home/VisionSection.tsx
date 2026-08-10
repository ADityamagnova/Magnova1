'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, Calendar } from 'lucide-react';
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
    deliverables: ['25-Acre Land Parcel Acquired', '50% Capital Subsidy Approval', 'Architectural Plant Blueprint Completed'],
    status: 'Completed',
  },
  {
    year: '2025',
    phase: 'PHASE 02',
    title: 'Equipment Installation & Metallurgy Setup',
    description: 'Procurement and commissioning of Vacuum Induction Melting (VIM) furnaces, inert Nitrogen Jet Mills, and 2.2T transverse magnetic orientation presses.',
    deliverables: ['Automated VIM Line Commissioned', '3.2μm Jet Mill System Active', 'Argon Atmosphere Closed-Loop Installed'],
    status: 'In Progress',
  },
  {
    year: '2026',
    phase: 'PHASE 03',
    title: 'OEM Qualification & Sample Dispatch',
    description: 'Prototype sampling and automotive IATF 16949 qualification of 45SH and 42UH NdFeB arc segments for Tier-1 EV motor manufacturers.',
    deliverables: ['IATF 16949 Automotive Certification', 'Tier-1 EV OEM Prototype Dispatches', 'Defense System Qualification'],
    status: 'Upcoming',
  },
  {
    year: '2027',
    phase: 'PHASE 04',
    title: 'Commercial Production (1,200 TPA)',
    description: 'Commercial plant commissioning at 1,200 TPA initial capacity, supplying EV traction motors, wind turbines, and aerospace actuators.',
    deliverables: ['1,200 TPA Commercial Dispatch Ramp', '50+ Enterprise Supply Agreements', 'Zero Liquid Discharge (ZLD) Active'],
    status: 'Upcoming',
  },
  {
    year: '2029',
    phase: 'PHASE 05',
    title: 'Phase 2 Scale-Up (3,000 TPA)',
    description: 'Expanding manufacturing capacity to 3,000 TPA and establishing direct export channels to EV and clean energy OEMs across North America & Europe.',
    deliverables: ['3,000 TPA Expanded Facility Active', 'Global Export Infrastructure', 'REPM Closed-Loop Recycling Line'],
    status: 'Upcoming',
  },
  {
    year: '2032',
    phase: 'PHASE 06',
    title: 'Institutional Listing & Global Leadership',
    description: 'Execution of Magnova strategic IPO roadmap, cementing India as a dominant global hub for advanced rare-earth permanent magnet technology.',
    deliverables: ['Institutional IPO Listing', 'Heavy Rare Earth Refining Integration', 'Global REPM Market Leadership'],
    status: 'Upcoming',
  },
];

export default function VisionSection() {
  const [activeYearIdx, setActiveYearIdx] = useState<number>(1); // 2025 default active
  const activeMilestone = milestones[activeYearIdx];

  return (
    <section
      id="vision-roadmap"
      className="section relative w-full bg-[#030712] border-t border-b border-white/10 overflow-hidden"
    >
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="gold-line w-8" />
            <span className="eyebrow">INDUSTRIAL ROADMAP</span>
          </div>
          <h2 className="text-h2 text-white mb-5">
            Designed for Long-Term <span className="gold-text">Industrial & Sovereign Impact</span>
          </h2>
          <p className="text-body-lg text-gray-300">
            Grounded in precision metallurgy, operational scale, and institutional backing to build a multi-billion dollar rare-earth magnet enterprise.
          </p>
        </div>

        {/* --- HORIZONTAL ROADMAP TIMELINE BAR --- */}
        <div className="relative mb-12">
          {/* Background Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-white/10 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
            {milestones.map((m, idx) => {
              const isActive = idx === activeYearIdx;
              return (
                <button
                  key={m.year}
                  onClick={() => setActiveYearIdx(idx)}
                  className={`p-5 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between h-[110px] ${
                    isActive
                      ? 'bg-[#0B1220] border-[#D6A84A] shadow-xl shadow-[#D6A84A]/15 scale-105'
                      : 'bg-[#0B1220]/40 border-white/10 hover:border-white/30 hover:bg-[#0B1220]/70'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-lg font-bold ${isActive ? 'text-[#D6A84A]' : 'text-white'}`}>
                      {m.year}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      m.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' :
                      m.status === 'In Progress' ? 'bg-[#D6A84A]/10 text-[#D6A84A] border border-[#D6A84A]/30' :
                      'bg-white/5 text-gray-400 border border-white/10'
                    }`}>
                      {m.status}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-gray-400 line-clamp-1">{m.phase}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* --- ACTIVE MILESTONE CONTENT PANEL --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMilestone.year}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-white/15 bg-[#0B1220] p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column Description (7 cols) */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-[#D6A84A]/10 border border-[#D6A84A]/30 text-xs font-mono font-bold text-[#D6A84A]">
                    {activeMilestone.phase} // TARGET {activeMilestone.year}
                  </span>
                  <span className="text-xs font-mono text-[#3B82F6] font-semibold">
                    STATUS: {activeMilestone.status.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-h3 text-white mb-4">
                  {activeMilestone.title}
                </h3>
                <p className="text-body-lg text-gray-300 leading-relaxed mb-6">
                  {activeMilestone.description}
                </p>

                <Link
                  href="/about"
                  className="btn-primary text-xs uppercase"
                >
                  <span>Explore Strategic Roadmap</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Right Column Key Phase Deliverables (5 cols) */}
              <div className="lg:col-span-5 p-6 rounded-xl bg-[#030712] border border-white/10 flex flex-col justify-between h-full">
                <div>
                  <h4 className="text-meta text-gray-400 mb-4">Key Phase Deliverables</h4>
                  <div className="space-y-3.5">
                    {activeMilestone.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-3 text-xs text-gray-200">
                        <CheckCircle2 size={16} className="text-[#D6A84A] shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 text-meta text-gray-500">
                  MAGNOVA EXPANSION STRATEGY
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
