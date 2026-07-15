'use client';

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Animate';
import { motion } from 'framer-motion';
import {
  Zap,
  Wind,
  Shield,
  Settings,
  Plane,
  Cpu,
} from 'lucide-react';

const industries = [
  {
    id: 'ind-ev',
    icon: Zap,
    label: 'Electric Mobility',
    description: 'Powering next-generation electric drivetrains and traction motors.',
  },
  {
    id: 'ind-wind',
    icon: Wind,
    label: 'Renewable Energy',
    description: 'High-performance magnets for wind turbine generators and energy systems.',
  },
  {
    id: 'ind-defense',
    icon: Shield,
    label: 'Defense Systems',
    description: 'Precision magnetic components for defense platforms and electronic systems.',
  },
  {
    id: 'ind-automation',
    icon: Settings,
    label: 'Industrial Automation',
    description: 'Servo motors, actuators, and drives for advanced manufacturing systems.',
  },
  {
    id: 'ind-aerospace',
    icon: Plane,
    label: 'Aerospace Applications',
    description: 'Lightweight, high-energy-density magnets for aerospace and avionics.',
  },
  {
    id: 'ind-advanced-mfg',
    icon: Cpu,
    label: 'Advanced Manufacturing',
    description: 'Enabling precision tooling, robotics, and intelligent factory systems.',
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="section relative overflow-hidden flex flex-col items-center w-full"
      style={{ background: '#0a1929' }}
    >
      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at top right, rgba(201,150,58,0.05) 0%, transparent 65%)',
        }}
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">

        <FadeIn className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="gold-line w-10" />
            <span className="eyebrow">Sectors We Serve</span>
            <div className="gold-line w-10" />
          </div>
          <h2
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', lineHeight: 1.15 }}
          >
            Industries We Support
          </h2>
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <StaggerItem key={ind.id}>
                <motion.div
                  id={ind.id}
                  className="premium-card rounded-sm p-8 flex flex-col gap-5 h-full group transition-all duration-300"
                  whileHover={{ y: -6, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    border: '1px solid rgba(255,255,255,0.06)',
                    background: 'linear-gradient(135deg, rgba(11,26,46,0.7) 0%, rgba(6,15,28,0.95) 100%)',
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-sm flex items-center justify-center transition-all duration-300 group-hover:bg-[#C9963A]"
                    style={{
                      background:   'rgba(201,150,58,0.08)',
                      border:       '1px solid rgba(201,150,58,0.18)',
                    }}
                  >
                    <Icon size={20} className="transition-colors duration-300 group-hover:text-[#060f1c]" style={{ color: '#C9963A' }} aria-hidden="true" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3
                      className="font-display font-semibold text-white transition-colors duration-300 group-hover:text-gold"
                      style={{ fontSize: '1.1rem' }}
                    >
                      {ind.label}
                    </h3>

                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      {ind.description}
                    </p>
                  </div>

                  {/* Bottom gold accent line (appears on hover) */}
                  <div
                    className="mt-auto pt-4"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
                  >
                    <div
                      className="h-px w-0 group-hover:w-full transition-all duration-500"
                      style={{ background: 'linear-gradient(90deg, #C9963A, transparent)' }}
                    />
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
