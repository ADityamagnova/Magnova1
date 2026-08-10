'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Cpu, Zap } from 'lucide-react';
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
    applications: ['EV Traction Motors', 'Drone Propulsion', 'Servo Motors', 'Robotic Joints'],
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
  br: string;
  hcb: string;
  hcj: string;
  bhMax: string;
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
    idealFor: 'Maximum magnetic strength at ambient temperatures (Sensors, Consumer Electronics).',
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
      className="section relative w-full bg-[#030712] border-t border-b border-white/10 overflow-hidden"
    >
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="gold-line w-8" />
            <span className="eyebrow">MAGNET ENGINEERING</span>
          </div>
          <h2 className="text-h2 text-white mb-5">
            Precision Magnet Shapes & <span className="gold-text">Performance Grades</span>
          </h2>
          <p className="text-body-lg text-gray-300">
            Engineered to exact dimensional tolerances (±0.01mm) with multi-layer protective coatings for demanding operating environments.
          </p>
        </div>

        {/* --- PART 1: GEOMETRY SELECTOR (4 COLS) & SPECIFICATION PANEL (8 COLS) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Shape Selectors List (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h3 className="text-meta text-gray-400 mb-2">Product Geometries</h3>
            {magnetShapes.map((shape) => {
              const isActive = shape.id === activeShapeId;
              return (
                <button
                  key={shape.id}
                  onClick={() => setActiveShapeId(shape.id)}
                  className={`flex items-center justify-between p-5 rounded-xl text-left transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#0B1220] border-[#D6A84A] shadow-lg shadow-[#D6A84A]/10'
                      : 'bg-[#0B1220]/40 border-white/10 hover:border-white/25 hover:bg-[#0B1220]/70'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{shape.icon}</span>
                    <div>
                      <h4 className={`text-base font-bold transition-colors ${isActive ? 'text-[#D6A84A]' : 'text-white'}`}>
                        {shape.name}
                      </h4>
                      <p className="text-xs text-gray-400 line-clamp-1 mt-0.5">{shape.tagline}</p>
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className={`transition-transform duration-300 ${
                      isActive ? 'text-[#D6A84A] translate-x-1' : 'text-gray-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Shape Detailed Specification Panel (8 cols) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeShape.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="h-full rounded-2xl border border-white/15 bg-[#0B1220] p-8 md:p-10 flex flex-col justify-between shadow-2xl relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                    <span className="text-meta text-[#D6A84A]">
                      FORM FACTOR // {activeShape.id.toUpperCase()}
                    </span>
                    <span className="text-xs font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      Tolerances: ±0.01mm – ±0.05mm
                    </span>
                  </div>

                  <h3 className="text-h3 text-white mb-3">
                    {activeShape.name}
                  </h3>
                  <p className="text-body-base text-gray-300 leading-relaxed mb-8">
                    {activeShape.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 pt-6 border-t border-white/10">
                    <div>
                      <h4 className="text-meta text-gray-400 mb-3">Primary Applications</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeShape.applications.map((app) => (
                          <span
                            key={app}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#111827] border border-white/10 text-xs text-gray-200 font-medium"
                          >
                            <CheckCircle2 size={14} className="text-[#3B82F6]" />
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-meta text-gray-400 mb-3">Dimensional Bounds</h4>
                      <p className="text-xs font-mono text-[#D6A84A] bg-[#D6A84A]/10 border border-[#D6A84A]/30 p-4 rounded-xl">
                        {activeShape.dimensions}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
                  <span className="text-xs font-mono text-gray-400">
                    Protective Coatings: Ni-Cu-Ni | Epoxy | Zinc | Passivation
                  </span>
                  <Link
                    href="/products"
                    className="btn-primary text-xs uppercase"
                  >
                    <span>Request Custom Spec Sheet</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* --- PART 2: SINTERED GRADE MATRIX --- */}
        <div className="rounded-2xl border border-white/15 bg-[#0B1220] p-8 md:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-6 pb-6 border-b border-white/10">
            <div>
              <h3 className="text-h3 text-white mb-2">
                Sintered NdFeB Magnetic Grade Matrix
              </h3>
              <p className="text-body-base text-gray-400">
                Select a magnetic grade below to inspect technical coercivity and thermal degradation thresholds.
              </p>
            </div>

            {/* Grade Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {magnetGrades.map((grade) => {
                const isActive = grade.code === activeGradeCode;
                return (
                  <button
                    key={grade.code}
                    onClick={() => setActiveGradeCode(grade.code)}
                    className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-[#D6A84A] text-[#030712] shadow-lg shadow-[#D6A84A]/20 scale-105'
                        : 'bg-[#111827] text-gray-300 hover:text-white border border-white/10 hover:border-white/30'
                    }`}
                  >
                    {grade.code}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Primary Specs Upfront */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Primary Properties (8 cols) */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 rounded-xl bg-[#030712] border border-white/10 font-mono">
              <div className="border-r border-white/10 pr-4">
                <p className="text-meta text-gray-500 mb-1">REMANENCE (Br)</p>
                <p className="text-xl font-bold text-[#D6A84A]">{activeGrade.br}</p>
              </div>

              <div className="border-r border-white/10 pr-4">
                <p className="text-meta text-gray-500 mb-1">COERCIVITY (Hcb)</p>
                <p className="text-xl font-bold text-white">{activeGrade.hcb}</p>
              </div>

              <div className="border-r border-white/10 pr-4">
                <p className="text-meta text-gray-500 mb-1">INTRINSIC (Hcj)</p>
                <p className="text-xl font-bold text-[#3B82F6]">{activeGrade.hcj}</p>
              </div>

              <div>
                <p className="text-meta text-gray-500 mb-1">MAX ENERGY (BHmax)</p>
                <p className="text-xl font-bold text-white">{activeGrade.bhMax}</p>
              </div>
            </div>

            {/* Max Operating Temp & Ideal For (4 cols) */}
            <div className="lg:col-span-4 p-6 rounded-xl bg-[#111827] border border-[#D6A84A]/30 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between mb-4">
                <span className="text-meta text-gray-400">MAX OPERATING TEMP</span>
                <span className="px-3 py-1 rounded-full bg-[#D6A84A]/10 border border-[#D6A84A]/30 text-xs font-mono font-bold text-[#D6A84A]">
                  ≤ {activeGrade.maxTemp}
                </span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed font-sans">
                <strong className="text-white font-semibold">Ideal Application Fit:</strong> {activeGrade.idealFor}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
