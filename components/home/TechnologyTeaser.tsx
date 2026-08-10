'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ArrowRight, CheckCircle2, Flame, RefreshCw, Sparkles, Shield } from 'lucide-react';
import Link from 'next/link';

interface ProcessStage {
  num: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  parameters: string;
  icon: any;
}

const processStages: ProcessStage[] = [
  {
    num: '01',
    name: 'Vacuum Induction Melting',
    shortDesc: 'Elemental Rare-Earth Alloying',
    fullDesc: 'High-purity Neodymium (Nd), Iron (Fe), Boron (B), and Dy/Tb heavy rare earths are melted under ultra-high vacuum in induction furnaces to produce uniform metallurgical ingots.',
    parameters: 'Melting Temp: 1,450°C | Vacuum Level: 10⁻³ Pa | Alloy Purity: 99.95%',
    icon: Flame,
  },
  {
    num: '02',
    name: 'Jet Milling & Pulverization',
    shortDesc: 'Micro-Powder Decrepitation',
    fullDesc: 'Ingots undergo Hydrogen Decrepitation (HD) followed by high-pressure inert Nitrogen Jet Milling, reducing alloy particles to a uniform 3.0 – 5.0 μm micro-powder.',
    parameters: 'Particle Size: 3.2 μm | Atmosphere: Inert N₂ | Powder Flow: 600 m/s',
    icon: RefreshCw,
  },
  {
    num: '03',
    name: 'Magnetic Field Alignment',
    shortDesc: 'Crystal c-Axis Orientation',
    fullDesc: 'Micro-powders are fed into high-tonnage transverse magnetic presses where a strong 2.2+ Tesla pulsed magnetic field aligns grain easy-axes before compaction.',
    parameters: 'Aligning Field: 2.2 Tesla | Pressing Load: 150 Tons | Density: 4.2 g/cm³',
    icon: Sparkles,
  },
  {
    num: '04',
    name: 'Vacuum Sintering & Heat Treatment',
    shortDesc: 'Theoretical Densification',
    fullDesc: 'Compacted blocks are vacuum-sintered near theoretical density (7.58 g/cm³) in inert Argon atmosphere, followed by two-stage aging to optimize coercivity (Hcj).',
    parameters: 'Sinter Temp: 1,080°C | Density: 7.58 g/cm³ | Atmosphere: High Purity Ar',
    icon: Cpu,
  },
  {
    num: '05',
    name: 'Precision Wire-Cut EDM',
    shortDesc: 'High-Tolerance Machining',
    fullDesc: 'Sintered NdFeB blocks are sliced using high-precision CNC wire-cut EDM and diamond grinding to achieve sub-hundredth millimeter dimensional tolerances.',
    parameters: 'Tolerance: ±0.01 mm | Surface Finish: Ra 0.4 μm | EDM Diamond Ground',
    icon: Shield,
  },
  {
    num: '06',
    name: 'Multi-Layer Anti-Corrosion Protection',
    shortDesc: 'Electro-Plated Protection',
    fullDesc: 'Finished magnets receive automated electro-plated metallic or polymer coatings (Ni-Cu-Ni, Zinc, Epoxy, Passivation) providing 96+ hour salt spray corrosion resistance.',
    parameters: 'Coating Thickness: 10 – 25 μm | Salt Spray: 96 – 240 Hrs | Adhesion: Class 5B',
    icon: Shield,
  },
];

export default function TechnologyTeaser() {
  const [activeStageIdx, setActiveStageIdx] = useState<number>(3); // Stage 04 active default
  const activeStage = processStages[activeStageIdx];

  return (
    <section
      id="technology-pipeline"
      className="section relative w-full bg-[#070C18] border-t border-b border-white/10 overflow-hidden"
    >
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="gold-line w-8" />
            <span className="eyebrow">MANUFACTURING PROCESS</span>
          </div>
          <h2 className="text-h2 text-white mb-5">
            Engineering Excellence at the <span className="gold-text">Microstructural & Atomic Scale</span>
          </h2>
          <p className="text-body-lg text-gray-300">
            From raw elemental rare-earth metals to high-coercivity permanent magnets, explore Magnova's automated 6-stage sintering process.
          </p>
        </div>

        {/* --- CONNECTED HORIZONTAL PROCESS TIMELINE --- */}
        <div className="relative mb-12">
          {/* Background Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-white/10 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
            {processStages.map((stage, idx) => {
              const isActive = idx === activeStageIdx;
              const Icon = stage.icon;
              return (
                <button
                  key={stage.num}
                  onClick={() => setActiveStageIdx(idx)}
                  className={`p-5 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between h-[130px] ${
                    isActive
                      ? 'bg-[#0B1220] border-[#D6A84A] shadow-xl shadow-[#D6A84A]/15 scale-105'
                      : 'bg-[#030712]/80 border-white/10 hover:border-white/30 hover:bg-[#0B1220]/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-xs font-bold ${isActive ? 'text-[#D6A84A]' : 'text-gray-500'}`}>
                      STAGE {stage.num}
                    </span>
                    <Icon size={18} className={isActive ? 'text-[#D6A84A]' : 'text-gray-600'} />
                  </div>

                  <div>
                    <h4 className={`text-sm font-bold line-clamp-1 ${isActive ? 'text-white' : 'text-gray-300'}`}>
                      {stage.name}
                    </h4>
                    <p className="text-[11px] text-gray-400 line-clamp-1 mt-0.5">{stage.shortDesc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* --- ACTIVE STAGE CONTENT PANEL --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.num}
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
                    STAGE {activeStage.num} OF 06
                  </span>
                  <span className="text-xs font-mono text-[#3B82F6] font-semibold">
                    AUTOMATED SINTERING CELL
                  </span>
                </div>

                <h3 className="text-h3 text-white mb-4">
                  {activeStage.name}
                </h3>
                <p className="text-body-lg text-gray-300 leading-relaxed mb-6">
                  {activeStage.fullDesc}
                </p>

                <div className="p-4 rounded-xl bg-[#030712] border border-white/10 font-mono text-xs text-[#D6A84A]">
                  <span className="text-gray-400 font-normal">PROCESS PARAMETERS: </span>
                  <span className="font-bold">{activeStage.parameters}</span>
                </div>
              </div>

              {/* Right Column Quality Assurance (5 cols) */}
              <div className="lg:col-span-5 p-6 rounded-xl bg-[#030712] border border-white/10 flex flex-col justify-between h-full">
                <div>
                  <h4 className="text-meta text-gray-400 mb-4">Quality & Metallurgy Assurance</h4>
                  <div className="space-y-3.5">
                    <div className="flex items-center gap-3 text-xs text-gray-200">
                      <CheckCircle2 size={16} className="text-[#3B82F6] shrink-0" />
                      <span>Closed-loop Argon atmosphere prevents grain oxidation</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-200">
                      <CheckCircle2 size={16} className="text-[#3B82F6] shrink-0" />
                      <span>X-Ray Fluorescence (XRF) alloy composition verification</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-200">
                      <CheckCircle2 size={16} className="text-[#3B82F6] shrink-0" />
                      <span>Automated BH Hysteresis grapher testing per batch</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <Link
                    href="/technology"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#D6A84A] hover:underline"
                  >
                    <span>View Metallurgy Whitepaper</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
