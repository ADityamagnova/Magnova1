import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import StrategicImportance from '@/components/home/StrategicImportance';
import IndustriesSection from '@/components/home/IndustriesSection';
import VisionSection from '@/components/home/VisionSection';
import HomeCTA from '@/components/home/HomeCTA';

export const metadata: Metadata = {
  title: 'Magnova — Advanced Permanent Magnet Manufacturing',
  description:
    'Magnova is developing next-generation rare-earth permanent magnet manufacturing capabilities to support strategic industries including electric mobility, clean energy, defense, and advanced industrial systems.',
  openGraph: {
    title: 'Magnova — Advanced Permanent Magnet Manufacturing',
    description:
      'Building next-generation rare-earth magnet manufacturing capabilities for strategic industries.',
    url: 'https://www.magnova.asia',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StrategicImportance />
      <IndustriesSection />
      <VisionSection />
      <HomeCTA />
    </>
  );
}
