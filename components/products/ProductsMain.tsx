'use client';

import { useState } from 'react';
import Link from 'next/link';

// Interfaces
interface SuffixCard {
  suffix: string;
  name: string;
  maxTemp: string;
  hcjKam: string;
  hcjKoe: string;
  color: string;
}

interface GradeRow {
  grade: string;
  brMin: string;
  brMax: string;
  brKgsMin: string;
  brKgsMax: string;
  hcbKam: string;
  hcbKoe: string;
  hcjKam: string;
  hcjKoe: string;
  bhKjMin: string;
  bhKjMax: string;
  bhMgoeMin: string;
  bhMgoeMax: string;
}

interface SeriesGroup {
  name: string;
  temp: string;
  color: string;
  grades: GradeRow[];
}

// Data Definition
const suffixKeyData: SuffixCard[] = [
  { suffix: '(none)', name: 'N — Standard', maxTemp: '80°C', hcjKam: '955 kA/m', hcjKoe: '12 kOe', color: '#3d8ef0' },
  { suffix: 'M', name: 'Medium', maxTemp: '100°C', hcjKam: '1114 kA/m', hcjKoe: '14 kOe', color: '#3dbf7a' },
  { suffix: 'H', name: 'High', maxTemp: '120°C', hcjKam: '1353 kA/m', hcjKoe: '17 kOe', color: '#f0b43d' },
  { suffix: 'SH', name: 'Super High', maxTemp: '150°C', hcjKam: '1592 kA/m', hcjKoe: '20 kOe', color: '#f05a3d' },
  { suffix: 'UH', name: 'Ultra High', maxTemp: '180°C', hcjKam: '1990 kA/m', hcjKoe: '25 kOe', color: '#a855f7' },
  { suffix: 'EH', name: 'Extreme High', maxTemp: '200°C', hcjKam: '2388 kA/m', hcjKoe: '30 kOe', color: '#ef4444' },
  { suffix: 'AH', name: 'Abnormal High', maxTemp: '230°C', hcjKam: '2627 kA/m', hcjKoe: '33 kOe', color: '#b91c1c' },
];

const seriesData: SeriesGroup[] = [
  {
    name: 'Series N',
    temp: 'Max 80°C',
    color: '#3d8ef0',
    grades: [
      { grade: 'N35', brMin: '1.17', brMax: '1.22', brKgsMin: '11.7', brKgsMax: '12.2', hcbKam: '876', hcbKoe: '11.0', hcjKam: '955', hcjKoe: '12.0', bhKjMin: '263', bhKjMax: '287', bhMgoeMin: '33', bhMgoeMax: '36' },
      { grade: 'N38', brMin: '1.22', brMax: '1.27', brKgsMin: '12.2', brKgsMax: '12.7', hcbKam: '876', hcbKoe: '11.0', hcjKam: '955', hcjKoe: '12.0', bhKjMin: '287', bhKjMax: '310', bhMgoeMin: '36', bhMgoeMax: '39' },
      { grade: 'N40', brMin: '1.25', brMax: '1.30', brKgsMin: '12.5', brKgsMax: '13.0', hcbKam: '876', hcbKoe: '11.0', hcjKam: '955', hcjKoe: '12.0', bhKjMin: '302', bhKjMax: '318', bhMgoeMin: '38', bhMgoeMax: '40' },
      { grade: 'N42', brMin: '1.28', brMax: '1.33', brKgsMin: '12.8', brKgsMax: '13.3', hcbKam: '876', hcbKoe: '11.0', hcjKam: '955', hcjKoe: '12.0', bhKjMin: '318', bhKjMax: '334', bhMgoeMin: '40', bhMgoeMax: '42' },
      { grade: 'N45', brMin: '1.32', brMax: '1.38', brKgsMin: '13.2', brKgsMax: '13.8', hcbKam: '876', hcbKoe: '11.0', hcjKam: '955', hcjKoe: '12.0', bhKjMin: '342', bhKjMax: '358', bhMgoeMin: '43', bhMgoeMax: '45' },
      { grade: 'N48', brMin: '1.37', brMax: '1.43', brKgsMin: '13.7', brKgsMax: '14.3', hcbKam: '836', hcbKoe: '10.5', hcjKam: '955', hcjKoe: '12.0', bhKjMin: '358', bhKjMax: '382', bhMgoeMin: '45', bhMgoeMax: '48' },
      { grade: 'N50', brMin: '1.40', brMax: '1.45', brKgsMin: '14.0', brKgsMax: '14.5', hcbKam: '836', hcbKoe: '10.5', hcjKam: '955', hcjKoe: '12.0', bhKjMin: '374', bhKjMax: '398', bhMgoeMin: '47', bhMgoeMax: '50' },
      { grade: 'N52', brMin: '1.42', brMax: '1.48', brKgsMin: '14.2', brKgsMax: '14.8', hcbKam: '836', hcbKoe: '10.5', hcjKam: '955', hcjKoe: '12.0', bhKjMin: '390', bhKjMax: '414', bhMgoeMin: '49', bhMgoeMax: '52' },
    ]
  },
  {
    name: 'Series M',
    temp: 'Max 100°C',
    color: '#3dbf7a',
    grades: [
      { grade: 'N35M', brMin: '1.17', brMax: '1.22', brKgsMin: '11.7', brKgsMax: '12.2', hcbKam: '876', hcbKoe: '11.0', hcjKam: '1114', hcjKoe: '14.0', bhKjMin: '263', bhKjMax: '287', bhMgoeMin: '33', bhMgoeMax: '36' },
      { grade: 'N38M', brMin: '1.22', brMax: '1.27', brKgsMin: '12.2', brKgsMax: '12.7', hcbKam: '876', hcbKoe: '11.0', hcjKam: '1114', hcjKoe: '14.0', bhKjMin: '287', bhKjMax: '310', bhMgoeMin: '36', bhMgoeMax: '39' },
      { grade: 'N40M', brMin: '1.25', brMax: '1.30', brKgsMin: '12.5', brKgsMax: '13.0', hcbKam: '900', hcbKoe: '11.3', hcjKam: '1114', hcjKoe: '14.0', bhKjMin: '302', bhKjMax: '318', bhMgoeMin: '38', bhMgoeMax: '40' },
      { grade: 'N42M', brMin: '1.28', brMax: '1.33', brKgsMin: '12.8', brKgsMax: '13.3', hcbKam: '923', hcbKoe: '11.6', hcjKam: '1114', hcjKoe: '14.0', bhKjMin: '318', bhKjMax: '334', bhMgoeMin: '40', bhMgoeMax: '42' },
      { grade: 'N45M', brMin: '1.32', brMax: '1.38', brKgsMin: '13.2', brKgsMax: '13.8', hcbKam: '955', hcbKoe: '12.0', hcjKam: '1114', hcjKoe: '14.0', bhKjMin: '342', bhKjMax: '358', bhMgoeMin: '43', bhMgoeMax: '45' },
      { grade: 'N48M', brMin: '1.37', brMax: '1.43', brKgsMin: '13.7', brKgsMax: '14.3', hcbKam: '995', hcbKoe: '12.5', hcjKam: '1114', hcjKoe: '14.0', bhKjMin: '358', bhKjMax: '382', bhMgoeMin: '45', bhMgoeMax: '48' },
      { grade: 'N50M', brMin: '1.40', brMax: '1.45', brKgsMin: '14.0', brKgsMax: '14.5', hcbKam: '1027', hcbKoe: '12.9', hcjKam: '1114', hcjKoe: '14.0', bhKjMin: '374', bhKjMax: '398', bhMgoeMin: '47', bhMgoeMax: '50' },
    ]
  },
  {
    name: 'Series H',
    temp: 'Max 120°C',
    color: '#f0b43d',
    grades: [
      { grade: 'N33H', brMin: '1.13', brMax: '1.18', brKgsMin: '11.3', brKgsMax: '11.8', hcbKam: '836', hcbKoe: '10.5', hcjKam: '1353', hcjKoe: '17.0', bhKjMin: '247', bhKjMax: '263', bhMgoeMin: '31', bhMgoeMax: '33' },
      { grade: 'N35H', brMin: '1.17', brMax: '1.22', brKgsMin: '11.7', brKgsMax: '12.2', hcbKam: '868', hcbKoe: '10.9', hcjKam: '1353', hcjKoe: '17.0', bhKjMin: '263', bhKjMax: '287', bhMgoeMin: '33', bhMgoeMax: '36' },
      { grade: 'N38H', brMin: '1.22', brMax: '1.27', brKgsMin: '12.2', brKgsMax: '12.7', hcbKam: '899', hcbKoe: '11.3', hcjKam: '1353', hcjKoe: '17.0', bhKjMin: '287', bhKjMax: '310', bhMgoeMin: '36', bhMgoeMax: '39' },
      { grade: 'N40H', brMin: '1.25', brMax: '1.30', brKgsMin: '12.5', brKgsMax: '13.0', hcbKam: '915', hcbKoe: '11.5', hcjKam: '1353', hcjKoe: '17.0', bhKjMin: '302', bhKjMax: '318', bhMgoeMin: '38', bhMgoeMax: '40' },
      { grade: 'N42H', brMin: '1.28', brMax: '1.33', brKgsMin: '12.8', brKgsMax: '13.3', hcbKam: '939', hcbKoe: '11.8', hcjKam: '1353', hcjKoe: '17.0', bhKjMin: '318', bhKjMax: '334', bhMgoeMin: '40', bhMgoeMax: '42' },
      { grade: 'N45H', brMin: '1.32', brMax: '1.38', brKgsMin: '13.2', brKgsMax: '13.8', hcbKam: '963', hcbKoe: '12.1', hcjKam: '1353', hcjKoe: '17.0', bhKjMin: '342', bhKjMax: '358', bhMgoeMin: '43', bhMgoeMax: '45' },
      { grade: 'N48H', brMin: '1.37', brMax: '1.43', brKgsMin: '13.7', brKgsMax: '14.3', hcbKam: '1003', hcbKoe: '12.6', hcjKam: '1274', hcjKoe: '16.0', bhKjMin: '358', bhKjMax: '382', bhMgoeMin: '45', bhMgoeMax: '48' },
    ]
  },
  {
    name: 'Series SH',
    temp: 'Max 150°C',
    color: '#f05a3d',
    grades: [
      { grade: 'N30SH', brMin: '1.08', brMax: '1.13', brKgsMin: '10.8', brKgsMax: '11.3', hcbKam: '796', hcbKoe: '10.0', hcjKam: '1592', hcjKoe: '20.0', bhKjMin: '223', bhKjMax: '247', bhMgoeMin: '28', bhMgoeMax: '31' },
      { grade: 'N33SH', brMin: '1.13', brMax: '1.18', brKgsMin: '11.3', brKgsMax: '11.8', hcbKam: '836', hcbKoe: '10.5', hcjKam: '1592', hcjKoe: '20.0', bhKjMin: '247', bhKjMax: '263', bhMgoeMin: '31', bhMgoeMax: '33' },
      { grade: 'N35SH', brMin: '1.17', brMax: '1.22', brKgsMin: '11.7', brKgsMax: '12.2', hcbKam: '868', hcbKoe: '10.9', hcjKam: '1592', hcjKoe: '20.0', bhKjMin: '263', bhKjMax: '287', bhMgoeMin: '33', bhMgoeMax: '36' },
      { grade: 'N38SH', brMin: '1.22', brMax: '1.27', brKgsMin: '12.2', brKgsMax: '12.7', hcbKam: '899', hcbKoe: '11.3', hcjKam: '1592', hcjKoe: '20.0', bhKjMin: '287', bhKjMax: '310', bhMgoeMin: '36', bhMgoeMax: '39' },
      { grade: 'N40SH', brMin: '1.25', brMax: '1.30', brKgsMin: '12.5', brKgsMax: '13.0', hcbKam: '915', hcbKoe: '11.5', hcjKam: '1592', hcjKoe: '20.0', bhKjMin: '302', bhKjMax: '318', bhMgoeMin: '38', bhMgoeMax: '40' },
      { grade: 'N42SH', brMin: '1.28', brMax: '1.33', brKgsMin: '12.8', brKgsMax: '13.3', hcbKam: '939', hcbKoe: '11.8', hcjKam: '1592', hcjKoe: '20.0', bhKjMin: '318', bhKjMax: '334', bhMgoeMin: '40', bhMgoeMax: '42' },
      { grade: 'N45SH', brMin: '1.32', brMax: '1.38', brKgsMin: '13.2', brKgsMax: '13.8', hcbKam: '963', hcbKoe: '12.1', hcjKam: '1592', hcjKoe: '20.0', bhKjMin: '342', bhKjMax: '358', bhMgoeMin: '43', bhMgoeMax: '45' },
    ]
  },
  {
    name: 'Series UH',
    temp: 'Max 180°C',
    color: '#a855f7',
    grades: [
      { grade: 'N28UH', brMin: '1.02', brMax: '1.08', brKgsMin: '10.2', brKgsMax: '10.8', hcbKam: '756', hcbKoe: '9.5', hcjKam: '1990', hcjKoe: '25.0', bhKjMin: '207', bhKjMax: '223', bhMgoeMin: '26', bhMgoeMax: '28' },
      { grade: 'N30UH', brMin: '1.08', brMax: '1.13', brKgsMin: '10.8', brKgsMax: '11.3', hcbKam: '796', hcbKoe: '10.0', hcjKam: '1990', hcjKoe: '25.0', bhKjMin: '223', bhKjMax: '247', bhMgoeMin: '28', bhMgoeMax: '31' },
      { grade: 'N33UH', brMin: '1.13', brMax: '1.18', brKgsMin: '11.3', brKgsMax: '11.8', hcbKam: '836', hcbKoe: '10.5', hcjKam: '1990', hcjKoe: '25.0', bhKjMin: '247', bhKjMax: '263', bhMgoeMin: '31', bhMgoeMax: '33' },
      { grade: 'N35UH', brMin: '1.17', brMax: '1.22', brKgsMin: '11.7', brKgsMax: '12.2', hcbKam: '868', hcbKoe: '10.9', hcjKam: '1990', hcjKoe: '25.0', bhKjMin: '263', bhKjMax: '287', bhMgoeMin: '33', bhMgoeMax: '36' },
      { grade: 'N38UH', brMin: '1.22', brMax: '1.27', brKgsMin: '12.2', brKgsMax: '12.7', hcbKam: '899', hcbKoe: '11.3', hcjKam: '1990', hcjKoe: '25.0', bhKjMin: '287', bhKjMax: '310', bhMgoeMin: '36', bhMgoeMax: '39' },
      { grade: 'N40UH', brMin: '1.25', brMax: '1.30', brKgsMin: '12.5', brKgsMax: '13.0', hcbKam: '915', hcbKoe: '11.5', hcjKam: '1990', hcjKoe: '25.0', bhKjMin: '302', bhKjMax: '318', bhMgoeMin: '38', bhMgoeMax: '40' },
    ]
  },
  {
    name: 'Series EH',
    temp: 'Max 200°C',
    color: '#ef4444',
    grades: [
      { grade: 'N28EH', brMin: '1.02', brMax: '1.08', brKgsMin: '10.2', brKgsMax: '10.8', hcbKam: '756', hcbKoe: '9.5', hcjKam: '2388', hcjKoe: '30.0', bhKjMin: '207', bhKjMax: '223', bhMgoeMin: '26', bhMgoeMax: '28' },
      { grade: 'N30EH', brMin: '1.08', brMax: '1.13', brKgsMin: '10.8', brKgsMax: '11.3', hcbKam: '796', hcbKoe: '10.0', hcjKam: '2388', hcjKoe: '30.0', bhKjMin: '223', bhKjMax: '247', bhMgoeMin: '28', bhMgoeMax: '31' },
      { grade: 'N33EH', brMin: '1.13', brMax: '1.18', brKgsMin: '11.3', brKgsMax: '11.8', hcbKam: '836', hcbKoe: '10.5', hcjKam: '2388', hcjKoe: '30.0', bhKjMin: '247', bhKjMax: '263', bhMgoeMin: '31', bhMgoeMax: '33' },
      { grade: 'N35EH', brMin: '1.17', brMax: '1.22', brKgsMin: '11.7', brKgsMax: '12.2', hcbKam: '868', hcbKoe: '10.9', hcjKam: '2388', hcjKoe: '30.0', bhKjMin: '263', bhKjMax: '287', bhMgoeMin: '33', bhMgoeMax: '36' },
      { grade: 'N38EH', brMin: '1.22', brMax: '1.27', brKgsMin: '12.2', brKgsMax: '12.7', hcbKam: '899', hcbKoe: '11.3', hcjKam: '2388', hcjKoe: '30.0', bhKjMin: '287', bhKjMax: '310', bhMgoeMin: '36', bhMgoeMax: '39' },
    ]
  },
  {
    name: 'Series AH',
    temp: 'Max 230°C',
    color: '#b91c1c',
    grades: [
      { grade: 'N28AH', brMin: '1.02', brMax: '1.08', brKgsMin: '10.2', brKgsMax: '10.8', hcbKam: '756', hcbKoe: '9.5', hcjKam: '2627', hcjKoe: '33.0', bhKjMin: '207', bhKjMax: '223', bhMgoeMin: '26', bhMgoeMax: '28' },
      { grade: 'N30AH', brMin: '1.08', brMax: '1.13', brKgsMin: '10.8', brKgsMax: '11.3', hcbKam: '796', hcbKoe: '10.0', hcjKam: '2627', hcjKoe: '33.0', bhKjMin: '223', bhKjMax: '247', bhMgoeMin: '28', bhMgoeMax: '31' },
      { grade: 'N33AH', brMin: '1.13', brMax: '1.18', brKgsMin: '11.3', brKgsMax: '11.8', hcbKam: '836', hcbKoe: '10.5', hcjKam: '2627', hcjKoe: '33.0', bhKjMin: '247', bhKjMax: '263', bhMgoeMin: '31', bhMgoeMax: '33' },
      { grade: 'N35AH', brMin: '1.17', brMax: '1.22', brKgsMin: '11.7', brKgsMax: '12.2', hcbKam: '868', hcbKoe: '10.9', hcjKam: '2627', hcjKoe: '33.0', bhKjMin: '263', bhKjMax: '287', bhMgoeMin: '33', bhMgoeMax: '36' },
    ]
  }
];

// BH Curves data
interface TempCurve {
  label: string;
  color: string;
  Br: number;
  Hcj: number;
  p: number;
}

interface BHGradeCurve {
  grade: string;
  maxTemp: string;
  xMax: number;
  curves: TempCurve[];
}

const bhCurvesData: BHGradeCurve[] = [
  {
    grade: 'Grade N42',
    maxTemp: '80°C max',
    xMax: 14,
    curves: [
      { label: '20°C', color: '#c9a84c', Br: 13.1, Hcj: 12.5, p: 10 },
      { label: '60°C', color: '#3d8ef0', Br: 12.2, Hcj: 10.8, p: 8 },
      { label: '80°C', color: '#f05a3d', Br: 11.5, Hcj: 9.2, p: 6 },
    ],
  },
  {
    grade: 'Grade N42M',
    maxTemp: '100°C max',
    xMax: 16,
    curves: [
      { label: '20°C', color: '#c9a84c', Br: 13.1, Hcj: 14.5, p: 11 },
      { label: '80°C', color: '#3d8ef0', Br: 12.0, Hcj: 12.1, p: 9 },
      { label: '100°C', color: '#3dbf7a', Br: 11.3, Hcj: 9.8, p: 7 },
    ],
  },
  {
    grade: 'Grade N40H',
    maxTemp: '120°C max',
    xMax: 20,
    curves: [
      { label: '20°C', color: '#c9a84c', Br: 12.8, Hcj: 17.5, p: 12 },
      { label: '80°C', color: '#3d8ef0', Br: 11.7, Hcj: 13.2, p: 9 },
      { label: '120°C', color: '#3dbf7a', Br: 10.9, Hcj: 10.2, p: 7 },
    ],
  },
  {
    grade: 'Grade N38SH',
    maxTemp: '150°C max',
    xMax: 23,
    curves: [
      { label: '20°C', color: '#c9a84c', Br: 12.5, Hcj: 19.5, p: 12 },
      { label: '100°C', color: '#3d8ef0', Br: 11.2, Hcj: 15.0, p: 9 },
      { label: '150°C', color: '#f05a3d', Br: 10.1, Hcj: 11.0, p: 7 },
    ],
  },
  {
    grade: 'Grade N35UH',
    maxTemp: '180°C max',
    xMax: 28,
    curves: [
      { label: '20°C', color: '#c9a84c', Br: 12.0, Hcj: 24.0, p: 13 },
      { label: '120°C', color: '#3d8ef0', Br: 10.6, Hcj: 18.0, p: 10 },
      { label: '180°C', color: '#f05a3d', Br: 9.2, Hcj: 12.0, p: 7 },
    ],
  },
  {
    grade: 'Grade N30EH',
    maxTemp: '200°C max',
    xMax: 33,
    curves: [
      { label: '20°C', color: '#c9a84c', Br: 11.1, Hcj: 29.5, p: 14 },
      { label: '150°C', color: '#3d8ef0', Br: 9.5, Hcj: 21.0, p: 10 },
      { label: '200°C', color: '#f05a3d', Br: 8.3, Hcj: 14.0, p: 7 },
    ],
  },
];

const physicalProperties = [
  { property: 'Density', value: '7.4 – 7.6 g/cm³' },
  { property: 'Vickers Hardness', value: '500 – 650 HV' },
  { property: 'Flexural Strength', value: '200 – 300 MPa' },
  { property: 'Compressive Strength', value: '700 – 1000 MPa' },
  { property: 'Young\'s Modulus', value: '150 – 170 GPa' },
  { property: 'Electrical Resistivity', value: '110 – 170 μΩ·cm' },
  { property: 'Thermal Conductivity', value: '7 – 9 W/(m·K)' },
  { property: 'Curie Temperature', value: '310 – 340 °C' },
  { property: 'Recoil Permeability (μrec)', value: '1.03 – 1.10' },
  { property: 'Br Temp. Coefficient (α)', value: '-0.09% to -0.13% /°C' },
  { property: 'Hcj Temp. Coefficient (β)', value: '-0.40% to -0.70% /°C' },
];

const surfaceCoatings = [
  { coating: 'Ni-Cu-Ni', thickness: '10–25', saltSpray: '48–96', temp: '200', appearance: 'Silver metallic' },
  { coating: 'Zinc (Zn)', thickness: '5–20', saltSpray: '24–72', temp: '200', appearance: 'Silver/blue' },
  { coating: 'Epoxy', thickness: '10–40', saltSpray: '200–500', temp: '150', appearance: 'Black matte' },
  { coating: 'Ni + Epoxy', thickness: '15–35', saltSpray: '500–1000', temp: '150', appearance: 'Black' },
  { coating: 'Passivation', thickness: '1–5', saltSpray: '<24', temp: '250', appearance: 'Silver' },
  { coating: 'Gold (Au)', thickness: '1–3', saltSpray: '>1000', temp: '150', appearance: 'Gold' },
  { coating: 'Parylene', thickness: '5–30', saltSpray: '>500', temp: '125', appearance: 'Transparent' },
  { coating: 'Phosphate', thickness: '1–5', saltSpray: '<24', temp: '250', appearance: 'Grey matte' },
];

export default function ProductsMain() {
  const [activeTab, setActiveTab] = useState<'specs' | 'bh' | 'auto' | 'wind' | 'defense' | 'industrial'>('specs');

  // Math helper to generate SVG path coordinates for BH Curves
  const generateCurvePath = (Br: number, Hcj: number, p: number, xMax: number) => {
    const points: string[] = [];
    const steps = 50;
    for (let i = 0; i <= steps; i++) {
      const pct = i / steps;
      const hVal = pct * Hcj;
      if (hVal > xMax) break;
      const bVal = Br * (1 - Math.pow(hVal / Hcj, p));
      
      // Map to coordinates: Plot is 260px wide, 180px high, offset X=50, Y=20
      const xCoord = 310 - (hVal / xMax) * 260;
      const yCoord = 200 - (bVal / 16) * 180;
      
      points.push(`${xCoord.toFixed(1)},${yCoord.toFixed(1)}`);
    }
    return `M ${points.join(' L ')}`;
  };

  const handleTabClick = (tabId: 'specs' | 'bh' | 'auto' | 'wind' | 'defense' | 'industrial') => {
    setActiveTab(tabId);
    // Smooth scroll page to right below the hero
    const mainSection = document.getElementById('products-main-content');
    if (mainSection) {
      const offsetTop = mainSection.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div id="products-main-content" className="w-full relative z-20">
      {/* Redesigned CSS Scoped Block */}
      <style dangerouslySetInnerHTML={{
        __html: `
          body {
            background: #070d1a !important;
          }

          /* Tab Bar */
          .products-tabs {
            display: flex;
            background: #070d1a;
            border-bottom: 2px solid #1e2e4a;
            position: sticky;
            top: var(--nav-h);
            z-index: 40;
            overflow-x: auto;
            scrollbar-width: none;
            width: 100%;
            padding: 0 40px;
            gap: 0;
          }
          .products-tabs::-webkit-scrollbar {
            display: none;
          }
          .tab-btn {
            background: transparent;
            border: none;
            border-bottom: 3px solid transparent;
            color: #8899bb;
            font-size: 0.80rem;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            padding: 16px 24px;
            cursor: pointer;
            white-space: nowrap;
            transition: all 0.2s;
            margin-bottom: -2px;
          }
          .tab-btn:hover { color: #f0f4ff; }
          .tab-btn.active {
            color: #c9a84c;
            border-bottom-color: #c9a84c;
          }

          /* Section Header */
          .section-header {
            padding: 56px 60px 32px;
            border-bottom: 1px solid #1e2e4a;
          }
          .section-eyebrow {
            font-size: 0.70rem;
            letter-spacing: 0.20em;
            color: #c9a84c;
            text-transform: uppercase;
            margin-bottom: 10px;
          }
          .section-title {
            font-size: 2rem;
            font-weight: 700;
            color: #f0f4ff;
            margin: 0 0 14px;
          }
          .section-desc {
            font-size: 0.90rem;
            color: #8899bb;
            line-height: 1.65;
            margin-bottom: 6px;
          }
          .section-note {
            font-size: 0.80rem;
            color: #5a6e8a;
            font-style: italic;
          }

          /* Suffix Key */
          .suffix-key {
            display: flex;
            gap: 12px;
            padding: 32px 60px;
            overflow-x: auto;
            background: #070d1a;
            border-bottom: 1px solid #1e2e4a;
            width: 100%;
          }
          .suffix-key::-webkit-scrollbar {
            height: 4px;
          }
          .suffix-key::-webkit-scrollbar-thumb {
            background: #1e2e4a;
            border-radius: 2px;
          }
          .suffix-card {
            flex: 1;
            min-width: 140px;
            background: #0d1526;
            border: 1px solid #1e2e4a;
            border-top: 3px solid var(--series-color, #c9a84c);
            border-radius: 6px;
            padding: 16px 14px;
          }
          .suffix-badge {
            font-size: 1.1rem;
            font-weight: 700;
            color: var(--series-color, #c9a84c);
            margin-bottom: 6px;
            font-family: 'JetBrains Mono', monospace;
          }
          .suffix-name {
            font-size: 0.82rem;
            font-weight: 600;
            color: #f0f4ff;
            margin-bottom: 8px;
          }
          .suffix-detail {
            font-size: 0.75rem;
            color: #8899bb;
            line-height: 1.6;
          }
          .suffix-detail strong { color: #d4e0ff; }

          /* Grade Table */
          .grade-table-wrap {
            width: 100%;
            overflow-x: auto;
            padding: 0 0 8px 0;
            background: #070d1a;
          }
          .grade-table {
            width: 100%;
            table-layout: fixed;
            border-collapse: separate;
            border-spacing: 0;
            font-family: 'JetBrains Mono', 'Courier New', monospace;
            font-size: 0.78rem;
          }
          .grade-table thead tr:first-child th {
            background: #050c18;
            color: #c9a84c;
            font-size: 0.68rem;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            text-align: center;
            padding: 12px 8px;
            border-bottom: 1px solid #1e2e4a;
            font-family: 'Inter', sans-serif;
          }
          .grade-table thead tr:first-child th.th-remanence { border-top: 2px solid #3d8ef0; }
          .grade-table thead tr:first-child th.th-coercivity { border-top: 2px solid #f0b43d; }
          .grade-table thead tr:first-child th.th-energy { border-top: 2px solid #3dbf7a; }

          .grade-table thead tr:last-child th {
            background: #0a1220;
            color: #8899bb;
            font-size: 0.66rem;
            font-weight: 600;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            text-align: right;
            padding: 10px 10px 10px 6px;
            border-bottom: 2px solid #1e2e4a;
            font-family: 'Inter', sans-serif;
            white-space: nowrap;
          }
          .grade-table thead tr:last-child th:nth-child(1),
          .grade-table thead tr:last-child th:nth-child(2) {
            text-align: left;
            padding-left: 16px;
          }

          .td-series {
            background: #080f1e;
            color: #f0f4ff;
            font-size: 0.72rem;
            font-weight: 700;
            font-family: 'Inter', sans-serif;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            text-align: center;
            vertical-align: middle;
            border-right: 1px solid #1e2e4a;
            border-left: 4px solid var(--series-color);
            writing-mode: vertical-lr;
            transform: rotate(180deg);
            padding: 16px 10px;
          }

          .td-grade {
            font-weight: 700;
            color: #f0f4ff;
            font-size: 0.82rem;
            padding: 11px 10px 11px 16px;
            border-right: 1px solid #1e2e4a;
            text-align: left;
            white-space: nowrap;
          }

          .td-num {
            text-align: right;
            padding: 11px 12px 11px 6px;
            color: #d4e0ff;
            border-right: 1px solid #0f1d32;
          }
          .td-num.highlight { color: #c9a84c; }

          .grade-table tbody tr:nth-child(even) td { background: #0d1526; }
          .grade-table tbody tr:nth-child(odd) td  { background: #0a101f; }
          .grade-table tbody tr:hover td {
            background: #131f38 !important;
            cursor: default;
          }
          tr.series-start td {
            border-top: 2px solid #1e2e4a;
          }

          /* CTA Bar */
          .table-cta-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 60px;
            background: #0a1220;
            border-top: 1px solid #1e2e4a;
            font-size: 0.88rem;
            color: #8899bb;
            flex-wrap: wrap;
            gap: 16px;
            width: 100%;
          }
          .btn-outline-gold {
            border: 1px solid #c9a84c;
            color: #c9a84c;
            padding: 10px 24px;
            border-radius: 4px;
            text-decoration: none;
            font-size: 0.82rem;
            font-weight: 600;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            white-space: nowrap;
            transition: all 0.2s;
          }
          .btn-outline-gold:hover {
            background: #c9a84c;
            color: #070d1a;
          }

          /* Props Grid */
          .props-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1px;
            background: #1e2e4a;
            margin-top: 1px;
            width: 100%;
          }
          .props-card {
            background: #070d1a;
            padding: 40px 48px;
          }
          .props-card-title {
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: #c9a84c;
            margin-bottom: 24px;
            font-family: 'Inter', sans-serif;
          }
          .props-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.85rem;
          }
          .props-table th {
            font-size: 0.68rem;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #8899bb;
            padding: 8px 12px;
            text-align: left;
            border-bottom: 1px solid #1e2e4a;
            font-family: 'Inter', sans-serif;
          }
          .props-table td {
            padding: 10px 12px;
            color: #d4e0ff;
            border-bottom: 1px solid #0f1d32;
            vertical-align: middle;
          }
          .prop-label {
            color: #8899bb;
            font-size: 0.82rem;
            width: 55%;
            font-family: 'Inter', sans-serif;
          }
          .prop-val {
            color: #f0f4ff;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.82rem;
            font-weight: 500;
            text-align: right;
          }
          .props-table tbody tr:hover td { background: #0d1526; }

          /* BH Grid */
          .bh-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            padding: 40px 48px;
            background: #070d1a;
            width: 100%;
          }
          .bh-chart-card {
            background: #0d1526;
            border: 1px solid #1e2e4a;
            border-radius: 8px;
            padding: 20px;
            position: relative;
          }
          .bh-chart-label {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.9rem;
            font-weight: 700;
            color: #f0f4ff;
            margin-bottom: 4px;
          }
          .bh-chart-sublabel {
            font-size: 0.72rem;
            color: #8899bb;
            margin-bottom: 16px;
          }

          /* Sectors */
          .sector-hero {
            padding: 48px 60px 32px;
          }
          .sector-grades-bar {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 16px 60px;
            background: #0a1220;
            border-top: 1px solid #1e2e4a;
            border-bottom: 1px solid #1e2e4a;
            flex-wrap: wrap;
            width: 100%;
          }
          .grades-label {
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.10em;
            text-transform: uppercase;
            color: #8899bb;
            margin-right: 8px;
          }
          .grade-chip {
            background: #131f38;
            border: 1px solid #c9a84c44;
            color: #c9a84c;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.75rem;
            font-weight: 600;
            padding: 4px 10px;
            border-radius: 4px;
          }
          .grade-link {
            color: #3d8ef0;
            font-size: 0.78rem;
            text-decoration: none;
            margin-left: auto;
          }
          .sector-cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1px;
            background: #1e2e4a;
            margin-top: 1px;
            width: 100%;
          }
          .sector-card {
            background: #070d1a;
            padding: 40px 40px;
          }
          .sector-card-icon {
            font-size: 2rem;
            margin-bottom: 16px;
          }
          .sector-card-title {
            font-family: 'Playfair Display', serif;
            font-size: 1.05rem;
            font-weight: 600;
            color: #ffffff;
            margin-bottom: 12px;
          }
          .sector-card-body {
            font-size: 0.88rem;
            color: #8899bb;
            line-height: 1.7;
          }

          @media (max-width: 1000px) {
            .bh-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 900px) {
            .props-grid { grid-template-columns: 1fr; }
          }
          @media (max-width: 768px) {
            .sector-cards { grid-template-columns: 1fr; }
            .sector-hero, .sector-grades-bar, .props-card, .suffix-key, .table-cta-bar, .bh-grid {
              padding-left: 24px;
              padding-right: 24px;
            }
          }
          @media (max-width: 640px) {
            .bh-grid { grid-template-columns: 1fr; }
          }

          /* Layout centering and padding overrides */
          .products-tabs,
          .section-header,
          .suffix-key,
          .grade-table-wrap,
          .table-cta-bar,
          .props-grid,
          .bh-grid,
          .sector-hero,
          .sector-grades-bar,
          .sector-cards {
            max-width: 1440px;
            margin-left: auto;
            margin-right: auto;
            box-sizing: border-box;
          }

          /* Default desktop paddings (lg breakpoint and up) */
          .products-tabs { padding-left: 64px; padding-right: 64px; }
          .section-header { padding-left: 64px; padding-right: 64px; }
          .suffix-key { padding-left: 64px; padding-right: 64px; }
          .table-cta-bar { padding-left: 64px; padding-right: 64px; }
          .bh-grid { padding-left: 64px; padding-right: 64px; }
          .sector-hero { padding-left: 64px; padding-right: 64px; }
          .sector-grades-bar { padding-left: 64px; padding-right: 64px; }

          @media (max-width: 1280px) {
            .products-tabs { padding-left: 48px; padding-right: 48px; }
            .section-header { padding-left: 48px; padding-right: 48px; }
            .suffix-key { padding-left: 48px; padding-right: 48px; }
            .table-cta-bar { padding-left: 48px; padding-right: 48px; }
            .bh-grid { padding-left: 48px; padding-right: 48px; }
            .sector-hero { padding-left: 48px; padding-right: 48px; }
            .sector-grades-bar { padding-left: 48px; padding-right: 48px; }
          }

          @media (max-width: 768px) {
            .products-tabs { padding-left: 24px; padding-right: 24px; }
            .section-header { padding-left: 24px; padding-right: 24px; }
            .suffix-key { padding-left: 24px; padding-right: 24px; }
            .table-cta-bar { padding-left: 24px; padding-right: 24px; }
            .bh-grid { padding-left: 24px; padding-right: 24px; }
            .sector-hero { padding-left: 24px; padding-right: 24px; }
            .sector-grades-bar { padding-left: 24px; padding-right: 24px; }
          }
        `,
      }} />

      {/* Sticky Tab Bar */}
      <nav className="products-tabs" aria-label="Products Page Navigation">
        {[
          { id: 'specs', label: 'Grade Specifications' },
          { id: 'bh', label: 'BH Curves' },
          { id: 'auto', label: 'Automotive' },
          { id: 'wind', label: 'Wind & Energy' },
          { id: 'defense', label: 'Defense & Aerospace' },
          { id: 'industrial', label: 'Industrial Automation' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id as any)}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* TAB SECTION: GRADE SPECIFICATIONS */}
      {activeTab === 'specs' && (
        <section id="sec-grade" className="w-full">
          {/* Header */}
          <div className="section-header">
            <div className="section-eyebrow">Performance Parameters</div>
            <h2 className="section-title">Grade Specifications</h2>
            <p className="section-desc">
              All values at 20°C (68°F). Minimum values unless stated. 
              Br in Tesla (T) and kGs · Hcb / Hcj in kA/m and kOe · (BH)max in kJ/m³ and MGOe.
            </p>
            <p className="section-note">
              *Standard reference grades per IEC 60404-8-1 / GB/T 13560. Contact Magnova for certified lot-specific data.*
            </p>
          </div>

          {/* Suffix Key cards */}
          <div className="suffix-key">
            {suffixKeyData.map((item, i) => (
              <div
                key={i}
                className="suffix-card"
                style={{ '--series-color': item.color } as React.CSSProperties}
              >
                <div className="suffix-badge">{item.suffix}</div>
                <div className="suffix-name">{item.name}</div>
                <div className="suffix-detail">Max Temp: <strong>{item.maxTemp}</strong></div>
                <div className="suffix-detail">Min Hcj: <strong>{item.hcjKam}</strong> ({item.hcjKoe})</div>
              </div>
            ))}
          </div>

          {/* Grade table */}
          <div className="grade-table-wrap">
            <table className="grade-table">
              {/* Define column widths explicitly */}
              <colgroup>
                <col style={{ width: '90px' }} />
                <col style={{ width: '90px' }} />
                <col style={{ width: '65px' }} />
                <col style={{ width: '65px' }} />
                <col style={{ width: '65px' }} />
                <col style={{ width: '65px' }} />
                <col style={{ width: '75px' }} />
                <col style={{ width: '65px' }} />
                <col style={{ width: '75px' }} />
                <col style={{ width: '65px' }} />
                <col style={{ width: '75px' }} />
                <col style={{ width: '75px' }} />
                <col style={{ width: '72px' }} />
                <col style={{ width: '72px' }} />
              </colgroup>
              <thead>
                <tr>
                  <th style={{ borderRight: '1px solid #1e2e4a' }}></th>
                  <th style={{ borderRight: '1px solid #1e2e4a' }}></th>
                  <th colSpan={4} className="th-remanence" style={{ borderRight: '1px solid #1e2e4a' }}>REMANENCE (Br)</th>
                  <th colSpan={4} className="th-coercivity" style={{ borderRight: '1px solid #1e2e4a' }}>COERCIVITY</th>
                  <th colSpan={4} className="th-energy">MAX ENERGY PRODUCT (BH)max</th>
                </tr>
                <tr>
                  <th>SERIES</th>
                  <th style={{ borderRight: '1px solid #1e2e4a' }}>GRADE</th>
                  <th>T (MIN)</th>
                  <th>T (MAX)</th>
                  <th>kGs (MIN)</th>
                  <th style={{ borderRight: '1px solid #1e2e4a' }}>kGs (MAX)</th>
                  <th>kA/m (MIN)</th>
                  <th style={{ borderRight: '1px solid #1e2e4a' }}>kOe (MIN)</th>
                  <th>kA/m (MIN)</th>
                  <th style={{ borderRight: '1px solid #1e2e4a' }}>kOe (MIN)</th>
                  <th>kJ/m³ (MIN)</th>
                  <th style={{ borderRight: '1px solid #1e2e4a' }}>kJ/m³ (MAX)</th>
                  <th>MGOe (MIN)</th>
                  <th>MGOe (MAX)</th>
                </tr>
              </thead>
              <tbody>
                {seriesData.map((group) => {
                  return group.grades.map((grade, idx) => {
                    const isSeriesStart = idx === 0;
                    return (
                      <tr 
                        key={grade.grade} 
                        className={isSeriesStart ? 'series-start' : ''}
                      >
                        {isSeriesStart && (
                          <td 
                            className="td-series" 
                            rowSpan={group.grades.length} 
                            style={{ '--series-color': group.color } as React.CSSProperties}
                          >
                            {group.name.replace('Series ', '')}<br/>{group.temp}
                          </td>
                        )}
                        <td className="td-grade">{grade.grade}</td>
                        <td className="td-num">{grade.brMin}</td>
                        <td className="td-num">{grade.brMax}</td>
                        <td className="td-num">{grade.brKgsMin}</td>
                        <td className="td-num" style={{ borderRight: '1px solid #1e2e4a' }}>{grade.brKgsMax}</td>
                        <td className="td-num">{grade.hcbKam}</td>
                        <td className="td-num" style={{ borderRight: '1px solid #1e2e4a' }}>{grade.hcbKoe}</td>
                        <td className="td-num">{grade.hcjKam}</td>
                        <td className="td-num" style={{ borderRight: '1px solid #1e2e4a' }}>{grade.hcjKoe}</td>
                        <td className="td-num highlight">{grade.bhKjMin}</td>
                        <td className="td-num highlight">{grade.bhKjMax}</td>
                        <td className="td-num highlight">{grade.bhMgoeMin}</td>
                        <td className="td-num highlight">{grade.bhMgoeMax}</td>
                      </tr>
                    );
                  });
                })}
              </tbody>
            </table>
          </div>

          {/* CTA Bar */}
          <div className="table-cta-bar">
            <span>Need Magnova-certified lot data, CoC, or custom grade specifications?</span>
            <Link href="/contact" className="btn-outline-gold">
              Request Full Datasheet →
            </Link>
          </div>

          {/* Side by side grids */}
          <div className="props-grid">
            {/* Physical Properties */}
            <div className="props-card">
              <div className="props-card-title">Physical & Mechanical Properties</div>
              <table className="props-table">
                <tbody>
                  {physicalProperties.map((row) => (
                    <tr key={row.property}>
                      <td className="prop-label">{row.property}</td>
                      <td className="prop-val">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Coating Options */}
            <div className="props-card">
              <div className="props-card-title">Available Surface Coatings</div>
              <table className="props-table">
                <thead>
                  <tr>
                    <th>Coating</th>
                    <th>Thickness</th>
                    <th>Salt Spray</th>
                    <th>Max Temp</th>
                  </tr>
                </thead>
                <tbody>
                  {surfaceCoatings.map((row) => (
                    <tr key={row.coating}>
                      <td style={{ color: '#f0f4ff', fontWeight: 600 }}>{row.coating.replace(' (Ni-Cu-Ni)', '')}</td>
                      <td>{row.thickness} μm</td>
                      <td>{row.saltSpray} hr</td>
                      <td>{row.temp}°C</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* TAB SECTION: BH CURVES */}
      {activeTab === 'bh' && (
        <section id="sec-bh" className="w-full">
          <div className="section-header">
            <div className="section-eyebrow">Demagnetization Characteristics</div>
            <h2 className="section-title">Demagnetization Curves</h2>
            <p className="section-desc">
              B-H curves show magnetic flux density (B) vs. applied demagnetizing field (-H) at operating temperatures. 
              The knee point on each curve marks the threshold for irreversible demagnetization.
            </p>
          </div>

          <div className="bh-grid">
            {bhCurvesData.map((gradeChart) => {
              return (
                <div key={gradeChart.grade} className="bh-chart-card">
                  <div className="bh-chart-label">{gradeChart.grade}</div>
                  <div className="bh-chart-sublabel">{gradeChart.maxTemp}</div>

                  {/* Inline SVG Chart */}
                  <div className="relative w-full flex items-center justify-center bg-[#070d1a] border border-[#1e2e4a] rounded p-2">
                    <svg
                      width="100%"
                      height="230"
                      viewBox="0 0 330 230"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      {/* Outer Background */}
                      <rect width="330" height="230" fill="#070d1a" />

                      {/* Grid Lines within plot area (X offset 50 to 310, Y offset 20 to 200) */}
                      {/* Horizontal Grid Lines at B = 4, 8, 12, 16 */}
                      {[4, 8, 12, 16].map((bVal) => {
                        const y = 200 - (bVal / 16) * 180;
                        return (
                          <line
                            key={`h-grid-${bVal}`}
                            x1="50" y1={y}
                            x2="310" y2={y}
                            stroke="#1e2e4a"
                            strokeWidth="0.5"
                            strokeDasharray="2 2"
                          />
                        );
                      })}

                      {/* Vertical Grid Lines every 5 kOe up to Xmax */}
                      {[5, 10, 15, 20, 25, 30].map((hVal) => {
                        if (hVal >= gradeChart.xMax) return null;
                        const x = 310 - (hVal / gradeChart.xMax) * 260;
                        return (
                          <line
                            key={`v-grid-${hVal}`}
                            x1={x} y1="20"
                            x2={x} y2="200"
                            stroke="#1e2e4a"
                            strokeWidth="0.5"
                            strokeDasharray="2 2"
                          />
                        );
                      })}

                      {/* Axes */}
                      <line x1="50" y1="200" x2="310" y2="200" stroke="#1e2e4a" strokeWidth="1" />
                      <line x1="50" y1="20" x2="50" y2="200" stroke="#1e2e4a" strokeWidth="1" />
                      <line x1="310" y1="20" x2="310" y2="200" stroke="#1e2e4a" strokeWidth="1" />

                      {/* Axis Labels: Y-axis (B in kGs) */}
                      {[0, 4, 8, 12, 16].map((bVal) => {
                        const y = 200 - (bVal / 16) * 180;
                        return (
                          <text
                            key={`y-lbl-${bVal}`}
                            x="42"
                            y={y + 3}
                            fill="#8899bb"
                            fontSize="9"
                            textAnchor="end"
                          >
                            {bVal}
                          </text>
                        );
                      })}

                      {/* Axis Labels: X-axis (-H in kOe, from right 0 to left max) */}
                      {[0, 0.25, 0.5, 0.75, 1.0].map((pct) => {
                        const hVal = Math.round(pct * gradeChart.xMax);
                        const x = 310 - pct * 260;
                        return (
                          <text
                            key={`x-lbl-${pct}`}
                            x={x}
                            y="214"
                            fill="#8899bb"
                            fontSize="9"
                            textAnchor="middle"
                          >
                            {hVal}
                          </text>
                        );
                      })}

                      {/* Curve Paths */}
                      {gradeChart.curves.map((curve) => (
                        <path
                          key={curve.label}
                          d={generateCurvePath(curve.Br, curve.Hcj, curve.p, gradeChart.xMax)}
                          fill="none"
                          stroke={curve.color}
                          strokeWidth="1.8"
                        />
                      ))}

                      {/* Axis Titles */}
                      <text x="180" y="227" fill="#c9a84c" fontSize="8.5" fontWeight="600" textAnchor="middle">
                        H (kOe)
                      </text>
                      <text
                        x="12"
                        y="110"
                        fill="#c9a84c"
                        fontSize="8.5"
                        fontWeight="600"
                        textAnchor="middle"
                        transform="rotate(-90 12 110)"
                      >
                        B (kGs)
                      </text>

                      {/* SVG Inner Legend */}
                      <g transform="translate(225, 145)">
                        <rect width="80" height="50" fill="#0d1526" stroke="#1e2e4a" rx="3" opacity="0.9" />
                        {gradeChart.curves.map((curve, idx) => (
                          <g key={curve.label} transform={`translate(8, ${8 + idx * 14})`}>
                            <line x1="0" y1="5" x2="12" y2="5" stroke={curve.color} strokeWidth="2" />
                            <text x="18" y="8" fill="#f0f4ff" fontSize="8" fontWeight="600">{curve.label}</text>
                          </g>
                        ))}
                      </g>
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* TAB SECTIONS: APPLICATION SECTORS */}
      {['auto', 'wind', 'defense', 'industrial'].includes(activeTab) && (
        <div className="w-full">
          {activeTab === 'auto' && (
            <section className="tab-section" id="sec-auto">
              <div className="sector-hero">
                <div className="section-eyebrow">APPLICATION SECTOR</div>
                <h2 className="section-title">Automotive & Electric Vehicles</h2>
                <p className="section-desc">
                  NdFeB magnets in EV traction motors, electric power steering (EPS), sensors, and ABS systems demand high energy density, thermal stability, and resistance to demagnetization in vibration-heavy environments.
                </p>
              </div>

              <div className="sector-grades-bar">
                <span className="grades-label">Recommended Grades:</span>
                {['N40H', 'N42H', 'N38SH', 'N40SH', 'N42SH', 'N38UH'].map((grade) => (
                  <span key={grade} className="grade-chip">{grade}</span>
                ))}
                <button onClick={() => handleTabClick('specs')} className="grade-link cursor-pointer bg-transparent border-none">
                  View full grade table →
                </button>
              </div>

              <div className="sector-cards">
                <div className="sector-card">
                  <div className="sector-card-icon">⚡</div>
                  <div className="sector-card-title">EV Traction Motors</div>
                  <div className="sector-card-body">High BHmax grades enable compact, lightweight PMSM motors with superior torque density for electric drivetrains.</div>
                </div>
                <div className="sector-card">
                  <div className="sector-card-icon">🔧</div>
                  <div className="sector-card-title">Electric Power Steering</div>
                  <div className="sector-card-body">SH-grade magnets provide the coercivity needed to maintain performance across engine bay temperatures up to 150°C.</div>
                </div>
                <div className="sector-card">
                  <div className="sector-card-icon">📡</div>
                  <div className="sector-card-title">ABS & Position Sensors</div>
                  <div className="sector-card-body">Precision-machined rings and arcs for wheel speed sensors, Hall-effect sensing, and actuator position feedback.</div>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'wind' && (
            <section className="tab-section" id="sec-wind">
              <div className="sector-hero">
                <div className="section-eyebrow">APPLICATION SECTOR</div>
                <h2 className="section-title">Wind & Renewable Energy</h2>
                <p className="section-desc">
                  Direct-drive permanent magnet generators (PMG) in offshore and onshore wind turbines rely on heavy rare-earth optimized grades to withstand high temperatures and severe marine corrosion while maximizing energy harvest.
                </p>
              </div>

              <div className="sector-grades-bar">
                <span className="grades-label">Recommended Grades:</span>
                {['N38SH', 'N40SH', 'N38UH', 'N40UH', 'N35EH'].map((grade) => (
                  <span key={grade} className="grade-chip">{grade}</span>
                ))}
                <button onClick={() => handleTabClick('specs')} className="grade-link cursor-pointer bg-transparent border-none">
                  View full grade table →
                </button>
              </div>

              <div className="sector-cards">
                <div className="sector-card">
                  <div className="sector-card-icon">🌀</div>
                  <div className="sector-card-title">Direct-Drive Generators</div>
                  <div className="sector-card-body">Eliminates failure-prone gearboxes, utilizing segmented large-block NdFeB magnets to achieve maximum torque and efficiency at low speeds.</div>
                </div>
                <div className="sector-card">
                  <div className="sector-card-icon">🌊</div>
                  <div className="sector-card-title">Offshore Turbines</div>
                  <div className="sector-card-body">Advanced epoxy and multi-layer metallic coatings safeguard active magnetic components from humid, saline offshore environments.</div>
                </div>
                <div className="sector-card">
                  <div className="sector-card-icon">🔋</div>
                  <div className="sector-card-title">Energy Storage Systems</div>
                  <div className="sector-card-body">Integrates high-coercivity NdFeB components in magnetic bearings for low-friction flywheels and grid alternators.</div>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'defense' && (
            <section className="tab-section" id="sec-defense">
              <div className="sector-hero">
                <div className="section-eyebrow">APPLICATION SECTOR</div>
                <h2 className="section-title">Defense & Aerospace</h2>
                <p className="section-desc">
                  Stabilized UH and EH grades designed for high-stress aerospace actuators, precise gyroscopes, avionics, and defense guidance electronics requiring absolute operational reliability up to 200°C.
                </p>
              </div>

              <div className="sector-grades-bar">
                <span className="grades-label">Recommended Grades:</span>
                {['N35UH', 'N38UH', 'N33EH', 'N35EH', 'N30AH', 'N33AH'].map((grade) => (
                  <span key={grade} className="grade-chip">{grade}</span>
                ))}
                <button onClick={() => handleTabClick('specs')} className="grade-link cursor-pointer bg-transparent border-none">
                  View full grade table →
                </button>
              </div>

              <div className="sector-cards">
                <div className="sector-card">
                  <div className="sector-card-icon">🚀</div>
                  <div className="sector-card-title">Guidance & Actuators</div>
                  <div className="sector-card-body">Failsafe magnetic positioning in control surface fins, fuel control valves, and high-reliability servo systems.</div>
                </div>
                <div className="sector-card">
                  <div className="sector-card-icon">🛰️</div>
                  <div className="sector-card-title">Avionics & Radar Systems</div>
                  <div className="sector-card-body">Stabilized magnetics for traveling wave tubes (TWT), microwave devices, and precision gyroscopes.</div>
                </div>
                <div className="sector-card">
                  <div className="sector-card-icon">🚁</div>
                  <div className="sector-card-title">High-Speed Alternators</div>
                  <div className="sector-card-body">Custom rotor assemblies built to withstand rotational forces in high-RPM auxiliary power units (APU).</div>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'industrial' && (
            <section className="tab-section" id="sec-industrial">
              <div className="sector-hero">
                <div className="section-eyebrow">APPLICATION SECTOR</div>
                <h2 className="section-title">Industrial Automation</h2>
                <p className="section-desc">
                  High-torque density and low cogging NdFeB magnets optimized for industrial servo motors, linear drives, collaborative robotic joints, and factory automation components.
                </p>
              </div>

              <div className="sector-grades-bar">
                <span className="grades-label">Recommended Grades:</span>
                {['N40H', 'N42H', 'N45H', 'N38SH', 'N40SH'].map((grade) => (
                  <span key={grade} className="grade-chip">{grade}</span>
                ))}
                <button onClick={() => handleTabClick('specs')} className="grade-link cursor-pointer bg-transparent border-none">
                  View full grade table →
                </button>
              </div>

              <div className="sector-cards">
                <div className="sector-card">
                  <div className="sector-card-icon">🤖</div>
                  <div className="sector-card-title">Robotic Servo Joints</div>
                  <div className="sector-card-body">Highly compact magnetic designs enable high torque-to-weight ratios in articulation motors for collaborative robotics.</div>
                </div>
                <div className="sector-card">
                  <div className="sector-card-icon">⚙️</div>
                  <div className="sector-card-title">Linear Drives</div>
                  <div className="sector-card-body">Multi-pole magnet tracks deliver high-acceleration linear transport systems for semiconductor and packaging lines.</div>
                </div>
                <div className="sector-card">
                  <div className="sector-card-icon">🔍</div>
                  <div className="sector-card-title">Magnetic Separators</div>
                  <div className="sector-card-body">High-surface magnetic field configurations designed for scrap iron, food purity, and mineral processing lines.</div>
                </div>
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
