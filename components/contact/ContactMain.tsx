'use client';

import { useState } from 'react';
import { FadeIn } from '@/components/ui/Animate';
import { Mail, Globe, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

const inquiryTypes = [
  'Business Inquiry',
  'Investor Inquiry',
  'Partnership Opportunity',
  'General Inquiry',
];

function MapPlaceholder() {
  return (
    <div
      className="map-placeholder w-full rounded-sm flex flex-col items-center justify-center"
      style={{ height: 280 }}
      aria-label="Map showing Magnova location in India"
      role="img"
    >
      {/* Grid dots */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[...Array(8)].map((_, row) =>
          [...Array(12)].map((_, col) => (
            <div
              key={`${row}-${col}`}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: 'rgba(201,150,58,0.15)',
                top:  `${(row + 1) * 11.5}%`,
                left: `${(col + 1) * 7.7}%`,
              }}
            />
          ))
        )}
      </div>

      {/* Pin */}
      <div className="relative flex flex-col items-center z-10">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
          style={{
            background: 'rgba(201,150,58,0.12)',
            border:     '1px solid rgba(201,150,58,0.3)',
          }}
        >
          <MapPin size={22} style={{ color: '#C9963A' }} aria-hidden="true" />
        </div>
        <span className="eyebrow" style={{ fontSize: '0.6rem' }}>India</span>
        <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
          Magnova Headquarters
        </p>
      </div>
    </div>
  );
}

export default function ContactMain() {
  const [formState, setFormState] = useState({
    name:        '',
    company:     '',
    email:       '',
    phone:       '',
    inquiryType: '',
    message:     '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact-main"
      className="section relative overflow-hidden flex flex-col items-center w-full"
      style={{ background: '#060f1c' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 55% 55% at 30% 50%, rgba(201,150,58,0.04) 0%, transparent 65%)',
        }}
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* ── FORM ── */}
          <div className="lg:col-span-3">
            <FadeIn>
              <h2
                className="font-display font-bold text-white mb-2"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
              >
                Send Us an Inquiry
              </h2>
              <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Fill in the form below and our team will be in touch.
              </p>
            </FadeIn>

            {submitted ? (
              <FadeIn>
                <div
                  className="rounded-sm p-10 flex flex-col items-center justify-center text-center"
                  style={{
                    border:     '1px solid rgba(201,150,58,0.2)',
                    background: 'rgba(201,150,58,0.04)',
                    minHeight:  320,
                  }}
                >
                  <CheckCircle size={48} style={{ color: '#C9963A', marginBottom: 20 }} />
                  <h3 className="font-display font-semibold text-white text-xl mb-3">
                    Inquiry Received
                  </h3>
                  <p className="text-sm max-w-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Thank you for reaching out. A member of our team will review your inquiry
                    and be in contact with you shortly.
                  </p>
                </div>
              </FadeIn>
            ) : (
              <FadeIn delay={0.1}>
                <form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  aria-label="Contact inquiry form"
                  noValidate
                >
                  {/* Name + Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium mb-2" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em' }}>
                        Full Name <span aria-hidden="true" style={{ color: '#C9963A' }}>*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs font-medium mb-2" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em' }}>
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        value={formState.company}
                        onChange={handleChange}
                        placeholder="Your company or organisation"
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium mb-2" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em' }}>
                        Email Address <span aria-hidden="true" style={{ color: '#C9963A' }}>*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium mb-2" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em' }}>
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Inquiry type */}
                  <div className="mb-4">
                    <label htmlFor="inquiryType" className="block text-xs font-medium mb-2" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em' }}>
                      Inquiry Type <span aria-hidden="true" style={{ color: '#C9963A' }}>*</span>
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      value={formState.inquiryType}
                      onChange={handleChange}
                      className="form-input"
                      style={{
                        backgroundImage:
                          `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23C9963A' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                        backgroundRepeat:   'no-repeat',
                        backgroundPosition: 'right 1rem center',
                        appearance:         'none',
                        cursor:             'pointer',
                      }}
                    >
                      <option value="" disabled style={{ background: '#0a1929', color: '#4a5e74' }}>
                        Select inquiry type
                      </option>
                      {inquiryTypes.map((t) => (
                        <option
                          key={t}
                          value={t}
                          style={{ background: '#0a1929', color: 'white' }}
                        >
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-7">
                    <label htmlFor="message" className="block text-xs font-medium mb-2" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em' }}>
                      Message <span aria-hidden="true" style={{ color: '#C9963A' }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Please describe your inquiry in detail..."
                      className="form-input resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    id="submit-inquiry"
                    type="submit"
                    disabled={loading}
                    className="btn-primary inline-flex items-center gap-2 px-9 py-4 rounded-sm w-full sm:w-auto justify-center"
                    aria-busy={loading}
                  >
                    {loading ? (
                      <>
                        <span
                          className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin"
                          aria-hidden="true"
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </>
                    )}
                  </button>
                </form>
              </FadeIn>
            )}
          </div>

          {/* ── COMPANY INFO ── */}
          <div className="lg:col-span-2">
            <FadeIn delay={0.2} direction="left">
              <div className="space-y-6">

                {/* Company card */}
                <div
                  className="rounded-sm p-7"
                  style={{
                    border:     '1px solid rgba(201,150,58,0.12)',
                    background: 'rgba(14,32,56,0.5)',
                  }}
                >
                  <h3 className="font-display font-semibold text-white mb-5" style={{ fontSize: '1.05rem' }}>
                    Company Information
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon:  Mail,
                        label: 'Email',
                        value: 'contact@magnova.asia',
                        href:  'mailto:contact@magnova.asia',
                      },
                      {
                        icon:  Globe,
                        label: 'Website',
                        value: 'www.magnova.asia',
                        href:  'https://www.magnova.asia',
                      },
                      {
                        icon:  MapPin,
                        label: 'Location',
                        value: 'India',
                        href:  undefined,
                      },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.label} className="flex items-start gap-3">
                          <div
                            className="w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ background: 'rgba(201,150,58,0.08)', border: '1px solid rgba(201,150,58,0.15)' }}
                          >
                            <Icon size={13} style={{ color: '#C9963A' }} aria-hidden="true" />
                          </div>
                          <div>
                            <p className="text-xs mb-0.5" style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.06em' }}>
                              {item.label}
                            </p>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="text-sm transition-colors hover:text-white"
                                style={{ color: 'rgba(255,255,255,0.65)' }}
                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                                {item.value}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="rounded-sm overflow-hidden" style={{ position: 'relative' }}>
                  <MapPlaceholder />
                </div>

                {/* Response note */}
                <div
                  className="rounded-sm p-5"
                  style={{
                    border:     '1px solid rgba(255,255,255,0.06)',
                    background: 'rgba(255,255,255,0.02)',
                  }}
                >
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    We aim to respond to all inquiries within 2–3 business days. For urgent matters,
                    please indicate priority in your message.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
