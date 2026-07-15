import axios from 'axios';
//import type { TMDBResponse } from '../types/movie';

const API_KEY =import.meta.env.VITE_MOVIE_APP_APIKEY;
const BASE_URL =import.meta.env.VITE_MOVIE_APP_BASE_URL;
const TOKEN =import.meta.env.VITE_MOVIE_APP_TOKEN;


const movieApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'accept': 'application/json',
    'Authorization': `Bearer ${TOKEN}` // Menambahkan bearer token di sini
  },
  params: {
    language: 'en-US', 
  },
});

export const getpopularMovies = async () => {
  const response = await movieApi.get(`${BASE_URL}/movie/popular`,{
     headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${TOKEN}` 
      }
  });
  return response.data.results;
};

// export const getTrendingMovies = async (): Promise<TMDBResponse> => {
//   const response = await movieApi.get('/movie/popular');
//   console.log('response',response);
//   return response.data;
// };

// export const getTopRatedMovies = async (): Promise<TMDBResponse> => {
//   const response = await movieApi.get('/movie/top_rated');
//   return response.data;
// };

// export const searchMovies = async (query: string): Promise<TMDBResponse> => {
//   const response = await movieApi.get('/search/movie', {
//     params: { query },
//   });
//   return response.data;
// };