import React from 'react';
import RecipeItem from './RecipeItem';
import { connect } from 'react-redux';

const RecipeList = ({ recipes }) => {
	return (
		<div>
			<h4>Search Results</h4>
			{recipes.map((recipe, i) => (
				<RecipeItem recipe={recipe} key={i} star={true} />
			))}
		</div>
	);
};

const mapStateToProps = (state) => {
	return { recipes: state.recipes };
};

export default connect(mapStateToProps, null)(RecipeList);
