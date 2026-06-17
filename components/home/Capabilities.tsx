'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    label: 'Ore Extraction',
    description: 'Rare earth bearing ores are extracted and initially processed at the mine site.',
  },
  {
    number: '02',
    label: 'REE Separation',
    description: 'Solvent extraction and ion exchange techniques isolate individual rare earth elements.',
  },
  {
    number: '03',
    label: 'Alloy Casting',
    description: 'Precision-controlled alloying of Nd-Fe-B or Sm-Co systems using vacuum induction furnaces.',
  },
  {
    number: '04',
    label: 'Sintering',
    description: 'Powdered alloy is compacted and sintered in controlled atmospheres to achieve target density.',
  },
  {
    number: '05',
    label: 'Magnetization',
    description: 'Finished magnets are saturated in high-field magnetizers, aligned to specification.',
  },
  {
    number: '06',
    label: 'Quality Assurance',
    description: 'Every magnet undergoes rigorous dimensional, magnetic, and environmental testing.',
  },
];

export default function Capabilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-32" style={{ background: '#061426' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-line w-8" />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: '#C89B3C', letterSpacing: '0.2em' }}
            >
              Capabilities
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight max-w-xl">
              The Integrated
              <br />
              <span className="gold-gradient-text">Production Chain</span>
            </h2>
            <p className="text-base max-w-md" style={{ color: '#64748b' }}>
              From raw ore to finished magnet — every step in the value chain
              is engineered for precision, consistency, and performance.
            </p>
          </div>
        </motion.div>

        {/* Process grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ border: '1px solid rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.04)' }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative p-8 transition-all duration-500"
              style={{ background: '#061426' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(200,155,60,0.04)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = '#061426';
              }}
            >
              {/* Number */}
              <div
                className="font-display text-5xl font-bold mb-6 transition-colors duration-300"
                style={{ color: 'rgba(200,155,60,0.15)' }}
              >
                {step.number}
              </div>

              {/* Gold accent line */}
              <div
                className="w-8 h-px mb-5 transition-all duration-500 group-hover:w-16"
                style={{ background: '#C89B3C' }}
              />

              <h3 className="font-display text-xl font-semibold text-white mb-3">
                {step.label}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Link to technology */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/technology"
            className="inline-flex items-center gap-2 text-sm font-semibold group"
            style={{ color: '#C89B3C' }}
          >
            Explore our technology in depth
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
