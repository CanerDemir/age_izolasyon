'use client';

import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
  Container,
  Avatar
} from '@mui/material';
import {
  Menu as MenuIcon,
  Phone as PhoneIcon,
  Email as EmailIcon
} from '@mui/icons-material';
import { COMPANY_INFO, NAVIGATION_ITEMS } from '@/utils/constants';

interface MaterialAppBarProps {
  onMenuClick?: () => void;
}

export default function MaterialAppBar({ onMenuClick }: MaterialAppBarProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <>
      {/* Top Contact Bar - Now Sticky */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bgcolor: 'primary.main',
          color: 'white',
          py: 1,
          zIndex: 1201,
          display: { xs: 'none', md: 'block' }
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ fontSize: 16 }} />
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {COMPANY_INFO.phone}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ fontSize: 16 }} />
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {COMPANY_INFO.email}
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {COMPANY_INFO.workingHours}
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Main Navigation - No Border Radius */}
      <AppBar
        position="fixed"
        sx={{
          bgcolor: 'white',
          boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
          top: { xs: 0, md: '40px' },
          zIndex: 1200,
          borderRadius: 0, // Remove border radius
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ py: 1, minHeight: { xs: 64, md: 80 }, justifyContent: 'space-between' }}>
            {/* Left Side - Mobile Menu Button + Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {/* Mobile Menu Button */}
              {isMobile && (
                <IconButton
                  edge="start"
                  aria-label="menu"
                  onClick={onMenuClick}
                  sx={{
                    mr: 2,
                    color: 'primary.main',
                    '&:hover': {
                      bgcolor: 'primary.light',
                      color: 'white'
                    }
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}

              {/* Logo - Moved to Left */}
              <Box
                component={Link}
                href="/"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: 'primary.main',
                    width: { xs: 40, md: 50 },
                    height: { xs: 40, md: 50 },
                    mr: 2,
                    fontWeight: 800,
                    fontSize: { xs: '1rem', md: '1.25rem' }
                  }}
                >
                  AGE
                </Avatar>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: 'primary.main',
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                      lineHeight: 1,
                      letterSpacing: '-0.02em'
                    }}
                  >
                    AGE İzolasyon
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      fontSize: { xs: '0.7rem', md: '0.75rem' },
                      fontWeight: 500,
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase'
                    }}
                  >
                    Profesyonel İzolasyon
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Center - Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {NAVIGATION_ITEMS.map((item) => (
                  <Button
                    key={item.href}
                    component={Link}
                    href={item.href}
                    sx={{
                      color: 'text.primary',
                      textTransform: 'none',
                      fontWeight: 600,
                      fontSize: '1rem',
                      px: 3,
                      py: 1.5,
                      borderRadius: 0, // Remove border radius
                      position: 'relative',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        color: 'primary.main',
                        bgcolor: 'rgba(13, 71, 161, 0.04)',
                        '&::after': {
                          width: '100%',
                        }
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 0,
                        height: 3,
                        bgcolor: 'secondary.main',
                        transition: 'width 0.3s ease',
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* Right Side - CTA Button */}
            {!isMobile && (
              <Button
                component={Link}
                href="/iletisim"
                variant="contained"
                color="secondary"
                startIcon={<PhoneIcon />}
                sx={{
                  px: 3,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: '1rem',
                  borderRadius: 0, // Remove border radius
                  background: 'linear-gradient(135deg, #FF6F00 0%, #FF9F40 100%)',
                  boxShadow: '0 4px 20px rgba(255, 111, 0, 0.3)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 30px rgba(255, 111, 0, 0.4)',
                  }
                }}
              >
                Ücretsiz Teklif
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}