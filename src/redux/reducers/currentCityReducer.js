export default function currentCityReducer(
  state = { cityName: 'Kyiv', tripStartDate: '2024-03-01', tripEndDate: '2024-03-17' },
  action
) {
  switch (action.type) {
    case 'CHANGE_CURRENT_CITY':
      return action.payload;
    default:
      return state;
  }
}
