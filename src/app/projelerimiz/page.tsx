import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import ProjectsPage from '@/pages/ProjectsPage';

export const metadata: Metadata = {
  title: 'Projelerimiz - AGE İzolasyon | Başarılı İzolasyon Projeleri',
  description: 'AGE İzolasyon olarak gerçekleştirdiğimiz başarılı izolasyon projelerini keşfedin. Konut, ticari ve endüstriyel projelerimizi inceleyin.',
  keywords: 'izolasyon projeleri, konut izolasyonu, ticari izolasyon, endüstriyel izolasyon, İstanbul projeler, başarılı işler',
  openGraph: {
    title: 'Projelerimiz - AGE İzolasyon',
    description: 'Başarılı izolasyon projelerimizi keşfedin. Konut, ticari ve endüstriyel alanlarda gerçekleştirdiğimiz kaliteli işler.',
    type: 'website',
    locale: 'tr_TR',
  },
  alternates: {
    canonical: '/projelerimiz',
  },
};

export default function Projects() {
  return (
    <MainLayout>
      <ProjectsPage />
    </MainLayout>
  );
}