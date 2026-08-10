'use client';

import Link from 'next/link';
import { ArrowRight, Mail, FileText, Zap, ShieldCheck } from 'lucide-react';

export default function HomeCTA() {
  return (
    <section
      id="home-cta"
      className="relative w-full py-24 bg-[#050811] border-t border-white/10 overflow-hidden"
    >
      {/* Background ambient radial light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial from-[#E5B842]/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 flex justify-center">
        
        {/* Main Banner Container - Centered Alignment */}
        <div className="w-full max-w-5xl rounded-3xl border border-white/15 bg-gradient-to-br from-[#0B1220]/95 via-[#060A14]/95 to-[#080D1A]/95 p-10 md:p-16 backdrop-blur-xl shadow-2xl relative overflow-hidden text-center flex flex-col items-center justify-center">
          
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#E5B842]/10 via-[#4DA9FF]/5 to-transparent pointer-events-none rounded-full blur-2xl" />

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5B842]/10 border border-[#E5B842]/25 text-[0.7rem] font-mono tracking-widest text-[#E5B842] uppercase mb-5 mx-auto">
            <Zap size={12} />
            <span>COMMERCIAL & INDUSTRIAL PARTNERSHIPS</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4 text-center max-w-3xl">
            Ready to Secure Sovereign <br className="hidden sm:block" />
            <span className="gold-text">Sintered NdFeB Magnet Supply?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed mb-8 text-center mx-auto">
            Connect directly with Magnova's executive engineering team regarding OEM supply agreements, custom sintered magnet prototypes, and strategic joint venture discussions.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-white/70 mb-8 mx-auto">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <ShieldCheck size={14} className="text-[#E5B842]" />
              <span>NDA Protected Inquiries</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <Mail size={14} className="text-[#4DA9FF]" />
              <span>aditya.jha@magnova.asia | contact@magnova.asia</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mx-auto">
            <Link
              href="/contact"
              id="home-cta-primary"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#E5B842] hover:bg-[#f0c44f] text-[#05080E] font-bold text-sm flex items-center justify-center gap-3 transition-all duration-200 shadow-xl shadow-[#E5B842]/15 uppercase tracking-wider"
            >
              <span>Request Custom Quote & Samples</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/products"
              id="home-cta-secondary"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#080D1A] hover:bg-[#0E1626] text-white font-medium text-sm border border-white/15 hover:border-white/30 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <FileText size={16} className="text-[#4DA9FF]" />
              <span>Download REPM Spec Sheet</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
