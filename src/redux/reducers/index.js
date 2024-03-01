import { combineReducers } from 'redux';
import currentCityReducer from './currentCityReducer';
import searchReducer from './searchReducer';
import citiesListReducer from './citiesListReducer';
import toggleAddTripModalReducer from './toggleAddTripModalReducer';

const allReducers = combineReducers({
  toggleAddTripModalReducer,
  currentCityReducer,
  searchReducer,
  citiesListReducer,
});

export default allReducers;
