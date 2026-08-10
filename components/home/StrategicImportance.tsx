'use client';

import { motion } from 'framer-motion';
import { Factory, ShieldCheck, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import Link from 'next/link';

export default function StrategicImportance() {
  return (
    <section
      id="strategic-importance"
      className="section relative w-full bg-[#070C18] border-t border-b border-white/10 overflow-hidden"
    >
      <div className="container-custom relative z-10">
        
        {/* --- PART 1: COMMERCIAL CAMPUS & DOMINANT METRICS --- */}
        <div className="mb-24">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="gold-line w-8" />
              <span className="eyebrow">COMMERCIAL FOOTPRINT & STRATEGIC IMPACT</span>
            </div>
            <h2 className="text-h2 text-white mb-5">
              India's Pioneer Commercial-Scale <span className="gold-text">Sintered Rare-Earth Magnet Campus</span>
            </h2>
            <p className="text-body-lg text-gray-300">
              Establishing critical domestic manufacturing infrastructure to secure national supply chain independence for high-performance sintered NdFeB magnets.
            </p>
          </div>

          {/* 6-Col Visual / 6-Col Dominant Metrics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 6 Cols: Facility Visual Composition */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl border border-white/15 bg-gradient-to-br from-[#0B1220] to-[#030712] p-8 md:p-12 overflow-hidden shadow-2xl min-h-[420px] flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#D6A84A]/10 via-[#3B82F6]/5 to-transparent pointer-events-none rounded-full blur-3xl" />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#D6A84A]/10 border border-[#D6A84A]/30 text-xs font-mono text-[#D6A84A] font-bold">
                      GUJARAT, INDIA
                    </span>
                    <span className="text-xs font-mono text-gray-400">FACILITY FOOTPRINT</span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-[#D6A84A]/10 border border-[#D6A84A]/30 text-[#D6A84A]">
                      <Factory size={28} />
                    </div>
                    <h3 className="text-h3 text-white">
                      Purpose-Built Manufacturing Facility
                    </h3>
                  </div>

                  <p className="text-body-base text-gray-300 leading-relaxed mb-6">
                    Equipped with automated vacuum induction melting (VIM) furnaces, inert nitrogen jet mills, transverse magnetic field presses, and automated multi-stage sintering cells.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-400">Environment: 100% Solar-Integrated & Zero Liquid Discharge</span>
                  <Link href="/about" className="text-xs font-mono text-[#D6A84A] font-bold hover:underline inline-flex items-center gap-1">
                    <span>Campus Specs</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right 6 Cols: Dominant Key Metrics Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-6">
              
              <div className="p-8 rounded-2xl bg-[#0B1220] border border-white/12 shadow-xl flex flex-col justify-between">
                <div>
                  <span className="text-meta text-gray-400 block mb-2">LAND PARCEL</span>
                  <p className="text-5xl font-extrabold text-white font-sans tracking-tight mb-2">25</p>
                  <p className="text-base font-bold text-[#D6A84A]">Acres</p>
                </div>
                <p className="text-xs text-gray-400 mt-4 pt-4 border-t border-white/10">Commercial Sintering Campus in Gujarat</p>
              </div>

              <div className="p-8 rounded-2xl bg-[#0B1220] border border-white/12 shadow-xl flex flex-col justify-between">
                <div>
                  <span className="text-meta text-gray-400 block mb-2">INITIAL CAPACITY</span>
                  <p className="text-5xl font-extrabold text-white font-sans tracking-tight mb-2">1,200</p>
                  <p className="text-base font-bold text-[#3B82F6]">TPA</p>
                </div>
                <p className="text-xs text-gray-400 mt-4 pt-4 border-t border-white/10">Tons Per Annum Sintered Magnet Output</p>
              </div>

              <div className="p-8 rounded-2xl bg-[#0B1220] border border-white/12 shadow-xl flex flex-col justify-between">
                <div>
                  <span className="text-meta text-gray-400 block mb-2">EXPANSION TARGET</span>
                  <p className="text-5xl font-extrabold text-[#D6A84A] font-sans tracking-tight mb-2">3,000</p>
                  <p className="text-base font-bold text-white">TPA</p>
                </div>
                <p className="text-xs text-gray-400 mt-4 pt-4 border-t border-white/10">Phase 2 Planned Manufacturing Scale</p>
              </div>

              <div className="p-8 rounded-2xl bg-[#0B1220] border border-white/12 shadow-xl flex flex-col justify-between">
                <div>
                  <span className="text-meta text-gray-400 block mb-2">POLICY INCENTIVE</span>
                  <p className="text-5xl font-extrabold text-white font-sans tracking-tight mb-2">50%</p>
                  <p className="text-base font-bold text-[#D6A84A]">Capital Subsidy</p>
                </div>
                <p className="text-xs text-gray-400 mt-4 pt-4 border-t border-white/10">Ministry of Heavy Industries Backing</p>
              </div>

            </div>

          </div>
        </div>

        {/* --- PART 2: SOVEREIGN SUPPLY INDEPENDENCE FLOW DIAGRAM --- */}
        <div className="p-10 md:p-14 rounded-3xl bg-[#0B1220] border border-white/15 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Storytelling (5 cols) */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono text-[#3B82F6] font-bold uppercase">
                <ShieldCheck size={16} />
                <span>STRATEGIC AUTONOMY</span>
              </div>
              <h3 className="text-h2 text-white mb-4">
                Sovereign Supply Independence
              </h3>
              <p className="text-body-base text-gray-300 mb-6 leading-relaxed">
                Rare-earth permanent magnets are critical inputs for modern mobility, clean energy, and national defense. Magnova provides a sovereign manufacturing domestic alternative to reduce global supply chain vulnerability.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-200">
                  <CheckCircle2 size={16} className="text-[#D6A84A] shrink-0" />
                  <span>Eliminating 100% import dependency for NdFeB magnets</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-200">
                  <CheckCircle2 size={16} className="text-[#D6A84A] shrink-0" />
                  <span>Heavy rare-earth Dy/Tb grain boundary diffusion capability</span>
                </div>
              </div>
            </div>

            {/* Right Supply Chain Diagram (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#030712] border border-white/10 font-mono text-xs">
              <h4 className="text-meta text-gray-400 mb-6 border-b border-white/10 pb-3">Sovereign Value Chain Architecture</h4>
              
              <div className="flex flex-col gap-4">
                {/* Node 1 */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-[#0B1220] border border-white/10">
                  <span className="text-gray-400 font-bold">01. RAW MATERIALS</span>
                  <span className="text-white">Rare-Earth Oxides & Metals (Nd, Pr, Dy, Tb)</span>
                </div>

                <div className="text-center text-[#D6A84A] font-bold text-sm">↓</div>

                {/* Node 2 */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-[#0B1220] border border-white/10">
                  <span className="text-gray-400 font-bold">02. METALLURGY</span>
                  <span className="text-white">Vacuum Induction Alloying & Jet Milling</span>
                </div>

                <div className="text-center text-[#D6A84A] font-bold text-sm">↓</div>

                {/* Node 3 */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-[#0B1220] border border-[#D6A84A]/40 bg-[#D6A84A]/5">
                  <span className="text-[#D6A84A] font-bold">03. MAGNOVA CAMPUS</span>
                  <span className="text-white font-bold">NdFeB Sintering & Precision EDM Machining</span>
                </div>

                <div className="text-center text-[#D6A84A] font-bold text-sm">↓</div>

                {/* Node 4 */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-[#0B1220] border border-[#3B82F6]/40">
                  <span className="text-[#3B82F6] font-bold">04. STRATEGIC SECTORS</span>
                  <span className="text-white">EV Traction / Wind Generators / Defense Guidance</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
