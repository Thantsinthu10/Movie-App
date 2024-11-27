import axios from "axios";

export const api_key = '591658d4c2da5790f7421b2a13859ae1';

export const api = axios.create({
baseURL : 'https://api.themoviedb.org/3'
})