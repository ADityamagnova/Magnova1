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
      className="section relative overflow-hidden flex flex-col items-center w-full"
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

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Text & Tags (7 cols) */}
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="flex items-center gap-4 mb-6">
                <div className="gold-line w-10" />
                <span className="eyebrow">Why It Matters</span>
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
              <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Permanent magnets play a critical role across electric vehicles, renewable energy
                systems, defense platforms, robotics, and industrial automation. Strengthening
                manufacturing capabilities in this domain contributes to supply chain resilience
                and technological advancement.
              </p>
            </FadeIn>

            {/* Sector tags */}
            <StaggerContainer className="flex flex-wrap gap-3" delay={0.1}>
              {sectors.map((s) => (
                <StaggerItem key={s}>
                  <div
                    className="glass-gold px-5 py-2.5 rounded-sm hover:border-gold-light transition-all duration-300"
                    style={{ fontSize: '0.8rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.04em' }}
                  >
                    {s}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right Column: Image Frame (5 cols) */}
          <FadeIn delay={0.2} direction="left" className="lg:col-span-5 w-full">
            <div className="image-frame-gold aspect-[4/3] w-full relative group">
              <img
                src="/sustainability.png"
                alt="Renewable Energy Wind Turbines and Clean Technology"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 flex items-start p-6"
                style={{
                  background: 'linear-gradient(to bottom, rgba(6,15,28,0.7) 0%, transparent 40%)',
                }}
              >
                <span className="eyebrow" style={{ fontSize: '0.55rem', letterSpacing: '0.15em', color: '#fff' }}>
                  Sustainability Focus
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
