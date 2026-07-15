'use client';

import { FadeIn } from '@/components/ui/Animate';

export default function MissionSection() {
  return (
    <section
      id="mission"
      className="section relative overflow-hidden flex flex-col items-center w-full"
      style={{ background: '#060f1c', paddingTop: '3.5rem' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 20% 50%, rgba(201,150,58,0.04) 0%, transparent 65%)',
        }}
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
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

          {/* Right: Real manufacturing image with overlayed quote */}
          <FadeIn delay={0.2} direction="left">
            <div className="image-frame-gold aspect-[4/3] w-full relative group">
              <img
                src="/manufacturing.png"
                alt="Magnova Advanced Permanent Magnet Manufacturing Facility"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div 
                className="absolute inset-0 flex flex-col justify-end p-8"
                style={{
                  background: 'linear-gradient(to top, rgba(6,15,28,0.9) 0%, rgba(6,15,28,0.3) 65%, transparent 100%)',
                }}
              >
                <blockquote className="font-display text-xl md:text-2xl font-medium italic leading-snug text-white mb-5">
                  "Critical industrial technologies require strong domestic manufacturing foundations."
                </blockquote>

                <div className="flex items-center gap-3">
                  <div style={{ width: 24, height: 1, background: 'linear-gradient(90deg, #C9963A, transparent)' }} />
                  <span className="eyebrow" style={{ fontSize: '0.58rem', letterSpacing: '0.15em' }}>Magnova Founding Principle</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
