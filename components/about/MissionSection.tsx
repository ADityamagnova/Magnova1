'use client';

import { FadeIn } from '@/components/ui/Animate';

export default function MissionSection() {
  return (
    <section
      id="mission"
      className="section relative overflow-hidden"
      style={{ background: '#060f1c' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 20% 50%, rgba(201,150,58,0.04) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left text */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-4 mb-6">
                <div className="gold-line w-10" />
                <span className="eyebrow">Our Mission</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2
                className="font-display font-bold text-white mb-6"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.15 }}
              >
                Founded on a{' '}
                <span className="gold-text italic">Clear Belief</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Magnova was founded with the belief that critical industrial technologies require
                strong domestic manufacturing foundations. Our focus is on developing advanced
                rare-earth permanent magnet capabilities to serve high-growth strategic sectors.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                We are committed to building infrastructure that endures — contributing to India's
                technological self-reliance through precision, quality, and long-term industrial
                thinking.
              </p>
            </FadeIn>
          </div>

          {/* Right: decorative panel */}
          <FadeIn delay={0.2} direction="left">
            <div
              className="relative rounded-sm overflow-hidden"
              style={{
                border:     '1px solid rgba(201,150,58,0.12)',
                background: 'linear-gradient(135deg, #0e2038 0%, #0b1a2e 100%)',
                padding:    '3rem',
              }}
            >
              {/* Corner marks */}
              {[
                'top-4 left-4', 'top-4 right-4',
                'bottom-4 left-4', 'bottom-4 right-4',
              ].map((pos) => (
                <div key={pos} className={`absolute ${pos} w-4 h-4`} aria-hidden="true">
                  <div className="absolute top-0 left-0 w-full h-px" style={{ background: '#C9963A', opacity: 0.4 }} />
                  <div className="absolute top-0 left-0 h-full w-px" style={{ background: '#C9963A', opacity: 0.4 }} />
                </div>
              ))}

              <blockquote className="font-display text-2xl font-medium italic leading-snug text-white mb-6">
                "Critical industrial technologies require strong domestic manufacturing foundations."
              </blockquote>

              <div className="flex items-center gap-3">
                <div style={{ width: 32, height: 1, background: 'linear-gradient(90deg, #C9963A, transparent)' }} />
                <span className="eyebrow" style={{ fontSize: '0.6rem' }}>Magnova Founding Principle</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
