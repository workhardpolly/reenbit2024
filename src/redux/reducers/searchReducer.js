export default function searchReducer(state = '', action) {
  switch (action.type) {
    case 'SEARCH_TRIP':
      return action.payload;
    default:
      return state;
  }
}
