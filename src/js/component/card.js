import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Card = props => {
	const [like, setLike] = useState(false);

	const handleLike = e => {
		setLike(!like);
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
				<button onClick={handleLike} className="btn btn-outline-warning float-end">
					{like ? <i className="fas fa-heart" /> : <i className="far fa-heart" />}
				</button>
			</div>
		</div>
	);
};

Card.propTypes = {
	imageUrl: PropTypes.string,
	title: PropTypes.string,
	cardContent: PropTypes.string
};
