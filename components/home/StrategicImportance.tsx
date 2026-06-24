'use client';

import { FadeIn } from '@/components/ui/Animate';

export default function StrategicImportance() {
  return (
    <section
      id="strategic-importance"
      className="section relative overflow-hidden flex flex-col items-center w-full"
      style={{ background: 'linear-gradient(180deg, #060f1c 0%, #0a1929 50%, #060f1c 100%)' }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,150,58,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">

          <FadeIn>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="gold-line w-10" />
              <span className="eyebrow">Strategic Foundation</span>
              <div className="gold-line w-10" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              className="font-display font-bold text-white mb-6"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', lineHeight: 1.15 }}
            >
              Enabling Critical{' '}
              <span className="gold-text italic">Industrial Supply Chains</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              Rare-earth permanent magnets are foundational to modern technologies. Magnova aims
              to contribute to a resilient domestic manufacturing ecosystem supporting industries
              that power the future.
            </p>
          </FadeIn>
        </div>

        {/* Three-column callouts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              id: 'pillar-supply',
              title: 'Supply Chain Resilience',
              text:  'Strengthening domestic rare-earth magnet capabilities to reduce dependence on global supply constraints.',
            },
            {
              id: 'pillar-tech',
              title: 'Technological Self-Reliance',
              text:  'Advanced manufacturing designed to meet the precision demands of next-generation industrial applications.',
            },
            {
              id: 'pillar-impact',
              title: 'Strategic Industrial Impact',
              text:  'Aligning manufacturing capacity with national priorities and the long-term needs of high-growth sectors.',
            },
          ].map((item, i) => (
            <FadeIn key={item.id} delay={0.15 + i * 0.1}>
              <div
                id={item.id}
                className="premium-card p-8 rounded-sm h-full"
              >
                {/* Gold accent top-bar */}
                <div
                  className="mb-5"
                  style={{
                    width: 36,
                    height: 2,
                    background: 'linear-gradient(90deg, #C9963A, #E8B84B)',
                  }}
                />
                <h3
                  className="font-display font-semibold text-white mb-3"
                  style={{ fontSize: '1.05rem' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {item.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
