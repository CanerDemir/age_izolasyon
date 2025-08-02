'use client';

import Link from 'next/link';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Box,
  Divider,
  Avatar,
  Button
} from '@mui/material';
import { 
  Phone as PhoneIcon,
  Email as EmailIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import { COMPANY_INFO, NAVIGATION_ITEMS } from '@/utils/constants';

interface MaterialDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function MaterialDrawer({ open, onClose }: MaterialDrawerProps) {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 320,
          boxSizing: 'border-box',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        },
      }}
    >
      {/* Header */}
      <Box sx={{ p: 3, background: 'linear-gradient(135deg, #0D47A1 0%, #5472D3 100%)', color: 'white' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              width: 50,
              height: 50,
              mr: 2,
              fontWeight: 800,
              fontSize: '1.25rem'
            }}
          >
            AGE
          </Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1 }}>
              AGE İzolasyon
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.9, fontSize: '0.75rem' }}>
              Profesyonel İzolasyon
            </Typography>
          </Box>
        </Box>
      </Box>
      
      {/* Navigation */}
      <List sx={{ px: 2, py: 3 }}>
        {NAVIGATION_ITEMS.map((item, index) => (
          <ListItem key={item.href} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              component={Link}
              href={item.href}
              onClick={onClose}
              sx={{
                borderRadius: 2,
                py: 1.5,
                px: 2,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                  transform: 'translateX(8px)',
                  boxShadow: '0 4px 20px rgba(13, 71, 161, 0.3)',
                }
              }}
            >
              <ListItemText 
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: 600,
                  fontSize: '1rem'
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      {/* CTA Button */}
      <Box sx={{ px: 3, mb: 3 }}>
        <Button
          component={Link}
          href="/iletisim"
          variant="contained"
          color="secondary"
          fullWidth
          startIcon={<PhoneIcon />}
          onClick={onClose}
          sx={{
            py: 1.5,
            fontWeight: 600,
            borderRadius: 3,
            background: 'linear-gradient(135deg, #FF6F00 0%, #FF9F40 100%)',
            boxShadow: '0 4px 20px rgba(255, 111, 0, 0.3)',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 30px rgba(255, 111, 0, 0.4)',
            }
          }}
        >
          Ücretsiz Teklif Al
        </Button>
      </Box>
      
      <Divider />
      
      {/* Contact Info */}
      <Box sx={{ p: 3 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
          İletişim Bilgileri
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <PhoneIcon sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {COMPANY_INFO.phone}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <EmailIcon sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {COMPANY_INFO.email}
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
}