// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Navigationbar from "./Navigationbar";
import "./Header.css";

const Header = () => {
	return (
		<Container className="mt-4">
			<Navigationbar></Navigationbar>
			<div className="d-flex">
				<Marquee className="text-success" speed={100}>
					<p>
						আমি বাংলায় গান
						<span className="text-danger">&nbsp; গাই আর বাংলা &nbsp;</span>
						খাবার খাই
					</p>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<p>
						ও আমার দেশের
						<span className="text-danger">&nbsp; খাবার তোমায় &nbsp;</span>খেতে
						বড় মজা
					</p>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<p>
						যদি তোর ডাক শুনে
						<span className="text-danger">&nbsp; কেউ না আসে তবে &nbsp;</span>
						খেতে একলা খাও রে
					</p>
				</Marquee>
			</div>
		</Container>
	);
};

export default Header;
