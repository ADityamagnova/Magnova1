'use client';

import { FadeIn } from '@/components/ui/Animate';

export default function FutureOutlook() {
  return (
    <section
      id="future-outlook"
      className="py-24 relative overflow-hidden flex flex-col items-center justify-center text-center w-full bg-[#050811] border-t border-b border-white/10"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,150,58,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 flex justify-center text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-4 mb-6 mx-auto">
              <div className="gold-line w-10" />
              <span className="eyebrow">Future Outlook</span>
              <div className="gold-line w-10" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              className="font-display font-bold text-white mb-6 text-center"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.15 }}
            >
              Positioned for a{' '}
              <span className="gold-text italic">Growing Global Market</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-base sm:text-lg leading-relaxed mb-4 text-white/70 text-center max-w-3xl mx-auto">
              As demand for advanced magnet technologies continues to grow globally, Magnova aims
              to support evolving industrial requirements through innovation, quality, and
              manufacturing excellence.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-white/50 text-center max-w-3xl mx-auto">
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
