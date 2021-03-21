import { SET_RECIPES, FAVE_RECIPE } from '../actions/types';

export const recipesReducer = (state = [], action) => {
	switch (action.type) {
		case SET_RECIPES:
			return action.payload;
		default:
			return state;
	}
};

export const favesReducer = (state = [], action) => {
	switch (action.type) {
		case FAVE_RECIPE:
			return [...state, action.payload];
		default:
			return state;
	}
};
