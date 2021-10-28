import React from "react";
import PropTypes from "prop-types";
import { Card } from "./card.js";

export const CardsContainer = props => {
	return (
		<div className="container section">
			<h2 className="text-danger">{props.content.toUpperCase()}</h2>
			<p>So, you want some {props.content}?</p>
			<div className="cards-wrapper">
				<Card
					imageUrl="https://via.placeholder.com/400x200"
					title="Soy un Título!"
					cardContent="Soy un ejemplo de contenido dentro de una carta :D"
				/>
				<Card
					imageUrl="https://via.placeholder.com/400x200"
					title="Soy un Título!"
					cardContent="Soy un ejemplo de contenido dentro de una carta :D"
				/>
				<Card
					imageUrl="https://via.placeholder.com/400x200"
					title="Soy un Título!"
					cardContent="Soy un ejemplo de contenido dentro de una carta :D"
				/>
				<Card
					imageUrl="https://via.placeholder.com/400x200"
					title="Soy un Título!"
					cardContent="Soy un ejemplo de contenido dentro de una carta :D"
				/>
				<Card
					imageUrl="https://via.placeholder.com/400x200"
					title="Soy un Título!"
					cardContent="Soy un ejemplo de contenido dentro de una carta :D"
				/>
				<Card
					imageUrl="https://via.placeholder.com/400x200"
					title="Soy un Título!"
					cardContent="Soy un ejemplo de contenido dentro de una carta :D"
				/>
				<Card
					imageUrl="https://via.placeholder.com/400x200"
					title="Soy un Título!"
					cardContent="Soy un ejemplo de contenido dentro de una carta :D"
				/>
				<Card
					imageUrl="https://via.placeholder.com/400x200"
					title="Soy un Título!"
					cardContent="Soy un ejemplo de contenido dentro de una carta :D"
				/>
				<Card
					imageUrl="https://via.placeholder.com/400x200"
					title="Soy un Título!"
					cardContent="Soy un ejemplo de contenido dentro de una carta :D"
				/>
				<Card
					imageUrl="https://via.placeholder.com/400x200"
					title="Soy un Título!"
					cardContent="Soy un ejemplo de contenido dentro de una carta :D"
				/>
			</div>
		</div>
	);
};

CardsContainer.propTypes = {
	content: PropTypes.string
};
