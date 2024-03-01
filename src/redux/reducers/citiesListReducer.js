import citiesDefaultList from '../../components/defaultList/citiesDefaultList';

export default function citiesListReducer(state = citiesDefaultList(), action) {
  window.localStorage.setItem('tripCitiesList', JSON.stringify(state));

  switch (action.type) {
    case 'ADD_TRIP':
      window.localStorage.setItem('tripCitiesList', JSON.stringify([...state, action.payload]));
      return [...state, action.payload];
    case 'REMOVE_TRIP':
      return action.payload;
    default:
      return state;
  }
}
