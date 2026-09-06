import { Service } from '@/types';

export const services: Service[] = [
  {
    id: '1',
    name: 'Installation',
    description: 'Expert setup and assembly of machines at your facility by our specialized technicians.',
    icon: 'Hammer',
    benefits: [
      'Precision structural assembly',
      'Electrical & pneumatic integration',
      'Space-optimized positioning',
      'Safety compliance checks'
    ],
    details: 'Our team ensures that your machinery is correctly integrated into your production line, minimizing initial setup friction and ensuring structural integrity.'
  },
  {
    id: '2',
    name: 'Commissioning',
    description: 'Rigorous testing and calibration to ensure your new machinery meets all performance standards.',
    icon: 'CheckSquare',
    benefits: [
      'Performance benchmarking',
      'Parameter optimization',
      'Tolerance validation',
      'Output quality certification'
    ],
    details: 'We don\'t just install; we commission. Our engineers run exhaustive test cycles to ensure the machine operates at its peak rated capacity from day one.'
  },
  {
    id: '3',
    name: 'Operator Training',
    description: 'Comprehensive on-site training for your staff to ensure safe and efficient machine operation.',
    icon: 'GraduationCap',
    benefits: [
      'Hands-on machine handling',
      'Safety protocol deep-dive',
      'Software interface mastery',
      'Basic maintenance training'
    ],
    details: 'Empower your workforce with the skills needed to operate advanced CNC and Laser systems efficiently, reducing human error and maximizing throughput.'
  },
  {
    id: '4',
    name: 'Maintenance & AMC',
    description: 'Preventative maintenance schedules and AMC support to maximize machine uptime.',
    icon: 'Settings',
    benefits: [
      'Scheduled health checkups',
      'Priority spare parts access',
      'Emergency visit coverage',
      'Extended machine lifespan'
    ],
    details: 'Our Annual Maintenance Contracts (AMC) are designed to provide peace of mind through proactive monitoring and rapid response to wear-and-tear issues.'
  },
  {
    id: '5',
    name: 'Troubleshooting',
    description: 'Rapid diagnostic and repair services to solve any technical issues and restore production.',
    icon: 'SearchCode',
    benefits: [
      'Remote diagnostic support',
      'On-site rapid response',
      'Component-level repairs',
      'Root cause analysis'
    ],
    details: 'When production stops, every minute counts. Our technical support team provides immediate troubleshooting to identify and fix issues with minimal delay.'
  },
  {
    id: '6',
    name: 'After-Sales Support',
    description: 'Continuous technical assistance and spare parts availability throughout the machine lifecycle.',
    icon: 'LifeBuoy',
    benefits: [
      'Genuine spare parts supply',
      'Software update support',
      'Technical consulting',
      'Retrofitting & upgrades'
    ],
    details: 'Our commitment to your success continues long after the sale. We provide the technical backbone needed to keep your machines relevant and productive for years.'
  }
];
