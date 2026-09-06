import { Application } from '../types';

export const applications: Application[] = [
  {
    id: '1',
    name: 'Precision Metal Fabrication',
    description: 'Specialized solutions for high-precision sheet metal cutting, bending, and assembly for general manufacturing and contract fabrication shops.',
    relatedCategories: ['laser-cutting', 'bending-machines'],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Automotive & Transport',
    description: 'Advanced systems for mass production of automotive components, chassis parts, and complex structural elements for the transportation industry.',
    relatedCategories: ['laser-cutting', 'plasma-cutting', 'bending-machines'],
    image: 'https://images.unsplash.com/photo-1565043581454-41d40228302f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Aerospace Components',
    description: 'High-tolerance fabrication solutions for aerospace materials, ensuring critical precision for structural parts and intricate engine components.',
    relatedCategories: ['laser-cutting', 'cnc-machines'],
    image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Industrial Manufacturing',
    description: 'Robust machinery for the production of heavy-duty equipment, machinery components, and infrastructure hardware across various sectors.',
    relatedCategories: ['plasma-cutting', 'spm', 'bending-machines'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    name: 'Electronics & Medical',
    description: 'Ultra-precision marking and micro-cutting solutions for electronic housings, surgical instruments, and high-tech hardware components.',
    relatedCategories: ['cnc-machines', 'laser-cutting'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    name: 'Architecture & Construction',
    description: 'Versatile fabrication tools for structural steel work, architectural metal elements, and decorative panels used in modern construction.',
    relatedCategories: ['plasma-cutting', 'bending-machines'],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800'
  }
];
