function getId(todos) {
	return todos.reduce((maxId, todo) => {
		return Math.max(maxId, todo.id)
	}, -1) + 1;
}

/*
  One thing to note that in seperate single reducers functions like this one,
  we no longer pass in the whole state tree, but instead the correct portion
  of that state tree, in this case, only todos array.
 */ 

let todoReducer = function reducer(todos = [], action){
	switch (action.type){
		case 'ADD_TODO':
			return  [...todos, {
					text: action.text,
					isCompleted: false,
					id: getId(todos),
				}]
		case 'REMOVE_ALL':
			return []
		case 'COMPLETE_TODO':
			return todos.map((todo) => {
					return todo.id === action.id ? Object.assign({}, todo, {isCompleted: !todo.isCompleted}) : todo;
				})
		case 'REMOVE_TODO':
			return todos.filter((todo) => {
					return todo.id !== action.id;
				})
		default:
			return todos;
	}
}

export default todoReducer