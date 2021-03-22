import React from 'react';
import RecipeItem from './RecipeItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
	return (
		<div>
			<p>
				<Link className="link" to="/favorites">
					View Favorites
				</Link>
			</p>
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
