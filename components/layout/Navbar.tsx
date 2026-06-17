'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/',           label: 'Home' },
  { href: '/about',      label: 'About' },
  { href: '/technology', label: 'Technology' },
  { href: '/contact',    label: 'Contact' },
];

function MagnovaLogo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer ring */}
      <circle cx="16" cy="16" r="14.5" stroke="#C9963A" strokeWidth="1" opacity="0.35" />
      {/* Diamond */}
      <path d="M16 3 L29 16 L16 29 L3 16 Z" stroke="#C9963A" strokeWidth="1.2" fill="none" />
      {/* Core */}
      <circle cx="16" cy="16" r="3.5" fill="#C9963A" />
      {/* Field spokes */}
      <line x1="16" y1="12.5" x2="16" y2="3"   stroke="#C9963A" strokeWidth="0.8" opacity="0.55" />
      <line x1="19.5" y1="16" x2="29" y2="16"   stroke="#C9963A" strokeWidth="0.8" opacity="0.55" />
      <line x1="16" y1="19.5" x2="16" y2="29"   stroke="#C9963A" strokeWidth="0.8" opacity="0.55" />
      <line x1="12.5" y1="16" x2="3" y2="16"    stroke="#C9963A" strokeWidth="0.8" opacity="0.55" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background:    scrolled ? 'rgba(6, 15, 28, 0.94)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)'            : 'none',
          borderBottom:  scrolled ? '1px solid rgba(201,150,58,0.10)' : '1px solid transparent',
        }}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between" style={{ height: 'var(--nav-h)' }}>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" aria-label="Magnova — Home">
              <MagnovaLogo />
              <span
                className="font-display text-xl font-semibold tracking-widest text-white"
                style={{ letterSpacing: '0.22em' }}
              >
                MAGNOVA
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-10" aria-label="Primary navigation">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative group"
                    style={{
                      fontSize:      '0.72rem',
                      fontWeight:    600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: active ? '#C9963A' : 'rgba(255,255,255,0.65)',
                      transition: 'color 0.3s ease',
                    }}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                    <span
                      className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                      style={{
                        background: 'linear-gradient(90deg, #C9963A, #E8B84B)',
                        width: active ? '100%' : '0%',
                      }}
                    />
                    <span
                      className="absolute -bottom-1 left-0 h-px opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-300"
                      style={{
                        background: 'linear-gradient(90deg, #C9963A, #E8B84B)',
                        width: '0%',
                      }}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                id="nav-contact-cta"
                className="btn-primary inline-flex items-center px-6 py-3 rounded-sm"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              id="mobile-menu-toggle"
              className="lg:hidden p-2 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              style={{ color: '#C9963A' }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{ background: 'rgba(6,15,28,0.98)', backdropFilter: 'blur(24px)' }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex flex-col items-center justify-center h-full gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="font-display text-4xl font-medium tracking-wide transition-colors"
                    style={{ color: pathname === link.href ? '#C9963A' : 'white' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center mt-4 px-10 py-4 rounded-sm"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
