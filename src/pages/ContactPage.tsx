'use client';

import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card,
  CardContent,
  Breadcrumbs,
  Link
} from '@mui/material';
import { 
  Home as HomeIcon, 
  ContactMail as ContactIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
  AccessTime as AccessTimeIcon,
  WhatsApp as WhatsAppIcon
} from '@mui/icons-material';
import NextLink from 'next/link';
import MaterialContactForm from '@/components/forms/MaterialContactForm';
import { COMPANY_INFO } from '@/utils/constants';

export default function ContactPage() {
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
          backgroundImage: 'url(https://source.unsplash.com/1920x600/?contact,communication,office)',
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
              <ContactIcon sx={{ mr: 0.5, fontSize: 20 }} />
              İletişim
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
            İletişim
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
            Profesyonel izolasyon hizmetleri için bizimle iletişime geçin. 
            Uzman ekibimiz size en uygun çözümü sunmak için hazır.
          </Typography>
        </Container>

      </Box>

      {/* Contact Information Cards */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6} lg={3}>
            <Card 
              sx={{ 
                height: '100%', 
                textAlign: 'center', 
                p: 3,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 4
                }
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3
                  }}
                >
                  <PhoneIcon sx={{ fontSize: 40, color: 'white' }} />
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Telefon
                </Typography>
                <Typography variant="body1" color="primary.main" sx={{ fontWeight: 500 }}>
                  {COMPANY_INFO.phone}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  7/24 Destek Hattı
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Card 
              sx={{ 
                height: '100%', 
                textAlign: 'center', 
                p: 3,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 4
                }
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: 'secondary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3
                  }}
                >
                  <EmailIcon sx={{ fontSize: 40, color: 'white' }} />
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  E-posta
                </Typography>
                <Typography variant="body1" color="secondary.main" sx={{ fontWeight: 500 }}>
                  {COMPANY_INFO.email}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  24 saat içinde yanıt
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Card 
              sx={{ 
                height: '100%', 
                textAlign: 'center', 
                p: 3,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 4
                }
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: 'success.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3
                  }}
                >
                  <LocationIcon sx={{ fontSize: 40, color: 'white' }} />
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Adres
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                  {COMPANY_INFO.address}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Card 
              sx={{ 
                height: '100%', 
                textAlign: 'center', 
                p: 3,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 4
                }
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: 'info.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3
                  }}
                >
                  <AccessTimeIcon sx={{ fontSize: 40, color: 'white' }} />
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Çalışma Saatleri
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {COMPANY_INFO.workingHours}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Hafta sonu randevulu
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Contact Form and Map Section */}
        <Grid container spacing={6}>
          <Grid item xs={12} lg={6}>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{ mb: 2, fontWeight: 600 }}
              >
                Bize Ulaşın
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4, fontSize: '1.1rem' }}
              >
                Projeniz hakkında detaylı bilgi almak ve ücretsiz keşif randevusu için 
                formu doldurun. En kısa sürede size dönüş yapacağız.
              </Typography>
            </Box>
            <MaterialContactForm />
          </Grid>

          <Grid item xs={12} lg={6}>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{ mb: 2, fontWeight: 600 }}
              >
                Ofisimizi Ziyaret Edin
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4, fontSize: '1.1rem' }}
              >
                Şişli merkezindeki ofisimizde uzman ekibimizle yüz yüze görüşebilir, 
                malzeme örneklerini inceleyebilirsiniz.
              </Typography>
            </Box>

            {/* Embedded Map Placeholder */}
            <Box
              sx={{
                width: '100%',
                height: 400,
                bgcolor: 'grey.200',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 4,
                backgroundImage: 'url(https://source.unsplash.com/600x400/?map,location,istanbul)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: 2,
                }
              }}
            >
              <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'white' }}>
                <LocationIcon sx={{ fontSize: 60, mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Harita Yükleniyor...
                </Typography>
                <Typography variant="body2">
                  Google Maps entegrasyonu yakında eklenecek
                </Typography>
              </Box>
            </Box>

            {/* Quick Contact Options */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Card 
                  sx={{ 
                    p: 2,
                    bgcolor: 'success.light',
                    color: 'white',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      bgcolor: 'success.main'
                    }
                  }}
                >
                  <CardContent sx={{ display: 'flex', alignItems: 'center', p: '16px !important' }}>
                    <WhatsAppIcon sx={{ mr: 2, fontSize: 30 }} />
                    <Box>
                      <Typography variant="h6" gutterBottom sx={{ mb: 0.5 }}>
                        WhatsApp
                      </Typography>
                      <Typography variant="body2">
                        Hızlı iletişim için
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Card 
                  sx={{ 
                    p: 2,
                    bgcolor: 'primary.light',
                    color: 'white',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      bgcolor: 'primary.main'
                    }
                  }}
                >
                  <CardContent sx={{ display: 'flex', alignItems: 'center', p: '16px !important' }}>
                    <PhoneIcon sx={{ mr: 2, fontSize: 30 }} />
                    <Box>
                      <Typography variant="h6" gutterBottom sx={{ mb: 0.5 }}>
                        Hemen Ara
                      </Typography>
                      <Typography variant="body2">
                        Anında destek
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* FAQ Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ mb: 3, fontWeight: 600 }}
            >
              Sık Sorulan Sorular
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto', fontWeight: 300 }}
            >
              İzolasyon hizmetleri hakkında merak ettikleriniz
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3, height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                    Keşif ücreti alıyor musunuz?
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Hayır, keşif ve teklif hizmetimiz tamamen ücretsizdir. 
                    Uzman ekibimiz projenizi yerinde inceleyerek size en uygun çözümü sunar.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3, height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                    Garanti süresi ne kadar?
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Kullandığımız malzeme ve işçiliğe göre 5-20 yıl arası garanti sunuyoruz. 
                    Detaylı garanti koşulları teklif aşamasında belirtilir.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3, height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                    Proje süresi ne kadar?
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Proje büyüklüğüne göre değişmekle birlikte, ortalama bir konut projesi 
                    2-5 gün, ticari projeler 1-3 hafta sürmektedir.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3, height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                    Ödeme koşulları nasıl?
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Esnek ödeme seçenekleri sunuyoruz. Peşin ödemede indirim, 
                    taksitli ödeme ve proje aşamalarına göre ödeme imkanları mevcuttur.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}