'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ArrowRight, CheckCircle2, Flame, RefreshCw, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface PipelineStep {
  step: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  parameters: string;
  icon: any;
}

const pipelineSteps: PipelineStep[] = [
  {
    step: '01',
    name: 'Vacuum Induction Melting',
    shortDesc: 'Alloying Pure REPM Elements',
    fullDesc: 'High-purity Neodymium (Nd), Iron (Fe), Boron (B), and Dy/Tb heavy rare earths are melted under ultra-high vacuum in induction furnaces to produce uniform metallurgical ingots.',
    parameters: 'Temp: 1,450°C | Vacuum: 10⁻³ Pa | Purity: 99.95%',
    icon: Flame,
  },
  {
    step: '02',
    name: 'Jet Milling & Pulverization',
    shortDesc: 'Micro-Grain Powder Processing',
    fullDesc: 'Ingots undergo Hydrogen Decrepitation (HD) followed by high-pressure inert Nitrogen Jet Milling, reducing alloy particles to a uniform 3.0 - 5.0 μm micro-powder.',
    parameters: 'Particle Size: 3.2 μm | Atmosphere: High Purity N₂ | Speed: 600 m/s',
    icon: RefreshCw,
  },
  {
    step: '03',
    name: 'Magnetic Field Alignment',
    shortDesc: 'Crystal c-Axis Alignment',
    fullDesc: 'Micro-powders are fed into high-tonnage transverse magnetic presses where a strong 2.0+ Tesla pulsed magnetic field aligns grain easy-axes before compaction.',
    parameters: 'Aligning Field: 2.2 Tesla | Pressing Load: 150 Tons | Density: 4.2 g/cm³',
    icon: Sparkles,
  },
  {
    step: '04',
    name: 'Vacuum Sintering & Heat Treatment',
    shortDesc: 'Densification & Microstructure Aging',
    fullDesc: 'Compacted blocks are vacuum-sintered near theoretical density (7.5 g/cm³) in inert Argon atmosphere, followed by two-stage aging to optimize coercivity (Hcj).',
    parameters: 'Sinter Temp: 1,080°C | Density: 7.58 g/cm³ | Atmosphere: High Purity Ar',
    icon: Cpu,
  },
  {
    step: '05',
    name: 'Precision Wire-Cut EDM',
    shortDesc: 'High-Tolerance Machining',
    fullDesc: 'Sintered NdFeB blocks are sliced using high-precision CNC wire-cut EDM and diamond grinding to achieve sub-hundredth millimeter dimensional tolerances.',
    parameters: 'Tolerance: ±0.01 mm | Roughness: Ra 0.4 μm | Surface: Diamond Ground',
    icon: Shield,
  },
  {
    step: '06',
    name: 'Multi-Layer Anti-Corrosion Coating',
    shortDesc: 'Ni-Cu-Ni & Epoxy Electro-Plating',
    fullDesc: 'Finished magnets receive automated electro-plated metallic or polymer coatings (Ni-Cu-Ni, Zinc, Epoxy, Passivation) providing 96+ hour salt spray corrosion resistance.',
    parameters: 'Coating Thickness: 10 - 25 μm | Salt Spray: 96 - 240 Hrs | Adhesion: Class 5B',
    icon: Shield,
  },
];

export default function TechnologyTeaser() {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(3); // Step 04 active default
  const activeStep = pipelineSteps[activeStepIdx];

  return (
    <section
      id="technology-pipeline"
      className="relative w-full py-24 bg-[#050811] border-t border-b border-white/10 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-[#E5B842]/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5B842]/10 border border-[#E5B842]/25 text-[0.7rem] font-mono tracking-widest text-[#E5B842] uppercase mb-4">
              <Cpu size={12} />
              <span>ADVANCED SINTERING MANUFACTURING PIPELINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Engineering Excellence at the <br className="hidden sm:block" />
              <span className="gold-text">Microstructural & Atomic Scale</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-white/70 max-w-md">
            From raw elemental rare-earth metals to high-coercivity permanent magnets, explore Magnova's automated 6-stage sintering process.
          </p>
        </div>

        {/* --- STEP SELECTOR BAR --- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {pipelineSteps.map((step, idx) => {
            const isActive = idx === activeStepIdx;
            const Icon = step.icon;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIdx(idx)}
                className={`p-4 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between h-[120px] ${
                  isActive
                    ? 'bg-[#0E1626] border-[#E5B842] shadow-lg shadow-[#E5B842]/15 scale-[1.02]'
                    : 'bg-[#080D1A]/60 border-white/10 hover:border-white/25 hover:bg-[#0A1122]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-xs font-bold ${isActive ? 'text-[#E5B842]' : 'text-white/40'}`}>
                    STEP // {step.step}
                  </span>
                  <Icon size={16} className={isActive ? 'text-[#E5B842]' : 'text-white/30'} />
                </div>

                <div>
                  <h4 className={`text-xs sm:text-sm font-bold line-clamp-1 ${isActive ? 'text-white' : 'text-white/70'}`}>
                    {step.name}
                  </h4>
                  <p className="text-[10px] text-white/50 line-clamp-1">{step.shortDesc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* --- ACTIVE STEP SHOWCASE DISPLAY CARD --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.step}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl border border-white/15 bg-gradient-to-br from-[#0B1220]/95 to-[#060A14]/95 p-8 md:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            {/* Background Step Number Accent */}
            <div className="absolute -right-6 -bottom-10 text-[180px] font-mono font-bold text-white/[0.03] select-none pointer-events-none">
              {activeStep.step}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column Description (7 cols) */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-[#E5B842]/10 border border-[#E5B842]/30 text-xs font-mono font-bold text-[#E5B842]">
                    STAGE {activeStep.step} OF 06
                  </span>
                  <span className="text-xs font-mono text-[#4DA9FF]">
                    AUTOMATED SINTERING CELL
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {activeStep.name}
                </h3>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-6">
                  {activeStep.fullDesc}
                </p>

                <div className="p-4 rounded-xl bg-[#050811] border border-white/10 font-mono text-xs text-[#E5B842]">
                  <span className="text-white/60">PROCESS PARAMETERS: </span>
                  <span className="font-bold">{activeStep.parameters}</span>
                </div>
              </div>

              {/* Right Column Tech Highlights (5 cols) */}
              <div className="lg:col-span-5 p-6 rounded-xl bg-[#080D1A] border border-white/10 flex flex-col justify-between h-full">
                <div>
                  <h4 className="text-xs font-mono tracking-widest text-white/50 uppercase mb-4">Quality & Process Assurance</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5 text-xs text-white/90">
                      <CheckCircle2 size={16} className="text-[#4DA9FF] shrink-0" />
                      <span>Closed-loop Argon atmosphere prevents grain oxidation</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-white/90">
                      <CheckCircle2 size={16} className="text-[#4DA9FF] shrink-0" />
                      <span>X-Ray Fluorescence (XRF) alloy composition verification</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-white/90">
                      <CheckCircle2 size={16} className="text-[#4DA9FF] shrink-0" />
                      <span>Automated BH Hysteresis grapher testing per batch</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <Link
                    href="/technology"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#E5B842] hover:underline"
                  >
                    View Full Metallurgy Technical Paper
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
