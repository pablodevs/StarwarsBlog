import React from "react";
import "../../styles/details.scss";
import { useParams } from "react-router-dom";

export const Details = () => {
	return (
		<div className="container section">
			<div className="row">
				<div className="col-lg-6 col-12 details-content">
					<h1>Seré una imagen</h1>
				</div>
				<div className="col-lg-6 col-12 details-content">
					<h1>Yo tendré título y descripción</h1>
				</div>
			</div>
		</div>
	);
};
