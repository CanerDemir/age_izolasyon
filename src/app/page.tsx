'use client';

import Link from 'next/link';
import { Container, Typography, Box, Button, Grid, Card, CardContent, Chip, Avatar } from '@mui/material';
import {
  Phone as PhoneIcon,
  Build as BuildIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  Security as SecurityIcon,
  EmojiEvents as TrophyIcon,
  ArrowForward as ArrowForwardIcon,
  CheckCircle as CheckIcon
} from '@mui/icons-material';
import MainLayout from '@/components/layout/MainLayout';
import MaterialServiceCard from '@/components/cards/MaterialServiceCard';
import { COMPANY_INFO } from '@/utils/constants';
import { services } from '@/data/services';

export default function Home() {
  return (
    <MainLayout>
      {/* Modern Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #0D47A1 0%, #1976D2 50%, #5472D3 100%)',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 3 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} lg={6}>
              <Box sx={{ color: 'white', mb: 4 }}>
                <Chip
                  label="🏆 İstanbul'un En Güvenilir İzolasyon Firması"
                  sx={{
                    mb: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.15)',
                    color: 'white',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                />

                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    mb: 3,
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #E3F2FD 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'fadeInUp 1s ease-out'
                  }}
                >
                  {COMPANY_INFO.name}
                </Typography>

                <Typography
                  variant="h3"
                  component="h2"
                  sx={{
                    mb: 4,
                    fontWeight: 600,
                    color: 'rgba(255, 255, 255, 0.9)',
                    animation: 'fadeInUp 1s ease-out 0.2s both'
                  }}
                >
                  Geleceğin İzolasyon Teknolojileri
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    mb: 6,
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: 1.6,
                    animation: 'fadeInUp 1s ease-out 0.4s both'
                  }}
                >
                  15 yıllık deneyimimiz ve son teknoloji malzemelerimizle evinizi enerji verimli,
                  konforlu ve sürdürülebilir bir yaşam alanına dönüştürüyoruz.
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    gap: 3,
                    flexWrap: 'wrap',
                    animation: 'fadeInUp 1s ease-out 0.6s both'
                  }}
                >
                  <Button
                    component={Link}
                    href="/hizmetlerimiz"
                    variant="contained"
                    size="large"
                    color="secondary"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      px: 4,
                      py: 2,
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      borderRadius: 3,
                      background: 'linear-gradient(135deg, #FF6F00 0%, #FF9F40 100%)',
                      boxShadow: '0 8px 32px rgba(255, 111, 0, 0.3)',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 12px 48px rgba(255, 111, 0, 0.4)',
                      }
                    }}
                  >
                    Hizmetlerimizi Keşfedin
                  </Button>
                  <Button
                    component={Link}
                    href="/iletisim"
                    variant="outlined"
                    size="large"
                    startIcon={<PhoneIcon />}
                    sx={{
                      px: 4,
                      py: 2,
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      borderRadius: 3,
                      color: 'white',
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                      borderWidth: 2,
                      backdropFilter: 'blur(10px)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        transform: 'translateY(-3px)',
                        borderWidth: 2,
                      }
                    }}
                  >
                    Ücretsiz Keşif
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} lg={6}>
              <Box sx={{ position: 'relative', animation: 'fadeInUp 1s ease-out 0.8s both' }}>
                {/* Stats Cards */}
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <Card
                      sx={{
                        p: 3,
                        textAlign: 'center',
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: 4,
                        transform: 'translateY(-20px)',
                        '&:hover': {
                          transform: 'translateY(-25px)',
                          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
                        }
                      }}
                    >
                      <Typography variant="h3" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>
                        15+
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                        Yıllık Deneyim
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card
                      sx={{
                        p: 3,
                        textAlign: 'center',
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: 4,
                        transform: 'translateY(20px)',
                        '&:hover': {
                          transform: 'translateY(15px)',
                          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
                        }
                      }}
                    >
                      <Typography variant="h3" sx={{ fontWeight: 800, color: 'secondary.main', mb: 1 }}>
                        500+
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                        Başarılı Proje
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card
                      sx={{
                        p: 3,
                        textAlign: 'center',
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: 4,
                        transform: 'translateY(-10px)',
                        '&:hover': {
                          transform: 'translateY(-15px)',
                          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
                        }
                      }}
                    >
                      <Typography variant="h3" sx={{ fontWeight: 800, color: 'success.main', mb: 1 }}>
                        %100
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                        Memnuniyet
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Floating Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: 100,
            height: 100,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(255, 111, 0, 0.2), rgba(255, 159, 64, 0.1))',
            animation: 'float 6s ease-in-out infinite',
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '30%',
            left: '5%',
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
            animation: 'float 8s ease-in-out infinite reverse',
            zIndex: 1,
          }}
        />
      </Box>

      {/* Modern Services Section */}
      <Box sx={{ py: 12, background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Chip
              label="🔧 Uzman Hizmetlerimiz"
              sx={{
                mb: 3,
                bgcolor: 'primary.light',
                color: 'white',
                fontWeight: 600,
                px: 2
              }}
            />
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 4,
                fontWeight: 700,
                background: 'linear-gradient(135deg, #0D47A1 0%, #1976D2 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Kapsamlı İzolasyon Çözümleri
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 700, mx: 'auto', fontWeight: 400, lineHeight: 1.6 }}
            >
              Son teknoloji malzemeler ve 15 yıllık deneyimimizle evinizi enerji verimli,
              konforlu ve sürdürülebilir bir yaşam alanına dönüştürüyoruz.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {services.slice(0, 6).map((service, index) => (
              <Grid
                item
                xs={12}
                sm={6}
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

          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Button
              component={Link}
              href="/hizmetlerimiz"
              variant="contained"
              size="large"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.125rem',
                fontWeight: 600,
                borderRadius: 3,
                background: 'linear-gradient(135deg, #0D47A1 0%, #5472D3 100%)',
                boxShadow: '0 8px 32px rgba(13, 71, 161, 0.3)',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 12px 48px rgba(13, 71, 161, 0.4)',
                }
              }}
            >
              Tüm Hizmetlerimizi Keşfedin
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Modern Why Choose Us Section */}
      <Box
        sx={{
          py: 12,
          background: 'linear-gradient(135deg, #0D47A1 0%, #1976D2 50%, #5472D3 100%)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            zIndex: 1,
          }
        }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ textAlign: 'center', mb: 10, color: 'white' }}>
            <Chip
              label="⭐ Neden Bizi Seçmelisiniz?"
              sx={{
                mb: 3,
                bgcolor: 'rgba(255, 255, 255, 0.15)',
                color: 'white',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                fontWeight: 600
              }}
            />
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 4,
                fontWeight: 700,
                color: 'white'
              }}
            >
              Farkımızı Keşfedin
            </Typography>
            <Typography
              variant="h6"
              sx={{
                maxWidth: 700,
                mx: 'auto',
                fontWeight: 400,
                lineHeight: 1.6,
                color: 'rgba(255, 255, 255, 0.9)'
              }}
            >
              15 yıllık deneyimimiz, son teknoloji malzemelerimiz ve müşteri odaklı yaklaşımımızla
              İstanbul'un en güvenilir izolasyon firmasıyız.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 4,
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 4,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: '0 25px 80px rgba(0, 0, 0, 0.2)',
                    background: 'rgba(255, 255, 255, 1)',
                  }
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #FF6F00 0%, #FF9F40 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      boxShadow: '0 10px 30px rgba(255, 111, 0, 0.3)',
                      animation: 'glow 3s ease-in-out infinite'
                    }}
                  >
                    <TrophyIcon sx={{ fontSize: 50, color: 'white' }} />
                  </Box>
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
                    Premium Kalite
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    Sadece CE belgeli, test edilmiş premium malzemeler kullanıyoruz.
                    20+ yıl garanti ile uzun ömürlü çözümler sunuyoruz.
                  </Typography>
                  <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 1 }}>
                    <CheckIcon sx={{ color: 'success.main', fontSize: 20 }} />
                    <CheckIcon sx={{ color: 'success.main', fontSize: 20 }} />
                    <CheckIcon sx={{ color: 'success.main', fontSize: 20 }} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 4,
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 4,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: '0 25px 80px rgba(0, 0, 0, 0.2)',
                    background: 'rgba(255, 255, 255, 1)',
                  }
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #0D47A1 0%, #5472D3 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      boxShadow: '0 10px 30px rgba(13, 71, 161, 0.3)',
                      animation: 'glow 3s ease-in-out infinite 1s'
                    }}
                  >
                    <SecurityIcon sx={{ fontSize: 50, color: 'white' }} />
                  </Box>
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
                    Uzman Ekip
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    Sertifikalı mühendisler ve 15+ yıl deneyimli teknisyenlerden oluşan
                    uzman ekibimizle mükemmel sonuçlar garantiliyoruz.
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    <Chip label="15+ Yıl Deneyim" size="small" color="primary" sx={{ mr: 1 }} />
                    <Chip label="Sertifikalı Ekip" size="small" color="secondary" />
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 4,
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 4,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: '0 25px 80px rgba(0, 0, 0, 0.2)',
                    background: 'rgba(255, 255, 255, 1)',
                  }
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #2E7D32 0%, #60AD5E 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      boxShadow: '0 10px 30px rgba(46, 125, 50, 0.3)',
                      animation: 'glow 3s ease-in-out infinite 2s'
                    }}
                  >
                    <TrendingUpIcon sx={{ fontSize: 50, color: 'white' }} />
                  </Box>
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
                    Sürekli Destek
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    Proje öncesi ücretsiz keşif, uygulama sırası takip ve sonrası
                    7/24 teknik destek ile her zaman yanınızdayız.
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    <Avatar sx={{ bgcolor: 'success.main', mx: 'auto', width: 40, height: 40 }}>
                      <PhoneIcon />
                    </Avatar>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Modern CTA Section */}
      <Box
        sx={{
          py: 12,
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
          position: 'relative'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip
              label="📞 Hemen İletişime Geçin"
              sx={{
                mb: 3,
                bgcolor: 'secondary.light',
                color: 'white',
                fontWeight: 600,
                px: 2
              }}
            />
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 4,
                fontWeight: 700,
                background: 'linear-gradient(135deg, #0D47A1 0%, #FF6F00 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Ücretsiz Keşif ve Teklif
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto', fontWeight: 400, lineHeight: 1.6, mb: 6 }}
            >
              Uzman ekibimiz evinizi ücretsiz inceleyerek size özel çözümler sunar.
              24 saat içinde detaylı teklif alın.
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                  background: 'linear-gradient(135deg, #0D47A1 0%, #5472D3 100%)',
                  color: 'white',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    boxShadow: '0 20px 60px rgba(13, 71, 161, 0.3)',
                  }
                }}
              >
                <PhoneIcon sx={{ fontSize: 60, mb: 2 }} />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                  Hemen Arayın
                </Typography>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  {COMPANY_INFO.phone}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  7/24 Destek Hattı
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                  background: 'linear-gradient(135deg, #FF6F00 0%, #FF9F40 100%)',
                  color: 'white',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    boxShadow: '0 20px 60px rgba(255, 111, 0, 0.3)',
                  }
                }}
              >
                <BuildIcon sx={{ fontSize: 60, mb: 2 }} />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                  Online Form
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Detaylı bilgi için formu doldurun
                </Typography>
                <Button
                  component={Link}
                  href="/iletisim"
                  variant="contained"
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.3)',
                    }
                  }}
                >
                  Form Doldur
                </Button>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                  background: 'linear-gradient(135deg, #2E7D32 0%, #60AD5E 100%)',
                  color: 'white',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    boxShadow: '0 20px 60px rgba(46, 125, 50, 0.3)',
                  }
                }}
              >
                <StarIcon sx={{ fontSize: 60, mb: 2 }} />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                  Çalışma Saatleri
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  {COMPANY_INFO.workingHours}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Hafta sonu randevulu hizmet
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </MainLayout>
  );
}
