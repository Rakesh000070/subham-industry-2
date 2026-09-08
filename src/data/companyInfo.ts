import { CompanyInfo } from '../types';

export const companyInfo: CompanyInfo = {
  name: 'Subham Industries',
  worksAddress: {
    street: 'Plot No. [TO BE VERIFIED], Industrial Area',
    city: 'Surat',
    state: 'Gujarat',
    zipCode: '[VERIFY]',
    country: 'India'
  },
  registeredAddress: {
    street: '[TO BE VERIFIED] Registered Office Address',
    city: 'Surat',
    state: 'Gujarat',
    zipCode: '[VERIFY]',
    country: 'India'
  },
  gstin: '[TO BE VERIFIED - 24XXXXXXXXXXXXX]',
  contactEmail: 'info@subhamindustries.com',
  salesEmail: 'sales@subhamindustries.com',
  technicalEmail: 'support@subhamindustries.com',
  contactPhone: '+91 [VERIFY PHONE]',
  salesPhone: '+91 [VERIFY PHONE]',
  technicalPhone: '+91 [VERIFY PHONE]',
  whatsapp: '+91 [VERIFY PHONE]'
};

export const downloadResources = [
  {
    id: '1',
    title: 'Corporate Brochure 2024',
    description: 'A comprehensive overview of our company mission, infrastructure, and core values.',
    fileSize: '4.2 MB',
    format: 'PDF',
    url: '#'
  },
  {
    id: '2',
    title: 'Product Catalogue - Laser Systems',
    description: 'Detailed specifications and features for our entire Fiber Laser cutting machine lineup.',
    fileSize: '8.5 MB',
    format: 'PDF',
    url: '#'
  },
  {
    id: '3',
    title: 'Product Catalogue - CNC Bending',
    description: 'Technical data for our hydraulic and electric press brake solutions.',
    fileSize: '5.1 MB',
    format: 'PDF',
    url: '#'
  },
  {
    id: '4',
    title: 'Industrial Applications Guide',
    description: 'How our machines are used across various manufacturing sectors.',
    fileSize: '3.8 MB',
    format: 'PDF',
    url: '#'
  }
];
