'use client';

import { motion } from 'framer-motion';

export default function TechHero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: '60vh',
        background: 'linear-gradient(160deg, #060f1c 0%, #0e2038 50%, #060f1c 100%)',
        paddingTop: 'var(--nav-h)',
      }}
      aria-labelledby="tech-hero-heading"
    >
      <div className="absolute inset-0 hero-grid opacity-20" aria-hidden="true" />

      {/* Gold radial top-center */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(201,150,58,0.06) 0%, transparent 68%)',
        }}
      />

      {/* Animated field lines overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <svg className="absolute w-full h-full opacity-15" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
          {[...Array(6)].map((_, i) => {
            const s = (i + 1) * 1.1;
            return (
              <motion.ellipse
                key={i}
                cx={720} cy={300}
                rx={s * 80} ry={s * 45}
                stroke="#C9963A" strokeWidth={0.7}
                strokeOpacity={0.4 - i * 0.05}
                animate={{ strokeOpacity: [0.4 - i * 0.05, 0.1, 0.4 - i * 0.05] }}
                transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
              />
            );
          })}
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 lg:px-16 text-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="gold-line w-10" />
          <span className="eyebrow">Rare Earth Magnets</span>
          <div className="gold-line w-10" />
        </motion.div>

        <motion.h1
          id="tech-hero-heading"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold text-white mb-5"
          style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', lineHeight: 1.1 }}
        >
          Technology &{' '}
          <span className="gold-text italic">Applications</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          Developing advanced rare-earth permanent magnet solutions for next-generation industries.
        </motion.p>
      </div>
    </section>
  );
}
