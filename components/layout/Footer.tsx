'use client';

import Link from 'next/link';
import { Mail, MapPin, Globe, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home',       href: '/' },
  { label: 'About',      href: '/about' },
  { label: 'Technology', href: '/technology' },
  { label: 'Contact',    href: '/contact' },
];

const industryLinks = [
  { label: 'Electric Mobility',   href: '/technology#applications' },
  { label: 'Renewable Energy',    href: '/technology#applications' },
  { label: 'Defense Systems',     href: '/technology#applications' },
  { label: 'Industrial Automation', href: '/technology#applications' },
];

function FooterLogo() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="14.5" stroke="#C9963A" strokeWidth="1" opacity="0.35" />
      <path d="M16 3 L29 16 L16 29 L3 16 Z" stroke="#C9963A" strokeWidth="1.2" fill="none" />
      <circle cx="16" cy="16" r="3.5" fill="#C9963A" />
      <line x1="16" y1="12.5" x2="16" y2="3"  stroke="#C9963A" strokeWidth="0.8" opacity="0.55" />
      <line x1="19.5" y1="16" x2="29" y2="16" stroke="#C9963A" strokeWidth="0.8" opacity="0.55" />
      <line x1="16" y1="19.5" x2="16" y2="29" stroke="#C9963A" strokeWidth="0.8" opacity="0.55" />
      <line x1="12.5" y1="16" x2="3" y2="16"  stroke="#C9963A" strokeWidth="0.8" opacity="0.55" />
    </svg>
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
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5" aria-label="Magnova — Home">
              <FooterLogo />
              <span
                className="font-display text-lg font-semibold tracking-widest text-white"
                style={{ letterSpacing: '0.22em' }}
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
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
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
