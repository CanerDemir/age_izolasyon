import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'cati-izolasyonu',
    title: 'Çatı İzolasyonu',
    description: 'Profesyonel çatı yalıtım hizmetleri ile evinizi dış etkenlerden koruyun. Enerji tasarrufu sağlayan modern izolasyon teknikleri.',
    icon: 'Home',
    benefits: ['Enerji tasarrufu', 'Su yalıtımı', 'Ses yalıtımı', 'Uzun ömürlü çözüm']
  },
  {
    id: 'duvar-izolasyonu',
    title: 'Duvar İzolasyonu',
    description: 'İç ve dış duvar yalıtımı ile konforunuzu artırın. Nem ve sıcaklık kontrolü için etkili çözümler.',
    icon: 'Business',
    benefits: ['Nem kontrolü', 'Sıcaklık dengesi', 'Enerji verimliliği', 'Konfor artışı']
  },
  {
    id: 'zemin-izolasyonu',
    title: 'Zemin İzolasyonu',
    description: 'Zemin altından gelen nem ve soğuğa karşı etkili koruma. Sağlıklı yaşam alanları için zemin yalıtımı.',
    icon: 'Foundation',
    benefits: ['Nem engelleme', 'Soğuk izolasyonu', 'Sağlıklı ortam', 'Dayanıklılık']
  },
  {
    id: 'su-izolasyonu',
    title: 'Su İzolasyonu',
    description: 'Su sızıntılarına karşı tam koruma. Teras, balkon, banyo ve bodrum su yalıtımı hizmetleri.',
    icon: 'Water',
    benefits: ['Su sızıntı engelleme', 'Yapısal koruma', 'Uzun vadeli çözüm', 'Garanti']
  },
  {
    id: 'ses-izolasyonu',
    title: 'Ses İzolasyonu',
    description: 'Gürültü kirliliğinden korunun. Profesyonel ses yalıtımı ile huzurlu yaşam alanları.',
    icon: 'VolumeOff',
    benefits: ['Gürültü azaltma', 'Huzurlu ortam', 'Kaliteli malzeme', 'Uzman uygulama']
  },
  {
    id: 'yangin-izolasyonu',
    title: 'Yangın İzolasyonu',
    description: 'Yangına dayanıklı malzemeler ile güvenliğinizi artırın. Sertifikalı yangın yalıtım sistemleri.',
    icon: 'LocalFireDepartment',
    benefits: ['Yangın güvenliği', 'Sertifikalı malzeme', 'Güvenlik artışı', 'Standart uygunluk']
  }
];