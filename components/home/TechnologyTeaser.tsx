'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function TechnologyTeaser() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      ref={ref}
      className="py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #061426 0%, #08192e 50%, #061426 100%)' }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(200,155,60,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div
              className="relative aspect-square rounded-sm overflow-hidden"
              style={{ border: '1px solid rgba(200,155,60,0.15)' }}
            >
              <motion.div style={{ y: imageY }} className="w-full h-[120%] -mt-[10%]">
                <Image
                  src="/crystal-structure.png"
                  alt="Rare earth crystal lattice structure"
                  fill
                  className="object-cover"
                  style={{ opacity: 0.9 }}
                />
              </motion.div>
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(6,20,38,0.4) 0%, transparent 60%)',
                }}
              />
              {/* Corner accent */}
              <div className="absolute top-4 left-4">
                <div className="w-8 h-px" style={{ background: '#C89B3C' }} />
                <div className="w-px h-8" style={{ background: '#C89B3C' }} />
              </div>
              <div className="absolute bottom-4 right-4">
                <div className="w-8 h-px ml-auto" style={{ background: '#C89B3C' }} />
                <div className="w-px h-8 ml-auto" style={{ background: '#C89B3C' }} />
              </div>
            </div>

            {/* Floating label */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 glass-gold px-5 py-3 rounded-sm"
            >
              <div className="text-xs font-semibold" style={{ color: '#C89B3C' }}>
                NdFeB Crystal Lattice
              </div>
              <div className="text-xs mt-1" style={{ color: '#64748b' }}>
                Nd₂Fe₁₄B — Maximum Energy Product
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="gold-line w-8" />
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: '#C89B3C', letterSpacing: '0.2em' }}
              >
                The Science
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Engineering at the
              <br />
              <span className="gold-gradient-text">Molecular Level</span>
            </h2>

            <p className="text-base leading-relaxed mb-6" style={{ color: '#64748b' }}>
              The performance of a rare earth magnet is determined at the atomic scale.
              Magnova's materials science capability enables precise control over phase
              composition, grain boundary structure, and microstructural morphology.
            </p>

            <p className="text-base leading-relaxed mb-10" style={{ color: '#64748b' }}>
              The result: magnets that deliver maximum energy product, thermal stability,
              and corrosion resistance — engineered to specification for demanding applications.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { label: 'NdFeB Magnets', sub: 'Maximum energy product' },
                { label: 'SmCo Magnets', sub: 'High-temperature stability' },
                { label: 'Grain Boundary', sub: 'Microstructure control' },
                { label: 'Coercivity Tuning', sub: 'Application-specific' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-sm font-semibold text-white mb-1">{item.label}</div>
                  <div className="text-xs" style={{ color: '#475569' }}>{item.sub}</div>
                </div>
              ))}
            </div>

            <Link
              href="/technology"
              className="inline-flex items-center gap-2 text-sm font-semibold group"
              style={{ color: '#C89B3C' }}
            >
              Explore our technology
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
