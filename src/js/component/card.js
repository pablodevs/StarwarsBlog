import React, { useState } from "react";
import PropTypes from "prop-types";

export const Card = props => {
	const [like, setLike] = useState(false);

	const handleOnClick = e => {
		setLike(!like);
	};

	return (
		<div className="card-wrapper mx-3">
			<div className="card" style={{ width: "18rem" }}>
				<img src={props.imageUrl} className="card-img-top" alt="some star wars content" />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.cardContent}</p>
					<a href="#" className="btn btn-outline-info">
						Learn More!
					</a>
					<button onClick={handleOnClick} className="btn btn-outline-warning float-end">
						{like ? <i className="fas fa-heart" /> : <i className="far fa-heart" />}
					</button>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	imageUrl: PropTypes.string,
	title: PropTypes.string,
	cardContent: PropTypes.string
};
