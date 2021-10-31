import React from "react";
import "../../styles/details.scss";
import { useParams } from "react-router-dom";

export const Details = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-12 details-content">soy un col 6 (o 12?)</div>
				<div className="col-lg-6 col-12 details-content">soy un col 6 (o 12?)</div>
			</div>
		</div>
	);
};
