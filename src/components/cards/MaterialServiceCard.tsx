'use client';

import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { MaterialServiceCardProps } from '@/types';
import Image from 'next/image';

// Service image mapping with relevant images and translations
const getServiceImageAndTranslation = (serviceTitle: string): { imageUrl: string; englishTitle: string } => {
  const title = serviceTitle.toLowerCase();
  
  if (title.includes('çatı')) {
    return {
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center',
      englishTitle: 'Roof Insulation'
    };
  } else if (title.includes('duvar')) {
    return {
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop&crop=center',
      englishTitle: 'Wall Insulation'
    };
  } else if (title.includes('zemin')) {
    return {
      imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center',
      englishTitle: 'Floor Insulation'
    };
  } else if (title.includes('ses')) {
    return {
      imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&crop=center',
      englishTitle: 'Sound Insulation'
    };
  } else if (title.includes('su')) {
    return {
      imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&crop=center',
      englishTitle: 'Waterproofing'
    };
  } else if (title.includes('yangın')) {
    return {
      imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center',
      englishTitle: 'Fire Insulation'
    };
  }
  
  return {
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&crop=center',
    englishTitle: 'Insulation Service'
  };
};

export default function MaterialServiceCard({ service }: MaterialServiceCardProps) {
  const theme = useTheme();
  const { imageUrl: serviceImage, englishTitle } = getServiceImageAndTranslation(service.title);

  return (
    <Card
      sx={{
        height: '100%',
        background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 3,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-12px) scale(1.02)',
          boxShadow: '0 25px 50px rgba(13, 71, 161, 0.2)',
          borderColor: 'primary.main',
        },
        '&:hover .service-details': {
          opacity: 1,
          transform: 'translateY(0)',
        },
        '&:hover .service-image': {
          transform: 'scale(1.1)',
        },
        '&:hover .service-overlay': {
          opacity: 1,
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          transform: 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.4s ease',
          zIndex: 2,
        },
        '&:hover::before': {
          transform: 'scaleX(1)',
        },
      }}
    >
      {/* Service Image */}
      <Box
        sx={{
          position: 'relative',
          height: 200,
          overflow: 'hidden',
        }}
      >
        <Image
          src={serviceImage}
          alt={`${englishTitle} - ${service.title}`}
          fill
          style={{
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
          }}
          className="service-image"
        />

        {/* Overlay */}
        <Box
          className="service-overlay"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}80, ${theme.palette.secondary.main}60)`,
            opacity: 0,
            transition: 'opacity 0.4s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              fontSize: '3rem',
              color: 'white',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            {service.icon}
          </Box>
        </Box>
      </Box>

      <CardContent sx={{ p: 3, height: 'calc(100% - 200px)', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        {/* Title - Always Visible */}
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: 'text.primary',
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            textAlign: 'center',
          }}
        >
          {service.title}
        </Typography>

        {/* Brief Description - Always Visible */}
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            mb: 2,
            lineHeight: 1.6,
            textAlign: 'center',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {service.description}
        </Typography>

        {/* Detailed Content - Hidden by Default, Shown on Hover */}
        <Box
          className="service-details"
          sx={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            bottom: 0,
            p: 3,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.98) 100%)',
            backdropFilter: 'blur(10px)',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            borderRadius: '0 0 12px 12px',
            boxShadow: '0 -5px 20px rgba(0,0,0,0.1)',
          }}
        >
          {/* Full Description */}
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              mb: 2,
              lineHeight: 1.7,
              fontSize: '0.95rem',
            }}
          >
            {service.description}
          </Typography>

          {/* Benefits/Features */}
          {service.benefits && service.benefits.length > 0 && (
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  color: 'primary.main',
                  fontSize: '0.9rem',
                }}
              >
                Avantajlar:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {service.benefits.slice(0, 4).map((benefit, index) => (
                  <Chip
                    key={index}
                    label={benefit}
                    size="small"
                    sx={{
                      backgroundColor: 'primary.main',
                      color: 'white',
                      fontWeight: 500,
                      fontSize: '0.75rem',
                      height: '24px',
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          )}

          {/* Price if available */}
          {service.price && (
            <Box
              sx={{
                mt: 'auto',
                pt: 1.5,
                borderTop: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: 'primary.main',
                  textAlign: 'center',
                  fontSize: '1.1rem',
                }}
              >
                {service.price}
              </Typography>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}