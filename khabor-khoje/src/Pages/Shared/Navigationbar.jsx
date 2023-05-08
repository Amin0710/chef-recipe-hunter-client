// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import logo from "../../../public/assets/logo.png";
import { Button, Container, Nav, Navbar, Spinner } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../firebase/Provider/AuthProvider";

const Navigationbar = () => {
	const { user, loading, logOut } = useContext(AuthContext);

	const handleMouseOver = () => {
		const userName = document.getElementById("userName");
		userName.classList.remove("d-none");
	};

	const handleMouseOut = () => {
		const userName = document.getElementById("userName");
		userName.classList.add("d-none");
	};

	return (
		<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
			<Container>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Brand id="small-screen" href="/" className="mx-auto">
					<div className="d-flex align-items-center">
						<img src={logo} alt="" width={"90px"} height={"90px"} />
						<div className="text-center">
							<h1 className="text-primary">Khabar Khojo?</h1>
							<p className="text-secondary">
								<small>Healthy Food With Taste</small>
							</p>
						</div>
					</div>
				</Navbar.Brand>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav>
						<NavLink to="/home" activeclassname="active" className="nav-link">
							Home
						</NavLink>
						<NavLink to="/blog" activeclassname="active" className="nav-link">
							Blog
						</NavLink>
					</Nav>
					<Navbar.Brand id="large-screen" href="/home" className="mx-auto">
						<div className="d-flex align-items-center">
							<img src={logo} alt="" width={"90px"} height={"90px"} />
							<div className="text-center">
								<h1 className="text-primary">Khabar Khojo?</h1>
								<p className="text-secondary">
									<small>Healthy Food With Taste</small>
								</p>
							</div>
						</div>
					</Navbar.Brand>
					<Nav className="d-flex  align-items-center">
						{!!user && (
							<div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
								<img
									src={user?.photoURL}
									alt=""
									width={"42px"}
									height={"42px"}
									className="rounded-circle"
								/>
								<Link to="/login" className="ms-2">
									<Button variant="secondary" onClick={logOut}>
										Logout
									</Button>
								</Link>
								<p
									className="text-success text-decoration-none me-2 d-none"
									id="userName">
									{user?.displayName}
								</p>
							</div>
						)}
						{loading ? (
							<div className="d-flex justify-content-center">
								<Button variant="warning" disabled>
									<Spinner
										as="span"
										animation="grow"
										size="sm"
										role="status"
										aria-hidden="true"
									/>
									Loading...
								</Button>
							</div>
						) : (
							!!user || (
								<Link to="/login">
									<Button variant="secondary">Login</Button>
								</Link>
							)
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigationbar;
