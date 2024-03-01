const toggleAddTripModalReducer = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return (state = true);
    case 'HIDE_MODAL':
      return (state = false);

    default:
      return state;
  }
};

export default toggleAddTripModalReducer;
