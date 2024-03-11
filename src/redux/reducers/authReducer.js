export default function authReducer(state = {}, action) {
  switch (action.type) {
    case 'LOGIN':
      return action.payload;
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
}
