import { combineReducers } from 'redux';
import { recipesReducer, favesReducer } from './recipesReducers';

const rootReducer = combineReducers({
	recipes: recipesReducer,
	favorites: favesReducer,
});

export default rootReducer;
