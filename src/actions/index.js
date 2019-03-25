export const receiveCrimeTypes = (crimeTypes) => ({
  type: 'RECEIVE_CRIME_TYPES',
  crimeTypes: crimeTypes.data
});

export const receiveForces = (forces) => ({
  type: 'RECEIVE_FORCES',
  forces: forces.data
});

export const receiveMonths = (months) => ({
  type: 'RECEIVE_MONTHS',
  months
});

export const clearTable = () => ({
  type: 'CLEAR_TABLE'
});

export const requestCrimes = () => ({
  type: 'REQUEST_CRIMES'
});

export const receiveCrimes = (crimes) => ({
  type: 'RECEIVE_CRIMES',
  crimes: crimes.data
});

export const receiveCrimesError = (err) => ({
  type: 'RECEIVE_CRIMES_ERROR',
  error: err
});