/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import LazyLoad from "react-lazy-load";
import "./ChefBanner.css";

const ChefBanner = ({ chef }) => {
	return (
		<div className="d-flex justify-content-center">
			<div className="banner d-flex justify-content-between">
				<div className="d-flex justify-content-between align-items-center">
					<div className="banner-words-content ms-3">
						<p id="chef-bigHead">
							<span id="bigHead-highlight">{chef.name}</span>
						</p>
						<p className="smallHead">
							<strong>A short Bio: </strong> {chef.description}
						</p>
						<p className="smallHead">
							<strong>Likes: </strong> {chef.likes}
						</p>
						<p className="smallHead">
							<strong>Number of Recipes: </strong> {chef.num_recipes}
						</p>
						<p className="smallHead">
							<strong>Years of Experience: </strong> {chef.experience_years}
						</p>
					</div>
				</div>
				<div>
					<LazyLoad threshold={0.95}>
						<img id="chef-banner-img" src={chef.picture} alt="" />
					</LazyLoad>
				</div>
			</div>
		</div>
	);
};

export default ChefBanner;
