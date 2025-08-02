import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import EducationalContentPage from '@/pages/EducationalContentPage';

export const metadata: Metadata = {
  title: 'İzolasyon Rehberi - AGE İzolasyon | Enerji Tasarrufu ve İzolasyon Bilgileri',
  description: 'İzolasyon hakkında bilmeniz gereken her şey. Enerji tasarrufu, malzeme seçimi, izolasyon türleri ve faydaları hakkında kapsamlı rehber.',
  keywords: 'izolasyon rehberi, enerji tasarrufu, izolasyon malzemeleri, çatı izolasyonu faydaları, duvar izolasyonu, zemin izolasyonu',
  openGraph: {
    title: 'İzolasyon Rehberi - AGE İzolasyon',
    description: 'İzolasyon hakkında kapsamlı bilgiler. Enerji tasarrufu, malzeme seçimi ve izolasyon türleri hakkında uzman rehberi.',
    type: 'article',
    locale: 'tr_TR',
  },
  alternates: {
    canonical: '/izolasyon-rehberi',
  },
};

export default function EducationalContent() {
  return (
    <MainLayout>
      <EducationalContentPage />
    </MainLayout>
  );
}