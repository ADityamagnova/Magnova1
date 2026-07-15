'use client';

import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: '55vh',
        background: 'linear-gradient(160deg, #060f1c 0%, #0e2038 50%, #060f1c 100%)',
        paddingTop: 'var(--nav-h)',
      }}
      aria-labelledby="about-hero-heading"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 hero-grid opacity-20" aria-hidden="true" />

      {/* Gold radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 50% 40%, rgba(201,150,58,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Decorative corner brackets */}
      {[
        { top: 48, left: 48 },
        { top: 48, right: 48 },
        { bottom: 48, left: 48 },
        { bottom: 48, right: 48 },
      ].map((style, i) => (
        <div
          key={i}
          className="absolute w-5 h-5 pointer-events-none"
          style={{ ...style, opacity: 0.3 }}
          aria-hidden="true"
        >
          <div
            className="absolute top-0 left-0 w-full h-px"
            style={{ background: '#C9963A' }}
          />
          <div
            className="absolute top-0 left-0 h-full w-px"
            style={{ background: '#C9963A' }}
          />
        </div>
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 lg:px-16 text-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="gold-line w-10" />
          <span className="eyebrow">Who We Are</span>
          <div className="gold-line w-10" />
        </motion.div>

        <motion.h1
          id="about-hero-heading"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold text-white mb-6"
          style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', lineHeight: 1.1 }}
        >
          About <span className="gold-text italic">Magnova</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          Establishing the critical foundations of advanced rare-earth permanent magnet manufacturing to support strategic industries.
        </motion.p>
      </div>
    </section>
  );
}
