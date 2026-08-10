'use client';

import Link from 'next/link';
import { Mail, MapPin, Globe, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home',       href: '/' },
  { label: 'Products',   href: '/products' },
  { label: 'Capabilities', href: '/#product-catalog' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Manufacturing', href: '/technology' },
  { label: 'About',      href: '/about' },
  { label: 'Contact',    href: '/contact' },
];

const industryLinks = [
  { label: 'EV Traction & Mobility',   href: '/technology#applications' },
  { label: 'Offshore Wind Energy',     href: '/technology#applications' },
  { label: 'Aerospace & Defense',      href: '/technology#applications' },
  { label: 'Robotics & Automation',    href: '/technology#applications' },
  { label: 'Consumer Electronics & HVAC', href: '/technology#applications' },
  { label: 'Medical & Diagnostic Imaging', href: '/technology#applications' },
];

function FooterLogo({ className = '' }: { className?: string }) {
  return (
    <img
      src="/logo-icon.png"
      alt="Magnova Logo Icon"
      className={`h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${className}`}
    />
  );
}

export default function Footer() {
  return (
    <footer
      className="bg-[#030712] border-t border-white/10"
      role="contentinfo"
    >
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Col 1: Brand & Overview (4 columns) */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3.5 mb-6 group" aria-label="Magnova — Home">
              <FooterLogo />
              <span
                className="font-sans text-xl font-bold tracking-widest text-white transition-colors duration-300 group-hover:text-[#D6A84A]"
                style={{ letterSpacing: '0.2em' }}
              >
                MAGNOVA
              </span>
            </Link>

            <p className="text-body-base text-gray-400 mb-6 max-w-sm">
              Developing commercial-scale rare-earth permanent magnet manufacturing capabilities to support strategic industries across India and global supply chains.
            </p>

            <div className="p-3.5 rounded-xl bg-[#0B1220] border border-white/10 inline-block font-mono text-xs text-[#D6A84A]">
              SINTERED NDFEB MAGNETS // GUJARAT CAMPUS
            </div>
          </div>

          {/* Col 2: Quick links (2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="text-meta text-[#D6A84A] mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-300 flex items-center gap-1.5 group transition-colors hover:text-white"
                  >
                    <span>{l.label}</span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-[#D6A84A]"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Sectors (3 columns) */}
          <div className="lg:col-span-3">
            <h3 className="text-meta text-[#D6A84A] mb-6">
              Key Sectors
            </h3>
            <ul className="space-y-3">
              {industryLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-300 flex items-center gap-1.5 group transition-colors hover:text-white"
                  >
                    <span>{l.label}</span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-[#D6A84A]"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Inquiry (3 columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-meta text-[#D6A84A] mb-6">
              Direct Contact
            </h3>

            <div className="space-y-3.5 font-sans text-xs text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#D6A84A] mt-0.5 shrink-0" />
                <span>Gujarat, India</span>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={16} className="text-[#D6A84A] mt-0.5 shrink-0" />
                <div className="flex flex-col space-y-1">
                  <a href="mailto:aditya.jha@magnova.asia" className="hover:text-white transition-colors">
                    aditya.jha@magnova.asia
                  </a>
                  <a href="mailto:contact@magnova.asia" className="hover:text-white transition-colors">
                    contact@magnova.asia
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe size={16} className="text-[#D6A84A] mt-0.5 shrink-0" />
                <a href="https://www.magnova.asia" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  www.magnova.asia
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10 bg-[#070C18]">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Magnova. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 font-mono">
            Sovereign Advanced Permanent Magnet Manufacturing
          </p>
        </div>
      </div>
    </footer>
  );
}
