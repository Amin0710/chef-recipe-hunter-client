/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../firebase/Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return (
			<div className="d-flex justify-content-center my-5 py-5">
				<Spinner animation="border" variant="primary" />
				<Spinner animation="border" variant="secondary" />
				<Spinner animation="border" variant="success" />
				<Spinner animation="border" variant="danger" />
				<Spinner animation="border" variant="warning" />
				<Spinner animation="border" variant="info" />
				<Spinner animation="border" variant="dark" />
			</div>
		);
	}

	if (user) {
		return children;
	}

	return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
