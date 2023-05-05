/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "../Banner/Banner";
import Chefs from "../Chefs/Chefs";
import Ingredients from "../Ingredients/Ingredients";
import Recipes from "../Recipes/Recipes";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Chefs></Chefs>
			<Recipes></Recipes>
			<Ingredients></Ingredients>
		</div>
	);
};

export default Home;
