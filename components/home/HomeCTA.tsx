'use client';

import Link from 'next/link';
import { FadeIn } from '@/components/ui/Animate';
import { ArrowRight } from 'lucide-react';

export default function HomeCTA() {
  return (
    <section
      id="home-cta"
      className="section-sm relative overflow-hidden"
      style={{ background: '#0a1929' }}
    >
      {/* Decorative corner lines */}
      <div className="absolute top-0 left-0 w-48 h-48 pointer-events-none" aria-hidden="true">
        <div className="absolute top-8 left-8 w-16 h-px" style={{ background: 'rgba(201,150,58,0.3)' }} />
        <div className="absolute top-8 left-8 w-px h-16" style={{ background: 'rgba(201,150,58,0.3)' }} />
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-8 right-8 w-16 h-px" style={{ background: 'rgba(201,150,58,0.3)' }} />
        <div className="absolute bottom-8 right-8 w-px h-16" style={{ background: 'rgba(201,150,58,0.3)' }} />
      </div>

      {/* Center radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,150,58,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative">
        <FadeIn>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="gold-line w-10" />
            <span className="eyebrow">Get In Touch</span>
            <div className="gold-line w-10" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="font-display font-bold text-white mb-5"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', lineHeight: 1.15 }}
          >
            Ready to Discuss a{' '}
            <span className="gold-text italic">Partnership?</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            className="text-base leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            Connect with Magnova regarding partnership opportunities, business inquiries,
            or investor discussions. We welcome strategic conversations.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
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
        </FadeIn>
      </div>
    </section>
  );
}
