'use client';

import NextLink from 'next/link';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  YouTube as YouTubeIcon
} from '@mui/icons-material';
import { COMPANY_INFO, NAVIGATION_ITEMS, SOCIAL_MEDIA } from '@/utils/constants';

export default function MaterialFooter() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.dark',
        color: 'white',
        py: 6,
        mt: 8
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              {COMPANY_INFO.name}
            </Typography>
            <Typography variant="body2" paragraph>
              İstanbul&apos;da profesyonel izolasyon hizmetleri sunuyoruz. 
              Kaliteli malzeme ve uzman ekibimizle hizmetinizdeyiz.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              <IconButton
                component="a"
                href={SOCIAL_MEDIA.facebook}
                target="_blank"
                sx={{ color: 'white' }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href={SOCIAL_MEDIA.instagram}
                target="_blank"
                sx={{ color: 'white' }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                component="a"
                href={SOCIAL_MEDIA.linkedin}
                target="_blank"
                sx={{ color: 'white' }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                component="a"
                href={SOCIAL_MEDIA.youtube}
                target="_blank"
                sx={{ color: 'white' }}
              >
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              Hızlı Bağlantılar
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  component={NextLink}
                  href={item.href}
                  color="inherit"
                  underline="hover"
                  sx={{ 
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      color: 'secondary.light',
                      transform: 'translateX(4px)'
                    } 
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              İletişim Bilgileri
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon fontSize="small" />
                <Typography variant="body2">
                  {COMPANY_INFO.phone}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon fontSize="small" />
                <Typography variant="body2">
                  {COMPANY_INFO.email}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <LocationIcon fontSize="small" />
                <Typography variant="body2">
                  {COMPANY_INFO.address}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <TimeIcon fontSize="small" />
                <Typography variant="body2">
                  {COMPANY_INFO.workingHours}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            mt: 4,
            pt: 3,
            textAlign: 'center'
          }}
        >
          <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Tüm hakları saklıdır.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}