'use client';

import { useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import MaterialAppBar from './MaterialAppBar';
import MaterialDrawer from './MaterialDrawer';
import MaterialFooter from './MaterialFooter';
import ErrorBoundary from '@/components/ui/ErrorBoundary';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <ErrorBoundary>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <MaterialAppBar onMenuClick={handleDrawerToggle} />
        <MaterialDrawer open={drawerOpen} onClose={handleDrawerClose} />
        
        <Box component="main" sx={{ flexGrow: 1 }}>
          {/* Spacer for sticky header structure */}
          <Box sx={{ height: { xs: 64, md: 120 } }} />
          {children}
        </Box>
        
        <MaterialFooter />
      </Box>
    </ErrorBoundary>
  );
}