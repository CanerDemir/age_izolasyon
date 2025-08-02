import axios from 'axios';
import { ContactFormData, ApiResponse } from '@/types';

// API configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Contact form submission
export const submitContactForm = async (data: ContactFormData): Promise<ApiResponse> => {
  try {
    const response = await apiClient.post('/contact', data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    }
    return {
      success: false,
      message: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
    };
  }
};

export default apiClient;