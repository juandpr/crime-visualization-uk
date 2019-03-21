const crimes = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_CRIMES':
      state = action.crimes;
    case 'CLEAR_TABLE':
    	state = [];
  }
  return state;
}

export default crimes;
