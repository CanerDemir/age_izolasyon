import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import AboutPage from '@/pages/AboutPage';

export const metadata: Metadata = {
  title: 'Hakkımızda - AGE İzolasyon | 15 Yıllık Deneyim',
  description: 'AGE İzolasyon olarak 15 yıldır İstanbul\'da profesyonel izolasyon hizmetleri sunuyoruz. Uzman ekibimiz, kaliteli malzemeler ve müşteri memnuniyeti odaklı yaklaşımımızla tanışın.',
  keywords: 'AGE İzolasyon hakkında, izolasyon firması İstanbul, profesyonel izolasyon, uzman ekip, kaliteli hizmet',
  openGraph: {
    title: 'Hakkımızda - AGE İzolasyon',
    description: '15 yıllık deneyimimizle İstanbul\'da profesyonel izolasyon hizmetleri. Uzman ekibimiz ve kaliteli yaklaşımımızla tanışın.',
    type: 'website',
    locale: 'tr_TR',
  },
  alternates: {
    canonical: '/hakkimizda',
  },
};

export default function About() {
  return (
    <MainLayout>
      <AboutPage />
    </MainLayout>
  );
}