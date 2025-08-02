'use client';

import { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Breadcrumbs,
  Link,
  Tabs,
  Tab,
  Chip
} from '@mui/material';
import { 
  Home as HomeIcon, 
  Work as WorkIcon,
  FilterList as FilterIcon
} from '@mui/icons-material';
import NextLink from 'next/link';
import MaterialProjectCard from '@/components/cards/MaterialProjectCard';

import { projects } from '@/data/projects';
import { PROJECT_CATEGORIES } from '@/utils/constants';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleCategoryChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedCategory(newValue);
  };

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryCount = (category: string) => {
    if (category === 'all') return projects.length;
    return projects.filter(project => project.category === category).length;
  };

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
          backgroundImage: 'url(https://source.unsplash.com/1920x600/?construction,portfolio,projects)',
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
              <WorkIcon sx={{ mr: 0.5, fontSize: 20 }} />
              Projelerimiz
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
            Projelerimiz
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
            15 yıllık deneyimimizle gerçekleştirdiğimiz başarılı projelerimizi keşfedin. 
            Konut, ticari ve endüstriyel alanlarda kaliteli izolasyon çözümleri.
          </Typography>
        </Container>
        

      </Box>

      {/* Filter Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ mb: 3, fontWeight: 600 }}
          >
            Proje Portföyümüz
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 700, mx: 'auto', fontWeight: 300, mb: 4 }}
          >
            Farklı sektörlerden başarılı projelerimizi kategorilere göre inceleyebilirsiniz
          </Typography>

          {/* Category Filter Tabs */}
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
            <Tabs 
              value={selectedCategory} 
              onChange={handleCategoryChange}
              centered
              sx={{
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 500,
                  minWidth: 120,
                }
              }}
            >
              <Tab 
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <FilterIcon fontSize="small" />
                    Tümü
                    <Chip 
                      label={getCategoryCount('all')} 
                      size="small" 
                      color="primary"
                      sx={{ ml: 1 }}
                    />
                  </Box>
                } 
                value="all" 
              />
              {PROJECT_CATEGORIES.map((category) => (
                <Tab 
                  key={category.value}
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {category.label}
                      <Chip 
                        label={getCategoryCount(category.value)} 
                        size="small" 
                        color="secondary"
                        sx={{ ml: 1 }}
                      />
                    </Box>
                  } 
                  value={category.value} 
                />
              ))}
            </Tabs>
          </Box>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {filteredProjects.map((project, index) => (
            <Grid 
              item 
              xs={12} 
              md={6} 
              lg={4} 
              key={project.id}
              sx={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <MaterialProjectCard project={project} />
            </Grid>
          ))}
        </Grid>

        {filteredProjects.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Bu kategoride henüz proje bulunmamaktadır
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Diğer kategorileri inceleyebilir veya tüm projelerimizi görüntüleyebilirsiniz
            </Typography>
          </Box>
        )}
      </Container>

      {/* Project Statistics */}
      <Box sx={{ bgcolor: 'grey.50', py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ mb: 3, fontWeight: 600 }}
            >
              Proje İstatistiklerimiz
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                  {projects.filter(p => p.category === 'residential').length}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Konut Projesi
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Villa, apartman ve konut kompleksleri
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ fontWeight: 700, color: 'secondary.main', mb: 1 }}>
                  {projects.filter(p => p.category === 'commercial').length}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Ticari Proje
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Ofis, mağaza ve ticari binalar
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ fontWeight: 700, color: 'success.main', mb: 1 }}>
                  {projects.filter(p => p.category === 'industrial').length}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Endüstriyel Proje
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Fabrika, depo ve endüstriyel tesisler
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ fontWeight: 700, color: 'info.main', mb: 1 }}>
                  {projects.length}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Toplam Proje
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Başarıyla tamamlanan projeler
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
          Projeniz İçin Teklif Alın
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 600, mx: 'auto', fontWeight: 300 }}
        >
          Benzer kalitede bir proje için ücretsiz keşif ve detaylı teklif almak isterseniz, 
          uzman ekibimizle iletişime geçin.
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
                Ücretsiz Keşif
              </Typography>
              <Typography variant="body1">
                Uzman ekibimiz ücretsiz keşif yapar
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
                Detaylı Teklif
              </Typography>
              <Typography variant="body1">
                Projenize özel detaylı teklif alın
              </Typography>
            </Box>
          </Link>
        </Box>
      </Container>
    </>
  );
}