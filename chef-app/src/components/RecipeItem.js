import React from 'react';
import { connect } from 'react-redux';
import { faveRecipe } from '../actions';

const RecipeItem = ({ recipe, faveRecipe }) => {
	const handleClick = () => faveRecipe(recipe);
	return (
		<div className="recipe-item">
			<div onClick={handleClick}>&#9734;</div>
			<div className="recipe-text">
				<a href={recipe.href}>
					<h4>{recipe.title}</h4>
				</a>
				<p>{recipe.ingredients}</p>
				<img
					className="recipe-image"
					src={recipe.thumbnail}
					alt={recipe.title}
				/>
			</div>
		</div>
	);
};

export default connect(null, { faveRecipe })(RecipeItem);
