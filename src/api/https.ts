import axios, { AxiosError, AxiosResponse } from 'axios';

export const http = axios.create({
  headers: { 'Content-Type': 'application/json' },
  baseURL: process.env.EXPO_PUBLIC_API_BASE_URL,
});

http.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    let errStatus = null;

    if (error.response) {
      errStatus = error.response.status;
    }

    // locais em que pode dar 401 mas o tratamento desse erro é feito diretamente no componente
    if (errStatus) {
      if (errStatus === 401) {
      }
      // QUANDO OCORRER ERRO DEFAULT DO SISTEMA
      else if (errStatus === 500) {
      }
    }

    return Promise.reject(error);
  }
);
