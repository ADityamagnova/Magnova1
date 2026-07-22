'use client';

import Link from 'next/link';
import { FadeIn } from '@/components/ui/Animate';
import { ArrowRight } from 'lucide-react';

export default function HomeCTA() {
  return (
    <section
      id="home-cta"
      className="section-sm relative overflow-hidden flex flex-col items-center justify-center text-center w-full"
      style={{ background: '#02050B' }}
    >
      {/* Decorative corner lines */}
      <div className="absolute top-0 left-0 w-48 h-48 pointer-events-none" aria-hidden="true">
        <div className="absolute top-8 left-8 w-16 h-px" style={{ background: 'rgba(214,168,74,0.3)' }} />
        <div className="absolute top-8 left-8 w-px h-16" style={{ background: 'rgba(214,168,74,0.3)' }} />
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-8 right-8 w-16 h-px" style={{ background: 'rgba(214,168,74,0.3)' }} />
        <div className="absolute bottom-8 right-8 w-px h-16" style={{ background: 'rgba(214,168,74,0.3)' }} />
      </div>

      {/* Center radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(77,169,255,0.05) 0%, transparent 70%)',
        }}
      />
      <div className="max-w-4xl w-full mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <FadeIn className="w-full">
          <div
            className="premium-card rounded-sm text-center transition-all duration-300 hover:border-gold-light"
            style={{
              background: 'linear-gradient(135deg, rgba(8,17,29,0.75) 0%, rgba(12,25,48,0.95) 100%)',
              border: '1px solid rgba(77,169,255,0.18)',
              boxShadow: '0 30px 70px rgba(0,0,0,0.5), 0 0 0 1px rgba(77,169,255,0.06)',
              padding: '4.5rem 2.5rem',
            }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="gold-line w-10" />
              <span className="eyebrow">Get In Touch</span>
              <div className="gold-line w-10" />
            </div>

            <h2
              className="font-display font-bold text-white mb-5 text-center"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', lineHeight: 1.15 }}
            >
              Ready to Discuss a <span className="gold-text italic">Partnership?</span>
            </h2>

            <p
              className="text-base leading-relaxed mb-10 max-w-xl mx-auto text-center"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              Connect with Magnova regarding partnership opportunities, business inquiries,
              or investor discussions. We welcome strategic conversations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                id="home-cta-primary"
                className="btn-primary inline-flex items-center gap-2 px-10 py-4 rounded-sm group"
              >
                Contact Us
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/technology"
                id="home-cta-secondary"
                className="btn-outline inline-flex items-center gap-2 px-10 py-4 rounded-sm"
              >
                Explore Technology
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
