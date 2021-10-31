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
		<div className="container-fluid sticky-top nav-wrapper">
			<nav className="container navbar navbar-expand-lg p-2">
				<div className="container-fluid">
					<Link to="/">
						<img src={starwarsImage} width="100" />
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<i className="fas fa-bars" style={{ color: "white", fontSize: "xx-large" }}></i>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="flex-grow-1 navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link" href="#characters">
									Characters
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#planets">
									Planets
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#vehicles">
									Vehicles
								</a>
							</li>
							<li className="nav-item w-100 d-flex justify-content-center">
								<div className="dropdown">
									<a className="nav-link dropdown-toggle" onClick={handleClickMenu}>
										{`Favorites ${store.favorites.length}`}
									</a>
									<div className={`dropdown-menu ${state ? "show" : ""}`}>
										{store.favorites.length > 0 ? (
											store.favorites.map((elem, index) => (
												<div key={index} className="dropdown-item" style={{ width: "12em" }}>
													<span>{getName(elem.category, elem.id)}</span>
													<button className="trash-button">
														<i
															className="fas fa-trash"
															onClick={() =>
																actions.removeFav(
																	store.favorites[index].category,
																	store.favorites[index].id
																)
															}
														/>
													</button>
												</div>
											))
										) : (
											<div className="text-center">(empty)</div>
										)}
									</div>
								</div>
							</li>
						</ul>
						<form className="d-flex">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button className="btn btn-outline-info" type="submit">
								Search
							</button>
						</form>
					</div>
				</div>
			</nav>
		</div>
	);
};
