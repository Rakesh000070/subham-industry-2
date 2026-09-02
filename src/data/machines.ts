import { Product } from '@/types';

export const machines: Product[] = [
  {
    id: '1',
    slug: 'high-power-fiber-laser-3000w',
    name: 'Pro-Cut Series 3000W',
    category: 'Laser Cutting',
    model: 'SI-FL-3000',
    shortDescription: 'Precision fiber laser cutting machine designed for medium to heavy industrial applications.',
    description: 'The Pro-Cut Series 3000W is a robust fiber laser cutting system engineered for high-speed precision cutting of carbon steel, stainless steel, and aluminum. Equipped with a high-performance laser source and advanced CNC control system.',
    images: ['/assets/machines/laser-3000w.jpg'],
    features: [
      'High-speed cutting with superior precision',
      'Advanced CNC control system',
      'Automatic height adjustment',
      'Low maintenance requirements'
    ],
    specifications: [
      { label: 'Laser Power', value: '3000W' },
      { label: 'Working Area', value: '3000 x 1500 mm' },
      { label: 'Cutting Thickness (MS)', value: 'Up to 20mm' },
      { label: 'Cutting Thickness (SS)', value: 'Up to 10mm' }
    ],
    applications: ['Automotive', 'Aerospace', 'Sheet Metal Fabrication'],
    featured: true,
    status: 'active',
    enquiryEnabled: true
  },
  {
    id: '2',
    slug: 'ultra-high-power-laser-12000w',
    name: 'Industrial Giant 12000W',
    category: 'Laser Cutting',
    model: 'SI-FL-12000',
    shortDescription: 'Ultra-high power fiber laser system for heavy-duty metal plate processing.',
    description: 'The Industrial Giant 12000W represents the pinnacle of laser cutting technology. Designed for 24/7 heavy-duty industrial environments, it offers unmatched cutting speeds and the ability to process extremely thick materials with ease.',
    images: ['/assets/machines/laser-12000w.jpg'],
    features: [
      'Ultra-high power density',
      'Dual pallet changer system',
      'Enclosed safety cabin',
      'Real-time monitoring system'
    ],
    specifications: [
      { label: 'Laser Power', value: '12000W' },
      { label: 'Working Area', value: '6000 x 2500 mm' },
      { label: 'Cutting Thickness (MS)', value: 'Up to 50mm' },
      { label: 'Cutting Thickness (SS)', value: 'Up to 40mm' }
    ],
    applications: ['Shipbuilding', 'Heavy Machinery', 'Construction'],
    featured: true,
    status: 'active',
    enquiryEnabled: true
  },
  {
    id: '3',
    slug: 'precision-mark-laser',
    name: 'Precision-Mark Fiber',
    category: 'Laser Marking',
    model: 'SI-LM-50',
    shortDescription: 'High-speed industrial fiber laser marking machine for permanent metal engraving.',
    description: 'Our Precision-Mark series offers high-speed, permanent marking solutions for a wide range of industrial components. Perfect for serial numbering, barcodes, and complex branding on metal surfaces.',
    images: ['/assets/machines/marking-50w.jpg'],
    features: [
      'Maintenance-free operation',
      'Extremely long service life',
      'High-speed marking head',
      'Portable and compact design'
    ],
    specifications: [
      { label: 'Laser Power', value: '50W' },
      { label: 'Marking Area', value: '110 x 110 mm' },
      { label: 'Min. Line Width', value: '0.01 mm' },
      { label: 'Marking Speed', value: '7000 mm/s' }
    ],
    applications: ['Electronic Components', 'Medical Tools', 'Tooling'],
    featured: true,
    status: 'active',
    enquiryEnabled: true
  }
];
