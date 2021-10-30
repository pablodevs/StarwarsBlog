const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			loggedIn: false, // ejemplo de contexto de login
			todos: [] // ejemplo de contexto de todo list
		},
		actions: {
			login: function() {
				setStore({ loggedIn: true }); // si el usuario se logea, true
			},
			addtodo: todo => {
				const store = getStore();
				setStore({ todos: [...store.todos, todo] }); // si el usuario añade elementos, los incluimos en la lista global
			}
		}
	};
};

export default getState;
