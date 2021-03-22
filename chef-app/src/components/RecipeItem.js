import React, { useState } from 'react';
import { connect } from 'react-redux';
import { faveRecipe } from '../actions';

const RecipeItem = ({ recipe, faveRecipe, star }) => {
	const [isFave, setFave] = useState(false);
	const handleClick = () => {
		if (isFave) {
			setFave(false);
			return;
		}
		faveRecipe(recipe);
		setFave(true);
	};
	const updateFave = () => setFave(false);
	return (
		<div className="recipe-item">
			{star ? (
				isFave ? (
					<div className="star" onClick={handleClick}>
						&#9733;
					</div>
				) : (
					<div className="star" onClick={handleClick}>
						&#9734;
					</div>
				)
			) : null}
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
