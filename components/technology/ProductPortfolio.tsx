'use client';

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Animate';
import { Magnet, Layers, Wrench, Cpu } from 'lucide-react';

const products = [
  {
    id: 'prod-ndfeb',
    icon: Magnet,
    title: 'High Performance NdFeB Magnets',
    description:
      'Magnova intends to produce sintered NdFeB magnets offering the high energy density and coercivity required by electric motors, generators, and precision actuation systems.',
    tags: ['Sintered NdFeB', 'High Coercivity', 'Thermal Stability'],
  },
  {
    id: 'prod-custom',
    icon: Layers,
    title: 'Custom Magnet Solutions',
    description:
      'We will develop the capability to engineer bespoke magnet geometries, grades, and coatings tailored to the specific dimensional and performance requirements of each application.',
    tags: ['Custom Geometry', 'Application-Specific Grades', 'Surface Coatings'],
  },
  {
    id: 'prod-precision',
    icon: Wrench,
    title: 'Precision Industrial Components',
    description:
      'Our planned portfolio will include precision-machined magnetic components manufactured to tight dimensional tolerances for integration into complex industrial assemblies.',
    tags: ['Precision Machining', 'Tight Tolerances', 'Assembly-Ready'],
  },
  {
    id: 'prod-app-specific',
    icon: Cpu,
    title: 'Application-Specific Magnet Systems',
    description:
      'Beyond individual magnets, Magnova intends to offer engineered magnet systems — assemblies and sub-assemblies designed and optimised for specific end-use environments.',
    tags: ['Systems Engineering', 'Optimised Assemblies', 'End-Use Validation'],
  },
];

export default function ProductPortfolio() {
  return (
    <section
      id="product-portfolio"
      className="section relative overflow-hidden flex flex-col items-center w-full"
      style={{ background: '#0a1929' }}
    >
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at bottom left, rgba(201,150,58,0.04) 0%, transparent 65%)',
        }}
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <FadeIn className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="gold-line w-10" />
            <span className="eyebrow">Potential Product Portfolio</span>
            <div className="gold-line w-10" />
          </div>
          <h2
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.15 }}
          >
            What We Will{' '}
            <span className="gold-text italic">Manufacture</span>
          </h2>
          <p className="text-sm max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.38)', fontStyle: 'italic' }}>
            The following represents our intended product development roadmap.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <StaggerItem key={p.id}>
                <div id={p.id} className="premium-card rounded-sm p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'rgba(201,150,58,0.08)',
                        border:     '1px solid rgba(201,150,58,0.18)',
                      }}
                    >
                      <Icon size={17} style={{ color: '#C9963A' }} aria-hidden="true" />
                    </div>
                    <h3 className="font-display font-semibold text-white" style={{ fontSize: '1.05rem' }}>
                      {p.title}
                    </h3>
                  </div>

                  <p
                    className="text-sm leading-relaxed mb-6 flex-1"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                  >
                    {p.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="glass-gold px-3 py-1 rounded-sm"
                        style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
