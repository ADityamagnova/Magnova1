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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3.5 mb-5 group" aria-label="Magnova — Home">
              <FooterLogo />
              <span
                className="font-sans text-base font-bold tracking-widest text-white transition-colors duration-300 group-hover:text-gold"
                style={{ letterSpacing: '0.24em', fontFamily: "'Inter', sans-serif" }}
              >
                MAGNOVA
              </span>
            </Link>

            <p className="text-sm leading-7 mb-8 max-w-sm" style={{ color: '#5a7490' }}>
              Developing next-generation rare-earth permanent magnet manufacturing capabilities
              to support strategic industries across India and beyond.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={13} style={{ color: '#C9963A', marginTop: 3, flexShrink: 0 }} />
                <span className="text-xs" style={{ color: '#4a5e74' }}>India</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={13} style={{ color: '#C9963A', marginTop: 3, flexShrink: 0 }} />
                <a
                  href="mailto:contact@magnova.asia"
                  className="text-xs transition-colors hover:text-white"
                  style={{ color: '#4a5e74' }}
                >
                  contact@magnova.asia
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Globe size={13} style={{ color: '#C9963A', marginTop: 3, flexShrink: 0 }} />
                <a
                  href="https://www.magnova.asia"
                  className="text-xs transition-colors hover:text-white"
                  style={{ color: '#4a5e74' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.magnova.asia
                </a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
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
                    style={{ color: '#3d5168' }}
                  >
                    {l.label}
                    <ArrowUpRight
                      size={10}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: '#C9963A' }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3
              className="text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ color: '#C9963A', letterSpacing: '0.18em' }}
            >
              Industries
            </h3>
            <ul className="space-y-3">
              {industryLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm flex items-center gap-1 group transition-colors duration-300 hover:text-white"
                    style={{ color: '#3d5168' }}
                  >
                    {l.label}
                    <ArrowUpRight
                      size={10}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: '#C9963A' }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: '#253545' }}>
            © {new Date().getFullYear()} Magnova. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#253545' }}>
            Built for strategic industrial impact.
          </p>
        </div>
      </div>
    </footer>
  );
}
