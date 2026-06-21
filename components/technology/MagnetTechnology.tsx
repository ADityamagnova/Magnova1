'use client';

import { FadeIn } from '@/components/ui/Animate';

const specs = [
  { label: 'Material Class',        value: 'NdFeB (Neodymium-Iron-Boron)' },
  { label: 'Magnet Type',           value: 'Sintered Rare-Earth Permanent' },
  { label: 'Application Focus',     value: 'High-Performance Industrial' },
  { label: 'Manufacturing Approach', value: 'Precision Process Control' },
];

export default function MagnetTechnology() {
  return (
    <section
      id="magnet-technology"
      className="section relative overflow-hidden"
      style={{ background: '#060f1c' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 55% 50% at 75% 50%, rgba(201,150,58,0.04) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: text */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-4 mb-6">
                <div className="gold-line w-10" />
                <span className="eyebrow">Rare-Earth Magnet Technology</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2
                className="font-display font-bold text-white mb-6"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.15 }}
              >
                Next-Generation{' '}
                <span className="gold-text italic">NdFeB Manufacturing</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Magnova intends to develop advanced NdFeB permanent magnet manufacturing capabilities
                designed to meet the evolving needs of high-performance industrial applications.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.42)' }}>
                Our planned manufacturing processes will be developed to deliver the high coercivity,
                high remanence, and superior thermal stability that modern industrial applications demand.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)' }}>
                We will focus on building manufacturing infrastructure capable of producing consistent,
                high-quality magnets at the purity levels required by the most demanding sectors,
                including defense, aerospace, and advanced electric drivetrains.
              </p>
            </FadeIn>
          </div>

          {/* Right: spec table */}
          <FadeIn delay={0.2} direction="left">
            <div
              className="rounded-sm overflow-hidden"
              style={{ border: '1px solid rgba(201,150,58,0.12)' }}
            >
              {/* Header */}
              <div
                className="px-6 py-4"
                style={{
                  background:  'rgba(201,150,58,0.06)',
                  borderBottom: '1px solid rgba(201,150,58,0.12)',
                }}
              >
                <span className="eyebrow" style={{ fontSize: '0.63rem' }}>
                  Technology Overview
                </span>
              </div>

              {/* Spec rows */}
              {specs.map((s, i) => (
                <div
                  key={s.label}
                  className="flex items-start gap-4 px-6 py-4"
                  style={{
                    borderBottom: i < specs.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                    background: i % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent',
                  }}
                >
                  <span
                    className="text-xs font-medium w-40 flex-shrink-0"
                    style={{ color: '#C9963A', letterSpacing: '0.04em' }}
                  >
                    {s.label}
                  </span>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {s.value}
                  </span>
                </div>
              ))}

              {/* Footer note */}
              <div
                className="px-6 py-4"
                style={{
                  borderTop: '1px solid rgba(201,150,58,0.1)',
                  background: 'rgba(201,150,58,0.03)',
                }}
              >
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.3)', fontStyle: 'italic' }}>
                  All manufacturing capabilities described represent our intended development roadmap.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
