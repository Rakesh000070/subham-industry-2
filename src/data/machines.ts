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
  },
  {
    id: '4',
    slug: 'gantry-plasma-cut-hd',
    name: 'Gantry-Cut Heavy Duty',
    category: 'Plasma Cutting',
    model: 'SI-GP-200',
    shortDescription: 'Large-format CNC gantry plasma cutting system for heavy industrial plate processing.',
    description: 'The Gantry-Cut HD is designed for maximum productivity in heavy-duty environments. Featuring a massive working area and high-power plasma source, it is ideal for structural steel and heavy equipment manufacturing.',
    images: ['/assets/machines/plasma-gantry.jpg'],
    features: [
      'Heavy-duty gantry structure',
      'Dual drive system for high precision',
      'Automatic torch height control',
      'Industrial-grade CNC controller'
    ],
    specifications: [
      { label: 'Plasma Source', value: '200A' },
      { label: 'Working Area', value: '6000 x 3000 mm' },
      { label: 'Cutting Thickness (MS)', value: 'Up to 32mm' },
      { label: 'Cutting Thickness (SS)', value: 'Up to 25mm' }
    ],
    applications: ['Structural Engineering', 'Shipbuilding', 'Mining Equipment'],
    featured: false,
    status: 'active',
    enquiryEnabled: true
  },
  {
    id: '5',
    slug: 'compact-fiber-laser-1000w',
    name: 'Eco-Cut Series 1000W',
    category: 'Laser Cutting',
    model: 'SI-FL-1000',
    shortDescription: 'Compact and efficient fiber laser cutting system for small to medium fabrication shops.',
    description: 'The Eco-Cut 1000W offers an entry point into high-precision fiber laser cutting. Its compact footprint and energy-efficient operation make it perfect for smaller workshops looking to modernize their production.',
    images: ['/assets/machines/laser-1000w.jpg'],
    features: [
      'Compact footprint',
      'Low energy consumption',
      'User-friendly interface',
      'Easy installation'
    ],
    specifications: [
      { label: 'Laser Power', value: '1000W' },
      { label: 'Working Area', value: '2500 x 1300 mm' },
      { label: 'Cutting Thickness (MS)', value: 'Up to 10mm' },
      { label: 'Cutting Thickness (SS)', value: 'Up to 4mm' }
    ],
    applications: ['Kitchenware', 'Signage', 'Light Fabrication'],
    featured: false,
    status: 'active',
    enquiryEnabled: true
  },
  {
    id: '6',
    slug: 'cnc-bending-press-100t',
    name: 'Flex-Bend CNC Press',
    category: 'CNC Bending',
    model: 'SI-BP-100',
    shortDescription: 'High-precision CNC hydraulic press brake for complex metal forming operations.',
    description: 'The Flex-Bend 100T provides exceptional accuracy and repeatability in sheet metal bending. With multi-axis backgauge control and an intuitive CNC interface, complex forming becomes simple and efficient.',
    images: ['/assets/machines/cnc-bending.jpg'],
    features: [
      'Multi-axis CNC backgauge',
      'Automatic crowning system',
      'High-precision hydraulic valves',
      'Quick-change tooling system'
    ],
    specifications: [
      { label: 'Bending Force', value: '100 Tons' },
      { label: 'Bending Length', value: '3100 mm' },
      { label: 'Distance Between Uprights', value: '2600 mm' },
      { label: 'Stroke', value: '200 mm' }
    ],
    applications: ['Control Panels', 'Cabinet Making', 'Automotive Panels'],
    featured: true,
    status: 'active',
    enquiryEnabled: true
  }
];
