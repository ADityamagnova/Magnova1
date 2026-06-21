'use client';

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Animate';
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
      className="section relative overflow-hidden"
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

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <FadeIn className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="gold-line w-10" />
            <span className="eyebrow">Applications</span>
            <div className="gold-line w-10" />
          </div>
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.15 }}
          >
            Where Our Magnets{' '}
            <span className="gold-text italic">Will Be Used</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app) => {
            const Icon = app.icon;
            return (
              <StaggerItem key={app.id}>
                <div
                  id={app.id}
                  className="premium-card rounded-sm p-7 h-full flex flex-col gap-4 group"
                >
                  {/* Icon circle */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
                    style={{
                      background: 'rgba(201,150,58,0.07)',
                      border:     '1px solid rgba(201,150,58,0.15)',
                    }}
                  >
                    <Icon size={18} style={{ color: '#C9963A' }} aria-hidden="true" />
                  </div>

                  <h3
                    className="font-display font-semibold text-white"
                    style={{ fontSize: '1.05rem' }}
                  >
                    {app.label}
                  </h3>

                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.42)' }}>
                    {app.description}
                  </p>

                  {/* Hover gold accent */}
                  <div className="mt-auto">
                    <div
                      className="h-px w-0 group-hover:w-8 transition-all duration-500"
                      style={{ background: '#C9963A' }}
                    />
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
