'use client';

import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  Avatar,
  Chip,
  Breadcrumbs,
  Link
} from '@mui/material';
import { 
  Home as HomeIcon, 
  Info as InfoIcon,
  Star as StarIcon,
  Security as SecurityIcon,
  EmojiEvents as TrophyIcon,
  Groups as GroupsIcon,
  Verified as VerifiedIcon,
  Timeline as TimelineIcon
} from '@mui/icons-material';
import NextLink from 'next/link';
import PlaceholderImage from '@/components/ui/PlaceholderImage';

// Sample team data
const teamMembers = [
  {
    id: 1,
    name: 'Ahmet Yılmaz',
    position: 'Genel Müdür',
    experience: '20 yıl',
    image: 'https://source.unsplash.com/300x300/?man,professional,business'
  },
  {
    id: 2,
    name: 'Mehmet Demir',
    position: 'Teknik Müdür',
    experience: '15 yıl',
    image: 'https://source.unsplash.com/300x300/?engineer,professional,construction'
  },
  {
    id: 3,
    name: 'Fatma Kaya',
    position: 'Proje Koordinatörü',
    experience: '12 yıl',
    image: 'https://source.unsplash.com/300x300/?woman,professional,architect'
  },
  {
    id: 4,
    name: 'Ali Özkan',
    position: 'Saha Şefi',
    experience: '18 yıl',
    image: 'https://source.unsplash.com/300x300/?foreman,construction,professional'
  }
];

const certifications = [
  'ISO 9001 Kalite Yönetim Sistemi',
  'ISO 14001 Çevre Yönetim Sistemi',
  'OHSAS 18001 İş Sağlığı ve Güvenliği',
  'TSE Hizmet Yeterlilik Belgesi',
  'Yapı Denetim Kuruluşu Yetki Belgesi',
  'İnşaat Müteahhitlik Yetki Belgesi'
];

export default function AboutPage() {
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
          backgroundImage: 'url(https://source.unsplash.com/1920x600/?team,construction,professional)',
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
              <InfoIcon sx={{ mr: 0.5, fontSize: 20 }} />
              Hakkımızda
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
            Hakkımızda
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
            15 yıldır İstanbul&apos;da profesyonel izolasyon hizmetleri sunuyoruz. 
            Kalite, güven ve müşteri memnuniyeti odaklı yaklaşımımızla sektörde öncü konumdayız.
          </Typography>
        </Container>
      </Box>

      {/* Company Story */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ mb: 4, fontWeight: 600 }}
            >
              Hikayemiz
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              AGE İzolasyon, 2009 yılında İstanbul&apos;da kurulmuş, izolasyon sektöründe 
              15 yıllık deneyime sahip bir firmadır. Kuruluşumuzdan bu yana kaliteli hizmet 
              anlayışımızdan ödün vermeden, müşterilerimizin memnuniyetini ön planda tutarak 
              çalışmalarımızı sürdürmekteyiz.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Çatı, duvar, zemin izolasyonu ve su yalıtımı konularında uzmanlaşmış ekibimizle, 
              konut, ticari ve endüstriyel projelerde başarılı işlere imza atmaktayız. 
              Sektördeki teknolojik gelişmeleri yakından takip ederek, en güncel malzeme 
              ve yöntemleri projelerimizde kullanmaktayız.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              <PlaceholderImage
                width={500}
                height={400}
                category="general"
                alt="AGE İzolasyon ofis binası"
                className="rounded-image"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Mission, Vision, Values */}
      <Box sx={{ bgcolor: 'grey.50', py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
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
                    <TrophyIcon sx={{ fontSize: 40, color: 'white' }} />
                  </Box>
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                    Misyonumuz
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Kaliteli malzeme ve profesyonel hizmet anlayışımızla müşterilerimizin 
                    yaşam kalitesini artırmak, enerji tasarrufu sağlayarak çevreye katkıda bulunmak.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
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
                    <StarIcon sx={{ fontSize: 40, color: 'white' }} />
                  </Box>
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'secondary.main' }}>
                    Vizyonumuz
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Türkiye&apos;nin önde gelen izolasyon firması olmak, yenilikçi çözümlerle 
                    sektöre öncülük etmek ve uluslararası standartlarda hizmet sunmak.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
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
                    <SecurityIcon sx={{ fontSize: 40, color: 'white' }} />
                  </Box>
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'success.main' }}>
                    Değerlerimiz
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Dürüstlük, kalite, güvenilirlik, müşteri odaklılık ve sürekli gelişim 
                    ilkelerimizle hareket ederek uzun vadeli ilişkiler kuruyoruz.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ mb: 3, fontWeight: 600 }}
          >
            Uzman Ekibimiz
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto', fontWeight: 300 }}
          >
            Deneyimli ve uzman kadromuzla her projede mükemmel sonuçlar elde ediyoruz
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={3} 
              key={member.id}
              sx={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <Card 
                sx={{ 
                  textAlign: 'center', 
                  p: 3,
                  height: '100%',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 4
                  }
                }}
              >
                <CardContent>
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{
                      width: 120,
                      height: 120,
                      mx: 'auto',
                      mb: 2,
                      border: '4px solid',
                      borderColor: 'primary.main'
                    }}
                  />
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body1" color="primary.main" gutterBottom>
                    {member.position}
                  </Typography>
                  <Chip 
                    label={`${member.experience} deneyim`}
                    color="secondary"
                    size="small"
                    sx={{ mt: 1 }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Certifications */}
      <Box sx={{ bgcolor: 'grey.50', py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ mb: 3, fontWeight: 600 }}
            >
              Sertifikalarımız ve Yetki Belgelerimiz
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto', fontWeight: 300 }}
            >
              Kalite standartlarımızı belgeleyen sertifikalar ve yetki belgelerimiz
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {certifications.map((cert, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card 
                  sx={{ 
                    p: 2,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateX(8px)',
                      boxShadow: 2
                    }
                  }}
                >
                  <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                    <VerifiedIcon sx={{ color: 'success.main', mr: 2, fontSize: 30 }} />
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {cert}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Statistics */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ mb: 3, fontWeight: 600 }}
          >
            Rakamlarla AGE İzolasyon
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Box sx={{ textAlign: 'center' }}>
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
                  mb: 2
                }}
              >
                <TimelineIcon sx={{ fontSize: 40, color: 'white' }} />
              </Box>
              <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                15+
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Yıllık Deneyim
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Box sx={{ textAlign: 'center' }}>
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
                  mb: 2
                }}
              >
                <TrophyIcon sx={{ fontSize: 40, color: 'white' }} />
              </Box>
              <Typography variant="h3" sx={{ fontWeight: 700, color: 'secondary.main', mb: 1 }}>
                500+
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Tamamlanan Proje
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Box sx={{ textAlign: 'center' }}>
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
                  mb: 2
                }}
              >
                <GroupsIcon sx={{ fontSize: 40, color: 'white' }} />
              </Box>
              <Typography variant="h3" sx={{ fontWeight: 700, color: 'success.main', mb: 1 }}>
                25+
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Uzman Personel
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Box sx={{ textAlign: 'center' }}>
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
                  mb: 2
                }}
              >
                <StarIcon sx={{ fontSize: 40, color: 'white' }} />
              </Box>
              <Typography variant="h3" sx={{ fontWeight: 700, color: 'info.main', mb: 1 }}>
                %100
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Müşteri Memnuniyeti
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}