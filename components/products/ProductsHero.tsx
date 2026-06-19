'use client';

import { motion } from 'framer-motion';

export default function ProductsHero() {
  return (
    <section
      className="w-full flex flex-col justify-center"
      style={{
        background: 'linear-gradient(135deg, #070d1a 0%, #0d1e3a 100%)',
        borderBottom: '1px solid #1e2e4a',
        padding: '48px 60px 40px',
        marginTop: 'var(--nav-h)',
      }}
      aria-labelledby="products-hero-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span
          className="block font-sans font-semibold tracking-widest mb-3 uppercase"
          style={{
            fontSize: '0.72rem',
            color: '#c9a84c',
            letterSpacing: '0.18em',
          }}
        >
          MAGNOVA · PRODUCT SPECIFICATIONS
        </span>
      </motion.div>

      <motion.h1
        id="products-hero-heading"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-sans font-bold text-white mb-3"
        style={{
          fontSize: '2.5rem',
          lineHeight: '1.2',
        }}
      >
        Sintered NdFeB Permanent Magnets
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="font-sans text-sm md:text-base leading-relaxed"
        style={{
          color: '#8899bb',
          maxWidth: '620px',
        }}
      >
        High-performance rare-earth magnets across all grade series — engineered for EV, wind energy, defense, and precision automation.
      </motion.p>
    </section>
  );
}
