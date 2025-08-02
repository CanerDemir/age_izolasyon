'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Box, Skeleton } from '@mui/material';
import { PlaceholderImageProps } from '@/types';

export default function PlaceholderImage({
  width,
  height,
  category,
  alt,
  className
}: PlaceholderImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const getPlaceholderUrl = (category: string, width: number, height: number) => {
    const categoryKeywords = {
      hero: 'construction,building,insulation',
      service: 'tools,construction,professional',
      project: 'house,building,renovation',
      team: 'people,professional,team',
      general: 'business,professional'
    };
    
    return `https://source.unsplash.com/${width}x${height}/?${categoryKeywords[category as keyof typeof categoryKeywords]}`;
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width,
        height,
        overflow: 'hidden',
        borderRadius: 1,
      }}
      className={className}
    >
      {isLoading && (
        <Skeleton
          variant="rectangular"
          width={width}
          height={height}
          sx={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
        />
      )}
      
      {!hasError ? (
        <Image
          src={getPlaceholderUrl(category, width, height)}
          alt={alt}
          fill
          style={{ 
            objectFit: 'cover',
            opacity: isLoading ? 0 : 1,
            transition: 'opacity 0.3s ease'
          }}
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
        />
      ) : (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            bgcolor: 'grey.200',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'text.secondary'
          }}
        >
          Resim yüklenemedi
        </Box>
      )}
    </Box>
  );
}