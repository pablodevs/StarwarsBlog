import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Card } from "./card.js";
import { Context } from "../store/appContext.js";

export const CardsContainer = props => {
	const { store, actions } = useContext(Context);

	let cardContent =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
	let baseurl = `https://starwars-visualguide.com/assets/img/${props.content}`;

	return (
		<div className="container section">
			<h2 className="text-danger content-title">{props.content.toUpperCase()}</h2>
			<div className="cards-wrapper">
				{store[props.content].map(data => {
					return (
						<Card
							key={data.uid}
							imageUrl={`${baseurl}/${data.uid}.jpg`}
							title={data.name}
							cardContent={cardContent}
						/>
					);
				})}
			</div>
		</div>
	);
};

CardsContainer.propTypes = {
	content: PropTypes.string
};
