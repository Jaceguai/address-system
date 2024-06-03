import axios, { AxiosRequestConfig } from 'axios';

export const ApiService = (requestConfig?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000', 
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    ...requestConfig,
  });


  return {
    get: async function <T = any>(endpoint: string, params?: any): Promise<T> {
      const response = await axiosInstance.get<T>(endpoint, { params });
      return response.data;
    },
    post: async function <T = any>(endpoint: string, data: T, config?: AxiosRequestConfig): Promise<T> {
      const response = await axiosInstance.post<T>(endpoint, data, config);
      return response.data;
    },
    put: async function <T = any>(endpoint: string, data: T): Promise<T> {
      const response = await axiosInstance.put<T>(endpoint, data);
      return response.data;
    },
    delete: async function <T = any>(endpoint: string): Promise<T> {
      const response = await axiosInstance.delete<T>(endpoint);
      return response.data;
    },
    patch: async function <T = any>(endpoint: string, data: T): Promise<T> {
      const response = await axiosInstance.patch<T>(endpoint, data);
      return response.data;
    },
  };
};
