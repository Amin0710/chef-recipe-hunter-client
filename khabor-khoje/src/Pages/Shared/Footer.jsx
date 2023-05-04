// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";
import fb from "../../../public/assets/Logo/fb.png";
import In from "../../../public/assets/Logo/In.png";
import tw from "../../../public/assets/Logo/tw.png";

const Footer = () => {
	return (
		<footer>
			<div id="footer-content">
				<div id="footer-content-top">
					<div>
						<p className="columHead logo">Khabar Khojo?</p>
						<p>
							All content on this website is for informational purposes only.
							Khabar Khojo? is not responsible for any health problems,
							injuries, or damages that may occur as a result of following our
							recipes. Please consult with a doctor or nutritionist before
							making any dietary changes.
						</p>
						<img src={fb} alt="Image 1" />
						<img src={In} alt="Image 2" />
						<img src={tw} alt="Image 3" />
					</div>
					<div>
						<p className="columHead">Company</p>
						<p>About Us</p>
						<p>Work</p>
						<p>Latest News</p>
						<p>Careers</p>
					</div>
					<div>
						<p className="columHead">Product</p>
						<p>Prototype </p>
						<p>Plans & Pricing</p>
						<p>Integrations</p>
						<p>Customers</p>
					</div>
					<div>
						<p className="columHead">Support</p>
						<p>Help Desk</p>
						<p>Sales</p>
						<p>Become a Partner</p>
						<p>Developers</p>
					</div>
					<div>
						<p className="columHead">Contact</p>
						<p>
							House # 21, Road # 8 Block # C, Niketon Housing Society Gulshan,
							Dhaka - 1212 Bangladesh
						</p>
						<p>+880 1711-223344</p>
					</div>
				</div>
				<hr className="hr"></hr>
				<div id="footer-content-bottom">
					<div className="text-center">
						Copyright © {new Date().getFullYear()}. All Rights Reserved
					</div>
					<p>
						Powered by <span className="bold">Khabar Khojo?</span>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
