const months = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_MONTHS':
      return action.months;
    default:
      return state;
  }
}

export default months;
