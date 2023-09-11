export interface Page{
  label: string; 
  href: string
}

export interface Company {
  name: string;
  phone: number[];
  email: string[];
  social: Social;
  location: string[];
  schedule: Schedule;
  Characteristic: string[];
}

export interface Social {
  facebook: string;
  instagram: string;
  twitter: string;
}

export interface Schedule {
  weekDays: string[];
  weekEnds: string[];
}

export interface Benefit {
  icon: string;
  description: string;
}

export interface Plan {
  price: string;
  plan: string;
  benefits: string[];
}

export interface Requirement {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  image: string;
  name: string;
  location: string;
  description: string;
}

