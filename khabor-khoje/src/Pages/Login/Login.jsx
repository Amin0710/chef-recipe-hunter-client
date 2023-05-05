// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<Container className="w-25 mx-auto">
			<h3>Please Login</h3>
			<div className="d-flex justify-content-around mb-3">
				<Button variant="outline-primary">
					<FaGoogle /> Login with Google
				</Button>
				<Button variant="outline-secondary">
					<FaGithub></FaGithub> Login with Github
				</Button>
			</div>
			<Form>
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
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Login
				</Button>
				<br />
				<Form.Text className="text-secondary">
					Don&#39;t Have an Account? <Link to="/register">Register</Link>
				</Form.Text>
				<Form.Text className="text-success"></Form.Text>
				<Form.Text className="text-danger"></Form.Text>
			</Form>
		</Container>
	);
};

export default Login;
