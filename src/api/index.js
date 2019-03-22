import axios from 'axios';
import { months } from './stubs';
const API_URL = 'https://data.police.uk/api/';

export const fetchCrimeTypes = () => {
  return axios.get(API_URL + 'crime-categories');
};

export const fetchForces = () => {
  return axios.get(API_URL + 'forces');
};

export const fetchCrimes = (crimeType, force, date) => {
  return axios.get(API_URL + `crimes-no-location?category=${crimeType}&force=${force}&date=${date}`);
};

export const fetchMonths = () => {
  return Promise.resolve(months);
};

