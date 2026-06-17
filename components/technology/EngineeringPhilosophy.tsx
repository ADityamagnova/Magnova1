'use client';

import { FadeIn } from '@/components/ui/Animate';

const principles = [
  {
    number: '01',
    title:  'Precision',
    text:   'Every dimension, composition, and microstructure will be held to the highest standards of process control, ensuring consistent performance across production runs.',
  },
  {
    number: '02',
    title:  'Consistency',
    text:   'Our manufacturing roadmap will prioritise batch-to-batch repeatability, so that every magnet delivered meets the same high standard of performance.',
  },
  {
    number: '03',
    title:  'Quality Assurance',
    text:   'Integrated quality systems will be embedded at every stage of our process — from incoming material inspection through to finished component validation.',
  },
  {
    number: '04',
    title:  'Continuous Improvement',
    text:   'We will build a culture of continuous process refinement, adopting emerging manufacturing technologies and methodologies to stay at the forefront of the industry.',
  },
];

export default function EngineeringPhilosophy() {
  return (
    <section
      id="engineering-philosophy"
      className="section-sm relative overflow-hidden"
      style={{ background: '#0a1929' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 55% 60% at 20% 50%, rgba(201,150,58,0.04) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <div className="gold-line w-10" />
            <span className="eyebrow">Engineering Philosophy</span>
          </div>
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.15 }}
          >
            Our Manufacturing{' '}
            <span className="gold-text italic">Roadmap</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((p, i) => (
            <FadeIn key={p.number} delay={0.1 * i}>
              <div
                className="premium-card rounded-sm p-8 flex gap-6 h-full"
              >
                {/* Number */}
                <div
                  className="font-display text-5xl font-bold flex-shrink-0"
                  style={{
                    color: 'rgba(201,150,58,0.12)',
                    lineHeight: 1,
                    fontStyle: 'italic',
                    minWidth: 54,
                  }}
                >
                  {p.number}
                </div>

                <div>
                  <h3
                    className="font-display font-semibold text-white mb-3"
                    style={{ fontSize: '1rem' }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.44)' }}>
                    {p.text}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
