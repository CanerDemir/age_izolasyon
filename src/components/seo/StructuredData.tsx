'use client';

import { COMPANY_INFO } from '@/utils/constants';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY_INFO.name,
    "description": "İstanbul'da profesyonel izolasyon hizmetleri. Çatı, duvar, zemin izolasyonu ve su yalıtımı konusunda uzman.",
    "url": "https://ageizolasyon.com",
    "telephone": COMPANY_INFO.phone,
    "email": COMPANY_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Örnek Mahallesi, İzolasyon Caddesi No:123",
      "addressLocality": "Şişli",
      "addressRegion": "İstanbul",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.0082",
      "longitude": "28.9784"
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "41.0082",
        "longitude": "28.9784"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "İzolasyon Hizmetleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Çatı İzolasyonu",
            "description": "Profesyonel çatı yalıtım hizmetleri"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Duvar İzolasyonu",
            "description": "İç ve dış duvar yalıtımı hizmetleri"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Zemin İzolasyonu",
            "description": "Zemin yalıtımı ve nem kontrolü"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Su İzolasyonu",
            "description": "Su sızıntılarına karşı profesyonel yalıtım"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "sameAs": [
      "https://facebook.com/ageizolasyon",
      "https://instagram.com/ageizolasyon",
      "https://linkedin.com/company/ageizolasyon"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}