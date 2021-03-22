import React, { useState } from 'react';
import RecipeItem from './RecipeItem';
import { connect } from 'react-redux';
import { favesReducer } from '../reducers/recipesReducers';
import { Link } from 'react-router-dom';

const FavesList = ({ favorites }) => {
	return (
		<>
			<p>
				<Link className="link" to="/">
					Home
				</Link>
			</p>
			<h2>Favorite Recipes</h2>
			<div>
				{favorites.map((recipe, i) => (
					<RecipeItem recipe={recipe} key={i} star={false} />
				))}
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	return { favorites: state.favorites };
};

export default connect(mapStateToProps, null)(FavesList);
