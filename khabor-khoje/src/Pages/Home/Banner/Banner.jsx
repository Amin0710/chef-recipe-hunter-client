// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Banner.css";
import Panta_Ilish from "../../../../public/assets/Panta_Ilish.jpg";

const Banner = () => {
	return (
		<div className="d-flex justify-content-center">
			<div className="banner d-flex justify-content-between">
				<div className="d-flex justify-content-between align-items-center">
					<div className="ms-3">
						<p id="bigHead">
							Discover Authentic <span id="bigHead-highlight">Bangladeshi</span>
							&nbsp;Cuisine Today!
						</p>
						<p id="smallHead">
							Savor the Taste of Home: Delicious Bangladeshi Recipes for You to
							Try
						</p>
					</div>
				</div>
				<div>
					<img id="banner-img" src={Panta_Ilish} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Banner;
