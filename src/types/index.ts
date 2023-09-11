export type Company = {
  name: string;
  phone: number[];
  email: string[];
  social: Social;
  location: string[];
  schedule: Schedule;
  Characteristic: string[];
};

export type Social = {
  facebook: string;
  instagram: string;
  twitter: string;
};

export type Schedule = {
  "Lunes - Viernes": string[];
  Sabado: string[];
};

export type Benefit = {
  icon: string;
  description: string;
};

export type Plan = {
  price: string;
  plan: string;
  benefits: string[];
};

export type Requirement = {
  icon: string;
  title: string;
  description: string;
};

export type Testimonial = {
  image: string;
  name: string;
  location: string;
  description: string;
};
