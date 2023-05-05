/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const IngredientsCards = ({ recipe }) => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Card.Title>{recipe.recipe_name}</Card.Title>
			</Card.Body>
			<ListGroup className="list-group-flush">
				<ListGroup.Item>{recipe.ingredients[0]}</ListGroup.Item>
				<ListGroup.Item>{recipe.ingredients[1]}</ListGroup.Item>
				<ListGroup.Item>{recipe.ingredients[2]}</ListGroup.Item>
				<ListGroup.Item>{recipe.ingredients[3]}</ListGroup.Item>
				<ListGroup.Item>{recipe.ingredients[4]}</ListGroup.Item>
			</ListGroup>
		</Card>
	);
};

export default IngredientsCards;
