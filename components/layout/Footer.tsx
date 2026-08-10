'use client';

import Link from 'next/link';
import { Mail, MapPin, Globe, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home',       href: '/' },
  { label: 'About',      href: '/about' },
  { label: 'Technology', href: '/technology' },
  { label: 'Products',   href: '/products' },
  { label: 'Contact',    href: '/contact' },
];

const industryLinks = [
  { label: 'Electric Mobility',   href: '/technology#applications' },
  { label: 'Renewable Energy',    href: '/technology#applications' },
  { label: 'Defense Systems',     href: '/technology#applications' },
  { label: 'Industrial Automation', href: '/technology#applications' },
  { label: 'Aerospace Applications', href: '/technology#applications' },
  { label: 'Advanced Manufacturing', href: '/technology#applications' },
];

function FooterLogo({ className = '' }: { className?: string }) {
  return (
    <img
      src="/logo-icon.png"
      alt="Magnova Logo Icon"
      className={`h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${className}`}
    />
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        background:  '#040c18',
        borderTop:   '1px solid rgba(201,150,58,0.10)',
      }}
      role="contentinfo"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Col 1: Brand column (5 columns) */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3.5 mb-5 group" aria-label="Magnova — Home">
              <FooterLogo />
              <span
                className="font-sans text-base font-bold tracking-widest text-white transition-colors duration-300 group-hover:text-gold"
                style={{ letterSpacing: '0.24em', fontFamily: "'Inter', sans-serif" }}
              >
                MAGNOVA
              </span>
            </Link>

            <p className="text-sm leading-7 mb-6 max-w-md text-white/60">
              Developing next-generation commercial rare-earth permanent magnet manufacturing capabilities to support strategic industries across India and global supply chains.
            </p>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 inline-block font-mono text-xs text-[#E5B842]">
              SINTERED NDFEB MAGNETS // GUJARAT CAMPUS
            </div>
          </div>

          {/* Col 2: Quick links (2 columns) */}
          <div className="lg:col-span-2">
            <h3
              className="text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ color: '#C9963A', letterSpacing: '0.18em' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm flex items-center gap-1 group transition-colors duration-300 hover:text-white"
                    style={{ color: '#5a7490' }}
                  >
                    {l.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: '#C9963A' }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Industries (3 columns) */}
          <div className="lg:col-span-3">
            <h3
              className="text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ color: '#C9963A', letterSpacing: '0.18em' }}
            >
              Key Sectors
            </h3>
            <ul className="space-y-3">
              {industryLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm flex items-center gap-1 group transition-colors duration-300 hover:text-white"
                    style={{ color: '#5a7490' }}
                  >
                    {l.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: '#C9963A' }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Contact (2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h3
              className="text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ color: '#C9963A', letterSpacing: '0.18em' }}
            >
              Direct Inquiry
            </h3>

            <div className="space-y-3 font-sans text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} style={{ color: '#C9963A', marginTop: 2, flexShrink: 0 }} />
                <span className="text-white/70">Gujarat, India</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail size={14} style={{ color: '#C9963A', marginTop: 2, flexShrink: 0 }} />
                <div className="flex flex-col space-y-1">
                  <a href="mailto:aditya.jha@magnova.asia" className="text-white/70 hover:text-white transition-colors">
                    aditya.jha@magnova.asia
                  </a>
                  <a href="mailto:contact@magnova.asia" className="text-white/70 hover:text-white transition-colors">
                    contact@magnova.asia
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Globe size={14} style={{ color: '#C9963A', marginTop: 2, flexShrink: 0 }} />
                <a href="https://www.magnova.asia" className="text-white/70 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  www.magnova.asia
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Magnova. All rights reserved.
          </p>
          <p className="text-xs text-white/40 font-mono">
            Sovereign Advanced Permanent Magnet Manufacturing
          </p>
        </div>
      </div>
    </footer>
  );
}
