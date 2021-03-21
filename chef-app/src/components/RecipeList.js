import React from 'react';
import RecipeItem from './RecipeItem';
import { connect } from 'react-redux';

const RecipeList = ({ recipes }) => {
	return (
		<div>
			{recipes.map((recipe, i) => (
				<RecipeItem recipe={recipe} key={i} />
			))}
		</div>
	);
};

const mapStateToProps = (state) => {
	return { recipes: state.recipes };
};

export default connect(mapStateToProps, null)(RecipeList);
