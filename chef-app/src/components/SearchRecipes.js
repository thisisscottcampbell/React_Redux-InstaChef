import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useInput from '../hooks/useInput';
import { connect } from 'react-redux';
import { setRecipes } from '../actions';

import {
	Form,
	FormGroup,
	FormControl,
	FormLabel,
	Button,
} from 'react-bootstrap';

const SearchRecipes = ({ setRecipes }) => {
	const [ingredients, setIngredients, resetIngredients] = useInput('');
	const [dish, setDish, resetDish] = useInput('');
	//const [isFetching, setIsFetching] = useState(false);

	const genRecipes = async () => {
		const res = await axios.get(
			`http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`
		);

		const { data } = await res;

		setRecipes(data.results);

		resetDish();
		resetIngredients();
	};
	// useEffect(() => {
	//   if (!isFetching) return;

	//   genRecipes()

	//   setIsFetching(false)
	// }, [isFetching])

	return (
		<Form inline>
			<FormGroup>
				<Form.Label>Ingredients</Form.Label>
				<FormControl
					type="text"
					placeholder="whatcha thinkin bout eatin..."
					onChange={setIngredients}
				/>
			</FormGroup>
			<FormGroup>
				<Form.Label>Dish</Form.Label>
				<FormControl type="text" placeholder="such as..." onChange={setDish} />
			</FormGroup>
			<br />
			<Button onClick={genRecipes}>Submit</Button>
		</Form>
	);
};

export default connect(null, { setRecipes })(SearchRecipes);
