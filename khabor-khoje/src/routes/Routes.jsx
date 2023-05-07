import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import Main from "../Layouts/main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/login";
import Register from "../Pages/Login/Register";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LoginLayout></LoginLayout>,
		children: [
			{
				path: "/",
				element: <Navigate to="/home"></Navigate>,
			},
			{
				path: "login",
				element: <Login></Login>,
			},
			{
				path: "register",
				element: <Register></Register>,
			},
		],
	},
	{
		path: "home",
		element: <Main></Main>,
		children: [
			{
				path: "/home",
				element: <Home></Home>,
			},
		],
	},
	{
		path: "blog",
		element: <Main></Main>,
		children: [
			{
				path: "/blog",
				element: <Blog></Blog>,
			},
		],
	},
]);

export default router;
