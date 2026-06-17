'use client';

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Animate';
import { Factory, Award, Handshake } from 'lucide-react';

const pillars = [
  {
    id: 'pillar-mfg',
    icon: Factory,
    title: 'Advanced Manufacturing',
    description:
      'Developing precision manufacturing processes designed to meet the stringent quality demands of next-generation industrial applications. Our approach prioritises consistency, traceability, and process control at every stage.',
  },
  {
    id: 'pillar-eng',
    icon: Award,
    title: 'Engineering Excellence',
    description:
      'Building capability around rigorous engineering standards — from material composition and microstructure to finished component performance — to deliver magnets that meet the most demanding specifications.',
  },
  {
    id: 'pillar-partnership',
    icon: Handshake,
    title: 'Long-Term Partnerships',
    description:
      "We view every engagement as a long-term collaboration. Our approach is to understand the unique requirements of each sector and develop manufacturing solutions that evolve with our partners' needs.",
  },
];

export default function OurApproach() {
  return (
    <section
      id="our-approach"
      className="section relative overflow-hidden"
      style={{ background: '#060f1c' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 55% 50% at 50% 50%, rgba(201,150,58,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="gold-line w-10" />
            <span className="eyebrow">How We Work</span>
            <div className="gold-line w-10" />
          </div>
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.15 }}
          >
            Our <span className="gold-text italic">Approach</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <StaggerItem key={p.id}>
                <div id={p.id} className="premium-card rounded-sm p-10 h-full flex flex-col">
                  {/* Number + icon row */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-sm flex items-center justify-center"
                      style={{
                        background: 'rgba(201,150,58,0.08)',
                        border:     '1px solid rgba(201,150,58,0.18)',
                      }}
                    >
                      <Icon size={20} style={{ color: '#C9963A' }} aria-hidden="true" />
                    </div>
                  </div>

                  <h3
                    className="font-display font-semibold text-white mb-4"
                    style={{ fontSize: '1.1rem' }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                  >
                    {p.description}
                  </p>

                  {/* Bottom gold accent */}
                  <div
                    className="mt-8 h-px w-10"
                    style={{ background: 'linear-gradient(90deg, #C9963A, transparent)' }}
                  />
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
