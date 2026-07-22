'use client';

import { useEffect, useRef, useState } from 'react';
import LinkNext from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Compass, ShieldCheck, Zap, Activity, Layers, Settings, Globe } from 'lucide-react';

// --- SUB-COMPONENT: ANIMATED COUNTER ---
interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

function AnimatedCounter({ end, duration = 1800, prefix = '', suffix = '' }: CounterProps) {
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
      
      // Easing out quadratic
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
    <span ref={ref} className="font-sans font-bold text-3xl md:text-[48px] text-white tracking-tight" style={{ lineHeight: 1 }}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// --- MAIN HERO COMPONENT ---
export default function Hero() {
  const [btnDrift, setBtnDrift] = useState({ x: 0, y: 0 });

  // Proximity tracking for primary button drift (magnetic attraction)
  const handleBtnMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    
    // Magnetic pull effect: limit the translation to max 12px
    setBtnDrift({ x: x * 0.15, y: y * 0.15 });
  };

  const handleBtnMouseLeave = () => {
    setBtnDrift({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero-section"
      className="relative w-full min-h-screen flex items-center justify-center bg-transparent pt-32 pb-16 overflow-hidden"
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
            className="inline-flex items-center gap-3.5 mb-8 w-fit px-4 py-1.5 rounded-full"
            style={{
              background: 'rgba(77, 169, 255, 0.05)',
              border: '1px solid rgba(77, 169, 255, 0.15)',
              boxShadow: '0 0 15px rgba(77, 169, 255, 0.03)',
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#4DA9FF] animate-pulse" />
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] font-sans text-[#4DA9FF]">
              India's Next Generation Rare Earth Manufacturer
            </span>
          </motion.div>

          {/* Headline - Apple/NVIDIA/SpaceX Inspired scale */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.6rem] sm:text-[3.8rem] md:text-[88px] font-bold text-white tracking-[-0.02em] mb-6"
            style={{
              fontFamily: "'Inter', sans-serif",
              lineHeight: '92%',
            }}
          >
            Building India's Future of{' '}
            <span className="gold-text italic block py-2">Advanced Permanent</span>
            Magnet Manufacturing
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="text-[20px] leading-[170%] max-w-[620px] text-[#BFC6CF] mb-8 font-sans"
          >
            Magnova is establishing India's pioneer commercial-scale manufacturing campus for 
            sintered NdFeB permanent magnets, securing self-reliance in high-value strategic technologies.
          </motion.p>

          {/* Interactive CTAs with Button Drift (Magnetic Force) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-8"
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
                    fontSize: '18px',
                    fontWeight: 500,
                    boxShadow: '0 0 25px rgba(214,168,74,0.22)',
                  }}
                >
                  <Zap size={15} className="text-[#02050B] group-hover:scale-110 transition-transform duration-300" />
                  Partner With Us
                  <ArrowRight
                    size={15}
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
                fontSize: '18px',
                fontWeight: 500,
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(255, 255, 255, 0.015)',
                backdropFilter: 'blur(10px)',
                color: '#FFFFFF',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255,255,255,0.06)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              }}
            >
              <Cpu size={15} />
              Explore Technology
            </LinkNext>
          </motion.div>

          {/* Trust Bar Badges (Illuminated Glass) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.95 }}
            className="flex flex-wrap gap-2 mb-8 text-[0.6rem] font-bold text-white tracking-widest uppercase"
          >
            {[
              { icon: Compass, text: 'Government Approved' },
              { icon: Activity, text: 'REPM Initiative' },
              { icon: Globe, text: 'Made in India' },
              { icon: ShieldCheck, text: 'Strategic Manufacturing' },
              { icon: Zap, text: 'Industrial Scale' },
              { icon: Layers, text: 'Deep Technology' },
              { icon: Settings, text: 'Advanced Materials' },
            ].map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-sm"
                  style={{
                    background: 'rgba(8, 17, 29, 0.45)',
                    border: '1px solid rgba(214, 168, 74, 0.15)',
                    boxShadow: '0 0 12px rgba(214,168,74,0.03)',
                  }}
                >
                  <Icon size={9} style={{ color: '#D6A84A' }} />
                  <span>{badge.text}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Industry Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.15 }}
            className="flex flex-wrap gap-2 mb-10 text-[0.62rem] font-bold text-white/70 tracking-wider uppercase"
          >
            {[
              'Electric Vehicles',
              'Wind Energy',
              'Defense',
              'Robotics',
              'Consumer Electronics',
              'Industrial Automation',
              'Aerospace',
              'Clean Energy',
            ].map((pill) => (
              <div
                key={pill}
                className="px-3 py-1 rounded-full cursor-default transition-all duration-300 hover:text-white"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.04)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(77, 169, 255, 0.3)';
                  e.currentTarget.style.boxShadow = '0 0 10px rgba(77, 169, 255, 0.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.04)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {pill}
              </div>
            ))}
          </motion.div>

          {/* Live Metrics counters */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-8 border-t border-white/5">
            <div>
              <AnimatedCounter end={1200} suffix="+" />
              <p className="text-[10px] text-[#5E6875] font-bold tracking-wider uppercase mt-1">TPA Production</p>
            </div>
            <div>
              <AnimatedCounter end={25} suffix="" />
              <p className="text-[10px] text-[#5E6875] font-bold tracking-wider uppercase mt-1">Acre Campus</p>
            </div>
            <div>
              <AnimatedCounter end={50} suffix="%" />
              <p className="text-[10px] text-[#5E6875] font-bold tracking-wider uppercase mt-1">Capital Subsidy</p>
            </div>
            <div>
              <AnimatedCounter end={2032} suffix="" />
              <p className="text-[10px] text-[#5E6875] font-bold tracking-wider uppercase mt-1">IPO Vision</p>
            </div>
            <div>
              <AnimatedCounter end={100} suffix="%" />
              <p className="text-[10px] text-[#5E6875] font-bold tracking-wider uppercase mt-1">Value Chain</p>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: PORT (48% width) */}
        <div className="lg:col-span-5 w-full h-[300px] lg:h-[600px] pointer-events-none select-none relative" />

      </div>
    </section>
  );
}
