'use client';

import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card,
  CardContent,
  Breadcrumbs,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import { 
  Home as HomeIcon, 
  School as SchoolIcon,
  ExpandMore as ExpandMoreIcon,
  CheckCircle as CheckIcon,
  ThermostatAuto as ThermoIcon,
  WaterDrop as WaterIcon,
  VolumeOff as SoundIcon,
  LocalFireDepartment as FireIcon,
  Nature as EcoIcon,
  Savings as SavingsIcon,
  Security as SecurityIcon,
  Timeline as TimelineIcon
} from '@mui/icons-material';
import NextLink from 'next/link';

const insulationTypes = [
  {
    title: 'Çatı İzolasyonu',
    description: 'Evinizin en önemli koruma katmanı',
    benefits: [
      'Kış aylarında ısı kaybını %40\'a kadar azaltır',
      'Yaz aylarında sıcaklık kontrolü sağlar',
      'Enerji faturalarında önemli tasarruf',
      'Çatı yapısını nem ve dondan korur'
    ],
    materials: ['Taş yünü', 'Cam yünü', 'Poliüretan köpük', 'EPS (Genleştirilmiş polistiren)']
  },
  {
    title: 'Duvar İzolasyonu',
    description: 'Yaşam alanlarınızda konfor ve tasarruf',
    benefits: [
      'İç mekan sıcaklığını dengeler',
      'Nem ve küf oluşumunu önler',
      'Ses yalıtımı sağlar',
      'Duvar ömrünü uzatır'
    ],
    materials: ['Mineral yün', 'Fenol köpük', 'Vakumlu paneller', 'Reflektif yalıtım']
  },
  {
    title: 'Zemin İzolasyonu',
    description: 'Temelden gelen soğuk ve neme karşı koruma',
    benefits: [
      'Zemin soğukluğunu engeller',
      'Rutubet ve nem kontrolü',
      'Enerji verimliliği artışı',
      'Yaşam konforunu yükseltir'
    ],
    materials: ['XPS (Ekstrüde polistiren)', 'Perlit', 'Cam köpük', 'Polyisocyanurate']
  },
  {
    title: 'Su İzolasyonu',
    description: 'Su sızıntılarına karşı tam koruma',
    benefits: [
      'Su hasarlarını önler',
      'Yapı ömrünü uzatır',
      'Sağlık sorunlarını engeller',
      'Bakım maliyetlerini azaltır'
    ],
    materials: ['Bitümlü membran', 'Poliüretan sıvı membran', 'EPDM kauçuk', 'Kristalize su yalıtımı']
  }
];

const energySavingTips = [
  {
    icon: <ThermoIcon />,
    title: 'Termostat Kullanımı',
    description: 'Akıllı termostat ile ısıtma maliyetlerinizi %15-20 azaltabilirsiniz.'
  },
  {
    icon: <WaterIcon />,
    title: 'Su Yalıtımı',
    description: 'Kaliteli su yalıtımı ile yapı hasarlarını ve onarım maliyetlerini önleyin.'
  },
  {
    icon: <SoundIcon />,
    title: 'Ses Yalıtımı',
    description: 'Doğru ses yalıtımı ile yaşam kalitenizi artırın ve stres seviyenizi azaltın.'
  },
  {
    icon: <FireIcon />,
    title: 'Yangın Güvenliği',
    description: 'Yangına dayanıklı izolasyon malzemeleri ile güvenliğinizi artırın.'
  }
];

export default function EducationalContentPage() {
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
          backgroundImage: 'url(https://source.unsplash.com/1920x600/?education,learning,construction)',
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
              <SchoolIcon sx={{ mr: 0.5, fontSize: 20 }} />
              İzolasyon Rehberi
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
            İzolasyon Rehberi
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
            İzolasyon hakkında bilmeniz gereken her şey. Doğru malzeme seçimi, 
            enerji tasarrufu ve yaşam kalitesi artışı için kapsamlı rehber.
          </Typography>
        </Container>
        

      </Box>

      {/* Why Insulation is Important */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ mb: 3, fontWeight: 600 }}
          >
            İzolasyon Neden Önemli?
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 700, mx: 'auto', fontWeight: 300 }}
          >
            Kaliteli izolasyon sadece enerji tasarrufu sağlamaz, aynı zamanda yaşam kalitenizi 
            artırır ve çevreye katkıda bulunur.
          </Typography>
        </Box>

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
                    bgcolor: 'success.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3
                  }}
                >
                  <SavingsIcon sx={{ fontSize: 40, color: 'white' }} />
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Enerji Tasarrufu
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Kaliteli izolasyon ile ısıtma ve soğutma maliyetlerinizi %40-60 oranında 
                  azaltabilirsiniz. Yatırımınız 2-5 yıl içinde kendini amorti eder.
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
                    bgcolor: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3
                  }}
                >
                  <EcoIcon sx={{ fontSize: 40, color: 'white' }} />
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Çevre Dostu
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Enerji tüketimini azaltarak karbon ayak izinizi küçültün. 
                  Çevre dostu malzemelerle sürdürülebilir bir gelecek için katkıda bulunun.
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
                  <SecurityIcon sx={{ fontSize: 40, color: 'white' }} />
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Yaşam Kalitesi
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Doğru izolasyon ile daha sağlıklı, konforlu ve sessiz yaşam alanları elde edin. 
                  Nem, küf ve gürültü sorunlarını ortadan kaldırın.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Insulation Types */}
      <Box sx={{ bgcolor: 'grey.50', py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ mb: 3, fontWeight: 600 }}
            >
              İzolasyon Türleri ve Faydaları
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 700, mx: 'auto', fontWeight: 300 }}
            >
              Her alan için özel izolasyon çözümleri ve sağladığı avantajlar
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {insulationTypes.map((type, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                      {type.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 3 }}>
                      {type.description}
                    </Typography>

                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                      Faydaları:
                    </Typography>
                    <List dense>
                      {type.benefits.map((benefit, idx) => (
                        <ListItem key={idx} sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckIcon color="success" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={benefit} />
                        </ListItem>
                      ))}
                    </List>

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 1 }}>
                      Kullanılan Malzemeler:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {type.materials.join(', ')}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Energy Saving Tips */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ mb: 3, fontWeight: 600 }}
          >
            Enerji Tasarrufu İpuçları
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 700, mx: 'auto', fontWeight: 300 }}
          >
            İzolasyonla birlikte uygulayabileceğiniz ek tasarruf yöntemleri
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {energySavingTips.map((tip, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card 
                sx={{ 
                  p: 3,
                  height: '100%',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateX(8px)',
                    boxShadow: 3
                  }
                }}
              >
                <CardContent sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: 'primary.light',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 3,
                      flexShrink: 0
                    }}
                  >
                    {tip.icon}
                  </Box>
                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      {tip.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {tip.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
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
              sx={{ maxWidth: 700, mx: 'auto', fontWeight: 300 }}
            >
              İzolasyon hakkında merak edilen konular
            </Typography>
          </Box>

          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Hangi izolasyon malzemesi en iyisidir?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="text.secondary">
                  En iyi izolasyon malzemesi, uygulanacak alana, iklim koşullarına ve bütçenize göre değişir. 
                  Çatı için taş yünü, duvarlar için mineral yün, zemin için XPS gibi malzemeler tercih edilir. 
                  Uzman ekibimiz size en uygun malzemeyi önerir.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  İzolasyon ne kadar sürede kendini amorti eder?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="text.secondary">
                  Kaliteli izolasyon genellikle 2-5 yıl içinde kendini amorti eder. Bu süre, 
                  mevcut enerji maliyetlerinize, seçilen malzemeye ve uygulamanın kalitesine bağlıdır. 
                  Enerji fiyatlarının artmasıyla bu süre daha da kısalabilir.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  İzolasyon sağlığa zararlı mıdır?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="text.secondary">
                  Kaliteli ve sertifikalı izolasyon malzemeleri sağlığa zararlı değildir. 
                  Aksine, nem ve küf oluşumunu engelleyerek daha sağlıklı yaşam alanları yaratır. 
                  Biz sadece CE belgeli, çevre dostu malzemeler kullanıyoruz.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  İzolasyon ne kadar dayanıklıdır?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="text.secondary">
                  Kaliteli izolasyon malzemeleri 20-50 yıl arası dayanıklılığa sahiptir. 
                  Doğru uygulama ve bakımla bu süre daha da uzayabilir. Biz kullandığımız 
                  malzeme ve işçiliğe 5-20 yıl arası garanti veriyoruz.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Mevcut binaya izolasyon yapılabilir mi?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="text.secondary">
                  Evet, mevcut binalara da izolasyon uygulanabilir. Dış cephe, çatı, 
                  bodrum ve iç duvar izolasyonu gibi çeşitli yöntemlerle eski binalar 
                  da enerji verimli hale getirilebilir. Keşif sonrası size en uygun yöntemi öneriyoruz.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
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
          Uzman Danışmanlık Alın
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 600, mx: 'auto', fontWeight: 300 }}
        >
          İzolasyon ihtiyaçlarınız için uzman ekibimizden ücretsiz danışmanlık alın. 
          Size en uygun çözümü birlikte belirleyelim.
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            component={NextLink}
            href="/iletisim"
            sx={{ textDecoration: 'none' }}
          >
            <Box
              sx={{
                p: 4,
                bgcolor: 'primary.main',
                color: 'white',
                borderRadius: 2,
                minWidth: 250,
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'primary.dark',
                  transform: 'translateY(-4px)',
                  boxShadow: 6
                }
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Ücretsiz Danışmanlık
              </Typography>
              <Typography variant="body1">
                Uzmanlarımızla görüşün
              </Typography>
            </Box>
          </Link>

          <Link
            component={NextLink}
            href="/hizmetlerimiz"
            sx={{ textDecoration: 'none' }}
          >
            <Box
              sx={{
                p: 4,
                bgcolor: 'secondary.main',
                color: 'white',
                borderRadius: 2,
                minWidth: 250,
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'secondary.dark',
                  transform: 'translateY(-4px)',
                  boxShadow: 6
                }
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Hizmetlerimizi Keşfedin
              </Typography>
              <Typography variant="body1">
                Tüm izolasyon çözümleri
              </Typography>
            </Box>
          </Link>
        </Box>
      </Container>
    </>
  );
}