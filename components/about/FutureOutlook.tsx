'use client';

import { FadeIn } from '@/components/ui/Animate';

export default function FutureOutlook() {
  return (
    <section
      id="future-outlook"
      className="section relative overflow-hidden flex flex-col items-center justify-center text-center w-full bg-[#030712] border-t border-b border-white/10"
    >
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <FadeIn>
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <span className="gold-line w-8" />
              <span className="eyebrow">FUTURE OUTLOOK</span>
              <span className="gold-line w-8" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-h2 text-white mb-6 text-center">
              Positioned for a <span className="gold-text">Growing Global Market</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-body-lg text-gray-300 mb-6 text-center max-w-3xl mx-auto">
              As demand for advanced magnet technologies continues to grow globally, Magnova aims to support evolving industrial requirements through innovation, quality, and manufacturing excellence.
            </p>
            <p className="text-body-base text-gray-400 text-center max-w-3xl mx-auto">
              Our roadmap is calibrated to the long-term growth trajectories of clean energy, electric mobility, and advanced defense — sectors where reliable, domestically manufactured magnets will be increasingly essential.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
