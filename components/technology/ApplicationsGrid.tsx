'use client';

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Animate';
import { motion } from 'framer-motion';
import { Car, Wind, Bot, Shield, Cog, Plane } from 'lucide-react';

const applications = [
  {
    id: 'app-ev',
    icon: Car,
    label: 'Electric Vehicles',
    description: 'Traction motors and auxiliary drive systems for next-generation electric mobility platforms.',
  },
  {
    id: 'app-wind',
    icon: Wind,
    label: 'Wind Energy',
    description: 'High-output permanent magnet generators for onshore and offshore wind turbine systems.',
  },
  {
    id: 'app-robotics',
    icon: Bot,
    label: 'Robotics',
    description: 'Compact, high-torque servo actuators and precision joint motors for industrial robotics.',
  },
  {
    id: 'app-defense',
    icon: Shield,
    label: 'Defense Systems',
    description: 'Ruggedised magnetic components for defense electronics, actuation, and guidance systems.',
  },
  {
    id: 'app-motors',
    icon: Cog,
    label: 'Industrial Motors',
    description: 'High-efficiency motors for manufacturing equipment, pumps, compressors, and drives.',
  },
  {
    id: 'app-aerospace',
    icon: Plane,
    label: 'Aerospace',
    description: 'Lightweight, temperature-stable magnets for avionics, electric propulsion, and flight control.',
  },
];

export default function ApplicationsGrid() {
  return (
    <section
      id="applications"
      className="section relative overflow-hidden flex flex-col items-center w-full"
      style={{ background: '#060f1c' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,150,58,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <FadeIn className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="gold-line w-10" />
            <span className="eyebrow">Applications</span>
            <div className="gold-line w-10" />
          </div>
          <h2
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.15 }}
          >
            Where Our Magnets <span className="gold-text italic">Will Be Used</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app) => {
            const Icon = app.icon;
            const isEV = app.id === 'app-ev';
            return (
              <StaggerItem key={app.id}>
                {isEV ? (
                  <motion.div
                    id={app.id}
                    className="image-frame-gold rounded-sm h-full flex flex-col justify-end min-h-[280px] relative group"
                    whileHover={{ y: -6, scale: 1.015 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <img
                      src="/ev-motor.png"
                      alt="Electric Vehicle Traction Motor Stator"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-30 filter grayscale contrast-110"
                    />
                    <div 
                      className="absolute inset-0 z-10 flex flex-col justify-end p-7"
                      style={{
                        background: 'linear-gradient(to top, rgba(6,15,28,0.95) 0%, rgba(6,15,28,0.4) 65%, transparent 100%)',
                      }}
                    >
                      {/* Icon */}
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[#C9963A]"
                        style={{
                          background: 'rgba(201,150,58,0.08)',
                          border:     '1px solid rgba(201,150,58,0.18)',
                        }}
                      >
                        <Icon size={16} className="transition-colors duration-300 group-hover:text-[#060f1c]" style={{ color: '#C9963A' }} aria-hidden="true" />
                      </div>
                      
                      <h3 className="font-display font-semibold text-white mb-2" style={{ fontSize: '1.1rem' }}>
                        {app.label}
                      </h3>
                      <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                        {app.description}
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    id={app.id}
                    className="premium-card rounded-sm p-7 h-full flex flex-col gap-4 group"
                    whileHover={{ y: -6, scale: 1.015 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    style={{
                      border: '1px solid rgba(255,255,255,0.06)',
                      background: 'linear-gradient(135deg, rgba(11,26,46,0.7) 0%, rgba(6,15,28,0.95) 100%)',
                    }}
                  >
                    {/* Icon circle */}
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#C9963A]"
                      style={{
                        background: 'rgba(201,150,58,0.07)',
                        border:     '1px solid rgba(201,150,58,0.15)',
                      }}
                    >
                      <Icon size={18} className="transition-colors duration-300 group-hover:text-[#060f1c]" style={{ color: '#C9963A' }} aria-hidden="true" />
                    </div>

                    <h3
                      className="font-display font-semibold text-white transition-colors duration-300 group-hover:text-gold"
                      style={{ fontSize: '1.1rem' }}
                    >
                      {app.label}
                    </h3>

                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      {app.description}
                    </p>

                    {/* Hover gold accent */}
                    <div className="mt-auto">
                      <div
                        className="h-px w-0 group-hover:w-8 transition-all duration-500"
                        style={{ background: '#C9963A' }}
                      />
                    </div>
                  </motion.div>
                )}
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
