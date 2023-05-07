// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RecipesCards from "../Home/Recipes/RecipesCards";
import ChefBanner from "./ChefBanner";

const ChefsPage = () => {
	const { id } = useParams();
	const [chef, setChef] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5001/chefs`)
			.then((res) => res.json())
			.then((data) => setChef(data.find((chef) => chef.id === id)))
			.catch((error) => console.error(error));
	}, [id]);

	const chefRecipes = useLoaderData();
	return (
		<div>
			<ChefBanner key={chef.id} chef={chef}></ChefBanner>
			<div className="d-flex flex-column align-items-center">
				<p className="sectionHead">Chef&apos;s Recipes</p>
				<p className="sectionBody">
					Popular Bangladeshi recipes, including both traditional and modern
					dishes.
				</p>
				<div className="banner d-flex flex-wrap justify-content-around gap-5 p-3">
					{chefRecipes.map((recipe) => (
						<RecipesCards key={recipe.id} recipe={recipe}></RecipesCards>
					))}
				</div>
			</div>
		</div>
	);
};

export default ChefsPage;
