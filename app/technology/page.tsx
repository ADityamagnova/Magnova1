import type { Metadata } from 'next';
import TechHero from '@/components/technology/TechHero';
import MagnetTechnology from '@/components/technology/MagnetTechnology';
import ProductPortfolio from '@/components/technology/ProductPortfolio';
import ApplicationsGrid from '@/components/technology/ApplicationsGrid';
import EngineeringPhilosophy from '@/components/technology/EngineeringPhilosophy';
import HomeCTA from '@/components/home/HomeCTA';

export const metadata: Metadata = {
  title: 'Technology & Applications',
  description:
    'Magnova intends to develop advanced NdFeB permanent magnet manufacturing capabilities designed to meet the evolving needs of high-performance industrial applications.',
  openGraph: {
    title: 'Technology & Applications — Magnova',
    description:
      'Developing advanced rare-earth permanent magnet solutions for next-generation industries.',
    url: 'https://www.magnova.asia/technology',
  },
};

export default function TechnologyPage() {
  return (
    <>
      <TechHero />
      <MagnetTechnology />
      <ProductPortfolio />
      <ApplicationsGrid />
      <EngineeringPhilosophy />
      <HomeCTA />
    </>
  );
}
