'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Cpu, Globe } from 'lucide-react';

const pillars = [
  {
    icon: Globe,
    title: 'Supply Chain Sovereignty',
    description:
      'End-to-end control of the rare earth value chain — from mine to finished magnet — reducing dependence on single-source suppliers.',
  },
  {
    icon: Cpu,
    title: 'Precision Manufacturing',
    description:
      'Molecular-level control of magnetic properties, achieved through advanced sintering, alloying, and magnetization processes.',
  },
  {
    icon: Shield,
    title: 'Strategic Resilience',
    description:
      "Underpinning India's defense, energy, and mobility sectors with domestically sourced, high-performance permanent magnets.",
  },
];

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="glass-gold rounded-sm p-8 card-hover flex flex-col gap-5"
    >
      <div
        className="w-12 h-12 flex items-center justify-center rounded-sm"
        style={{ background: 'rgba(200, 155, 60, 0.1)', border: '1px solid rgba(200, 155, 60, 0.3)' }}
      >
        <pillar.icon size={22} style={{ color: '#C89B3C' }} />
      </div>
      <div>
        <h3 className="font-display text-xl font-semibold text-white mb-3">
          {pillar.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
          {pillar.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ValueProposition() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className="py-32"
      style={{ background: 'linear-gradient(180deg, #061426 0%, #08192e 100%)' }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="gold-line w-8" />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: '#C89B3C', letterSpacing: '0.2em' }}
            >
              Why Magnova
            </span>
            <div className="gold-line w-8" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            A New Paradigm for
            <br />
            <span className="gold-gradient-text">Critical Materials</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748b' }}>
            Magnova is not merely a manufacturer. We are architects of India&apos;s
            industrial future — building capabilities that others cannot easily replicate.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
