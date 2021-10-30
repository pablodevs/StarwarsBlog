import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import starwarsImage from "../../img/star-wars-logo.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState(false); // indicates if DD is showed

	const handleClickMenu = e => {
		setState(!state);
		//e.preventDefault();
	};

	const maxlenName = 15;

	const getName = (category, uid) => {
		// search the element in store[category] and returns his name.
		let index = store[category].findIndex(x => x.uid == uid);
		if (index === -1) return "";

		let nameAux = store[category][index].name;
		if (nameAux.length > maxlenName) return nameAux.slice(0, maxlenName) + "...";
		else return nameAux;
	};

	return (
		<nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
			<button className="navbar-toggler" data-toggle="collapse" data-target="#menu">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="menu">
				<ul className="navbar-nav w-100">
					<li className="nav-item">
						<Link className="nav-link" to="/">
							<span>
								<img src={starwarsImage} width="100" />
							</span>
						</Link>
					</li>
					<li className="nav-item ms-auto me-5 pe-5">
						<div className="dropdown" display="static">
							<a href="#" className="nav-link dropdown-toggle" onClick={handleClickMenu}>
								<span className="menuTitle fw-bold">{`Favorites ${store.favorites.length}`}</span>
							</a>
							<div className={`${state ? "dropdown-menu show" : "dropdown-menu"}`}>
								{store.favorites.length > 0 ? (
									store.favorites.map((elem, index) => (
										<div
											key={index}
											className="dropdown-item d-flex justify-content-between"
											style={{ width: "12em" }}>
											<span>{getName(elem.category, elem.id)}</span>
											<a href="#">
												<i
													className="fas fa-trash"
													onClick={() =>
														actions.removeFav(
															store.favorites[index].category,
															store.favorites[index].id
														)
													}
												/>
											</a>
										</div>
									))
								) : (
									<div className="text-center">(empty)</div>
								)}
							</div>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};
