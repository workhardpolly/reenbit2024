import { combineReducers } from 'redux';
import currentCityReducer from './currentCityReducer';
import searchReducer from './searchReducer';
import citiesListReducer from './citiesListReducer';
import toggleAddTripModalReducer from './toggleAddTripModalReducer';
import authReducer from './authReducer';

const allReducers = combineReducers({
  toggleAddTripModalReducer,
  currentCityReducer,
  searchReducer,
  citiesListReducer,
  authReducer,
});

export default allReducers;
