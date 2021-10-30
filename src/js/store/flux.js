const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			loggedIn: false, // ejemplo de contexto de login
			todos: [], // ejemplo de contexto de todo list
			characters: [],
			planets: [],
			vehicles: []
		},
		actions: {
			login: function() {
				setStore({ loggedIn: true }); // si el usuario se logea, true
			},
			addtodo: todo => {
				const store = getStore();
				setStore({ todos: [...store.todos, todo] }); // si el usuario añade elementos, los incluimos en la lista global
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
