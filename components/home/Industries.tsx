'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Wind, Plane, Factory, Bot, Cpu } from 'lucide-react';

const industries = [
  { icon: Zap, label: 'Electric Vehicles', sub: 'Traction motors, power steering' },
  { icon: Wind, label: 'Wind Energy', sub: 'Direct-drive generators' },
  { icon: Plane, label: 'Aerospace & Defense', sub: 'Actuators, guidance systems' },
  { icon: Factory, label: 'Industrial', sub: 'Servo motors, compressors' },
  { icon: Bot, label: 'Robotics', sub: 'Joint actuators, grippers' },
  { icon: Cpu, label: 'Electronics', sub: 'Hard drives, speakers, MRI' },
];

export default function Industries() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className="py-32"
      style={{ background: '#040f1e' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="gold-line w-8" />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: '#C89B3C', letterSpacing: '0.2em' }}
            >
              Applications
            </span>
            <div className="gold-line w-8" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
            Powering the Industries
            <br />
            <span className="gold-gradient-text">That Power Tomorrow</span>
          </h2>
        </motion.div>

        {/* Industry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px" style={{ background: 'rgba(255,255,255,0.04)' }}>
          {industries.map((industry, i) => (
            <motion.div
              key={industry.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group flex flex-col items-center text-center p-8 transition-all duration-500 cursor-pointer"
              style={{ background: '#040f1e' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(200,155,60,0.05)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = '#040f1e';
              }}
            >
              <div
                className="w-14 h-14 flex items-center justify-center rounded-sm mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ background: 'rgba(200,155,60,0.08)', border: '1px solid rgba(200,155,60,0.15)' }}
              >
                <industry.icon size={22} style={{ color: '#C89B3C' }} />
              </div>
              <div className="text-sm font-semibold text-white mb-1">{industry.label}</div>
              <div className="text-xs" style={{ color: '#475569' }}>{industry.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Marquee strip */}
        <div className="mt-16 overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)', padding: '16px 0' }}>
          <div className="flex animate-marquee gap-16 whitespace-nowrap">
            {[...Array(2)].flatMap(() => [
              'Electric Vehicles', '·', 'Wind Turbines', '·', 'Aerospace', '·',
              'Defense Systems', '·', 'Industrial Motors', '·', 'Robotics', '·',
              'MRI Equipment', '·', 'Consumer Electronics', '·', 'Power Generation', '·',
            ]).map((item, i) => (
              <span
                key={i}
                className="text-xs font-semibold tracking-widest uppercase"
                style={{
                  color: item === '·' ? '#C89B3C' : 'rgba(255,255,255,0.3)',
                  letterSpacing: '0.15em',
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
