import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import ContactPage from '@/pages/ContactPage';

export const metadata: Metadata = {
  title: 'İletişim - AGE İzolasyon | Ücretsiz Keşif ve Teklif',
  description: 'AGE İzolasyon ile iletişime geçin. Ücretsiz keşif ve detaylı teklif için formumuzu doldurun. Telefon: +90 (212) 555-0123',
  keywords: 'AGE İzolasyon iletişim, ücretsiz keşif, izolasyon teklifi, İstanbul izolasyon firması, telefon, adres',
  openGraph: {
    title: 'İletişim - AGE İzolasyon',
    description: 'Profesyonel izolasyon hizmetleri için bizimle iletişime geçin. Ücretsiz keşif ve detaylı teklif alın.',
    type: 'website',
    locale: 'tr_TR',
  },
  alternates: {
    canonical: '/iletisim',
  },
};

export default function Contact() {
  return (
    <MainLayout>
      <ContactPage />
    </MainLayout>
  );
}