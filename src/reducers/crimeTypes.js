const crimeTypes = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_CRIME_TYPES':
      state = action.crimeTypes;
  }
  return state;
}

export default crimeTypes;
