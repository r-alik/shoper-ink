export type menuItem = {
  href: string;
  text: string;
  isActive: boolean;
};

export const menu: menuItem[] = [
  { href: '#', text: 'Шопер всім', isActive: true },
  { href: '#juteAndJute', text: 'Джут&Джут', isActive: false },
  { href: '#winebags', text: 'WineBags', isActive: false },
  { href: '#testimonials', text: 'Відгуки', isActive: false },
  { href: '#masterclass', text: 'Майстер клас', isActive: false },
  { href: '#aboutMe', text: 'Про мене', isActive: false },
];
