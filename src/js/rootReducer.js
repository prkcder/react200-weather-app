import { combineReducers } from 'redux';
import searchReducer from './components/SearchBar/searchReducer';

const rootReducer = combineReducers({
// add reducers
  weather: searchReducer
});

export default rootReducer;
