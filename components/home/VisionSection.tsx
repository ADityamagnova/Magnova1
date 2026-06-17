'use client';

import { FadeIn } from '@/components/ui/Animate';
import { motion } from 'framer-motion';

const pillars = [
  { value: 'Long-Term',  label: 'Orientation'   },
  { value: 'Domestic',   label: 'Manufacturing'  },
  { value: 'Strategic',  label: 'Industry Focus' },
];

export default function VisionSection() {
  return (
    <section
      id="vision"
      className="section relative overflow-hidden"
      style={{ background: '#060f1c' }}
    >
      {/* Central radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(14,32,56,0.8) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-4 mb-6">
                <div className="gold-line w-10" />
                <span className="eyebrow">Our Vision</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2
                className="font-display font-bold text-white mb-6"
                style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', lineHeight: 1.15 }}
              >
                Designed for{' '}
                <span className="gold-text italic">Long-Term</span>
                <br />
                Industrial Impact
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                Magnova is focused on building advanced manufacturing capabilities that align with
                national priorities, technological self-reliance, and global competitiveness.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                Our approach is grounded in precision engineering, quality excellence,
                and a commitment to partnerships that drive lasting industrial value.
              </p>
            </FadeIn>
          </div>

          {/* Right: animated visual */}
          <FadeIn delay={0.2} direction="left">
            <div className="relative">
              {/* Outer ring */}
              <div
                className="relative mx-auto"
                style={{ width: 340, height: 340 }}
              >
                {/* Pulsing rings */}
                {[1, 0.7, 0.45].map((scale, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full"
                    style={{
                      border:    '1px solid rgba(201,150,58,0.2)',
                      transform: `scale(${scale})`,
                      top: '50%', left: '50%',
                      width: '100%', height: '100%',
                      marginTop: '-50%', marginLeft: '-50%',
                    }}
                    animate={{ opacity: [0.2, 0.6, 0.2], scale: [scale, scale * 1.02, scale] }}
                    transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
                  />
                ))}

                {/* Centre card */}
                <div
                  className="absolute inset-0 m-auto flex flex-col items-center justify-center text-center"
                  style={{ width: '58%', height: '58%', top: '21%', left: '21%' }}
                >
                  <svg width="36" height="36" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                    <circle cx="16" cy="16" r="14.5" stroke="#C9963A" strokeWidth="1" opacity="0.35" />
                    <path d="M16 3 L29 16 L16 29 L3 16 Z" stroke="#C9963A" strokeWidth="1.2" fill="none" />
                    <circle cx="16" cy="16" r="3.5" fill="#C9963A" />
                  </svg>
                  <p className="eyebrow mt-3" style={{ fontSize: '0.6rem' }}>MAGNOVA</p>
                </div>

                {/* Pillar badges */}
                {pillars.map((p, i) => {
                  const angles = [-90, 30, 150];
                  const angle  = (angles[i] * Math.PI) / 180;
                  const r      = 148;
                  const cx     = 170, cy = 170;
                  const x      = cx + r * Math.cos(angle) - 52;
                  const y      = cy + r * Math.sin(angle) - 28;
                  return (
                    <motion.div
                      key={p.value}
                      className="absolute glass-gold rounded-sm px-3 py-2 text-center"
                      style={{ left: x, top: y, minWidth: 104 }}
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 1.2,
                      }}
                    >
                      <p className="text-xs font-bold" style={{ color: '#C9963A' }}>{p.value}</p>
                      <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.65rem' }}>{p.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
