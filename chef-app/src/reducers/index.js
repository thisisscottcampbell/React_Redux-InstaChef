import { combineReducers } from 'redux';
import recipesReducer from './recipesReducers';

const rootReducer = combineReducers({
	recipes: recipesReducer,
});

export default rootReducer;
