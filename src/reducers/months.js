const months = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_MONTHS':
      state = action.months;
  }
  return state;
}

export default months;
