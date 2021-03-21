import { SET_RECIPES, FAVE_RECIPE } from './types';

export const setRecipes = (recipes) => {
	return {
		type: SET_RECIPES,
		payload: recipes,
	};
};

export const faveRecipe = (recipe) => {
	return {
		type: FAVE_RECIPE,
		payload: recipe,
	};
};
