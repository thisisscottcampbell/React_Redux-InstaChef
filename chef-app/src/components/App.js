import React from 'react';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';

import '../styles/index.css';

const App = () => {
	return (
		<div>
			<SearchRecipes />
			<RecipeList />
		</div>
	);
};

export default App;
