import React from "react";
import "../../styles/home.scss";
import { CardsContainer } from "../component/cardscontainer.js";

export const Home = () => (
	<div className="home-wrapper">
		<CardsContainer content="charaters" />
		<CardsContainer content="planets" />
		<CardsContainer content="vehicles" />
	</div>
);
