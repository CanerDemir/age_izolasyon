'use client';

import { Card, CardContent, Skeleton, Box } from '@mui/material';

interface SkeletonCardProps {
  variant?: 'service' | 'project' | 'testimonial';
}

export default function SkeletonCard({ variant = 'service' }: SkeletonCardProps) {
  return (
    <Card sx={{ height: '100%' }}>
      <Skeleton variant="rectangular" height={200} />
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Skeleton variant="circular" width={48} height={48} sx={{ mr: 2 }} />
          <Skeleton variant="text" width="60%" height={32} />
        </Box>
        <Skeleton variant="text" width="100%" height={20} sx={{ mb: 1 }} />
        <Skeleton variant="text" width="80%" height={20} sx={{ mb: 1 }} />
        <Skeleton variant="text" width="90%" height={20} sx={{ mb: 2 }} />
        
        {variant === 'service' && (
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Skeleton variant="rounded" width={80} height={24} />
            <Skeleton variant="rounded" width={100} height={24} />
            <Skeleton variant="rounded" width={90} height={24} />
          </Box>
        )}
        
        {variant === 'project' && (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
            <Skeleton variant="rounded" width={80} height={24} />
            <Skeleton variant="text" width={100} height={20} />
          </Box>
        )}
      </CardContent>
    </Card>
  );
}