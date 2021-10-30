import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>

			{/*===== Esto iría dentro del dropdown =====*/}
			<span>
				<h5>
					{" "}
					R2-D2{" "}
					<button
						className="btn btn-outline-dark"
						onClick={() => {
							actions.removeFav("characters", "3"); // Hard coded! Si das like al character 3 (R2-D2), con este botón del navbar puedes remover su like!
						}}>
						<i className="fas fa-trash-alt"></i>
					</button>
				</h5>
			</span>
			{/*===== ///////////////////////////// =====*/}

			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
