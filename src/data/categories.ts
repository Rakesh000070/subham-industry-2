import { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'cat-1',
    slug: 'laser-cutting',
    name: 'Laser Cutting Machines',
    description: 'High-precision fiber laser cutting systems for industrial metal fabrication and intricate part production.',
    featured: true
  },
  {
    id: 'cat-2',
    slug: 'cnc-machines',
    name: 'CNC Machines',
    description: 'Versatile computer numerical control systems for automated marking, engraving, and machining.',
    featured: false
  },
  {
    id: 'cat-3',
    slug: 'plasma-cutting',
    name: 'Plasma Cutting Machines',
    description: 'Heavy-duty plasma cutting solutions for thick metal plates and structural steel processing.',
    featured: false
  },
  {
    id: 'cat-4',
    slug: 'cnc-gantry-plasma',
    name: 'CNC Gantry Plasma',
    description: 'Large-format gantry systems designed for high-speed plasma cutting across massive work areas.',
    featured: false
  },
  {
    id: 'cat-5',
    slug: 'spm',
    name: 'SPM (Special Purpose Machines)',
    description: 'Custom-engineered machinery tailored for specific industrial processes and specialized manufacturing needs.',
    featured: false
  },
  {
    id: 'cat-6',
    slug: 'bending-machines',
    name: 'Bending / CNC Bending',
    description: 'High-accuracy hydraulic and CNC press brakes for precise sheet metal bending and forming.',
    featured: false
  }
];
