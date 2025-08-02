// Constants for AGE İzolasyon website

export const COMPANY_INFO = {
  name: 'AGE İzolasyon',
  fullName: 'AGE İzolasyon Sistemleri',
  phone: '+90 (212) 555-0123',
  email: 'info@ageizolasyon.com',
  address: 'Örnek Mahallesi, İzolasyon Caddesi No:123, Şişli/İstanbul',
  workingHours: 'Pazartesi - Cuma: 08:00 - 18:00',
};

export const NAVIGATION_ITEMS = [
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Hizmetlerimiz', href: '/hizmetlerimiz' },
  { label: 'Projelerimiz', href: '/projelerimiz' },
  { label: 'İzolasyon Rehberi', href: '/izolasyon-rehberi' },
];

export const SERVICE_CATEGORIES = [
  'Çatı İzolasyonu',
  'Duvar İzolasyonu',
  'Zemin İzolasyonu',
  'Su İzolasyonu',
  'Ses İzolasyonu',
  'Yangın İzolasyonu',
];

export const PROJECT_CATEGORIES = [
  { value: 'residential', label: 'Konut' },
  { value: 'commercial', label: 'Ticari' },
  { value: 'industrial', label: 'Endüstriyel' },
] as const;

export const SOCIAL_MEDIA = {
  facebook: 'https://facebook.com/ageizolasyon',
  instagram: 'https://instagram.com/ageizolasyon',
  linkedin: 'https://linkedin.com/company/ageizolasyon',
  youtube: 'https://youtube.com/ageizolasyon',
};

export const SEO_DEFAULTS = {
  title: 'AGE İzolasyon - Profesyonel İzolasyon Çözümleri',
  description: 'İstanbul\'da profesyonel izolasyon hizmetleri. Çatı, duvar, zemin izolasyonu ve su yalıtımı konusunda uzman ekibimizle hizmetinizdeyiz.',
  keywords: 'izolasyon, yalıtım, çatı izolasyonu, duvar izolasyonu, su yalıtımı, İstanbul',
};