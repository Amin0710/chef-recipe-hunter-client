// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<Container className="w-25 mx-auto">
			<h3>Please Register</h3>
			<div className="d-flex justify-content-around mb-3">
				<Button variant="outline-primary">
					<FaGoogle /> Register with Google
				</Button>
				<Button variant="outline-secondary">
					<FaGithub /> Register with Github
				</Button>
			</div>
			<Form>
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

				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check
						type="checkbox"
						name="accept"
						label="Accept Terms and Conditions"
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Register
				</Button>
				<br />
				<Form.Text className="text-secondary">
					Already Have an Account? <Link to="/login">Login</Link>
				</Form.Text>
				<Form.Text className="text-success"></Form.Text>
				<Form.Text className="text-danger"></Form.Text>
			</Form>
		</Container>
	);
};

export default Register;
