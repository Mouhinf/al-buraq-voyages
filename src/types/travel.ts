export interface Destination {
  id: string;
  title: string;
  location: string;
  country: string;
  price: number;
  duration: string;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  featured?: boolean;
  category: 'beach' | 'culture' | 'adventure' | 'city';
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: number;
  billingPeriod: 'month' | 'year';
  isPopular?: boolean;
  features: string[];
  ctaText: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  avatarUrl: string;
  content: string;
  rating: number;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  destination: string;
  activity: string;
  travelDate: string;
  travelersCount: number;
  notes?: string;
}
