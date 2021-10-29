import React from "react";
import PropTypes from "prop-types";
import { Card } from "./card.js";

export const CardsContainer = props => {
	return (
		<div className="container section">
			<h2 className="text-danger content-title">{props.content.toUpperCase()}</h2>
			<div className="cards-wrapper">
				<Card
					imageUrl="https://via.placeholder.com/266x266"
					title="SOY UN TÍTULO!"
					cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				/>
				<Card
					imageUrl="https://via.placeholder.com/266x266"
					title="SOY UN TÍTULO!"
					cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				/>
				<Card
					imageUrl="https://via.placeholder.com/266x266"
					title="SOY UN TÍTULO!"
					cardContent="Soy un ejemplo de contenido dentro de una carta :D"
				/>
				<Card
					imageUrl="https://via.placeholder.com/266x266"
					title="SOY UN TÍTULO!"
					cardContent="Soy un ejemplo de contenido dentro de una carta :D"
				/>
				<Card
					imageUrl="https://via.placeholder.com/266x266"
					title="SOY UN TÍTULO!"
					cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				/>
				<Card
					imageUrl="https://via.placeholder.com/266x266"
					title="SOY UN TÍTULO!"
					cardContent="Soy un ejemplo de contenido dentro de una carta :D"
				/>
				<Card
					imageUrl="https://via.placeholder.com/266x266"
					title="SOY UN TÍTULO!"
					cardContent="Soy un ejemplo de contenido dentro de una carta :D"
				/>
				<Card
					imageUrl="https://via.placeholder.com/266x266"
					title="SOY UN TÍTULO!"
					cardContent="Soy un ejemplo de contenido dentro de una carta :D"
				/>
				<Card
					imageUrl="https://via.placeholder.com/266x266"
					title="SOY UN TÍTULO!"
					cardContent="Soy un ejemplo de contenido dentro de una carta :D"
				/>
				<Card
					imageUrl="https://via.placeholder.com/266x266"
					title="SOY UN TÍTULO!"
					cardContent="Soy un ejemplo de contenido dentro de una carta :D"
				/>
			</div>
		</div>
	);
};

CardsContainer.propTypes = {
	content: PropTypes.string
};
