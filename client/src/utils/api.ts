import axios, { AxiosRequestConfig } from 'axios';

// Define a type-safe API call function
export async function apiCall<T>(
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
    data: unknown = null,
    config: AxiosRequestConfig = {}
  ): Promise<T> {
    try {
      const response = await axios({
        url,
        method,
        data,
        ...config, // Spread in any custom Axios config (headers, params, etc.)
      });
      
      return response.data; // Return the data typed as T
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.response?.data || error.message);
      } else {
        console.error('Unexpected error:', error);
      }
      throw new Error('API request failed'); // Throw a generic error for the caller to handle
    }
  }