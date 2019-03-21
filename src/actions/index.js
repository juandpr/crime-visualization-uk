export const clearTable = () => ({
  type: 'CLEAR_TABLE'
});

export const search = (crimeType, force, month) => ({
  type: 'SEARCH',
  crimeType,
  force,
  month
});
