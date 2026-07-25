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
  { href: '/products',   label: 'Products' },
  { href: '/contact',    label: 'Contact' },
];

function MagnovaLogo({ className = '' }: { className?: string }) {
  return (
    <img
      src="/logo-icon.png"
      alt="Magnova Logo Icon"
      className={`h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${className}`}
    />
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
          background:    scrolled ? 'rgba(8, 17, 29, 0.85)' : 'rgba(2, 5, 11, 0.45)',
          backdropFilter: 'blur(20px)',
          borderBottom:  '1px solid rgba(77, 169, 255, 0.08)',
        }}
        role="banner"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between" style={{ height: 'var(--nav-h)' }}>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3.5 group py-2" aria-label="Magnova — Home">
              <MagnovaLogo />
              <span
                className="font-sans text-lg font-bold tracking-widest text-white transition-colors duration-300 group-hover:text-[#D6A84A]"
                style={{ letterSpacing: '0.24em', fontFamily: "'Inter', sans-serif" }}
              >
                MAGNOVA
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative py-1 text-sm font-medium transition-colors"
                    style={{
                      color: active ? '#FFFFFF' : 'rgba(255,255,255,0.7)',
                    }}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E5B842] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA - Pill Button matching image */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                id="nav-contact-cta"
                className="inline-flex items-center px-5 py-2 rounded-full text-xs font-semibold text-white bg-[#0F141C]/90 border border-white/20 hover:border-white/50 transition-all duration-300 shadow-sm hover:shadow-md"
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
