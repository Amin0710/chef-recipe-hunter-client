// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../firebase/Provider/AuthProvider";

const Login = () => {
	const [error, setError] = useState("");
	const { signIn, handleGoogleLogin, handleGithubLogin } =
		useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || "/home";

	const handleGoogleLoginLocation = () =>
		handleGoogleLogin().then(() => {
			navigate(from, { replace: true });
		});

	const handleGithubLoginLocation = () =>
		handleGithubLogin().then(() => {
			navigate(from, { replace: true });
		});

	const handleLogin = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		signIn(email, password)
			.then(() => {
				navigate(from, { replace: true });
			})
			.catch((error) => {
				console.log(error.message);

				if (error.code === "auth/user-not-found") {
					setError("User not found. Please register first.");
					return;
				}
				if (error.code === "auth/wrong-password") {
					setError("Wrong password. Please try again.");
					return;
				}

				setError(
					error.message || "Something went wrong. Please try again later."
				);
			});
	};

	return (
		<Container className="w-25 mx-auto mt-5 pb-5 mb-10">
			<h3>Please Login</h3>
			<div className="d-flex justify-content-around mb-3">
				<Button variant="outline-primary" onClick={handleGoogleLoginLocation}>
					<FaGoogle /> Login with Google
				</Button>
				<Button variant="outline-secondary" onClick={handleGithubLoginLocation}>
					<FaGithub></FaGithub> Login with Github
				</Button>
			</div>
			<Form onSubmit={handleLogin}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						name="email"
						placeholder="Enter email"
						required
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						name="password"
						placeholder="Password"
						required
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Login
				</Button>
				<br />
				<Form.Text className="text-secondary">
					Don&#39;t Have an Account? <Link to="/register">Register</Link>
				</Form.Text>
				<br />
				<Form.Text className="text-success"></Form.Text>
				<Form.Text className="text-danger">{error}</Form.Text>
			</Form>
		</Container>
	);
};

export default Login;
