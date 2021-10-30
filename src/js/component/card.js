import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Card = props => {
	const { store, actions } = useContext(Context);

	const handleLike = e => {
		props.like ? actions.removeFav(props.category, e.target.id) : actions.addFav(props.category, e.target.id);
	};

	return (
		<div className="card mx-3">
			<div className="card-img-wrapper">
				<Link to="/details">
					<img src={props.imageUrl} className="card-img-top" alt="some star wars content" />
				</Link>
			</div>
			<div className="card-body">
				<Link to="/details">
					<h5 className="card-title">{props.title}</h5>
				</Link>
				<div className="card-description">
					<p className="card-text">{props.cardContent}</p>
				</div>
				<Link to="/details" className="btn btn-outline-info">
					Learn More!
				</Link>
				<button onClick={handleLike} className="btn btn-outline-warning float-end" id={props.ID}>
					{props.like ? (
						<i className="fas fa-heart" id={props.ID} />
					) : (
						<i className="far fa-heart" id={props.ID} />
					)}
				</button>
			</div>
		</div>
	);
};

Card.propTypes = {
	imageUrl: PropTypes.string,
	title: PropTypes.string,
	cardContent: PropTypes.string,
	category: PropTypes.string,
	ID: PropTypes.string,
	like: PropTypes.bool
};
