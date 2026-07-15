'use client';

import { motion } from 'framer-motion';

export default function ContactHero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: '32vh',
        background: 'linear-gradient(160deg, #060f1c 0%, #0e2038 50%, #060f1c 100%)',
        paddingTop: 'var(--nav-h)',
      }}
      aria-labelledby="contact-hero-heading"
    >
      <div className="absolute inset-0 hero-grid opacity-20" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 55% at 50% 40%, rgba(201,150,58,0.06) 0%, transparent 68%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 lg:px-16 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="gold-line w-10" />
          <span className="eyebrow">Reach Out</span>
          <div className="gold-line w-10" />
        </motion.div>

        <motion.h1
          id="contact-hero-heading"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold text-white mb-5"
          style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', lineHeight: 1.1 }}
        >
          Get In <span className="gold-text italic">Touch</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-lg max-w-xl mx-auto leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          Connect with Magnova regarding partnership opportunities, business inquiries,
          or investor discussions.
        </motion.p>
      </div>
    </section>
  );
}
