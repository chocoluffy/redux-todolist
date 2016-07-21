function getId(state) {
	return state.todos.reduce((maxId, todo) => {
		return Math.max(maxId, todo.id)
	}, -1) + 1;
}

export default function reducer(state, action){
	switch (action.type){
		case 'ADD_TODO':
			return Object.assign({}, state, {
				todos: [...state.todos, {
					text: action.text,
					isCompleted: false,
					id: getId(state),
				}]
			})
		case 'REMOVE_ALL':
			return { todos: [] }
		case 'COMPLETE_TODO':
			return Object.assign({}, state, {
				todos: state.todos.map((todo) => {
					return todo.id === action.id ? Object.assign({}, todo, {isCompleted: !todo.isCompleted}) : todo;
				})
			})
		default:
			return state;
	}
}