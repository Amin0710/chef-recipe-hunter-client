// eslint-disable-next-line no-unused-vars
import React from "react";
import fourOfour from "../../public/assets/404.webp";

const ErrorPageContent = () => {
	return (
		<div className="d-flex align-items-center flex-column">
			<div>
				<h1>Oops!</h1>
				<h1 className="text-danger">আন্তাজে লিখলে এমনই হবে</h1>
				<p>
					Don&apos;t put random things in the URL bar. It&apos;s not good for
					your health. just click buttons and it will take you to places.
				</p>
				<img src={fourOfour} alt="" className="rounded" />
			</div>
		</div>
	);
};

export default ErrorPageContent;
