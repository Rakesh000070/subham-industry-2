/**
 * Represents a machine or product offered by Subham Industries.
 */
export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  model?: string;
  shortDescription: string;
  description: string;
  images: string[];
  features: string[];
  /** Key-value pairs for technical specifications */
  specifications: Specification[];
  applications: string[];
  components?: MachineComponent[];
  accessories?: string[];
  brochureUrl?: string;
  featured?: boolean;
  status: 'active' | 'inactive';
  enquiryEnabled: boolean;
}

export interface Specification {
  label: string;
  value: string;
}

export interface MachineComponent {
  name: string;
  details: string;
}

/**
 * Represents a product category.
 */
export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  image?: string;
  featured?: boolean;
}

/**
 * Represents a service provided by Subham Industries.
 */
export interface Service {
  id: string;
  name: string;
  description: string;
  /** Icon name from lucide-react or custom SVG path */
  icon?: string;
}

/**
 * Represents an industrial application area for the machines.
 */
export interface Application {
  id: string;
  name: string;
  description: string;
  relatedCategories: string[];
  image?: string;
}

/**
 * Represents a customer enquiry submitted through the website.
 */
export interface Enquiry {
  name: string;
  company: string;
  phone: string;
  email: string;
  /** Slug of the product the user is inquiring about */
  productSlug?: string;
  message: string;
}

/**
 * Represents the corporate identity and contact information for Subham Industries.
 */
export interface CompanyInfo {
  name: string;
  worksAddress: Address;
  registeredAddress: Address;
  gstin: string;
  contactEmail: string;
  salesEmail: string;
  technicalEmail: string;
  contactPhone: string;
  salesPhone: string;
  technicalPhone: string;
  whatsapp?: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}
