// eslint-disable-next-line no-unused-vars
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLoaderData } from "react-router-dom";
import "./RecipePage.css";

const RecipePage = () => {
	const recipe = useLoaderData();

	const chef_id = recipe.chef_id;
	const words = chef_id.split("_");
	const capitalizedWords = words.map(
		(word) => word.charAt(0).toUpperCase() + word.slice(1)
	);
	const chef_name = capitalizedWords.join(" ").replace(/01$/, "");

	const handleFavorite = () => {
		toast(`${recipe.recipe_name} has been added to your favorite recipe!`);
		const button = document.getElementById("favorite");
		button.disabled = true;
	};

	return (
		<div className="d-flex justify-content-center">
			<div className="banner d-flex justify-content-between">
				<div className="d-flex justify-content-between align-items-center">
					<div className="ms-3">
						<p id="chef-bigHead">
							<span id="bigHead-highlight">{recipe.recipe_name}</span>
						</p>
						<p className="smallHead">
							<strong>ID: </strong> {recipe.id}
						</p>
						<p className="smallHead">
							<strong>Rating: </strong> {recipe.rating}
						</p>
						<p className="smallHead">
							<strong>Chef Name: </strong>
							<Link to={`/chefs/${chef_id}`}>{chef_name}</Link>
						</p>
						<p className="smallHead">
							<strong>Ingredients: </strong>
						</p>
						{recipe.ingredients.map((ingredient, i) => {
							return <ul key={i}>{ingredient}</ul>;
						})}
						<p className="smallHead">
							<strong>Cooking Method: </strong> {recipe.method}
						</p>
						<div>
							<button
								className="btn btn-warning mb-3"
								id="favorite"
								onClick={handleFavorite}
								disabled={false}>
								Mark as Favorite
							</button>
							<ToastContainer />
						</div>
					</div>
				</div>
				<div>
					<img id="recipe-banner-img" src={recipe.picture} alt="" />
				</div>
			</div>
		</div>
	);
};

export default RecipePage;
