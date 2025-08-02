import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Konut Çatı İzolasyonu - Beşiktaş',
    category: 'residential',
    image: 'https://source.unsplash.com/600x400/?house,roof,insulation',
    description: 'Beşiktaş\'ta bulunan müstakil evde çatı yalıtımı projesi. Modern izolasyon teknikleri kullanılarak enerji verimliliği sağlandı.',
    completionDate: '2024-03-15'
  },
  {
    id: 'project-2',
    title: 'Ofis Binası Duvar İzolasyonu - Levent',
    category: 'commercial',
    image: 'https://source.unsplash.com/600x400/?office,building,construction',
    description: 'Levent\'te 8 katlı ofis binasının dış duvar yalıtımı. Enerji tasarrufu ve konfor artışı sağlandı.',
    completionDate: '2024-02-28'
  },
  {
    id: 'project-3',
    title: 'Fabrika Su İzolasyonu - Ikitelli',
    category: 'industrial',
    image: 'https://source.unsplash.com/600x400/?factory,industrial,waterproofing',
    description: 'Ikitelli Organize Sanayi Bölgesi\'nde fabrika çatı ve duvar su yalıtımı projesi.',
    completionDate: '2024-01-20'
  },
  {
    id: 'project-4',
    title: 'Villa Komple İzolasyon - Sarıyer',
    category: 'residential',
    image: 'https://source.unsplash.com/600x400/?villa,luxury,home',
    description: 'Sarıyer\'de lüks villa için komple izolasyon çözümü. Çatı, duvar ve zemin yalıtımı uygulandı.',
    completionDate: '2023-12-10'
  },
  {
    id: 'project-5',
    title: 'AVM Ses İzolasyonu - Şişli',
    category: 'commercial',
    image: 'https://source.unsplash.com/600x400/?mall,shopping,interior',
    description: 'Şişli\'de bulunan alışveriş merkezinin ses yalıtımı projesi. Müşteri konforu için özel çözümler.',
    completionDate: '2023-11-25'
  },
  {
    id: 'project-6',
    title: 'Depo Yangın İzolasyonu - Hadımköy',
    category: 'industrial',
    image: 'https://source.unsplash.com/600x400/?warehouse,storage,safety',
    description: 'Hadımköy\'de lojistik deposu için yangın yalıtımı. Güvenlik standartlarına uygun malzemeler kullanıldı.',
    completionDate: '2023-10-15'
  }
];