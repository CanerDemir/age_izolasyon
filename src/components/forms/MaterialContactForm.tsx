'use client';

import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { ContactFormData } from '@/types';
import { submitContactForm } from '@/utils/api';
import { 
  validateEmail, 
  validatePhone, 
  validateRequired,
  VALIDATION_MESSAGES 
} from '@/utils/validation';

export default function MaterialContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await submitContactForm(data);
      
      if (response.success) {
        setSubmitStatus({
          type: 'success',
          message: response.message || 'Mesajınız başarıyla gönderildi!'
        });
        reset();
      } else {
        setSubmitStatus({
          type: 'error',
          message: response.message || 'Bir hata oluştu. Lütfen tekrar deneyin.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Bir hata oluştu. Lütfen tekrar deneyin.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ maxWidth: 600 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        İletişim Formu
      </Typography>
      
      {submitStatus.type && (
        <Alert 
          severity={submitStatus.type} 
          sx={{ mb: 3 }}
          onClose={() => setSubmitStatus({ type: null, message: '' })}
        >
          {submitStatus.message}
        </Alert>
      )}

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Controller
          name="name"
          control={control}
          rules={{
            required: VALIDATION_MESSAGES.required,
            validate: (value) => validateRequired(value) || VALIDATION_MESSAGES.required
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Ad Soyad *"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          rules={{
            required: VALIDATION_MESSAGES.required,
            validate: (value) => validateEmail(value) || VALIDATION_MESSAGES.email
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="E-posta *"
              type="email"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />

        <Controller
          name="phone"
          control={control}
          rules={{
            required: VALIDATION_MESSAGES.required,
            validate: (value) => validatePhone(value) || VALIDATION_MESSAGES.phone
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Telefon *"
              fullWidth
              error={!!errors.phone}
              helperText={errors.phone?.message}
              placeholder="0555 123 4567"
            />
          )}
        />

        <Controller
          name="subject"
          control={control}
          rules={{
            required: VALIDATION_MESSAGES.required,
            validate: (value) => validateRequired(value) || VALIDATION_MESSAGES.required
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Konu *"
              fullWidth
              error={!!errors.subject}
              helperText={errors.subject?.message}
            />
          )}
        />

        <Controller
          name="message"
          control={control}
          rules={{
            required: VALIDATION_MESSAGES.required,
            validate: (value) => validateRequired(value) || VALIDATION_MESSAGES.required
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Mesaj *"
              multiline
              rows={4}
              fullWidth
              error={!!errors.message}
              helperText={errors.message?.message}
            />
          )}
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={isSubmitting}
          sx={{ mt: 2 }}
        >
          {isSubmitting ? (
            <>
              <CircularProgress size={20} sx={{ mr: 1 }} />
              Gönderiliyor...
            </>
          ) : (
            'Mesaj Gönder'
          )}
        </Button>
      </Box>
    </Box>
  );
}