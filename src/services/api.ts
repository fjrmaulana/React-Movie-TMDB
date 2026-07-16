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

export const searcPopularMovies = async (query) => {
  const response = await movieApi.get(`${BASE_URL}/search/movie?query=${query}`,{
     headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${TOKEN}` 
      }
  });
  return response.data.results;
};

export const getTopRatedMovies = async () => {
  const response = await movieApi.get(`${BASE_URL}/movie/top_rated`,{
     headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${TOKEN}` 
      }
  });
  return response.data.results;
};

export const getNowPlayingMovies = async () => {
  const response = await movieApi.get(`${BASE_URL}/movie/now_playing`,{
     headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${TOKEN}` 
      }
  });
  return response.data.results;
};

export const getUpCommingMovies = async () => {
  const response = await movieApi.get(`${BASE_URL}/movie/upcoming`,{
     headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${TOKEN}` 
      }
  });
  return response.data.results;
};
