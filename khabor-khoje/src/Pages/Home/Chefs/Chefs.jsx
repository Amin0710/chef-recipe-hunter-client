// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ChefCards from "./ChefCards";
import "./Chefs.css";

const Chefs = () => {
	const [chefs, setChefs] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5001/chefs")
			.then((res) => res.json())
			.then((data) => setChefs(data))
			.catch((error) => console.error(error));
	}, []);

	return (
		<div className="d-flex flex-column align-items-center">
			<p className="sectionHead">Our Chefs</p>
			<p className="sectionBody">
				Cooking is an art and our chefs are the artists. Discover the culinary
				geniuses who make it all happen.
			</p>
			<div className="banner d-flex flex-wrap justify-content-around gap-5 p-3">
				{chefs.map((chef) => (
					<ChefCards key={chef.id} chef={chef}></ChefCards>
				))}
			</div>
		</div>
	);
};

export default Chefs;
