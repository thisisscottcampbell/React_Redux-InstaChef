import { SET_RECIPES } from '../actions/types';

const recipesReducer = (state = [], action) => {
	switch (action.type) {
		case SET_RECIPES:
			return action.payload;
		default:
			return state;
	}
};

export default recipesReducer;
