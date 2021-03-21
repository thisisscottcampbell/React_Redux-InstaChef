import { SET_RECIPES } from './types';

export const setRecipes = (items) => {
	return {
		type: SET_RECIPES,
		payload: items,
	};
};
