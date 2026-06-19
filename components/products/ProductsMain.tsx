'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Animate';
import { Info, HelpCircle, ArrowRight, ShieldCheck, Cpu, Zap, Wind, Compass, Settings } from 'lucide-react';

// Interfaces
interface GradeData {
  grade: string;
  brMin: number;
  brMax: number;
  brKgsMin: number;
  brKgsMax: number;
  hcbKamMin: number;
  hcbKoeMin: number;
  hcjKamMin: number;
  hcjKoeMin: number;
  bhMaxKjMin: number;
  bhMaxKjMax: number;
  bhMaxMgoeMin: number;
  bhMaxMgoeMax: number;
}

interface SeriesGroup {
  name: string;
  temp: string;
  borderColor: string;
  grades: GradeData[];
}

// Data Definition
const seriesData: SeriesGroup[] = [
  {
    name: 'Series N',
    temp: 'Standard, Max 80°C',
    borderColor: '#4a90d9', // Blue
    grades: [
      { grade: 'N35', brMin: 1.17, brMax: 1.22, brKgsMin: 11.7, brKgsMax: 12.2, hcbKamMin: 876, hcbKoeMin: 11, hcjKamMin: 955, hcjKoeMin: 12, bhMaxKjMin: 263, bhMaxKjMax: 287, bhMaxMgoeMin: 33, bhMaxMgoeMax: 36 },
      { grade: 'N38', brMin: 1.22, brMax: 1.27, brKgsMin: 12.2, brKgsMax: 12.7, hcbKamMin: 876, hcbKoeMin: 11, hcjKamMin: 955, hcjKoeMin: 12, bhMaxKjMin: 287, bhMaxKjMax: 310, bhMaxMgoeMin: 36, bhMaxMgoeMax: 39 },
      { grade: 'N40', brMin: 1.25, brMax: 1.30, brKgsMin: 12.5, brKgsMax: 13.0, hcbKamMin: 876, hcbKoeMin: 11, hcjKamMin: 955, hcjKoeMin: 12, bhMaxKjMin: 302, bhMaxKjMax: 318, bhMaxMgoeMin: 38, bhMaxMgoeMax: 40 },
      { grade: 'N42', brMin: 1.28, brMax: 1.33, brKgsMin: 12.8, brKgsMax: 13.3, hcbKamMin: 876, hcbKoeMin: 11, hcjKamMin: 955, hcjKoeMin: 12, bhMaxKjMin: 318, bhMaxKjMax: 334, bhMaxMgoeMin: 40, bhMaxMgoeMax: 42 },
      { grade: 'N45', brMin: 1.32, brMax: 1.38, brKgsMin: 13.2, brKgsMax: 13.8, hcbKamMin: 876, hcbKoeMin: 11, hcjKamMin: 955, hcjKoeMin: 12, bhMaxKjMin: 342, bhMaxKjMax: 358, bhMaxMgoeMin: 43, bhMaxMgoeMax: 45 },
      { grade: 'N48', brMin: 1.37, brMax: 1.43, brKgsMin: 13.7, brKgsMax: 14.3, hcbKamMin: 836, hcbKoeMin: 10.5, hcjKamMin: 955, hcjKoeMin: 12, bhMaxKjMin: 358, bhMaxKjMax: 382, bhMaxMgoeMin: 45, bhMaxMgoeMax: 48 },
      { grade: 'N50', brMin: 1.40, brMax: 1.45, brKgsMin: 14.0, brKgsMax: 14.5, hcbKamMin: 836, hcbKoeMin: 10.5, hcjKamMin: 955, hcjKoeMin: 12, bhMaxKjMin: 374, bhMaxKjMax: 398, bhMaxMgoeMin: 47, bhMaxMgoeMax: 50 },
      { grade: 'N52', brMin: 1.42, brMax: 1.48, brKgsMin: 14.2, brKgsMax: 14.8, hcbKamMin: 836, hcbKoeMin: 10.5, hcjKamMin: 955, hcjKoeMin: 12, bhMaxKjMin: 390, bhMaxKjMax: 414, bhMaxMgoeMin: 49, bhMaxMgoeMax: 52 },
    ]
  },
  {
    name: 'Series M',
    temp: 'Medium, Max 100°C',
    borderColor: '#5cb85c', // Green
    grades: [
      { grade: 'N35M', brMin: 1.17, brMax: 1.22, brKgsMin: 11.7, brKgsMax: 12.2, hcbKamMin: 876, hcbKoeMin: 11, hcjKamMin: 1114, hcjKoeMin: 14, bhMaxKjMin: 263, bhMaxKjMax: 287, bhMaxMgoeMin: 33, bhMaxMgoeMax: 36 },
      { grade: 'N38M', brMin: 1.22, brMax: 1.27, brKgsMin: 12.2, brKgsMax: 12.7, hcbKamMin: 876, hcbKoeMin: 11, hcjKamMin: 1114, hcjKoeMin: 14, bhMaxKjMin: 287, bhMaxKjMax: 310, bhMaxMgoeMin: 36, bhMaxMgoeMax: 39 },
      { grade: 'N40M', brMin: 1.25, brMax: 1.30, brKgsMin: 12.5, brKgsMax: 13.0, hcbKamMin: 900, hcbKoeMin: 11.3, hcjKamMin: 1114, hcjKoeMin: 14, bhMaxKjMin: 302, bhMaxKjMax: 318, bhMaxMgoeMin: 38, bhMaxMgoeMax: 40 },
      { grade: 'N42M', brMin: 1.28, brMax: 1.33, brKgsMin: 12.8, brKgsMax: 13.3, hcbKamMin: 923, hcbKoeMin: 11.6, hcjKamMin: 1114, hcjKoeMin: 14, bhMaxKjMin: 318, bhMaxKjMax: 334, bhMaxMgoeMin: 40, bhMaxMgoeMax: 42 },
      { grade: 'N45M', brMin: 1.32, brMax: 1.38, brKgsMin: 13.2, brKgsMax: 13.8, hcbKamMin: 955, hcbKoeMin: 12, hcjKamMin: 1114, hcjKoeMin: 14, bhMaxKjMin: 342, bhMaxKjMax: 358, bhMaxMgoeMin: 43, bhMaxMgoeMax: 45 },
      { grade: 'N48M', brMin: 1.37, brMax: 1.43, brKgsMin: 13.7, brKgsMax: 14.3, hcbKamMin: 995, hcbKoeMin: 12.5, hcjKamMin: 1114, hcjKoeMin: 14, bhMaxKjMin: 358, bhMaxKjMax: 382, bhMaxMgoeMin: 45, bhMaxMgoeMax: 48 },
      { grade: 'N50M', brMin: 1.40, brMax: 1.45, brKgsMin: 14.0, brKgsMax: 14.5, hcbKamMin: 1027, hcbKoeMin: 12.9, hcjKamMin: 1114, hcjKoeMin: 14, bhMaxKjMin: 374, bhMaxKjMax: 398, bhMaxMgoeMin: 47, bhMaxMgoeMax: 50 },
    ]
  },
  {
    name: 'Series H',
    temp: 'High, Max 120°C',
    borderColor: '#f0ad4e', // Amber
    grades: [
      { grade: 'N33H', brMin: 1.13, brMax: 1.18, brKgsMin: 11.3, brKgsMax: 11.8, hcbKamMin: 836, hcbKoeMin: 10.5, hcjKamMin: 1353, hcjKoeMin: 17, bhMaxKjMin: 247, bhMaxKjMax: 263, bhMaxMgoeMin: 31, bhMaxMgoeMax: 33 },
      { grade: 'N35H', brMin: 1.17, brMax: 1.22, brKgsMin: 11.7, brKgsMax: 12.2, hcbKamMin: 868, hcbKoeMin: 10.9, hcjKamMin: 1353, hcjKoeMin: 17, bhMaxKjMin: 263, bhMaxKjMax: 287, bhMaxMgoeMin: 33, bhMaxMgoeMax: 36 },
      { grade: 'N38H', brMin: 1.22, brMax: 1.27, brKgsMin: 12.2, brKgsMax: 12.7, hcbKamMin: 899, hcbKoeMin: 11.3, hcjKamMin: 1353, hcjKoeMin: 17, bhMaxKjMin: 287, bhMaxKjMax: 310, bhMaxMgoeMin: 36, bhMaxMgoeMax: 39 },
      { grade: 'N40H', brMin: 1.25, brMax: 1.30, brKgsMin: 12.5, brKgsMax: 13.0, hcbKamMin: 915, hcbKoeMin: 11.5, hcjKamMin: 1353, hcjKoeMin: 17, bhMaxKjMin: 302, bhMaxKjMax: 318, bhMaxMgoeMin: 38, bhMaxMgoeMax: 40 },
      { grade: 'N42H', brMin: 1.28, brMax: 1.33, brKgsMin: 12.8, brKgsMax: 13.3, hcbKamMin: 939, hcbKoeMin: 11.8, hcjKamMin: 1353, hcjKoeMin: 17, bhMaxKjMin: 318, bhMaxKjMax: 334, bhMaxMgoeMin: 40, bhMaxMgoeMax: 42 },
      { grade: 'N45H', brMin: 1.32, brMax: 1.38, brKgsMin: 13.2, brKgsMax: 13.8, hcbKamMin: 963, hcbKoeMin: 12.1, hcjKamMin: 1353, hcjKoeMin: 17, bhMaxKjMin: 342, bhMaxKjMax: 358, bhMaxMgoeMin: 43, bhMaxMgoeMax: 45 },
      { grade: 'N48H', brMin: 1.37, brMax: 1.43, brKgsMin: 13.7, brKgsMax: 14.3, hcbKamMin: 1003, hcbKoeMin: 12.6, hcjKamMin: 1274, hcjKoeMin: 16, bhMaxKjMin: 358, bhMaxKjMax: 382, bhMaxMgoeMin: 45, bhMaxMgoeMax: 48 },
    ]
  },
  {
    name: 'Series SH',
    temp: 'Super High, Max 150°C',
    borderColor: '#e05555', // Red-orange
    grades: [
      { grade: 'N30SH', brMin: 1.08, brMax: 1.13, brKgsMin: 10.8, brKgsMax: 11.3, hcbKamMin: 796, hcbKoeMin: 10, hcjKamMin: 1592, hcjKoeMin: 20, bhMaxKjMin: 223, bhMaxKjMax: 247, bhMaxMgoeMin: 28, bhMaxMgoeMax: 31 },
      { grade: 'N33SH', brMin: 1.13, brMax: 1.18, brKgsMin: 11.3, brKgsMax: 11.8, hcbKamMin: 836, hcbKoeMin: 10.5, hcjKamMin: 1592, hcjKoeMin: 20, bhMaxKjMin: 247, bhMaxKjMax: 263, bhMaxMgoeMin: 31, bhMaxMgoeMax: 33 },
      { grade: 'N35SH', brMin: 1.17, brMax: 1.22, brKgsMin: 11.7, brKgsMax: 12.2, hcbKamMin: 868, hcbKoeMin: 10.9, hcjKamMin: 1592, hcjKoeMin: 20, bhMaxKjMin: 263, bhMaxKjMax: 287, bhMaxMgoeMin: 33, bhMaxMgoeMax: 36 },
      { grade: 'N38SH', brMin: 1.22, brMax: 1.27, brKgsMin: 12.2, brKgsMax: 12.7, hcbKamMin: 899, hcbKoeMin: 11.3, hcjKamMin: 1592, hcjKoeMin: 20, bhMaxKjMin: 287, bhMaxKjMax: 310, bhMaxMgoeMin: 36, bhMaxMgoeMax: 39 },
      { grade: 'N40SH', brMin: 1.25, brMax: 1.30, brKgsMin: 12.5, brKgsMax: 13.0, hcbKamMin: 915, hcbKoeMin: 11.5, hcjKamMin: 1592, hcjKoeMin: 20, bhMaxKjMin: 302, bhMaxKjMax: 318, bhMaxMgoeMin: 38, bhMaxMgoeMax: 40 },
      { grade: 'N42SH', brMin: 1.28, brMax: 1.33, brKgsMin: 12.8, brKgsMax: 13.3, hcbKamMin: 939, hcbKoeMin: 11.8, hcjKamMin: 1592, hcjKoeMin: 20, bhMaxKjMin: 318, bhMaxKjMax: 334, bhMaxMgoeMin: 40, bhMaxMgoeMax: 42 },
      { grade: 'N45SH', brMin: 1.32, brMax: 1.38, brKgsMin: 13.2, brKgsMax: 13.8, hcbKamMin: 963, hcbKoeMin: 12.1, hcjKamMin: 1592, hcjKoeMin: 20, bhMaxKjMin: 342, bhMaxKjMax: 358, bhMaxMgoeMin: 43, bhMaxMgoeMax: 45 },
    ]
  },
  {
    name: 'Series UH',
    temp: 'Ultra High, Max 180°C',
    borderColor: '#9b59b6', // Purple
    grades: [
      { grade: 'N28UH', brMin: 1.02, brMax: 1.08, brKgsMin: 10.2, brKgsMax: 10.8, hcbKamMin: 756, hcbKoeMin: 9.5, hcjKamMin: 1990, hcjKoeMin: 25, bhMaxKjMin: 207, bhMaxKjMax: 223, bhMaxMgoeMin: 26, bhMaxMgoeMax: 28 },
      { grade: 'N30UH', brMin: 1.08, brMax: 1.13, brKgsMin: 10.8, brKgsMax: 11.3, hcbKamMin: 796, hcbKoeMin: 10, hcjKamMin: 1990, hcjKoeMin: 25, bhMaxKjMin: 223, bhMaxKjMax: 247, bhMaxMgoeMin: 28, bhMaxMgoeMax: 31 },
      { grade: 'N33UH', brMin: 1.13, brMax: 1.18, brKgsMin: 11.3, brKgsMax: 11.8, hcbKamMin: 836, hcbKoeMin: 10.5, hcjKamMin: 1990, hcjKoeMin: 25, bhMaxKjMin: 247, bhMaxKjMax: 263, bhMaxMgoeMin: 31, bhMaxMgoeMax: 33 },
      { grade: 'N35UH', brMin: 1.17, brMax: 1.22, brKgsMin: 11.7, brKgsMax: 12.2, hcbKamMin: 868, hcbKoeMin: 10.9, hcjKamMin: 1990, hcjKoeMin: 25, bhMaxKjMin: 263, bhMaxKjMax: 287, bhMaxMgoeMin: 33, bhMaxMgoeMax: 36 },
      { grade: 'N38UH', brMin: 1.22, brMax: 1.27, brKgsMin: 12.2, brKgsMax: 12.7, hcbKamMin: 899, hcbKoeMin: 11.3, hcjKamMin: 1990, hcjKoeMin: 25, bhMaxKjMin: 287, bhMaxKjMax: 310, bhMaxMgoeMin: 36, bhMaxMgoeMax: 39 },
      { grade: 'N40UH', brMin: 1.25, brMax: 1.30, brKgsMin: 12.5, brKgsMax: 13.0, hcbKamMin: 915, hcbKoeMin: 11.5, hcjKamMin: 1990, hcjKoeMin: 25, bhMaxKjMin: 302, bhMaxKjMax: 318, bhMaxMgoeMin: 38, bhMaxMgoeMax: 40 },
    ]
  },
  {
    name: 'Series EH',
    temp: 'Extreme High, Max 200°C',
    borderColor: '#e74c3c', // Deep red
    grades: [
      { grade: 'N28EH', brMin: 1.02, brMax: 1.08, brKgsMin: 10.2, brKgsMax: 10.8, hcbKamMin: 756, hcbKoeMin: 9.5, hcjKamMin: 2388, hcjKoeMin: 30, bhMaxKjMin: 207, bhMaxKjMax: 223, bhMaxMgoeMin: 26, bhMaxMgoeMax: 28 },
      { grade: 'N30EH', brMin: 1.08, brMax: 1.13, brKgsMin: 10.8, brKgsMax: 11.3, hcbKamMin: 796, hcbKoeMin: 10, hcjKamMin: 2388, hcjKoeMin: 30, bhMaxKjMin: 223, bhMaxKjMax: 247, bhMaxMgoeMin: 28, bhMaxMgoeMax: 31 },
      { grade: 'N33EH', brMin: 1.13, brMax: 1.18, brKgsMin: 11.3, brKgsMax: 11.8, hcbKamMin: 836, hcbKoeMin: 10.5, hcjKamMin: 2388, hcjKoeMin: 30, bhMaxKjMin: 247, bhMaxKjMax: 263, bhMaxMgoeMin: 31, bhMaxMgoeMax: 33 },
      { grade: 'N35EH', brMin: 1.17, brMax: 1.22, brKgsMin: 11.7, brKgsMax: 12.2, hcbKamMin: 868, hcbKoeMin: 10.9, hcjKamMin: 2388, hcjKoeMin: 30, bhMaxKjMin: 263, bhMaxKjMax: 287, bhMaxMgoeMin: 33, bhMaxMgoeMax: 36 },
      { grade: 'N38EH', brMin: 1.22, brMax: 1.27, brKgsMin: 12.2, brKgsMax: 12.7, hcbKamMin: 899, hcbKoeMin: 11.3, hcjKamMin: 2388, hcjKoeMin: 30, bhMaxKjMin: 287, bhMaxKjMax: 310, bhMaxMgoeMin: 36, bhMaxMgoeMax: 39 },
    ]
  },
  {
    name: 'Series AH',
    temp: 'Abnormal High, Max 230°C',
    borderColor: '#c0392b', // Crimson
    grades: [
      { grade: 'N28AH', brMin: 1.02, brMax: 1.08, brKgsMin: 10.2, brKgsMax: 10.8, hcbKamMin: 756, hcbKoeMin: 9.5, hcjKamMin: 2627, hcjKoeMin: 33, bhMaxKjMin: 207, bhMaxKjMax: 223, bhMaxMgoeMin: 26, bhMaxMgoeMax: 28 },
      { grade: 'N30AH', brMin: 1.08, brMax: 1.13, brKgsMin: 10.8, brKgsMax: 11.3, hcbKamMin: 796, hcbKoeMin: 10, hcjKamMin: 2627, hcjKoeMin: 33, bhMaxKjMin: 223, bhMaxKjMax: 247, bhMaxMgoeMin: 28, bhMaxMgoeMax: 31 },
      { grade: 'N33AH', brMin: 1.13, brMax: 1.18, brKgsMin: 11.3, brKgsMax: 11.8, hcbKamMin: 836, hcbKoeMin: 10.5, hcjKamMin: 2627, hcjKoeMin: 33, bhMaxKjMin: 247, bhMaxKjMax: 263, bhMaxMgoeMin: 31, bhMaxMgoeMax: 33 },
      { grade: 'N35AH', brMin: 1.17, brMax: 1.22, brKgsMin: 11.7, brKgsMax: 12.2, hcbKamMin: 868, hcbKoeMin: 10.9, hcjKamMin: 2627, hcjKoeMin: 33, bhMaxKjMin: 263, bhMaxKjMax: 287, bhMaxMgoeMin: 33, bhMaxMgoeMax: 36 },
    ]
  }
];

const suffixKeyData = [
  { suffix: '(none)', class: 'N — Standard', temp: '80°C', hcj: '≥ 955 kA/m (12 kOe)' },
  { suffix: 'M', class: 'Medium', temp: '100°C', hcj: '≥ 1114 kA/m (14 kOe)' },
  { suffix: 'H', class: 'High', temp: '120°C', hcj: '≥ 1353 kA/m (17 kOe)' },
  { suffix: 'SH', class: 'Super High', temp: '150°C', hcj: '≥ 1592 kA/m (20 kOe)' },
  { suffix: 'UH', class: 'Ultra High', temp: '180°C', hcj: '≥ 1990 kA/m (25 kOe)' },
  { suffix: 'EH', class: 'Extreme High', temp: '200°C', hcj: '≥ 2388 kA/m (30 kOe)' },
  { suffix: 'AH', class: 'Abnormal High', temp: '230°C', hcj: '≥ 2627 kA/m (33 kOe)' },
];

const physicalProperties = [
  { property: 'Density', value: '7.4 – 7.6 g/cm³' },
  { property: 'Vickers Hardness', value: '500 – 650 HV' },
  { property: 'Flexural Strength', value: '200 – 300 MPa' },
  { property: 'Compressive Strength', value: '700 – 1000 MPa' },
  { property: 'Young\'s Modulus', value: '150 – 170 GPa' },
  { property: 'Electrical Resistivity', value: '110 – 170 μΩ·cm' },
  { property: 'Thermal Conductivity', value: '7 – 9 W/(m·K)' },
  { property: 'Curie Temperature', value: '310 – 340°C' },
  { property: 'Recoil Permeability (μrec)', value: '1.03 – 1.10' },
  { property: 'Br Temperature Coefficient (α)', value: '-0.09% to -0.13% /°C' },
  { property: 'Hcj Temperature Coefficient (β)', value: '-0.40% to -0.70% /°C' },
];

const surfaceCoatings = [
  { coating: 'Nickel (Ni-Cu-Ni)', thickness: '10 – 25', saltSpray: '48 – 96', temp: '200', appearance: 'Silver metallic' },
  { coating: 'Zinc (Zn)', thickness: '5 – 20', saltSpray: '24 – 72', temp: '200', appearance: 'Silver/blue' },
  { coating: 'Epoxy', thickness: '10 – 40', saltSpray: '200 – 500', temp: '150', appearance: 'Black matte' },
  { coating: 'Ni + Epoxy', thickness: '15 – 35', saltSpray: '500 – 1000', temp: '150', appearance: 'Black' },
  { coating: 'Passivation', thickness: '1 – 5', saltSpray: '< 24', temp: '250', appearance: 'Silver' },
  { coating: 'Gold (Au)', thickness: '1 – 3', saltSpray: '> 1000', temp: '150', appearance: 'Gold' },
  { coating: 'Parylene', thickness: '5 – 30', saltSpray: '> 500', temp: '125', appearance: 'Transparent' },
  { coating: 'Phosphate', thickness: '1 – 5', saltSpray: '< 24', temp: '250', appearance: 'Grey matte' },
];

// Curve definitions for interactive SVGs
interface TempCurve {
  label: string;
  color: string;
  Br: number;
  Hcj: number;
  p: number; // squareness power
}

interface BHGradeCurve {
  grade: string;
  maxTemp: string;
  xMax: number; // Max value on X-axis (kOe)
  curves: TempCurve[];
}

const bhCurvesData: BHGradeCurve[] = [
  {
    grade: 'Grade N42',
    maxTemp: '80°C max',
    xMax: 14,
    curves: [
      { label: '20°C', color: '#c9a84c', Br: 13.1, Hcj: 12.5, p: 10 },
      { label: '50°C', color: '#4a90d9', Br: 12.6, Hcj: 10.8, p: 8 },
      { label: '80°C', color: '#e05555', Br: 12.1, Hcj: 9.2, p: 6 },
    ],
  },
  {
    grade: 'Grade N42M',
    maxTemp: '100°C max',
    xMax: 16,
    curves: [
      { label: '20°C', color: '#c9a84c', Br: 13.1, Hcj: 14.5, p: 11 },
      { label: '60°C', color: '#4a90d9', Br: 12.4, Hcj: 12.1, p: 9 },
      { label: '100°C', color: '#e05555', Br: 11.8, Hcj: 9.8, p: 7 },
    ],
  },
  {
    grade: 'Grade N40H',
    maxTemp: '120°C max',
    xMax: 20,
    curves: [
      { label: '20°C', color: '#c9a84c', Br: 12.8, Hcj: 17.5, p: 12 },
      { label: '80°C', color: '#4a90d9', Br: 11.7, Hcj: 13.2, p: 9 },
      { label: '120°C', color: '#e05555', Br: 10.9, Hcj: 10.2, p: 7 },
    ],
  },
  {
    grade: 'Grade N38SH',
    maxTemp: '150°C max',
    xMax: 23,
    curves: [
      { label: '20°C', color: '#c9a84c', Br: 12.5, Hcj: 20.2, p: 12 },
      { label: '100°C', color: '#4a90d9', Br: 11.2, Hcj: 13.9, p: 9 },
      { label: '150°C', color: '#e05555', Br: 10.1, Hcj: 10.5, p: 7 },
    ],
  },
  {
    grade: 'Grade N35UH',
    maxTemp: '180°C max',
    xMax: 28,
    curves: [
      { label: '20°C', color: '#c9a84c', Br: 12.0, Hcj: 25.1, p: 13 },
      { label: '120°C', color: '#4a90d9', Br: 10.4, Hcj: 15.5, p: 10 },
      { label: '180°C', color: '#e05555', Br: 9.2, Hcj: 11.2, p: 7 },
    ],
  },
  {
    grade: 'Grade N30EH',
    maxTemp: '200°C max',
    xMax: 33,
    curves: [
      { label: '20°C', color: '#c9a84c', Br: 11.1, Hcj: 30.2, p: 14 },
      { label: '120°C', color: '#4a90d9', Br: 9.7, Hcj: 18.5, p: 10 },
      { label: '200°C', color: '#e05555', Br: 8.3, Hcj: 12.1, p: 7 },
    ],
  },
];

const sectorsData = [
  {
    id: 'automotive',
    icon: Cpu,
    title: 'Automotive / EV',
    description: 'High-coercivity grades critical for traction motors, electric power steering (EPS), ABS sensors, and active safety systems.',
    specs: 'Recommended: N40H to N45SH',
    details: ['Traction Motors', 'EPS Systems', 'ABS Sensors', 'Active Safety Systems']
  },
  {
    id: 'wind',
    icon: Wind,
    title: 'Wind & Renewable Energy',
    description: 'Extremely reliable, corrosion-resistant large-block magnets for direct-drive offshore generators and clean energy infrastructure.',
    specs: 'Recommended: N38SH to N42UH',
    details: ['Direct-drive Generators', 'Offshore Wind Turbines', 'Hydroelectric Alternators', 'Smart Grid Infrastructure']
  },
  {
    id: 'defense',
    icon: ShieldCheck,
    title: 'Defense & Aerospace',
    description: 'Stabilized UH and EH grades designed for high-stress aerospace actuators, precise gyroscopes, and defense guidance electronics.',
    specs: 'Recommended: N35UH to N38EH',
    details: ['Aerospace Actuators', 'Guidance Systems', 'High-Speed Alternators', 'Stabilized Gyroscopes']
  },
  {
    id: 'industrial',
    icon: Settings,
    title: 'Industrial Automation',
    description: 'High-torque density and low cogging magnets optimized for industrial servo motors, linear drives, and advanced robotic joints.',
    specs: 'Recommended: N40H to N45H',
    details: ['Servo Motors', 'Linear Drives', 'Collaborative Robotics', 'Factory Automation']
  },
  {
    id: 'appliances',
    icon: Zap,
    title: 'Home Appliances',
    description: 'Cost-efficient, high-efficiency medium-temperature series magnets for smart HVAC compressor motors and variable frequency drives.',
    specs: 'Recommended: N35M to N42M',
    details: ['Compressor Motors', 'HVAC Fans', 'Variable Frequency Pumps', 'Smart Home Systems']
  },
  {
    id: 'electronics',
    icon: Compass,
    title: 'Consumer Electronics (3C)',
    description: 'High remanence standard series magnets crafted for ultra-thin smart speakers, precise camera voice coil motors (VCM), and compact sensors.',
    specs: 'Recommended: N48 to N52',
    details: ['Micro Speakers', 'Voice Coil Motors (VCM)', 'Haptic Actuators', 'Proximity Sensors']
  }
];

export default function ProductsMain() {
  const [activeTab, setActiveTab] = useState<'specs' | 'bh' | 'automotive' | 'wind' | 'defense' | 'industrial'>('specs');
  const [hoveredCoords, setHoveredCoords] = useState<{ [key: string]: { x: number; y: number; valX: number; valY: number } | null }>({});
  const tabRef = useRef<HTMLDivElement>(null);

  // Math helper to generate SVG path coordinates
  const getPath = (Br: number, Hcj: number, p: number, xMax: number) => {
    const points: string[] = [];
    const steps = 60;
    
    for (let i = 0; i <= steps; i++) {
      const pct = i / steps;
      const xVal = pct * Hcj;
      if (xVal > xMax) break;
      // Flat curve near zero, then bends sharply down at Hcj
      const yVal = Br * (1 - Math.pow(xVal / Hcj, p));
      
      // Map to local SVG coordinates (width = 300, height = 200)
      const xSvg = (xVal / xMax) * 300;
      const ySvg = 200 - (yVal / 16) * 200;
      
      points.push(`${xSvg.toFixed(1)},${ySvg.toFixed(1)}`);
    }
    return `M ${points.join(' L ')}`;
  };

  const handleMouseMove = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    gradeKey: string,
    gradeCurve: BHGradeCurve
  ) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - 40; // Subtract padding-left
    const mouseY = e.clientY - rect.top - 20;  // Subtract padding-top

    if (mouseX >= 0 && mouseX <= 300) {
      // Find closest curve points
      const valX = (mouseX / 300) * gradeCurve.xMax;
      
      // Calculate active curve Y value (e.g. 20°C curve, first one in array)
      const primaryCurve = gradeCurve.curves[0];
      const valY = primaryCurve.Br * (1 - Math.pow(Math.min(valX / primaryCurve.Hcj, 1), primaryCurve.p));
      const targetYSvg = 200 - (valY / 16) * 200;

      setHoveredCoords((prev) => ({
        ...prev,
        [gradeKey]: {
          x: mouseX + 40,
          y: targetYSvg + 20,
          valX,
          valY,
        },
      }));
    } else {
      setHoveredCoords((prev) => ({ ...prev, [gradeKey]: null }));
    }
  };

  const handleMouseLeave = (gradeKey: string) => {
    setHoveredCoords((prev) => ({ ...prev, [gradeKey]: null }));
  };

  return (
    <section className="bg-[#060f1c] relative z-20">
      {/* Sticky Tab Navigation Bar */}
      <div 
        ref={tabRef}
        className="sticky top-[var(--nav-h)] z-30 w-full border-y border-[rgba(201,150,58,0.15)] bg-[#060f1c]/90 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 overflow-x-auto">
          <nav className="flex space-x-1 min-w-[760px] py-3 justify-between" aria-label="Products Section Tabs">
            {[
              { id: 'specs', label: 'Grade Specifications' },
              { id: 'bh', label: 'BH Curves' },
              { id: 'automotive', label: 'Automotive' },
              { id: 'wind', label: 'Wind & Energy' },
              { id: 'defense', label: 'Defense & Aerospace' },
              { id: 'industrial', label: 'Industrial Automation' }
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as any);
                    // Smooth scroll tab bar into view
                    if (tabRef.current) {
                      window.scrollTo({
                        top: tabRef.current.offsetTop - 80,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className={`px-5 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'bg-[#C9963A] text-[#060f1c] shadow-[0_0_16px_rgba(201,150,58,0.25)]'
                      : 'text-[rgba(255,255,255,0.65)] hover:text-white border border-[rgba(255,255,255,0.08)] hover:border-[rgba(201,150,58,0.3)] bg-transparent'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <AnimatePresence mode="wait">
          {/* TAB 1: GRADE SPECIFICATIONS */}
          {activeTab === 'specs' && (
            <motion.div
              key="specs-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-16"
            >
              {/* Header */}
              <div className="max-w-3xl">
                <span className="eyebrow block mb-3">Performance Parameters</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  Sintered NdFeB Magnets — <span className="gold-text italic">Standard Grades</span>
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  All values measured at 20°C (68°F). Minimum values unless stated. Units: Br in Tesla (T) and kGs; 
                  Hcb and Hcj in kA/m and kOe; (BH)max in kJ/m³ and MGOe. The grade suffix indicates intrinsic 
                  coercivity class and maximum working temperature. Standard Reference Grades — Performance parameters 
                  at 20°C. Contact us for Magnova-specific lot data.
                </p>
              </div>

              {/* Suffix Key Grid */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-5 flex items-center gap-2">
                  <Info size={16} className="text-[#C9963A]" /> Intrinsic Coercivity Class Suffix Key
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                  {suffixKeyData.map((item, i) => (
                    <div 
                      key={i} 
                      className="bg-[#0b1a2e] border border-[rgba(255,255,255,0.06)] rounded-sm p-4 hover:border-[rgba(201,150,58,0.25)] transition-all duration-300"
                    >
                      <div className="text-base font-bold text-[#C9963A] mb-1">{item.suffix}</div>
                      <div className="text-xs text-white font-medium mb-2">{item.class}</div>
                      <div className="text-[10px] text-muted space-y-1">
                        <div>Max Temp: <span className="text-white">{item.temp}</span></div>
                        <div className="leading-tight">Min Hcj: <br/><span className="text-white">{item.hcj.replace('≥ ', '')}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Specifications Table */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-5 flex items-center gap-2">
                  <Settings size={16} className="text-[#C9963A]" /> Grade Parameters Table
                </h3>
                <div className="overflow-x-auto border border-[rgba(255,255,255,0.07)] rounded-sm">
                  <table className="w-full text-left border-collapse min-w-[1100px]">
                    <thead>
                      <tr className="bg-[#1a2540] border-b border-[rgba(201,150,58,0.15)]">
                        <th className="py-4 px-4 text-[10px] uppercase font-bold tracking-widest text-[#C9963A] border-r border-[rgba(255,255,255,0.04)]" rowSpan={2}>Series</th>
                        <th className="py-4 px-4 text-[10px] uppercase font-bold tracking-widest text-[#C9963A] border-r border-[rgba(255,255,255,0.04)]" rowSpan={2}>Grade</th>
                        <th className="py-2.5 px-4 text-[10px] uppercase font-bold tracking-widest text-[#C9963A] text-center border-b border-[rgba(255,255,255,0.04)] border-r border-[rgba(255,255,255,0.04)]" colSpan={4}>Remanence (Br)</th>
                        <th className="py-2.5 px-4 text-[10px] uppercase font-bold tracking-widest text-[#C9963A] text-center border-b border-[rgba(255,255,255,0.04)] border-r border-[rgba(255,255,255,0.04)]" colSpan={4}>Coercivity</th>
                        <th className="py-2.5 px-4 text-[10px] uppercase font-bold tracking-widest text-[#C9963A] text-center border-b border-[rgba(255,255,255,0.04)]" colSpan={4}>Max Energy Product ((BH)max)</th>
                      </tr>
                      <tr className="bg-[#1a2540]/80 border-b border-[rgba(201,150,58,0.15)]">
                        <th className="py-2.5 px-3 text-[9px] uppercase tracking-wider text-[rgba(255,255,255,0.6)] text-center border-r border-[rgba(255,255,255,0.04)]">T (Min)</th>
                        <th className="py-2.5 px-3 text-[9px] uppercase tracking-wider text-[rgba(255,255,255,0.6)] text-center border-r border-[rgba(255,255,255,0.04)]">T (Max)</th>
                        <th className="py-2.5 px-3 text-[9px] uppercase tracking-wider text-[rgba(255,255,255,0.6)] text-center border-r border-[rgba(255,255,255,0.04)]">kGs (Min)</th>
                        <th className="py-2.5 px-3 text-[9px] uppercase tracking-wider text-[rgba(255,255,255,0.6)] text-center border-r border-[rgba(255,255,255,0.04)]">kGs (Max)</th>
                        
                        <th className="py-2.5 px-3 text-[9px] uppercase tracking-wider text-[rgba(255,255,255,0.6)] text-center border-r border-[rgba(255,255,255,0.04)]">Hcb (kA/m)</th>
                        <th className="py-2.5 px-3 text-[9px] uppercase tracking-wider text-[rgba(255,255,255,0.6)] text-center border-r border-[rgba(255,255,255,0.04)]">Hcb (kOe)</th>
                        <th className="py-2.5 px-3 text-[9px] uppercase tracking-wider text-[rgba(255,255,255,0.6)] text-center border-r border-[rgba(255,255,255,0.04)]">Hcj (kA/m)</th>
                        <th className="py-2.5 px-3 text-[9px] uppercase tracking-wider text-[rgba(255,255,255,0.6)] text-center border-r border-[rgba(255,255,255,0.04)]">Hcj (kOe)</th>
                        
                        <th className="py-2.5 px-3 text-[9px] uppercase tracking-wider text-[rgba(255,255,255,0.6)] text-center border-r border-[rgba(255,255,255,0.04)]">kJ/m³ (Min)</th>
                        <th className="py-2.5 px-3 text-[9px] uppercase tracking-wider text-[rgba(255,255,255,0.6)] text-center border-r border-[rgba(255,255,255,0.04)]">kJ/m³ (Max)</th>
                        <th className="py-2.5 px-3 text-[9px] uppercase tracking-wider text-[rgba(255,255,255,0.6)] text-center border-r border-[rgba(255,255,255,0.04)]">MGOe (Min)</th>
                        <th className="py-2.5 px-3 text-[9px] uppercase tracking-wider text-[rgba(255,255,255,0.6)] text-center">MGOe (Max)</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono text-xs text-[rgba(255,255,255,0.85)]">
                      {seriesData.map((group, groupIdx) => (
                        <optgroup key={groupIdx} label={group.name} className="not-italic">
                          {group.grades.map((grade, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                              <tr 
                                key={grade.grade}
                                className="transition-colors hover:bg-[rgba(201,150,58,0.05)] border-b border-[rgba(255,255,255,0.02)]"
                                style={{
                                  backgroundColor: isEven ? '#0d1526' : '#0f1a30',
                                  borderLeft: `3px solid ${group.borderColor}`
                                }}
                              >
                                {idx === 0 && (
                                  <td 
                                    className="py-3 px-4 font-sans font-bold text-white border-r border-[rgba(255,255,255,0.04)] align-middle"
                                    rowSpan={group.grades.length}
                                  >
                                    <div className="flex flex-col">
                                      <span>{group.name}</span>
                                      <span className="text-[9px] font-normal text-muted leading-tight mt-1">{group.temp.split(',')[1] || group.temp}</span>
                                    </div>
                                  </td>
                                )}
                                <td className="py-3 px-4 font-sans font-bold text-white border-r border-[rgba(255,255,255,0.04)]">{grade.grade}</td>
                                
                                <td className="py-3 px-3 text-center border-r border-[rgba(255,255,255,0.04)]">{grade.brMin.toFixed(2)}</td>
                                <td className="py-3 px-3 text-center border-r border-[rgba(255,255,255,0.04)]">{grade.brMax.toFixed(2)}</td>
                                <td className="py-3 px-3 text-center border-r border-[rgba(255,255,255,0.04)]">{grade.brKgsMin.toFixed(1)}</td>
                                <td className="py-3 px-3 text-center border-r border-[rgba(255,255,255,0.04)]">{grade.brKgsMax.toFixed(1)}</td>
                                
                                <td className="py-3 px-3 text-center border-r border-[rgba(255,255,255,0.04)]">{grade.hcbKamMin}</td>
                                <td className="py-3 px-3 text-center border-r border-[rgba(255,255,255,0.04)]">{grade.hcbKoeMin.toFixed(1)}</td>
                                <td className="py-3 px-3 text-center border-r border-[rgba(255,255,255,0.04)]">{grade.hcjKamMin}</td>
                                <td className="py-3 px-3 text-center border-r border-[rgba(255,255,255,0.04)]">{grade.hcjKoeMin}</td>
                                
                                <td className="py-3 px-3 text-center border-r border-[rgba(255,255,255,0.04)]">{grade.bhMaxKjMin}</td>
                                <td className="py-3 px-3 text-center border-r border-[rgba(255,255,255,0.04)]">{grade.bhMaxKjMax}</td>
                                <td className="py-3 px-3 text-center border-r border-[rgba(255,255,255,0.04)]">{grade.bhMaxMgoeMin}</td>
                                <td className="py-3 px-3 text-center">{grade.bhMaxMgoeMax}</td>
                              </tr>
                            );
                          })}
                        </optgroup>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 flex justify-end">
                  <Link 
                    href="/contact" 
                    className="btn-outline px-8 py-3.5 rounded-sm inline-flex items-center gap-2 group"
                  >
                    Request Full Datasheet
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Physical and Coatings Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Physical and Mechanical Properties */}
                <div className="lg:col-span-5 space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2">
                    <Info size={16} className="text-[#C9963A]" /> Physical & Mechanical Properties
                  </h3>
                  <div className="overflow-hidden border border-[rgba(255,255,255,0.07)] rounded-sm">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-[#1a2540] border-b border-[rgba(201,150,58,0.15)] text-[10px] uppercase font-bold tracking-widest text-[#C9963A]">
                          <th className="py-3.5 px-4">Property</th>
                          <th className="py-3.5 px-4">Value</th>
                        </tr>
                      </thead>
                      <tbody className="text-xs text-[rgba(255,255,255,0.8)]">
                        {physicalProperties.map((row, idx) => (
                          <tr 
                            key={row.property}
                            className="border-b border-[rgba(255,255,255,0.02)] transition-colors hover:bg-[rgba(201,150,58,0.02)]"
                            style={{ backgroundColor: idx % 2 === 0 ? '#0d1526' : '#0f1a30' }}
                          >
                            <td className="py-3 px-4 font-semibold text-white">{row.property}</td>
                            <td className="py-3 px-4 font-mono">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Available Surface Coatings */}
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2">
                    <ShieldCheck size={16} className="text-[#C9963A]" /> Available Surface Coatings
                  </h3>
                  <div className="overflow-hidden border border-[rgba(255,255,255,0.07)] rounded-sm">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-[#1a2540] border-b border-[rgba(201,150,58,0.15)] text-[10px] uppercase font-bold tracking-widest text-[#C9963A]">
                          <th className="py-3.5 px-4">Coating</th>
                          <th className="py-3.5 px-4">Thickness (μm)</th>
                          <th className="py-3.5 px-4">Salt Spray (hrs)</th>
                          <th className="py-3.5 px-4">Max Temp (°C)</th>
                          <th className="py-3.5 px-4">Appearance</th>
                        </tr>
                      </thead>
                      <tbody className="text-xs text-[rgba(255,255,255,0.8)]">
                        {surfaceCoatings.map((row, idx) => (
                          <tr 
                            key={row.coating}
                            className="border-b border-[rgba(255,255,255,0.02)] transition-colors hover:bg-[rgba(201,150,58,0.02)]"
                            style={{ backgroundColor: idx % 2 === 0 ? '#0d1526' : '#0f1a30' }}
                          >
                            <td className="py-3 px-4 font-semibold text-white">{row.coating}</td>
                            <td className="py-3 px-4 font-mono">{row.thickness}</td>
                            <td className="py-3 px-4 font-mono">{row.saltSpray}</td>
                            <td className="py-3 px-4 font-mono">{row.temp}</td>
                            <td className="py-3 px-4">{row.appearance}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: BH CURVES */}
          {activeTab === 'bh' && (
            <motion.div
              key="bh-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-10"
            >
              {/* Header */}
              <div className="max-w-3xl">
                <span className="eyebrow block mb-3">Demagnetization Characteristics</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  BH Curves — <span className="gold-text italic">Performance Curves</span>
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  The demagnetization curves (B-H curves) below show how representative sintered NdFeB grades perform across temperature ranges from 20°C to their maximum operating temperatures. The knee point on each curve indicates the threshold below which irreversible demagnetization occurs. Move your cursor across a chart to trace coordinate values.
                </p>
              </div>

              {/* Curves Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {bhCurvesData.map((gradeChart) => {
                  const key = gradeChart.grade.replace(/\s+/g, '-').toLowerCase();
                  const currentHover = hoveredCoords[key];
                  
                  return (
                    <div 
                      key={gradeChart.grade} 
                      className="bg-[#0b1a2e] border border-[rgba(255,255,255,0.06)] rounded-sm p-6 flex flex-col hover:border-[rgba(201,150,58,0.22)] transition-colors duration-300"
                    >
                      {/* Chart Header */}
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <h4 className="text-sm font-bold text-white">{gradeChart.grade}</h4>
                          <span className="text-[10px] text-muted">{gradeChart.maxTemp}</span>
                        </div>
                        {/* Legend */}
                        <div className="flex gap-3">
                          {gradeChart.curves.map((curve) => (
                            <div key={curve.label} className="flex items-center gap-1.5">
                              <span className="w-2.5 h-0.5" style={{ backgroundColor: curve.color }} />
                              <span className="text-[9px] text-[rgba(255,255,255,0.6)]">{curve.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* SVG Plot */}
                      <div className="relative bg-[#060f1c] border border-[rgba(255,255,255,0.03)] rounded-sm p-4 pt-6 flex justify-center items-center select-none overflow-hidden">
                        <svg
                          width="350"
                          height="240"
                          viewBox="0 0 350 240"
                          className="cursor-crosshair"
                          onMouseMove={(e) => handleMouseMove(e, key, gradeChart)}
                          onMouseLeave={() => handleMouseLeave(key)}
                        >
                          {/* Inner plot area is 300x200, offset by X=40, Y=20 */}
                          <g transform="translate(40, 20)">
                            {/* Grid Lines */}
                            {[...Array(5)].map((_, i) => {
                              const x = (i / 4) * 300;
                              return (
                                <line
                                  key={`gl-x-${i}`}
                                  x1={x} y1={0}
                                  x2={x} y2={200}
                                  stroke="rgba(255,255,255,0.06)"
                                  strokeWidth="0.8"
                                  strokeDasharray="4 4"
                                />
                              );
                            })}
                            {[...Array(5)].map((_, i) => {
                              const y = (i / 4) * 200;
                              return (
                                <line
                                  key={`gl-y-${i}`}
                                  x1={0} y1={y}
                                  x2={300} y2={y}
                                  stroke="rgba(255,255,255,0.06)"
                                  strokeWidth="0.8"
                                  strokeDasharray="4 4"
                                />
                              );
                            })}

                            {/* X & Y Axis */}
                            <line x1={0} y1={200} x2={300} y2={200} stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                            <line x1={0} y1={0} x2={0} y2={200} stroke="rgba(255,255,255,0.3)" strokeWidth="1" />

                            {/* Axis Labels */}
                            {/* X-axis labels (-H in kOe) */}
                            {[0, 0.25, 0.5, 0.75, 1].map((p, i) => {
                              const labelVal = Math.round(p * gradeChart.xMax);
                              const xPos = p * 300;
                              return (
                                <text
                                  key={`label-x-${i}`}
                                  x={xPos}
                                  y={214}
                                  fill="rgba(255,255,255,0.4)"
                                  fontSize="9"
                                  textAnchor="middle"
                                >
                                  {labelVal}
                                </text>
                              );
                            })}
                            {/* Y-axis labels (B in kGs) */}
                            {[0, 4, 8, 12, 16].map((val) => {
                              const yPos = 200 - (val / 16) * 200;
                              return (
                                <text
                                  key={`label-y-${val}`}
                                  x={-10}
                                  y={yPos + 3}
                                  fill="rgba(255,255,255,0.4)"
                                  fontSize="9"
                                  textAnchor="end"
                                >
                                  {val}
                                </text>
                              );
                            })}

                            {/* Plot Curves */}
                            {gradeChart.curves.map((curve) => (
                              <path
                                key={curve.label}
                                d={getPath(curve.Br, curve.Hcj, curve.p, gradeChart.xMax)}
                                fill="none"
                                stroke={curve.color}
                                strokeWidth="1.8"
                              />
                            ))}

                            {/* Interactive Guide Line and Info Dot */}
                            {currentHover && (
                              <>
                                {/* Vertical Tracking Line */}
                                <line
                                  x1={currentHover.x - 40}
                                  y1={0}
                                  x2={currentHover.x - 40}
                                  y2={200}
                                  stroke="rgba(201,150,58,0.22)"
                                  strokeWidth="1"
                                />
                                {/* Tracking Circle */}
                                <circle
                                  cx={currentHover.x - 40}
                                  cy={currentHover.y - 20}
                                  r="4"
                                  fill="#C9963A"
                                  stroke="#060f1c"
                                  strokeWidth="1.5"
                                  className="shadow-glow"
                                />
                              </>
                            )}
                          </g>

                          {/* Outer Text Labels */}
                          <text x="190" y="238" fill="white" fontSize="9.5" fontWeight="600" textAnchor="middle">
                            Coercive Force -H (kOe)
                          </text>
                          <text 
                            x="12" 
                            y="110" 
                            fill="white" 
                            fontSize="9.5" 
                            fontWeight="600" 
                            textAnchor="middle"
                            transform="rotate(-90 12 110)"
                          >
                            Magnetic Induction B (kGs)
                          </text>
                        </svg>

                        {/* Interactive Tooltip Card overlay */}
                        {currentHover && (
                          <div 
                            className="absolute top-2 left-2 bg-[#0b1a2e]/95 border border-[rgba(201,150,58,0.3)] shadow-[0_4px_16px_rgba(0,0,0,0.6)] rounded-sm px-2.5 py-1.5 pointer-events-none text-[10px] space-y-0.5"
                          >
                            <div className="font-bold text-[#C9963A]">Active Curve (20°C)</div>
                            <div>-H: <span className="font-mono text-white">{currentHover.valX.toFixed(2)} kOe</span></div>
                            <div>B: <span className="font-mono text-white">{currentHover.valY.toFixed(2)} kGs</span></div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* TAB 3: APPLICATIONS (Unified sectors toggle display) */}
          {activeTab !== 'specs' && activeTab !== 'bh' && (
            <motion.div
              key="applications-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {/* Header */}
              <div className="max-w-3xl">
                <span className="eyebrow block mb-3">Recommended Applications</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  Sector-Specific Magnet <span className="gold-text italic">Integration</span>
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  We engineer magnetic materials designed to meet the exact microstructural, temperature, and coercivity challenges of key strategic sectors. Select a sector tab above to filter, or browse the complete overview below.
                </p>
              </div>

              {/* Filtered sector layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sectorsData.map((sector) => {
                  const isMatchingFilter = activeTab === sector.id;
                  
                  return (
                    <div 
                      key={sector.id} 
                      className={`premium-card rounded-sm p-6 border transition-all duration-500 relative overflow-hidden flex flex-col justify-between ${
                        isMatchingFilter
                          ? 'border-[rgba(201,150,58,0.5)] bg-[#0c1c33] shadow-[0_12px_48px_rgba(201,150,58,0.08)] scale-[1.01]'
                          : 'border-[rgba(255,255,255,0.06)] bg-[#0b1a2e]'
                      }`}
                    >
                      {isMatchingFilter && (
                        <div 
                          className="absolute -top-12 -right-12 w-24 h-24 rounded-full opacity-10 blur-xl pointer-events-none"
                          style={{ backgroundColor: '#C9963A' }}
                        />
                      )}
                      
                      <div>
                        {/* Sector Icon */}
                        <div className="mb-5 inline-block p-3 bg-[rgba(201,150,58,0.05)] rounded-sm border border-[rgba(201,150,58,0.1)]">
                          <sector.icon size={22} className="text-[#C9963A]" />
                        </div>
                        
                        {/* Sector Title */}
                        <h4 className="text-lg font-bold text-white mb-3">{sector.title}</h4>
                        
                        {/* Description */}
                        <p className="text-xs leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
                          {sector.description}
                        </p>
                        
                        {/* Details checklist */}
                        <ul className="space-y-2 mb-6">
                          {sector.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-[10px] text-white">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C9963A]" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Specs info */}
                      <div className="border-t border-[rgba(255,255,255,0.05)] pt-4 mt-auto">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#C9963A] block mb-1">
                          Recommended Magnet Grades
                        </span>
                        <span className="text-xs font-mono text-white leading-tight">
                          {sector.specs}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
