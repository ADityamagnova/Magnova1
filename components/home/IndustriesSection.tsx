'use client';

import { motion } from 'framer-motion';
import { Zap, Wind, Shield, Settings, Activity, Plane, Check } from 'lucide-react';
import Link from 'next/link';

interface IndustryCard {
  id: string;
  icon: any;
  title: string;
  description: string;
  highlights: string[];
}

const industrySectors: IndustryCard[] = [
  {
    id: 'ev-mobility',
    icon: Zap,
    title: 'EV Traction & Mobility',
    description: 'High-coercivity sintered NdFeB arc segments for electric drivetrains resistant to demagnetization under severe thermal loads.',
    highlights: ['PMSM Stator Arc Segments', 'Power Steering Servos', 'E-Axle Drives'],
  },
  {
    id: 'wind-energy',
    icon: Wind,
    title: 'Offshore Wind Energy',
    description: 'Ultra-durable sintered NdFeB block assemblies engineered for multi-megawatt offshore direct-drive wind generators.',
    highlights: ['Direct-Drive Rotors', 'Multi-MW Turbine Blocks', 'Anti-Corrosion Epoxy/Ni'],
  },
  {
    id: 'defense-systems',
    icon: Shield,
    title: 'Aerospace & Defense',
    description: 'High-precision micro-magnets and custom geometries for missile guidance, radar arrays, and aerospace avionics.',
    highlights: ['Guidance Actuators', 'Radar Steering Arrays', 'High-Luster Servos'],
  },
  {
    id: 'robotics-automation',
    icon: Settings,
    title: 'Robotics & Automation',
    description: 'Compact high-energy magnets providing extreme torque density in robotic joint actuators and CNC spindles.',
    highlights: ['Robotic Joint Actuators', 'High-RPM CNC Spindles', 'AGV Wheel Drives'],
  },
  {
    id: 'consumer-hvac',
    icon: Activity,
    title: 'Consumer Electronics & HVAC',
    description: 'High-volume sintered block and ring magnets driving ultra-efficient inverter compressors and acoustic systems.',
    highlights: ['Inverter Compressors', 'Acoustic Drivers', 'Brushless Motors'],
  },
  {
    id: 'medical-mri',
    icon: Plane,
    title: 'Medical & Diagnostic Imaging',
    description: 'Uniform magnetic flux density rings and blocks for diagnostic MRI machinery and surgical precision tools.',
    highlights: ['MRI Magnet Rings', 'Surgical Actuators', 'Analytical Instruments'],
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="section relative w-full bg-[#030712] border-t border-b border-white/10 overflow-hidden"
    >
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="gold-line w-8" />
            <span className="eyebrow">TARGET MARKETS</span>
          </div>
          <h2 className="text-h2 text-white mb-5">
            Engineered for Sovereign & <span className="gold-text">Global Advanced Industries</span>
          </h2>
          <p className="text-body-lg text-gray-300">
            Delivering custom magnetic specifications engineered to withstand extreme thermal, mechanical, and electromagnetic stress.
          </p>
        </div>

        {/* --- 3-COLUMN DESKTOP GRID (4 + 4 + 4 COLS) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industrySectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={sector.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-white/12 bg-[#0B1220] p-8 flex flex-col justify-between shadow-xl group hover:border-[#D6A84A]/40 transition-colors"
              >
                <div>
                  <div className="p-3.5 rounded-xl bg-[#D6A84A]/10 border border-[#D6A84A]/25 text-[#D6A84A] w-fit mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-h3 text-white mb-3 group-hover:text-[#D6A84A] transition-colors">
                    {sector.title}
                  </h3>

                  <p className="text-body-base text-gray-300 leading-relaxed mb-6">
                    {sector.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    {sector.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2.5 text-xs text-gray-200 font-medium">
                        <Check size={14} className="text-[#D6A84A] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <Link
                    href="/technology"
                    className="text-xs font-mono text-[#D6A84A] font-bold uppercase tracking-wider hover:underline flex items-center justify-between"
                  >
                    <span>View Industrial Capabilities</span>
                    <span>→</span>
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
