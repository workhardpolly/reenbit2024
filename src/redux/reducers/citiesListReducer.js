import citiesDefaultList from '../../components/defaultList/citiesDefaultList';

export default function citiesListReducer(state = citiesDefaultList(), action) {
  window.localStorage.setItem('tripCitiesList', JSON.stringify(state));

  switch (action.type) {
    case 'ADD_TRIP':
      window.localStorage.setItem('tripCitiesList', JSON.stringify([...state, action.payload]));
      return [...state, action.payload];
    case 'REMOVE_TRIP':
      console.log('remove item', action.payload, state);
      const newState = state.filter((cityObj) => {
        if (
          cityObj.cityName === action.payload.cityName &&
          cityObj.tripStarts === action.payload.tripStartDate &&
          cityObj.tripEnds === action.payload.tripEndDate
        ) {
          return;
        } else {
          return cityObj;
        }
      });

      return newState;
    default:
      return state;
  }
}
