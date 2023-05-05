// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import RecipesCards from "./RecipesCards";

const Recipes = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5001/recipes")
			.then((res) => res.json())
			.then((data) => setRecipes(data))
			.catch((error) => console.error(error));
	}, []);

	return (
		<div className="d-flex flex-column align-items-center">
			<p className="sectionHead">Our Top Recipes</p>
			<p className="sectionBody">
				Popular Bangladeshi recipes, including both traditional and modern
				dishes.
			</p>
			<div className="banner d-flex flex-wrap justify-content-around gap-5 p-3">
				{recipes
					.filter((recipe) => recipe.rating > 4.5)
					.map((recipe) => (
						<RecipesCards key={recipe.id} recipe={recipe}></RecipesCards>
					))}
			</div>
		</div>
	);
};

export default Recipes;
