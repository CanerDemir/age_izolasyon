'use client';

import { Container, Typography, Box, Grid, Breadcrumbs, Link } from '@mui/material';
import { Home as HomeIcon, Build as BuildIcon } from '@mui/icons-material';
import NextLink from 'next/link';
import MaterialServiceCard from '@/components/cards/MaterialServiceCard';

import { services } from '@/data/services';

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url(https://source.unsplash.com/1920x600/?construction,tools,professional)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(25, 118, 210, 0.8)',
            zIndex: 1,
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Breadcrumbs 
            sx={{ 
              mb: 3, 
              '& .MuiBreadcrumbs-separator': { color: 'white' },
              justifyContent: 'center',
              display: 'flex'
            }}
          >
            <Link
              component={NextLink}
              href="/"
              color="inherit"
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                textDecoration: 'none',
                '&:hover': { opacity: 0.8 }
              }}
            >
              <HomeIcon sx={{ mr: 0.5, fontSize: 20 }} />
              Ana Sayfa
            </Link>
            <Typography color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
              <BuildIcon sx={{ mr: 0.5, fontSize: 20 }} />
              Hizmetlerimiz
            </Typography>
          </Breadcrumbs>

          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{ 
              mb: 3,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Hizmetlerimiz
          </Typography>
          
          <Typography
            variant="h5"
            sx={{ 
              maxWidth: 800, 
              mx: 'auto', 
              opacity: 0.95,
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              fontWeight: 300
            }}
          >
            Profesyonel izolasyon çözümleri ile evinizi ve işyerinizi dış etkenlerden koruyun. 
            15 yıllık deneyimimizle kaliteli hizmet garantisi sunuyoruz.
          </Typography>
        </Container>
        

      </Box>

      {/* Services Grid */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ mb: 3, fontWeight: 600 }}
          >
            Tüm İzolasyon Hizmetlerimiz
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 700, mx: 'auto', fontWeight: 300 }}
          >
            Her türlü izolasyon ihtiyacınız için profesyonel çözümler sunuyoruz. 
            Kaliteli malzeme ve uzman ekibimizle garantili hizmet.
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid 
              item 
              xs={12} 
              md={6} 
              lg={4} 
              key={service.id}
              sx={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <MaterialServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Service Benefits Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ mb: 3, fontWeight: 600 }}
            >
              İzolasyon Hizmetlerimizin Avantajları
            </Typography>
          </Box>

          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                  Enerji Tasarrufu
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Kaliteli izolasyon ile ısıtma ve soğutma maliyetlerinizi %40'a kadar azaltabilirsiniz. 
                  Yatırımınız kısa sürede kendini amorti eder.
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                  Konfor Artışı
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Doğru izolasyon ile yaşam alanlarınızda ideal sıcaklık ve nem dengesini sağlayın. 
                  Daha sağlıklı ve konforlu bir ortam yaratın.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                  Çevre Dostu
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Enerji tüketimini azaltarak karbon ayak izinizi küçültün. 
                  Çevre dostu malzemeler ile sürdürülebilir çözümler sunuyoruz.
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                  Uzun Ömürlü Çözüm
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Kaliteli malzeme ve profesyonel uygulama ile 20+ yıl dayanıklılık garantisi. 
                  Bir kez yaptırın, yıllarca faydasını görün.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ py: 10, textAlign: 'center' }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{ mb: 3, fontWeight: 600 }}
        >
          Ücretsiz Keşif ve Teklif
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 600, mx: 'auto', fontWeight: 300 }}
        >
          Uzman ekibimiz ücretsiz keşif yaparak size en uygun çözümü sunar. 
          Detaylı teklif için hemen iletişime geçin.
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            component={NextLink}
            href="/iletisim"
            sx={{ textDecoration: 'none' }}
          >
            <Box
              sx={{
                p: 3,
                bgcolor: 'primary.main',
                color: 'white',
                borderRadius: 2,
                minWidth: 200,
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'primary.dark',
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}
            >
              <Typography variant="h6" gutterBottom>
                Telefon
              </Typography>
              <Typography variant="body1">
                +90 (212) 555-0123
              </Typography>
            </Box>
          </Link>

          <Link
            component={NextLink}
            href="/iletisim"
            sx={{ textDecoration: 'none' }}
          >
            <Box
              sx={{
                p: 3,
                bgcolor: 'secondary.main',
                color: 'white',
                borderRadius: 2,
                minWidth: 200,
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'secondary.dark',
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}
            >
              <Typography variant="h6" gutterBottom>
                Online Form
              </Typography>
              <Typography variant="body1">
                Hemen Teklif Alın
              </Typography>
            </Box>
          </Link>
        </Box>
      </Container>
    </>
  );
}