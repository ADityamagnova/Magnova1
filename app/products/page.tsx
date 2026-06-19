import type { Metadata } from 'next';
import ProductsHero from '@/components/products/ProductsHero';
import ProductsMain from '@/components/products/ProductsMain';
import HomeCTA from '@/components/home/HomeCTA';

export const metadata: Metadata = {
  title: 'Products — Sintered NdFeB Magnets',
  description:
    'Magnova offers high-performance sintered NdFeB permanent magnets across all grade series — N, M, H, SH, UH, EH, AH — for EV, wind energy, defense, and industrial automation.',
  keywords: [
    'NdFeB magnets',
    'sintered neodymium magnets',
    'grade specifications',
    'BH curves',
    'permanent magnets India',
    'rare earth magnets',
    'EV magnets',
    'wind turbine generators',
  ],
  openGraph: {
    title: 'Products — Sintered NdFeB Magnets | Magnova',
    description:
      'Explore our full portfolio of high-performance sintered NdFeB magnet grades, physical properties, coatings, and BH curves.',
    url: 'https://www.magnova.asia/products',
  },
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductsMain />
      <HomeCTA />
    </>
  );
}
