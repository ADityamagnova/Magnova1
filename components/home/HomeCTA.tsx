'use client';

import Link from 'next/link';
import { ArrowRight, FileText, Mail, ShieldCheck } from 'lucide-react';

export default function HomeCTA() {
  return (
    <section
      id="home-cta"
      className="section relative w-full bg-[#070C18] border-t border-white/10 overflow-hidden"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial from-[#D6A84A]/5 via-transparent to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Main Banner Container */}
        <div className="rounded-3xl border border-white/15 bg-[#0B1220] p-10 md:p-16 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Copy (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D6A84A]/10 border border-[#D6A84A]/30 text-xs font-mono font-bold text-[#D6A84A] uppercase mb-5">
                <span>COMMERCIAL & OEM SUPPLY AGREEMENTS</span>
              </div>

              <h2 className="text-h2 text-white mb-5">
                Ready to Secure Sovereign <br className="hidden sm:block" />
                <span className="gold-text">Sintered NdFeB Magnet Supply?</span>
              </h2>

              <p className="text-body-lg text-gray-300 max-w-2xl leading-relaxed mb-8">
                Connect directly with our engineering team regarding OEM supply agreements, custom magnet prototypes, strategic partnerships and samples.
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-400">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#030712] border border-white/10">
                  <ShieldCheck size={14} className="text-[#D6A84A]" />
                  <span>NDA Protected Inquiries</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#030712] border border-white/10">
                  <Mail size={14} className="text-[#3B82F6]" />
                  <span>aditya.jha@magnova.asia | contact@magnova.asia</span>
                </div>
              </div>
            </div>

            {/* Right Action Box (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <Link
                href="/contact"
                id="home-cta-primary"
                className="btn-primary w-full py-4 text-center justify-center uppercase tracking-wider"
              >
                <span>REQUEST CUSTOM QUOTE & SAMPLES</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/products"
                id="home-cta-secondary"
                className="btn-outline w-full py-4 text-center justify-center"
              >
                <FileText size={16} className="text-[#3B82F6]" />
                <span>Download REPM Spec Sheet</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
