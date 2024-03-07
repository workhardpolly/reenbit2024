import { combineReducers } from 'redux';
import currentCityReducer from './currentCityReducer';
import searchReducer from './searchReducer';
import citiesListReducer from './citiesListReducer';
import toggleAddTripModalReducer from './toggleAddTripModalReducer';
import loginReducer from './loginReducer';

const allReducers = combineReducers({
  toggleAddTripModalReducer,
  currentCityReducer,
  searchReducer,
  citiesListReducer,
  loginReducer,
});

export default allReducers;
