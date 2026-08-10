'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { href: '/products',    label: 'Products' },
  { href: '/#product-catalog', label: 'Capabilities' },
  { href: '/#industries', label: 'Industries' },
  { href: '/technology',  label: 'Manufacturing' },
  { href: '/about',       label: 'About' },
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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background:    scrolled ? 'rgba(3, 7, 18, 0.9)' : 'rgba(3, 7, 18, 0.5)',
          backdropFilter: 'blur(20px)',
          borderBottom:  '1px solid rgba(255, 255, 255, 0.08)',
        }}
        role="banner"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between" style={{ height: 'var(--nav-h)' }}>

            {/* Logo & Brand Name */}
            <Link href="/" className="flex items-center gap-3.5 group py-2" aria-label="Magnova — Home">
              <MagnovaLogo />
              <span
                className="font-sans text-xl font-bold tracking-widest text-white transition-colors duration-300 group-hover:text-[#D6A84A]"
                style={{ letterSpacing: '0.2em' }}
              >
                MAGNOVA
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-9" aria-label="Primary navigation">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative py-1 text-sm font-medium transition-colors hover:text-white"
                    style={{
                      color: active ? '#FFFFFF' : 'rgba(255,255,255,0.7)',
                    }}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D6A84A] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA - Request a Quote Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                id="nav-contact-cta"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#030712] bg-[#D6A84A] hover:bg-[#E5B842] transition-all duration-200 shadow-md shadow-[#D6A84A]/15"
              >
                <span>Request a Quote</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              id="mobile-menu-toggle"
              className="lg:hidden p-2 text-[#D6A84A] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col pt-24 pb-12 px-6"
            style={{ background: 'rgba(3, 7, 18, 0.98)', backdropFilter: 'blur(24px)' }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex flex-col items-start justify-center h-full gap-8 max-w-md mx-auto w-full">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    className="text-2xl font-bold transition-colors block border-b border-white/10 pb-3"
                    style={{ color: pathname === link.href ? '#D6A84A' : 'white' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="w-full pt-4">
                <Link
                  href="/contact"
                  className="btn-primary w-full text-center flex items-center justify-center gap-2"
                >
                  <span>Request a Quote</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
