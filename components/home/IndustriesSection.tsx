'use client';

import { motion } from 'framer-motion';
import { Zap, Wind, Shield, Settings, Plane, Activity, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

interface IndustryCard {
  id: string;
  icon: any;
  title: string;
  subtitle: string;
  description: string;
  keyGrades: string;
  tempRating: string;
  highlights: string[];
}

const industrySectors: IndustryCard[] = [
  {
    id: 'ev-mobility',
    icon: Zap,
    title: 'EV Traction & Mobility',
    subtitle: 'High-Torque Permanent Magnet Synchronous Motors',
    description: 'Supplying high-coercivity (45SH, 42UH) sintered NdFeB arc segments resistant to demagnetization under heavy thermal loads in electric vehicle drivetrains.',
    keyGrades: '45SH, 42UH, 38EH',
    tempRating: 'Up to 180 °C',
    highlights: ['PMSM Stator Arc Segments', 'Power Steering Servo Magnets', 'E-Axle Actuator Components'],
  },
  {
    id: 'wind-energy',
    icon: Wind,
    title: 'Offshore Wind Energy',
    subtitle: 'Direct-Drive Permanent Magnet Generators',
    description: 'Ultra-durable sintered NdFeB block assemblies engineered for multi-megawatt offshore direct-drive wind turbines with corrosion-resistant multilayer coatings.',
    keyGrades: '48H, 45SH',
    tempRating: 'Up to 150 °C',
    highlights: ['Direct-Drive Rotors', 'Multi-MW Turbine Assemblies', 'Corrosion-Resistant Epoxy/Ni Coatings'],
  },
  {
    id: 'defense-systems',
    icon: Shield,
    title: 'Aerospace & Defense',
    subtitle: 'Mission-Critical Guidance & Actuation Systems',
    description: 'High-precision micro-magnets and custom sintered geometries built under strict quality assurance for missile guidance, radar arrays, and aerospace avionics.',
    keyGrades: '42UH, 38EH',
    tempRating: 'Up to 200 °C',
    highlights: ['Missile Guidance Actuators', 'Radar Array Steering', 'High-Luster Aerospace Servos'],
  },
  {
    id: 'robotics-automation',
    icon: Settings,
    title: 'Robotics & Automation',
    subtitle: 'High-Precision Servos & Cobot Joints',
    description: 'Compact high-energy product magnets enabling high torque density in robotic joint actuators, CNC spindles, and automated material handling.',
    keyGrades: 'N52, 50M, 48H',
    tempRating: 'Up to 120 °C',
    highlights: ['Robotic Joint Actuators', 'High-RPM CNC Spindles', 'Automated Guided Vehicle (AGV) Drives'],
  },
  {
    id: 'consumer-hvac',
    icon: Activity,
    title: 'Consumer Electronics & HVAC',
    subtitle: 'Energy-Efficient Inverter Compressors',
    description: 'High-volume sintered block and ring magnets driving ultra-efficient inverter compressors for air conditioning, acoustic speakers, and smart appliances.',
    keyGrades: 'N52, 50M',
    tempRating: 'Up to 100 °C',
    highlights: ['Inverter Compressor Motors', 'High-Fidelity Acoustic Drivers', 'Smart Home Brushless Motors'],
  },
  {
    id: 'medical-mri',
    icon: Plane,
    title: 'Medical & Diagnostic Imaging',
    subtitle: 'High-Field MRI Magnetic Assemblies',
    description: 'Uniform magnetic flux density rings and blocks for diagnostic MRI machinery, surgical precision tools, and laboratory analysis equipment.',
    keyGrades: 'N52, 50M',
    tempRating: 'Up to 80 °C',
    highlights: ['MRI Magnet Rings', 'Surgical Tool Actuators', 'Precision Analytical Equipment'],
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="relative w-full py-24 bg-[#080D1A] border-t border-b border-white/10 overflow-hidden"
    >
      {/* Background CAD accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-radial from-[#4DA9FF]/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Integrated 2-Column Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4DA9FF]/10 border border-[#4DA9FF]/25 text-[0.7rem] font-mono tracking-widest text-[#4DA9FF] uppercase mb-4">
              <Zap size={12} />
              <span>KEY INDUSTRIAL SECTORS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Engineered for Sovereign & <br className="hidden sm:block" />
              <span className="gold-text">Global Advanced Industries</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm md:text-base text-white/80 leading-relaxed border-l-2 border-[#4DA9FF] pl-4">
              Custom magnetic properties tailored to withstand extreme thermal, mechanical, and demagnetization stress across high-growth strategic markets.
            </p>
          </div>
        </div>

        {/* --- 6-CARD SECTOR GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industrySectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={sector.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-white/12 bg-[#050811]/90 p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-md shadow-2xl group"
              >
                {/* Top card accent glow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E5B842]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-[#E5B842]/10 border border-[#E5B842]/25 text-[#E5B842] group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[0.65rem] font-mono text-white/60">
                      Temp: {sector.tempRating}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#E5B842] transition-colors">
                    {sector.title}
                  </h3>
                  <p className="text-xs font-mono text-[#4DA9FF] mb-4">
                    {sector.subtitle}
                  </p>
                  <p className="text-sm text-white/75 leading-relaxed mb-6">
                    {sector.description}
                  </p>

                  {/* Key Highlights Bullet points */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                    {sector.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-white/90">
                        <Check size={14} className="text-[#E5B842] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer spec bar */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[0.65rem] font-mono text-white/50">
                    RECOMMENDED GRADES: <span className="text-white font-bold">{sector.keyGrades}</span>
                  </span>
                  <Link
                    href="/technology"
                    className="p-2 rounded-lg bg-white/5 hover:bg-[#E5B842] text-white hover:text-[#05080E] transition-colors"
                  >
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
