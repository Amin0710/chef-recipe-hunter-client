/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefCards = ({ chef }) => {
	// Show only the first line in the description
	const small_des = chef.description.substring(
		0,
		chef.description.indexOf(".") + 1
	);
	return (
		<Card style={{ width: "18rem" }}>
			<LazyLoad threshold={0.95}>
				<Card.Img variant="top" src={chef.picture} height={"200px"} />
			</LazyLoad>
			<Card.Body>
				<Card.Title>{chef.name}</Card.Title>
				<Card.Text>{small_des}</Card.Text>
			</Card.Body>
			<ListGroup className="list-group-flush">
				<ListGroup.Item>
					{chef.experience_years} Years of experience
				</ListGroup.Item>
				<ListGroup.Item>Numbers of recipes: {chef.num_recipes}</ListGroup.Item>
				<ListGroup.Item>Likes: {chef.likes}</ListGroup.Item>
				<ListGroup.Item>rating: {chef.rating}</ListGroup.Item>
			</ListGroup>
			<Card.Body>
				<Link to={`/chefs/${chef.id}`}>
					<Button variant="primary">View Recipes</Button>
				</Link>
			</Card.Body>
		</Card>
	);
};

export default ChefCards;
