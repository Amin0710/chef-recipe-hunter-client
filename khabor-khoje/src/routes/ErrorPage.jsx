import { useRouteError } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Header from "../Pages/Shared/Header";
import ErrorPageContent from "./ErrorPageContent";

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div id="error-page">
			<Header></Header>
			<ErrorPageContent></ErrorPageContent>
			<Footer></Footer>
		</div>
	);
}
