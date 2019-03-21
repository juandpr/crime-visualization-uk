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

export const search = (crimeType, force, month) => ({
  type: 'SEARCH',
  crimeType,
  force,
  month
});
