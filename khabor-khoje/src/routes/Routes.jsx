import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import Main from "../Layouts/main";
import Blog from "../Pages/Blog/Blog";
import ChefsPage from "../Pages/ChefsPage/ChefsPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/login";
import Register from "../Pages/Login/Register";
import RecipePage from "../Pages/RecipesPage/RecipePage";

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
		path: "chefs",
		element: <Main></Main>,
		children: [
			{
				path: "/chefs/:id",
				element: <ChefsPage></ChefsPage>,
				loader: ({ params }) =>
					fetch(`http://localhost:5001/chefs/${params.id}`),
			},
		],
	},
	{
		path: "recipes",
		element: <Main></Main>,
		children: [
			{
				path: "/recipes/:id",
				element: <RecipePage></RecipePage>,
				loader: ({ params }) =>
					fetch(`http://localhost:5001/recipes/${params.id}`),
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
