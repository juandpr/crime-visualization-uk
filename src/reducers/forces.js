const forces = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_FORCES':
      return action.forces;
    default:
      return state;
  }
}

export default forces;
