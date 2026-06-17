import type { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactMain from '@/components/contact/ContactMain';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Connect with Magnova regarding partnership opportunities, business inquiries, or investor discussions. Reach us at contact@magnova.asia.',
  openGraph: {
    title: 'Get In Touch — Magnova',
    description:
      'Connect with Magnova regarding partnership opportunities, business inquiries, or investor discussions.',
    url: 'https://www.magnova.asia/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactMain />
    </>
  );
}
