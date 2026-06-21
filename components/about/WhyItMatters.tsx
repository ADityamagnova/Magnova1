'use client';

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Animate';

const sectors = [
  'Electric Vehicles',
  'Renewable Energy Systems',
  'Defense Platforms',
  'Robotics',
  'Industrial Automation',
  'Advanced Manufacturing',
];

export default function WhyItMatters() {
  return (
    <section
      id="why-it-matters"
      className="section relative overflow-hidden"
      style={{ background: '#0a1929' }}
    >
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at top right, rgba(201,150,58,0.04) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="gold-line w-10" />
              <span className="eyebrow">Why It Matters</span>
              <div className="gold-line w-10" />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="font-display font-bold text-white mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.15 }}
            >
              The Foundation of{' '}
              <span className="gold-text italic">Modern Technology</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Permanent magnets play a critical role across electric vehicles, renewable energy
              systems, defense platforms, robotics, and industrial automation. Strengthening
              manufacturing capabilities in this domain contributes to supply chain resilience
              and technological advancement.
            </p>
          </FadeIn>
        </div>

        {/* Sector tags */}
        <StaggerContainer className="flex flex-wrap justify-center gap-3" delay={0.1}>
          {sectors.map((s) => (
            <StaggerItem key={s}>
              <div
                className="glass-gold px-5 py-2.5 rounded-sm"
                style={{ fontSize: '0.8rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.04em' }}
              >
                {s}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
