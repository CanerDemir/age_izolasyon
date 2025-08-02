// Core TypeScript interfaces for AGE İzolasyon website

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  price?: string; // Optional pricing information
}

export interface Project {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'industrial';
  image: string;
  description: string;
  completionDate: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface Testimonial {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  projectType: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
}

// Component Props Interfaces


export interface PlaceholderImageProps {
  width: number;
  height: number;
  category: 'hero' | 'service' | 'project' | 'team' | 'general';
  alt: string;
  className?: string;
}

export interface MaterialServiceCardProps {
  service: Service;
}

export interface MaterialProjectCardProps {
  project: Project;
}

export interface MaterialTestimonialCardProps {
  testimonial: Testimonial;
}