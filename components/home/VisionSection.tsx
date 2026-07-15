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
      className="section relative overflow-hidden flex flex-col items-center w-full"
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

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
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

          {/* Right: animated visual with India map backdrop */}
          <FadeIn delay={0.2} direction="left" className="flex items-center justify-center w-full">
            <div className="relative w-full max-w-[450px]">
              {/* Gold bordered container holding the image */}
              <div className="image-frame-gold w-full aspect-square relative rounded-sm flex items-center justify-center overflow-hidden">
                <img
                  src="/about-india.png"
                  alt="India Strategic Manufacturing Location Map"
                  className="absolute inset-0 w-full h-full object-cover opacity-25 filter grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060f1c] via-transparent to-transparent opacity-60" />
                
                {/* Orbiting rings layered over the image */}
                <div className="absolute inset-0 flex items-center justify-center scale-90 sm:scale-100">
                  {/* Pulse rings */}
                  {[1, 0.7, 0.45].map((scale, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        border:    '1px solid rgba(201,150,58,0.22)',
                        transform: `scale(${scale})`,
                        width: 280,
                        height: 280,
                      }}
                      animate={{ opacity: [0.2, 0.5, 0.2], scale: [scale, scale * 1.02, scale] }}
                      transition={{ duration: 3.5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
                    />
                  ))}

                  {/* Center core indicator */}
                  <div className="absolute flex flex-col items-center justify-center text-center bg-[#060f1c]/90 backdrop-blur-sm border border-gold-border rounded-full w-28 h-28">
                    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                      <circle cx="16" cy="16" r="14.5" stroke="#C9963A" strokeWidth="1" opacity="0.35" />
                      <path d="M16 3 L29 16 L16 29 L3 16 Z" stroke="#C9963A" strokeWidth="1.2" fill="none" />
                      <circle cx="16" cy="16" r="3.5" fill="#C9963A" />
                    </svg>
                    <p className="eyebrow mt-2" style={{ fontSize: '0.55rem', letterSpacing: '0.15em' }}>MAGNOVA</p>
                  </div>

                  {/* Floating Badges */}
                  {pillars.map((p, i) => {
                    const angles = [-90, 30, 150];
                    const angle  = (angles[i] * Math.PI) / 180;
                    const r      = 120;
                    const cx     = 140, cy = 140;
                    const x      = cx + r * Math.cos(angle) - 48;
                    const y      = cy + r * Math.sin(angle) - 24;
                    return (
                      <motion.div
                        key={p.value}
                        className="absolute glass-gold rounded-sm px-2.5 py-1.5 text-center shadow-lg"
                        style={{ left: x, top: y, minWidth: 96 }}
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                          duration: 4.5 + i,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: i * 1.2,
                        }}
                      >
                        <p className="text-xs font-bold" style={{ color: '#C9963A', fontSize: '0.7rem' }}>{p.value}</p>
                        <p className="text-[0.6rem] mt-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>{p.label}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
