'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

function FieldLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <radialGradient id="heroGold" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#C9963A" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#C9963A" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="heroBlue" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#1e4d7a" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#1e4d7a" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Concentric field ellipses */}
        {[...Array(10)].map((_, i) => {
          const s = (i + 1) * 0.85;
          return (
            <motion.ellipse
              key={i}
              cx={720} cy={450}
              rx={s * 65} ry={s * 38}
              stroke="#C9963A" strokeWidth={0.6}
              strokeOpacity={Math.max(0.05, 0.5 - i * 0.045)}
              animate={{
                strokeOpacity: [
                  Math.max(0.05, 0.5 - i * 0.045),
                  Math.max(0.02, 0.15 - i * 0.01),
                  Math.max(0.05, 0.5 - i * 0.045),
                ],
                ry: [s * 38, s * 41, s * 38],
              }}
              transition={{ duration: 4.5 + i * 0.35, repeat: Infinity, ease: 'easeInOut', delay: i * 0.25 }}
            />
          );
        })}

        {/* Vertical sweep lines */}
        {[...Array(9)].map((_, i) => {
          const x = 180 + i * 135;
          return (
            <motion.path
              key={`vl-${i}`}
              d={`M ${x} 20 Q ${x + 60} 450 ${x} 880`}
              stroke="#C9963A" strokeWidth={0.5}
              strokeOpacity={0.07}
              animate={{ strokeOpacity: [0.07, 0.02, 0.07] }}
              transition={{ duration: 6 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
            />
          );
        })}

        {/* Central glow */}
        <motion.circle
          cx="720" cy="450" r="200"
          fill="url(#heroGold)"
          animate={{ r: [200, 230, 200], opacity: [0.7, 0.4, 0.7] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="200" cy="150" r="130"
          fill="url(#heroBlue)"
          animate={{ r: [130, 150, 130], opacity: [0.5, 0.2, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.circle
          cx="1280" cy="780" r="100"
          fill="url(#heroBlue)"
          animate={{ r: [100, 118, 100], opacity: [0.35, 0.1, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
      </svg>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY    = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#060f1c' }}
      aria-labelledby="hero-heading"
    >
      {/* Background gradient layers */}
      <motion.div className="absolute inset-0" style={{ y: bgY, opacity }}>
        {/* Deep space gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 70% at 50% 40%, #0e2038 0%, #060f1c 65%)',
          }}
        />
        {/* Real magnet image backdrop for authenticity */}
        <div 
          className="absolute inset-0 mix-blend-screen opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage: "url('/hero-magnetic.png')",
            backgroundPosition: 'center 40%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Gold glow at center top */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 50% 40% at 50% 20%, rgba(201,150,58,0.06) 0%, transparent 70%)',
          }}
        />
        {/* Bottom fade to page */}
        <div
          className="absolute bottom-0 left-0 right-0 h-64"
          style={{
            background: 'linear-gradient(to bottom, transparent, #060f1c)',
          }}
        />
      </motion.div>

      {/* Animated field lines */}
      <FieldLines />

      {/* Grid overlay */}
      <div className="absolute inset-0 hero-grid opacity-30" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-16 text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="gold-line w-10" />
          <span className="eyebrow">
            Advanced Materials · Rare Earth Magnets · India
          </span>
          <div className="gold-line w-10" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold text-white leading-none mb-6"
          style={{ fontSize: 'clamp(2.6rem, 7vw, 5.5rem)' }}
        >
          Building the Future of
          <br />
          <span className="gold-text italic">Advanced Permanent</span>
          <br />
          Magnet Manufacturing
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.55)' }}
        >
          Magnova is developing next-generation rare-earth magnet manufacturing capabilities
          to support strategic industries including electric mobility, clean energy, defense,
          and advanced industrial systems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            id="hero-primary-cta"
            className="btn-primary inline-flex items-center gap-2 px-9 py-4 rounded-sm group"
          >
            Contact Us
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/about"
            id="hero-secondary-cta"
            className="btn-outline inline-flex items-center gap-2 px-9 py-4 rounded-sm"
          >
            Learn More
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        aria-hidden="true"
      >
        <span className="eyebrow" style={{ fontSize: '0.6rem' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} style={{ color: '#C9963A' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
