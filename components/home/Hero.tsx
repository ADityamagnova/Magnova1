'use client';

import { useEffect, useRef, useState } from 'react';
import LinkNext from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, ShieldCheck, Settings, Activity } from 'lucide-react';

// --- SUB-COMPONENT: ANIMATED COUNTER ---
interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

function AnimatedCounter({ end, duration = 1600, prefix = '', suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeProgress = progress * (2 - progress);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return (
    <span 
      ref={ref} 
      className="font-sans font-bold text-3xl md:text-[42px] text-white tracking-tight" 
      style={{ lineHeight: 1, fontFamily: "'Inter', sans-serif" }}
    >
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// --- MAIN HERO COMPONENT ---
export default function Hero() {
  const [btnDrift, setBtnDrift] = useState({ x: 0, y: 0 });

  const handleBtnMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setBtnDrift({ x: x * 0.12, y: y * 0.12 });
  };

  const handleBtnMouseLeave = () => {
    setBtnDrift({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero-section"
      className="relative w-full min-h-screen flex items-center justify-center bg-transparent pt-32 pb-16 overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
      aria-labelledby="hero-heading"
    >
      {/* Splitscreen Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: BRAND & VALUE COPY (52% width) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left max-w-[650px] w-full mx-auto lg:mx-0">
          
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="inline-flex items-center gap-3 mb-6 w-fit px-4 py-1.5 rounded-full"
            style={{
              background: 'rgba(77, 169, 255, 0.05)',
              border: '1px solid rgba(77, 169, 255, 0.18)',
              boxShadow: '0 0 15px rgba(77, 169, 255, 0.02)',
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#4DA9FF] animate-pulse" />
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] font-sans text-[#4DA9FF]" style={{ fontFamily: "'Inter', sans-serif" }}>
              India's Pioneer Sintered Magnet Campus
            </span>
          </motion.div>

          {/* Headline - Unified, single modern sans-serif font family. No mix of serif and italic styles */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.6rem] sm:text-[3.8rem] md:text-[80px] font-bold text-white tracking-[-0.02em] mb-6"
            style={{
              fontFamily: "'Inter', sans-serif",
              lineHeight: '94%',
            }}
          >
            Building India's Future of{' '}
            <span className="gold-text block py-2" style={{ fontFamily: "'Inter', sans-serif", fontStyle: 'normal' }}>
              Advanced Permanent Magnet Manufacturing
            </span>
          </motion.h1>

          {/* Subtext Paragraph - Highly legible, clear white sans-serif font */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="text-[18px] md:text-[20px] leading-[170%] max-w-[620px] text-white/95 mb-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Magnova is establishing India's pioneer commercial-scale manufacturing campus for 
            sintered NdFeB permanent magnets, securing self-reliance in high-value strategic technologies.
          </motion.p>

          {/* Metrics Row - Presented clearly below subtext */}
          <div className="grid grid-cols-4 gap-4 pt-6 pb-8 border-t border-white/10 mb-8">
            <div>
              <AnimatedCounter end={1200} suffix="+" />
              <p className="text-[10px] text-white font-bold tracking-wider uppercase mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>TPA Capacity</p>
            </div>
            <div>
              <AnimatedCounter end={25} suffix=" Acre" />
              <p className="text-[10px] text-white font-bold tracking-wider uppercase mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>Campus Size</p>
            </div>
            <div>
              <AnimatedCounter end={50} suffix="%" />
              <p className="text-[10px] text-white font-bold tracking-wider uppercase mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>Capital Subsidy</p>
            </div>
            <div>
              <AnimatedCounter end={2032} suffix="" />
              <p className="text-[10px] text-white font-bold tracking-wider uppercase mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>IPO Roadmap</p>
            </div>
          </div>

          {/* Calls-to-Action - Two premium buttons below metrics row with distinct treatments & better spacing */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex flex-col sm:flex-row items-center gap-6 mb-8"
          >
            {/* Magnetic primary button wrapper */}
            <div
              className="w-full sm:w-auto relative"
              onMouseMove={handleBtnMouseMove}
              onMouseLeave={handleBtnMouseLeave}
            >
              <motion.div
                animate={{ x: btnDrift.x, y: btnDrift.y }}
                transition={{ type: 'spring', stiffness: 150, damping: 15 }}
              >
                <LinkNext
                  href="/contact"
                  id="hero-primary-cta"
                  className="btn-primary inline-flex items-center justify-center gap-3 w-full sm:w-auto px-9 py-4 rounded-sm group relative"
                  style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    fontFamily: "'Inter', sans-serif",
                    boxShadow: '0 0 25px rgba(214,168,74,0.25)',
                  }}
                >
                  PARTNER WITH US
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </LinkNext>
              </motion.div>
            </div>

            <LinkNext
              href="/technology"
              id="hero-secondary-cta"
              className="btn-outline inline-flex items-center justify-center gap-3 w-full sm:w-auto px-9 py-4 rounded-sm group"
              style={{
                fontSize: '15px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                fontFamily: "'Inter', sans-serif",
                border: '1px solid rgba(255, 255, 255, 0.25)',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                color: '#FFFFFF',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255,255,255,0.08)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
              }}
            >
              <Settings size={16} className="animate-spin-slow" />
              EXPLORE TECHNOLOGY
            </LinkNext>
          </motion.div>

          {/* Small Trust Badges - Crucial fix: high contrast readable white label secondary text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.95 }}
            className="flex flex-wrap gap-3 text-[0.62rem] font-bold text-white tracking-widest uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {[
              { icon: Compass, text: 'Government Approved' },
              { icon: Activity, text: 'REPM Initiative' },
              { icon: ShieldCheck, text: 'Strategic Materials' },
            ].map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-sm"
                  style={{
                    background: 'rgba(8, 17, 29, 0.75)',
                    border: '1px solid rgba(214, 168, 74, 0.35)',
                    boxShadow: '0 0 10px rgba(214,168,74,0.05)',
                  }}
                >
                  <Icon size={10} style={{ color: '#D6A84A' }} />
                  <span className="text-white font-semibold">{badge.text}</span>
                </div>
              );
            })}
          </motion.div>

        </div>

        {/* RIGHT COLUMN: INTERACTIVE WEBGL CENTERPIECE (48% width) */}
        {/* Features floating technical data cards to balance visual weight */}
        <div className="lg:col-span-5 w-full h-[400px] lg:h-[600px] relative flex flex-col justify-between py-12 pointer-events-none select-none">
          
          {/* Top-Right Floating Tech Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 0.95, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="self-end rounded-sm p-4 text-[0.68rem] font-mono tracking-wider text-left border"
            style={{
              borderColor: 'rgba(214, 168, 74, 0.25)',
              background: 'rgba(8, 17, 29, 0.75)',
              backdropFilter: 'blur(16px)',
              width: '240px',
              boxShadow: '0 0 20px rgba(214, 168, 74, 0.05)',
            }}
          >
            <div className="flex justify-between items-center mb-2 border-b border-[#D6A84A]/25 pb-1.5">
              <span className="text-[#D6A84A] font-bold">MATERIAL SPECIFICATIONS</span>
              <span className="text-white/40">SEC // 01</span>
            </div>
            <p className="text-white mb-1">Material: <span className="text-white font-bold">REPM-N52</span></p>
            <p className="text-white mb-1">Remanence (Br): <span className="text-white font-bold">1.48 T</span></p>
            <p className="text-white mb-1">Coercivity (Hcb): <span className="text-white font-bold">&gt;820 kA/m</span></p>
            <p className="text-white font-sans">Max Energy (BHmax): <span className="text-white font-bold">410 kJ/m³</span></p>
          </motion.div>

          {/* Spacer to let the 3D magnet shine */}
          <div className="h-16" />

          {/* Bottom-Right Floating Tech Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 0.95, x: 0 }}
            transition={{ duration: 1, delay: 0.85 }}
            className="self-start rounded-sm p-4 text-[0.68rem] font-mono tracking-wider text-left border"
            style={{
              borderColor: 'rgba(77, 169, 255, 0.25)',
              background: 'rgba(8, 17, 29, 0.75)',
              backdropFilter: 'blur(16px)',
              width: '240px',
              boxShadow: '0 0 20px rgba(77, 169, 255, 0.05)',
            }}
          >
            <div className="flex justify-between items-center mb-2 border-b border-[#4DA9FF]/25 pb-1.5">
              <span className="text-[#4DA9FF] font-bold">ENVIRONMENT CONTROL</span>
              <span className="text-white/40">SEC // 02</span>
            </div>
            <p className="text-white mb-1">Environment: <span className="text-white font-bold">Argon [99.99%]</span></p>
            <p className="text-white mb-1">Pressure: <span className="text-white font-bold">1.02 bar</span></p>
            <p className="text-white font-sans">Cell Temp: <span className="text-white font-bold">24.5 °C</span></p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
