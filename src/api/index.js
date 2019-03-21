import axios from 'axios';
import { months } from './stubs';
const API_URL = 'https://data.police.uk/api/';

export const fetchCrimeTypes = () => {
  return axios.get(API_URL + 'crime-categories');
};

export const fetchForces = () => {
  return axios.get(API_URL + 'forces');
};

export const fetchMonths = () => {
  return Promise.resolve(months);
};

