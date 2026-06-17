import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import MissionSection from '@/components/about/MissionSection';
import WhyItMatters from '@/components/about/WhyItMatters';
import OurApproach from '@/components/about/OurApproach';
import FutureOutlook from '@/components/about/FutureOutlook';
import HomeCTA from '@/components/home/HomeCTA';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Magnova was founded with the belief that critical industrial technologies require strong domestic manufacturing foundations. Learn about our mission, approach, and future outlook.',
  openGraph: {
    title: 'About Magnova — Mission, Approach & Vision',
    description:
      'Magnova is developing advanced rare-earth permanent magnet capabilities to serve high-growth strategic sectors.',
    url: 'https://www.magnova.asia/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <WhyItMatters />
      <OurApproach />
      <FutureOutlook />
      <HomeCTA />
    </>
  );
}
