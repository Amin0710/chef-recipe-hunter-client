/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const RecipesCards = ({ recipe }) => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={recipe.picture} height={"200px"} />
			<Card.Body>
				<Card.Title>{recipe.recipe_name}</Card.Title>
			</Card.Body>
			<ListGroup className="list-group-flush">
				<ListGroup.Item>Recipes ID: {recipe.id}</ListGroup.Item>
				<ListGroup.Item>rating: {recipe.rating}</ListGroup.Item>
			</ListGroup>
			<Card.Body>
				<Link to={`/recipes/${recipe.id}`}>
					<Button variant="success">View Details</Button>
				</Link>
			</Card.Body>
		</Card>
	);
};

export default RecipesCards;
