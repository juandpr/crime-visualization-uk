const isFetching = (state = false, action) => {
  switch (action.type) {
    case 'REQUEST_CRIMES':
      return true;
    case 'RECEIVE_CRIMES':
      return false;
    default:
      return state;
  }
}

export default isFetching;
