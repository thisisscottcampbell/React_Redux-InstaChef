import React from 'react';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';
import FavesList from './FavesList';
import '../styles/index.css';

const App = () => {
	return (
		<div>
			<SearchRecipes />
			<hr />
			<FavesList />
			<hr />
			<RecipeList />
		</div>
	);
};

export default App;
