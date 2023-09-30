export interface Page {
  label: string;
  href: string;
}

export interface Benefit {
  id?: string | number;
  description: string;
  icon?: string;
  iconName?: string;
}

export interface Company {
  name: string;
  phone: number[];
  email: string[];
  social: Social;
  location: string[];
  schedule: Schedule;
  characteristic: string[];
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

export interface Plan {
  price: string;
  plan: string;
  benefits: string[];
  meta: string;
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
  description?: string;
}

export interface User {
  image: string;
  name: string;
  location: string;
}
export interface Horary {
  horary: string[];
}

export type LinkProps = {
  text: string;
  url: string;
}

export interface KnowUs {
  links: Array<LinkProps>;
}

export interface ContactInfo {
  text: string;
  url: string;
  icon: string;
}