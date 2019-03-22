const crimes = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_CRIMES':
      return action.crimes;
    case 'CLEAR_TABLE':
      return[];
    default:
      return state;
  }
}

export default crimes;
