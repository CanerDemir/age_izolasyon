import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import ServicesPage from '@/pages/ServicesPage';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz - AGE İzolasyon | Çatı, Duvar, Zemin İzolasyonu',
  description: 'Çatı izolasyonu, duvar izolasyonu, zemin izolasyonu, su yalıtımı, ses izolasyonu ve yangın izolasyonu hizmetleri. İstanbul\'da profesyonel izolasyon çözümleri.',
  keywords: 'çatı izolasyonu, duvar izolasyonu, zemin izolasyonu, su yalıtımı, ses izolasyonu, yangın izolasyonu, İstanbul izolasyon',
  openGraph: {
    title: 'Hizmetlerimiz - AGE İzolasyon',
    description: 'Çatı, duvar, zemin izolasyonu ve su yalıtımı hizmetleri. Profesyonel izolasyon çözümleri için uzman ekibimizle iletişime geçin.',
    type: 'website',
    locale: 'tr_TR',
  },
  alternates: {
    canonical: '/hizmetlerimiz',
  },
};

export default function Services() {
  return (
    <MainLayout>
      <ServicesPage />
    </MainLayout>
  );
}