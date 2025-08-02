'use client';

import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip
} from '@mui/material';
import { MaterialProjectCardProps } from '@/types';
import { PROJECT_CATEGORIES } from '@/utils/constants';

export default function MaterialProjectCard({ project }: MaterialProjectCardProps) {
  const getCategoryLabel = (category: string) => {
    const categoryObj = PROJECT_CATEGORIES.find(cat => cat.value === category);
    return categoryObj ? categoryObj.label : category;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        }
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image={project.image}
        alt={project.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h6" component="h3" sx={{ flexGrow: 1 }}>
            {project.title}
          </Typography>
          <Chip
            label={getCategoryLabel(project.category)}
            size="small"
            color="secondary"
            variant="outlined"
          />
        </Box>
        <Typography variant="body2" color="text.secondary" paragraph>
          {project.description}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Tamamlanma Tarihi: {formatDate(project.completionDate)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Detayları Gör
        </Button>
      </CardActions>
    </Card>
  );
}