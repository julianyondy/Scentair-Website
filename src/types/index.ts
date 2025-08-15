export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface ContactForm {
  name: string;
  phone: string;
  email: string;
  purpose: 'home' | 'business';
  companyName?: string;
  address: string;
}

export interface NavItem {
  label: string;
  href: string;
}