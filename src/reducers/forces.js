const forces = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_FORCES':
      state = action.forces;
  }
  return state;
}

export default forces;
