export default function loginReducer(state = {}, action) {
  switch (action.type) {
    case 'LOGIN':
      return action.payload;
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
}