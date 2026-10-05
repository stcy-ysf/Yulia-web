export type ServiceCategory = 'todos' | 'imigracao' | 'empresas' | 'civil_imobiliario' | 'fiscal';

export interface LegalService {
  id: string;
  title: string;
  category: ServiceCategory;
  shortDescription: string;
  fullDescription: string;
  documentsRequired: string[];
  estimatedTimeframe: string;
  feeGuideline: string;
  badge?: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  location: string;
  serviceType: string;
  rating: number;
  content: string;
  date: string;
  avatarUrl?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'geral' | 'imigracao' | 'vistos' | 'empresas' | 'fiscal';
}

export interface AppointmentBooking {
  name: string;
  phone: string;
  email: string;
  serviceId: string;
  mode: 'presencial' | 'online';
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export interface EligibilityResult {
  pathwayName: string;
  suitabilityScore: 'elevada' | 'media' | 'requer_analise';
  summary: string;
  keyRequirements: string[];
  recommendedServiceId: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: string;
}
