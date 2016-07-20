export default function reducer(state, action){
	switch (action.type){
		case: 'ADD_TODO':
			return Object.assign({}, state, {
				todos: [...state.todos, {
					text: action.text,
					isCompleted: false,
					id: getId(state),
				}]
			})
		default:
			return state;
	}
}