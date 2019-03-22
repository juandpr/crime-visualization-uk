const crimeTypes = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_CRIME_TYPES':
      return action.crimeTypes;
    default:
      return state;
  }
}

export default crimeTypes;
