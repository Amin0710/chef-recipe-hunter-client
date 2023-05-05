// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import IngredientsCards from "./IngredientsCards";

const Ingredients = () => {
	const [ingredients, setIngredients] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5001/recipes")
			.then((res) => res.json())
			.then((data) => setIngredients(data))
			.catch((error) => console.error(error));
	}, []);

	return (
		<div className="d-flex flex-column align-items-center">
			<p className="sectionHead">Our Top ingredients</p>
			<p className="sectionBody">
				A section highlighting the unique ingredients and flavors of Bangladesh.
			</p>
			<div className="banner d-flex flex-wrap justify-content-around gap-5 p-3">
				{ingredients
					.filter((recipe) => recipe.rating > 4.5)
					.map((recipe) => (
						<IngredientsCards
							key={recipe.id}
							recipe={recipe}></IngredientsCards>
					))}
			</div>
		</div>
	);
};

export default Ingredients;
