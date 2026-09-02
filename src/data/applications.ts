import { Application } from '@/types';

export const applications: Application[] = [
  {
    id: '1',
    name: 'Automotive Industry',
    description: 'Precision cutting of chassis components, exhaust systems, and interior parts.',
    relatedCategories: ['Laser Cutting', 'Laser Marking']
  },
  {
    id: '2',
    name: 'Aerospace & Defense',
    description: 'High-accuracy fabrication of engine components and structural airframe parts.',
    relatedCategories: ['Laser Cutting', 'CNC Bending']
  },
  {
    id: '3',
    name: 'Furniture & Architecture',
    description: 'Intricate patterns and high-finish edges for decorative metal panels and frames.',
    relatedCategories: ['Laser Cutting', 'Laser Welding']
  },
  {
    id: '4',
    name: 'Electrical & Electronics',
    description: 'Detailed marking for circuit components and precision housing fabrication.',
    relatedCategories: ['Laser Marking', 'Laser Cutting']
  }
];
