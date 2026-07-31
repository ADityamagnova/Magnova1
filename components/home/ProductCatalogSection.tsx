'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ShieldCheck, Cpu, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface ProductShape {
  id: string;
  name: string;
  tagline: string;
  description: string;
  applications: string[];
  dimensions: string;
  icon: string;
}

const magnetShapes: ProductShape[] = [
  {
    id: 'block',
    name: 'Sintered Block Magnets',
    tagline: 'High-Density Rectangular Blocks for Heavy Drive Units',
    description: 'Precision-machined rectangular and square NdFeB block magnets engineered for heavy-duty EV motor rotors, industrial drive units, and direct-drive wind generators.',
    applications: ['EV Traction Rotors', 'Industrial Motors', 'Wind Turbines', 'Linear Actuators'],
    dimensions: 'Length: 5 - 200mm | Width: 5 - 150mm | Thickness: 2 - 50mm',
    icon: '⬛',
  },
  {
    id: 'arc',
    name: 'Arc & Segment Magnets',
    tagline: 'Custom Curved Segments for Brushless EV Motors',
    description: 'Oriented radial and axial arc magnets custom-contoured for high-torque permanent magnet synchronous motors (PMSM) used in modern electric vehicles and defense actuators.',
    applications: ['EV Traction Motors', 'Drone Prop Propulsion', 'Servo Motors', 'Robotic Joints'],
    dimensions: 'Outer Radius: 10 - 250mm | Angle: 15° - 180° | Height: 5 - 120mm',
    icon: '🌙',
  },
  {
    id: 'ring',
    name: 'Ring & Radial Magnets',
    tagline: 'Concentric Ring Assemblies for High-RPM Precision',
    description: 'Multi-pole axially and radially magnetized ring magnets providing uniform magnetic flux distribution for high-speed precision motors and acoustic drivers.',
    applications: ['Precision Sensors', 'High-RPM Spindles', 'Acoustic Drivers', 'HVAC Compressors'],
    dimensions: 'Outer Dia: 5 - 180mm | Inner Dia: 2 - 160mm | Height: 2 - 60mm',
    icon: '⭕',
  },
  {
    id: 'disc',
    name: 'Disc & Custom Geometry',
    tagline: 'Micro-Discs & Complex Sintered Geometries',
    description: 'High-energy disc magnets and complex sintered shapes manufactured with wire-cut EDM accuracy for aerospace sensors, defense guidance, and medical devices.',
    applications: ['Aerospace Sensors', 'Defense Guidance', 'Medical Imaging', 'Smart Electronics'],
    dimensions: 'Diameter: 1 - 100mm | Thickness: 0.5 - 30mm',
    icon: '🔘',
  },
];

interface MagnetGrade {
  code: string;
  category: string;
  br: string; // Remanence
  hcb: string; // Coercivity
  hcj: string; // Intrinsic Coercivity
  bhMax: string; // Energy Product
  maxTemp: string;
  idealFor: string;
}

const magnetGrades: MagnetGrade[] = [
  {
    code: 'N52',
    category: 'Standard Max Energy',
    br: '1.43 - 1.48 T',
    hcb: '≥ 796 kA/m',
    hcj: '≥ 955 kA/m',
    bhMax: '398 - 422 kJ/m³',
    maxTemp: '80 °C',
    idealFor: 'Maximum magnetic strength at ambient temperatures (Sensors, Electronics).',
  },
  {
    code: '50M',
    category: 'Medium Temp Stability',
    br: '1.40 - 1.45 T',
    hcb: '≥ 836 kA/m',
    hcj: '≥ 1,114 kA/m',
    bhMax: '382 - 406 kJ/m³',
    maxTemp: '100 °C',
    idealFor: 'High strength with elevated thermal tolerance for industrial drives.',
  },
  {
    code: '48H',
    category: 'High Temp Automotive',
    br: '1.37 - 1.42 T',
    hcb: '≥ 875 kA/m',
    hcj: '≥ 1,353 kA/m',
    bhMax: '366 - 390 kJ/m³',
    maxTemp: '120 °C',
    idealFor: 'Automotive electric mobility, power steering, and pump motors.',
  },
  {
    code: '45SH',
    category: 'Super High Temp EV',
    br: '1.32 - 1.38 T',
    hcb: '≥ 923 kA/m',
    hcj: '≥ 1,592 kA/m',
    bhMax: '342 - 366 kJ/m³',
    maxTemp: '150 °C',
    idealFor: 'EV main traction motors requiring resistance to demagnetization under heat.',
  },
  {
    code: '42UH',
    category: 'Ultra High Temp Defense',
    br: '1.28 - 1.34 T',
    hcb: '≥ 955 kA/m',
    hcj: '≥ 1,990 kA/m',
    bhMax: '318 - 342 kJ/m³',
    maxTemp: '180 °C',
    idealFor: 'Aerospace actuators, defense guidance, and high-load traction systems.',
  },
  {
    code: '38EH',
    category: 'Extra High Temp Extreme',
    br: '1.22 - 1.28 T',
    hcb: '≥ 915 kA/m',
    hcj: '≥ 2,387 kA/m',
    bhMax: '286 - 310 kJ/m³',
    maxTemp: '200 °C',
    idealFor: 'Extreme thermal environments including oil/gas exploration and military turbines.',
  },
];

export default function ProductCatalogSection() {
  const [activeShapeId, setActiveShapeId] = useState<string>('block');
  const [activeGradeCode, setActiveGradeCode] = useState<string>('45SH');

  const activeShape = magnetShapes.find((s) => s.id === activeShapeId) || magnetShapes[0];
  const activeGrade = magnetGrades.find((g) => g.code === activeGradeCode) || magnetGrades[3];

  return (
    <section
      id="product-catalog"
      className="relative w-full py-24 bg-[#050811] border-t border-b border-white/10 overflow-hidden"
    >
      {/* Background CAD grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5B842]/10 border border-[#E5B842]/30 text-[0.7rem] font-mono tracking-widest text-[#E5B842] uppercase mb-4">
              <Zap size={12} />
              <span>SINTERED NDFEB PRODUCT CATALOG</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Precision Magnet Shapes & <br className="hidden sm:block" />
              <span className="gold-text">Engineered Rare-Earth Grades</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-white/70 max-w-md">
            Custom manufactured to exact dimensional tolerances (±0.01mm) with specialized multi-layer protective coatings for demanding operating environments.
          </p>
        </div>

        {/* --- PART 1: MAGNET GEOMETRIES & SHAPES SHOWCASE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Shape Selectors List (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h3 className="text-xs font-mono tracking-widest text-white/50 uppercase mb-2">Select Product Geometry</h3>
            {magnetShapes.map((shape) => {
              const isActive = shape.id === activeShapeId;
              return (
                <button
                  key={shape.id}
                  onClick={() => setActiveShapeId(shape.id)}
                  className={`flex items-center justify-between p-4 rounded-xl text-left transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#0E1626] border-[#E5B842] shadow-lg shadow-[#E5B842]/10'
                      : 'bg-[#080D1A]/60 border-white/10 hover:border-white/25 hover:bg-[#0A1122]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-2xl">{shape.icon}</span>
                    <div>
                      <h4 className={`text-base font-bold transition-colors ${isActive ? 'text-[#E5B842]' : 'text-white'}`}>
                        {shape.name}
                      </h4>
                      <p className="text-xs text-white/60 line-clamp-1">{shape.tagline}</p>
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className={`transition-transform duration-300 ${
                      isActive ? 'text-[#E5B842] translate-x-1' : 'text-white/30'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Shape Detailed Card (8 cols) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeShape.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="h-full rounded-2xl border border-white/15 bg-[#080D1A]/90 p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-md shadow-2xl"
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#E5B842]/10 to-transparent pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#E5B842] uppercase tracking-wider">
                      FORM FACTOR // {activeShape.id.toUpperCase()}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/70">
                      Tolerance: ±0.01mm - ±0.05mm
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    {activeShape.name}
                  </h3>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6">
                    {activeShape.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 pt-6 border-t border-white/10">
                    <div>
                      <h4 className="text-xs font-mono text-white/50 uppercase tracking-wider mb-2">Typical Applications</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeShape.applications.map((app) => (
                          <span
                            key={app}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0F172A] border border-white/10 text-xs text-white/90"
                          >
                            <CheckCircle2 size={12} className="text-[#4DA9FF]" />
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono text-white/50 uppercase tracking-wider mb-2">Manufacturing Bounds</h4>
                      <p className="text-xs font-mono text-[#E5B842] bg-[#E5B842]/5 border border-[#E5B842]/20 p-3 rounded-lg">
                        {activeShape.dimensions}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4 text-xs font-mono text-white/60">
                    <span>Coatings: Ni-Cu-Ni | Epoxy | Zinc | Passivation</span>
                  </div>
                  <Link
                    href="/products"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#E5B842] hover:bg-[#f0c44f] text-[#05080E] font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    Request Custom Spec Sheet
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* --- PART 2: SINTERED GRADE SELECTOR TABLE --- */}
        <div className="rounded-2xl border border-white/15 bg-[#080D1A]/90 p-8 backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Sintered NdFeB Magnetic Grade Matrix
              </h3>
              <p className="text-xs sm:text-sm text-white/60">
                Select a magnetic grade below to inspect technical coercivity and thermal degradation thresholds.
              </p>
            </div>

            {/* Grade Pills */}
            <div className="flex flex-wrap gap-2">
              {magnetGrades.map((grade) => {
                const isActive = grade.code === activeGradeCode;
                return (
                  <button
                    key={grade.code}
                    onClick={() => setActiveGradeCode(grade.code)}
                    className={`px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-[#E5B842] text-[#05080E] shadow-md shadow-[#E5B842]/20 scale-105'
                        : 'bg-[#0E1626] text-white/70 hover:text-white border border-white/10 hover:border-white/30'
                    }`}
                  >
                    {grade.code}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grade Spec Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Main Stats (8 cols) */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-[#050811] border border-white/10 font-mono">
              <div className="border-r border-white/10 pr-3">
                <p className="text-[10px] text-white/40 uppercase tracking-wider mb-1">REMANENCE (Br)</p>
                <p className="text-base sm:text-lg font-bold text-[#E5B842]">{activeGrade.br}</p>
              </div>

              <div className="border-r border-white/10 pr-3">
                <p className="text-[10px] text-white/40 uppercase tracking-wider mb-1">COERCIVITY (Hcb)</p>
                <p className="text-base sm:text-lg font-bold text-white">{activeGrade.hcb}</p>
              </div>

              <div className="border-r border-white/10 pr-3">
                <p className="text-[10px] text-white/40 uppercase tracking-wider mb-1">INTRINSIC (Hcj)</p>
                <p className="text-base sm:text-lg font-bold text-[#4DA9FF]">{activeGrade.hcj}</p>
              </div>

              <div>
                <p className="text-[10px] text-white/40 uppercase tracking-wider mb-1">MAX ENERGY (BHmax)</p>
                <p className="text-base sm:text-lg font-bold text-white">{activeGrade.bhMax}</p>
              </div>
            </div>

            {/* Operating Temp & Application Fit (4 cols) */}
            <div className="lg:col-span-4 p-5 rounded-xl bg-[#0E1626] border border-[#E5B842]/20 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-white/50 uppercase">MAX OPERATING TEMP</span>
                <span className="px-3 py-1 rounded-full bg-[#E5B842]/10 border border-[#E5B842]/30 text-xs font-mono font-bold text-[#E5B842]">
                  ≤ {activeGrade.maxTemp}
                </span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed font-sans">
                <span className="font-bold text-white">Ideal For:</span> {activeGrade.idealFor}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
