const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			loggedIn: false, // ejemplo de contexto de login
			favorites: [], // ejemplo de contexto de favs list
			characters: [],
			planets: [],
			vehicles: []
		},
		actions: {
			login: function() {
				setStore({ loggedIn: true }); // si el usuario se logea, true
			},
			addFav: (category, uid) => {
				// si el usuario añade elementos, los incluimos en la lista global
				const store = getStore();
				setStore({
					favorites: [
						...store.favorites,
						{
							category: category,
							id: uid
						}
					]
				});

				// Actualiza los likes
				let storeAux = {};
				storeAux[category] = store[category].map(element => {
					if (element.uid === uid) {
						element.liked = true;
					}
					return element;
				});
				setStore(storeAux);
			},
			removeFav: (category, uid) => {
				// si el usuario añade elementos, los incluimos en la lista global
				const store = getStore();
				let position;
				store.favorites.forEach((element, index) => {
					if (element.category === category && element.id === uid) {
						position = index;
					}
				});
				store.favorites.splice(position, 1);
				setStore({
					favorites: [...store.favorites]
				});

				// Actualiza los likes
				let storeAux = {};
				storeAux[category] = store[category].map(element => {
					if (element.uid === uid) {
						element.liked = false;
					}
					return element;
				});
				setStore(storeAux);
			},
			loadData: category => {
				let endUrl = category === "characters" ? "people" : category;
				fetch(`https://www.swapi.tech/api/${endUrl}/`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(data => {
						let storeAux = {};
						storeAux[category] = data.results.map(e => {
							e.liked = false;
							return e;
						});
						setStore(storeAux);
					});
			}
		}
	};
};

export default getState;
