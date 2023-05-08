import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import Main from "../Layouts/main";
import Blog from "../Pages/Blog/Blog";
import ChefsPage from "../Pages/ChefsPage/ChefsPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/login";
import Register from "../Pages/Login/Register";
import RecipePage from "../Pages/RecipesPage/RecipePage";
import ErrorPage from "./ErrorPage";
import ErrorPageContent from "./ErrorPageContent";
import PrivateRoute from "./PrivetRoutes";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LoginLayout></LoginLayout>,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Navigate to="/home"></Navigate>,
				errorElement: <ErrorPage />,
			},
			{
				path: "login",
				element: <Login></Login>,
				errorElement: <ErrorPage />,
			},
			{
				path: "register",
				element: <Register></Register>,
				errorElement: <ErrorPage />,
			},
		],
	},
	{
		path: "home",
		element: <Main></Main>,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/home",
				element: <Home></Home>,
				errorElement: <ErrorPage />,
			},
		],
	},
	{
		path: "chefs",
		element: <Main></Main>,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/chefs/:id",
				element: (
					<PrivateRoute>
						<ChefsPage></ChefsPage>
					</PrivateRoute>
				),
				errorElement: <ErrorPageContent />,
				loader: ({ params }) =>
					fetch(
						`http://b7a10-chef-recipe-hunter-server-side-amin0710-amin0710.vercel.app/chefs/${params.id}`
					),
			},
		],
	},
	{
		path: "recipes",
		element: <Main></Main>,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/recipes/:id",
				element: (
					<PrivateRoute>
						<RecipePage></RecipePage>
					</PrivateRoute>
				),
				errorElement: <ErrorPageContent />,
				loader: ({ params }) =>
					fetch(
						`http://b7a10-chef-recipe-hunter-server-side-amin0710-amin0710.vercel.app/recipes/${params.id}`
					),
			},
		],
	},
	{
		path: "blog",
		element: <Main></Main>,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/blog",
				element: <Blog></Blog>,
				errorElement: <ErrorPage />,
			},
		],
	},
]);

export default router;
