'use client';

import { FadeIn } from '@/components/ui/Animate';

export default function FutureOutlook() {
  return (
    <section
      id="future-outlook"
      className="section-sm relative overflow-hidden"
      style={{ background: '#0a1929' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 80% 50%, rgba(201,150,58,0.04) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="gold-line w-10" />
              <span className="eyebrow">Future Outlook</span>
              <div className="gold-line w-10" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              className="font-display font-bold text-white mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.15 }}
            >
              Positioned for a{' '}
              <span className="gold-text italic">Growing Global Market</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
              As demand for advanced magnet technologies continues to grow globally, Magnova aims
              to support evolving industrial requirements through innovation, quality, and
              manufacturing excellence.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)' }}>
              Our roadmap is calibrated to the long-term growth trajectories of clean energy,
              electric mobility, and advanced defense — sectors where reliable, domestically
              manufactured magnets will be increasingly essential.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
