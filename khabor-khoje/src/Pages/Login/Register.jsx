// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../firebase/Provider/AuthProvider";

const Register = () => {
	const [error, setError] = useState("");
	const { createUser } = useContext(AuthContext);
	const navigate = useNavigate();
	const [accepted, setAccepted] = useState(false);

	const handleRegister = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const photo = form.photo.value;
		const email = form.email.value;
		const password = form.password.value;
		const confirm = form.confirm.value;

		console.log(name, photo, email, password);
		setError("");
		if (password !== confirm) {
			setError("Your password did not match");
			return;
		} else if (password.length < 6) {
			setError("password must be 6 characters or longer");
			return;
		}
		createUser(email, password, { displayName: name, photoURL: photo })
			.then(() => {
				navigate("/login", { replace: true });
			})
			.catch((error) => {
				console.log(error);
				if (error.code === "auth/email-already-in-use") {
					setError("User already exists. Please login.");
					return;
				}

				setError(
					error.message || "Something went wrong. Please try again later."
				);
			});
	};

	const handleAccepted = (event) => {
		setAccepted(event.target.checked);
	};
	return (
		<Container className="w-25 mx-auto">
			<h3>Please Register</h3>
			<Form onSubmit={handleRegister}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						name="name"
						placeholder="Your Name"
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Photo URL</Form.Label>
					<Form.Control
						type="text"
						name="photo"
						placeholder="Photo URL"
						required
					/>
				</Form.Group>
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

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="Password"
						name="confirm"
						placeholder="Password"
						required
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check
						onClick={handleAccepted}
						type="checkbox"
						name="accept"
						label="Accept Terms and Conditions"
					/>
				</Form.Group>
				<Button variant="primary" disabled={!accepted} type="submit">
					Register
				</Button>
				<br />
				<Form.Text className="text-secondary">
					Already Have an Account? <Link to="/login">Login</Link>
				</Form.Text>
				<br />
				<Form.Text className="text-success"></Form.Text>
				<Form.Text className="text-danger">{error}</Form.Text>
			</Form>
		</Container>
	);
};

export default Register;
