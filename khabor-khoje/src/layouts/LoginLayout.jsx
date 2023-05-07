// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navigationbar from "../Pages/Shared/Navigationbar";

const LoginLayout = () => {
	return (
		<div>
			<Navigationbar></Navigationbar>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default LoginLayout;
